/**
 * Interactive Fishing Mini-game & Reel Mechanics
 */

const FishingState = {
    IDLE: 'idle',
    CASTING: 'casting',
    WAITING: 'waiting',
    BITING: 'biting',
    REELING: 'reeling',
    CAUGHT: 'caught'
};

class FishingSystem {
    constructor() {
        this.state = FishingState.IDLE;
        this.bobberX = 0;
        this.bobberY = 0;
        this.biteTimer = 0;
        this.bobberAnim = 0;

        // Mini-game variables (0 to 100)
        this.fishPos = 50; // Target fish position on bar
        this.fishVelocity = 0;
        this.fishTarget = 50;
        this.barPos = 50;  // Player green capture bar position
        this.barVelocity = 0;
        this.barSize = 26; // Bar height percentage
        this.isReeling = false;
        this.catchProgress = 35; // Fills to 100 to catch, 0 to lose
    }

    startFishing(player, world) {
        // Find water tile ahead of player
        const dist = 55;
        const targetX = player.x + Math.cos(player.angle) * dist;
        const targetY = player.y + Math.sin(player.angle) * dist;

        if (!world.isWater(targetX, targetY)) {
            window.Particles.addFloatingText('Need water to fish!', player.x, player.y - 30, '#FFA500', 14, true);
            return false;
        }

        this.bobberX = targetX;
        this.bobberY = targetY;
        this.state = FishingState.WAITING;
        this.biteTimer = 2.5 + Math.random() * 4.0;
        this.catchProgress = 35;
        this.fishPos = 50;
        this.barPos = 50;

        window.Sound.playWaterSplash(this.bobberX, this.bobberY);
        window.Particles.addWaterSplash(this.bobberX, this.bobberY, 8);
        return true;
    }

    stopFishing() {
        this.state = FishingState.IDLE;
    }

    update(dt, player) {
        if (this.state === FishingState.IDLE) return;

        this.bobberAnim += dt * 4;

        if (this.state === FishingState.WAITING) {
            this.biteTimer -= dt;
            if (this.biteTimer <= 0) {
                this.state = FishingState.BITING;
                this.biteTimer = 1.8; // Time to react
                window.Sound.playFishBite();
                window.Particles.addFloatingText('🎣 Fish on! Hook it!', this.bobberX, this.bobberY - 25, '#FFD700', 16, true);
                window.Particles.addWaterSplash(this.bobberX, this.bobberY, 12);
            }
        } else if (this.state === FishingState.BITING) {
            this.biteTimer -= dt;
            if (this.biteTimer <= 0) {
                // Missed bite
                window.Particles.addFloatingText('Fish got away...', this.bobberX, this.bobberY - 20, '#A9A9A9', 14, false);
                this.stopFishing();
            }
        } else if (this.state === FishingState.REELING) {
            // --- MINI-GAME SIMULATION ---
            // 1. Move fish target randomly
            if (Math.random() < 0.05) {
                this.fishTarget = 15 + Math.random() * 70;
            }
            this.fishPos += (this.fishTarget - this.fishPos) * (dt * 3.5);

            // 2. Player bar physics
            if (this.isReeling) {
                this.barVelocity += 160 * dt;
            } else {
                this.barVelocity -= 140 * dt; // Gravity
            }
            this.barVelocity *= 0.92; // Dampening
            this.barPos += this.barVelocity * dt;

            // Clamp bar
            if (this.barPos < this.barSize / 2) {
                this.barPos = this.barSize / 2;
                this.barVelocity = 0;
            }
            if (this.barPos > 100 - this.barSize / 2) {
                this.barPos = 100 - this.barSize / 2;
                this.barVelocity = 0;
            }

            // 3. Check if fish is inside green capture bar
            const barTop = this.barPos + this.barSize / 2;
            const barBottom = this.barPos - this.barSize / 2;
            const isInside = (this.fishPos >= barBottom && this.fishPos <= barTop);

            if (isInside) {
                this.catchProgress += 28 * dt;
            } else {
                this.catchProgress -= 20 * dt;
            }

            // 4. Check win/loss
            if (this.catchProgress >= 100) {
                this.onCatchSuccess(player);
            } else if (this.catchProgress <= 0) {
                window.Particles.addFloatingText('Line snapped! Fish escaped', this.bobberX, this.bobberY - 20, '#FF4500', 14, true);
                this.stopFishing();
            }
        }
    }

    hook() {
        if (this.state === FishingState.BITING) {
            this.state = FishingState.REELING;
            this.catchProgress = 40;
            window.Sound.playUIClick();
            return true;
        }
        return false;
    }

    onCatchSuccess(player) {
        this.state = FishingState.IDLE;
        const roll = Math.random();
        let fishItem = 'raw_fish';
        let fishName = 'Fresh Fish';

        if (roll < 0.15) {
            fishItem = 'raw_crab';
            fishName = 'Sea Crab';
        } else if (roll < 0.25) {
            fishItem = 'scrap_metal';
            fishName = 'Old Sunken Salvage';
        }

        player.inventory.addItem(fishItem, 1);
        window.Sound.playQuestComplete();
        window.Particles.addSparkles(player.x, player.y, 15);
        window.Particles.addFloatingText(`🎣 Caught a ${fishName}!`, player.x, player.y - 30, '#00FF7F', 16, true);

        if (window.Game) {
            window.Game.quests.onFishCaught();
        }
    }

    render(ctx, camera, player) {
        if (this.state === FishingState.IDLE) return;

        // 1. Draw Fishing Line from player to bobber
        const px = player.x - camera.x;
        const py = player.y - camera.y;
        const bx = this.bobberX - camera.x;
        const by = this.bobberY - camera.y + Math.sin(this.bobberAnim) * 2;

        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py - 10);
        ctx.quadraticCurveTo((px + bx) / 2, (py + by) / 2 - 15, bx, by);
        ctx.stroke();

        // 2. Draw Floating Bobber
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(bx, by, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(bx, by + 2, 4, 0, Math.PI);
        ctx.fill();

        // Ripple ring
        const rippleR = 6 + (this.bobberAnim % 3) * 4;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 - (rippleR / 20)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, rippleR, 0, Math.PI * 2);
        ctx.stroke();

        // Biting alert icon
        if (this.state === FishingState.BITING) {
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 22px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('❗', bx, by - 14);
        }

        ctx.restore();

        // 3. Draw Reel Tension Mini-Game HUD
        if (this.state === FishingState.REELING) {
            this.renderReelHUD(ctx, camera);
        }
    }

    renderReelHUD(ctx, camera) {
        const hudW = 34;
        const hudH = 160;
        const hudX = camera.width / 2 + 100;
        const hudY = camera.height / 2 - 80;

        ctx.save();

        // Background Bar
        ctx.fillStyle = 'rgba(20, 25, 35, 0.85)';
        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(hudX, hudY, hudW, hudH, 6);
        ctx.fill();
        ctx.stroke();

        // Green Player Catch Bar
        const barH = (this.barSize / 100) * hudH;
        const barY = hudY + hudH - ((this.barPos + this.barSize / 2) / 100) * hudH;
        ctx.fillStyle = 'rgba(46, 204, 113, 0.75)';
        ctx.fillRect(hudX + 3, barY, hudW - 6, barH);
        ctx.strokeStyle = '#2ECC71';
        ctx.strokeRect(hudX + 3, barY, hudW - 6, barH);

        // Fish Icon
        const fishY = hudY + hudH - (this.fishPos / 100) * hudH;
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(hudX + hudW / 2, fishY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.stroke();

        // Catch Progress Fill Bar (Adjacent)
        const progW = 8;
        const progX = hudX + hudW + 6;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(progX, hudY, progW, hudH);
        const fillH = (this.catchProgress / 100) * hudH;
        ctx.fillStyle = this.catchProgress > 60 ? '#00FF7F' : (this.catchProgress > 30 ? '#FFD700' : '#FF4500');
        ctx.fillRect(progX, hudY + hudH - fillH, progW, fillH);

        // Instruction label
        ctx.font = 'bold 12px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = '#FFF';
        ctx.textAlign = 'center';
        ctx.fillText('HOLD [SPACE] / CLICK TO REEL', hudX + hudW / 2 + 10, hudY + hudH + 20);

        ctx.restore();
    }
}

window.FishingSystem = FishingSystem;
window.FishingState = FishingState;
