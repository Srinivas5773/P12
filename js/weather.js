/**
 * Day/Night Cycle, Dynamic Lighting & Weather Engine
 */

const WeatherType = {
    CLEAR: 'clear',
    CLOUDY: 'cloudy',
    RAIN: 'rain',
    STORM: 'storm'
};

class WeatherSystem {
    constructor() {
        // Day / Night Cycle (Time represented as hours 0.00 to 24.00)
        // 1 real second = 4 in-game minutes (full 24h cycle = 360 seconds / 6 minutes)
        this.time = 8.0; // Starts at 8:00 AM (Morning)
        this.timeSpeed = 24 / 360; // hours per real second
        this.dayCount = 1;

        // Weather state
        this.currentWeather = WeatherType.CLEAR;
        this.weatherTimer = 180; // duration until next weather change
        this.rainIntensity = 0;
        this.raindrops = [];
        this.lightningFlash = 0;
        this.lightningTimer = 0;

        // Ambient lighting intensity (0 = full bright noon, 1 = pitch black midnight)
        this.darkness = 0;
        this.ambientColor = 'rgba(0, 0, 0, 0)';

        // Init raindrops
        for (let i = 0; i < 250; i++) {
            this.raindrops.push({
                x: Math.random() * 1200,
                y: Math.random() * 800,
                speed: 12 + Math.random() * 8,
                length: 12 + Math.random() * 10
            });
        }
    }

    get isNight() {
        return this.time < 5.5 || this.time > 19.5;
    }

    get isHotNoon() {
        return this.time >= 11.5 && this.time <= 14.5 && this.currentWeather === WeatherType.CLEAR;
    }

    get isRaining() {
        return this.currentWeather === WeatherType.RAIN || this.currentWeather === WeatherType.STORM;
    }

    get formattedTime() {
        const hours = Math.floor(this.time);
        const mins = Math.floor((this.time % 1) * 60);
        const padH = hours < 10 ? '0' + hours : hours;
        const padM = mins < 10 ? '0' + mins : mins;
        return `${padH}:${padM}`;
    }

    get timePeriodName() {
        if (this.time >= 5 && this.time < 7.5) return 'Dawn 🌅';
        if (this.time >= 7.5 && this.time < 12) return 'Morning ☀️';
        if (this.time >= 12 && this.time < 17) return 'Afternoon 🌤️';
        if (this.time >= 17 && this.time < 20) return 'Dusk 🌇';
        return 'Night 🌙';
    }

    update(dt) {
        // 1. Advance Time
        this.time += this.timeSpeed * dt;
        if (this.time >= 24) {
            this.time -= 24;
            this.dayCount++;
            window.Particles.addFloatingText(`Day ${this.dayCount} Survived!`, window.Game ? window.Game.player.x : 0, window.Game ? window.Game.player.y - 40 : 0, '#FFD700', 20, true);
        }

        // 2. Weather Cycle
        this.weatherTimer -= dt;
        if (this.weatherTimer <= 0) {
            this.changeWeather();
        }

        // 3. Rain & Storm Logic
        if (this.isRaining) {
            this.rainIntensity = Math.min(1, this.rainIntensity + dt * 0.5);
        } else {
            this.rainIntensity = Math.max(0, this.rainIntensity - dt * 0.5);
        }

        // Raindrop movement
        if (this.rainIntensity > 0) {
            for (const drop of this.raindrops) {
                drop.y += drop.speed;
                drop.x -= 2.5; // wind slant
                if (drop.y > 850) {
                    drop.y = -20;
                    drop.x = Math.random() * 1250;
                }
            }
        }

        // Lightning in Storms
        if (this.currentWeather === WeatherType.STORM) {
            this.lightningTimer -= dt;
            if (this.lightningTimer <= 0) {
                this.lightningFlash = 1.0;
                this.lightningTimer = 8 + Math.random() * 14;
                window.Sound.playNoiseBuffer(0.4, 400, 0.4); // Thunder rumble
            }
        }

        if (this.lightningFlash > 0) {
            this.lightningFlash = Math.max(0, this.lightningFlash - dt * 3.5);
        }

        // 4. Calculate Ambient Darkness Curve
        this.calculateLighting();
    }

    changeWeather() {
        const roll = Math.random();
        if (roll < 0.55) {
            this.currentWeather = WeatherType.CLEAR;
            this.weatherTimer = 140 + Math.random() * 120;
        } else if (roll < 0.8) {
            this.currentWeather = WeatherType.CLOUDY;
            this.weatherTimer = 80 + Math.random() * 80;
        } else if (roll < 0.94) {
            this.currentWeather = WeatherType.RAIN;
            this.weatherTimer = 70 + Math.random() * 60;
        } else {
            this.currentWeather = WeatherType.STORM;
            this.weatherTimer = 50 + Math.random() * 40;
            this.lightningTimer = 3 + Math.random() * 5;
        }
    }

    calculateLighting() {
        // Curve: 0 (Noon: 12) -> 1 (Midnight: 0 / 24)
        let dark = 0;

        if (this.time >= 21 || this.time < 4.5) {
            // Deep Night
            dark = 0.88;
        } else if (this.time >= 4.5 && this.time < 6.5) {
            // Dawn transition
            const progress = (this.time - 4.5) / 2.0;
            dark = 0.88 * (1 - progress);
        } else if (this.time >= 6.5 && this.time < 18) {
            // Daylight
            dark = 0.0;
        } else if (this.time >= 18 && this.time < 21) {
            // Dusk transition
            const progress = (this.time - 18) / 3.0;
            dark = 0.88 * progress;
        }

        // Rain/Storm darkens the day
        if (this.currentWeather === WeatherType.RAIN) dark = Math.max(dark, 0.35);
        if (this.currentWeather === WeatherType.STORM) dark = Math.max(dark, 0.6);

        // Subtract lightning flash
        dark = Math.max(0, dark - this.lightningFlash);

        this.darkness = dark;
    }

    sleepThroughNight() {
        // Advances time to 6:30 AM next morning
        this.time = 6.5;
        this.calculateLighting();
        window.Sound.playQuestComplete();
    }

    // --- RENDER DYNAMIC LIGHTING MASK & RAIN OVERLAY ---

    renderLighting(ctx, camera, player, world) {
        if (this.darkness <= 0.05 && this.lightningFlash <= 0 && this.rainIntensity <= 0) return;

        const w = camera.width;
        const h = camera.height;

        // 1. Darkness Overlay with Light Cutouts
        if (this.darkness > 0.05) {
            ctx.save();

            // Create offscreen canvas-like mask directly on the canvas using globalCompositeOperation
            // Fill entire view with semi-transparent night blue/black
            ctx.fillStyle = `rgba(5, 8, 20, ${this.darkness})`;
            ctx.fillRect(0, 0, w, h);

            // Blend light sources using 'destination-out' to punch transparent holes through the dark
            ctx.globalCompositeOperation = 'destination-out';

            // Player light (base personal vision + torch bonus)
            const px = player.x - camera.x;
            const py = player.y - camera.y;
            const torchEquipped = player.hasTorchEquipped();
            const playerRadius = torchEquipped ? 180 : 75;

            const playerGrad = ctx.createRadialGradient(px, py, 15, px, py, playerRadius);
            playerGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
            playerGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.6)');
            playerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = playerGrad;
            ctx.beginPath();
            ctx.arc(px, py, playerRadius, 0, Math.PI * 2);
            ctx.fill();

            // Structure lights (Campfires, Furnaces)
            for (const s of world.structures) {
                if (s.type === 'campfire' && s.isLit !== false) {
                    const sx = s.x - camera.x;
                    const sy = s.y - camera.y;
                    if (sx > -200 && sx < w + 200 && sy > -200 && sy < h + 200) {
                        const fireR = 190 + Math.sin(world.waterAnimTime * 8) * 10;
                        const fireGrad = ctx.createRadialGradient(sx, sy, 20, sx, sy, fireR);
                        fireGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
                        fireGrad.addColorStop(0.6, 'rgba(0, 0, 0, 0.7)');
                        fireGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                        ctx.fillStyle = fireGrad;
                        ctx.beginPath();
                        ctx.arc(sx, sy, fireR, 0, Math.PI * 2);
                        ctx.fill();
                    }
                } else if (s.type === 'furnace') {
                    const sx = s.x - camera.x;
                    const sy = s.y - camera.y;
                    const furnGrad = ctx.createRadialGradient(sx, sy, 10, sx, sy, 100);
                    furnGrad.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
                    furnGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                    ctx.fillStyle = furnGrad;
                    ctx.beginPath();
                    ctx.arc(sx, sy, 100, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Radio Tower light beacon
            const rx = world.radioTowerPos.x - camera.x;
            const ry = world.radioTowerPos.y - camera.y - 70;
            if (rx > -100 && rx < w + 100 && ry > -100 && ry < h + 100) {
                const towerGrad = ctx.createRadialGradient(rx, ry, 5, rx, ry, 70);
                towerGrad.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
                towerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = towerGrad;
                ctx.beginPath();
                ctx.arc(rx, ry, 70, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }

        // 2. Lightning Flash
        if (this.lightningFlash > 0) {
            ctx.save();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.lightningFlash * 0.7})`;
            ctx.fillRect(0, 0, w, h);
            ctx.restore();
        }

        // 3. Rain Drops Overlay
        if (this.rainIntensity > 0) {
            ctx.save();
            ctx.strokeStyle = `rgba(200, 225, 255, ${this.rainIntensity * 0.45})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (const drop of this.raindrops) {
                const dx = drop.x % w;
                const dy = drop.y % h;
                ctx.moveTo(dx, dy);
                ctx.lineTo(dx - 3, dy + drop.length);
            }
            ctx.stroke();
            ctx.restore();
        }
    }
}

window.WeatherSystem = WeatherSystem;
window.WeatherType = WeatherType;
