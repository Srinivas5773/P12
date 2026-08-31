/**
 * Particle Effects & Floating Text Notification System
 */

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.floatingTexts = [];
        this.maxParticles = 600;
    }

    reset() {
        this.particles = [];
        this.floatingTexts = [];
    }

    addParticle(x, y, vx, vy, color, size, life, shape = 'circle', alphaFade = true) {
        if (this.particles.length >= this.maxParticles) {
            this.particles.shift();
        }
        this.particles.push({
            x, y, vx, vy,
            color, size,
            maxLife: life,
            life: life,
            shape,
            alphaFade,
            gravity: 0,
            friction: 0.96
        });
    }

    addWoodChips(x, y, count = 10) {
        const colors = ['#8B5A2B', '#D2B48C', '#A0522D', '#5C3818'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 3.5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const p = {
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1,
                color,
                size: 2 + Math.random() * 3,
                life: 25 + Math.random() * 20,
                maxLife: 45,
                shape: 'rect',
                gravity: 0.15,
                friction: 0.95
            };
            this.particles.push(p);
        }
    }

    addRockSparks(x, y, count = 12) {
        const colors = ['#A9A9A9', '#DCDCDC', '#FFF8DC', '#FFA500'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const p = {
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1.5,
                color,
                size: 2 + Math.random() * 2.5,
                life: 18 + Math.random() * 15,
                maxLife: 33,
                shape: 'circle',
                gravity: 0.2,
                friction: 0.92
            };
            this.particles.push(p);
        }
    }

    addLeafBurst(x, y, count = 14) {
        const colors = ['#2E8B57', '#32CD32', '#228B22', '#006400', '#9ACD32'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 0.5,
                color,
                size: 3 + Math.random() * 3,
                life: 30 + Math.random() * 20,
                maxLife: 50,
                shape: 'leaf',
                gravity: 0.04,
                friction: 0.96
            });
        }
    }

    addHitSparks(x, y, isEnemy = true, count = 10) {
        const color = isEnemy ? '#FF4500' : '#DC143C';
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 4.5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: Math.random() > 0.3 ? color : '#FFFF00',
                size: 2.5 + Math.random() * 2.5,
                life: 15 + Math.random() * 12,
                maxLife: 27,
                shape: 'circle',
                gravity: 0.1,
                friction: 0.94
            });
        }
    }

    addWaterSplash(x, y, count = 8) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.8 + Math.random() * 2.2;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 0.8,
                color: 'rgba(173, 216, 230, 0.8)',
                size: 2 + Math.random() * 2.5,
                life: 20 + Math.random() * 15,
                maxLife: 35,
                shape: 'circle',
                gravity: 0.12,
                friction: 0.94
            });
        }
    }

    addCampfireEmbers(x, y) {
        if (Math.random() < 0.6) {
            const colors = ['#FF4500', '#FF8C00', '#FFD700', '#FF6347'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            this.particles.push({
                x: x + (Math.random() * 16 - 8),
                y: y + (Math.random() * 8 - 4),
                vx: (Math.random() - 0.5) * 0.8,
                vy: -1.2 - Math.random() * 1.5,
                color,
                size: 2 + Math.random() * 2,
                life: 30 + Math.random() * 25,
                maxLife: 55,
                shape: 'circle',
                gravity: -0.02,
                friction: 0.98
            });
        }
        // Smoke
        if (Math.random() < 0.3) {
            this.particles.push({
                x: x + (Math.random() * 12 - 6),
                y: y - 10,
                vx: (Math.random() - 0.5) * 0.5 + 0.3,
                vy: -0.8 - Math.random() * 0.8,
                color: 'rgba(180, 180, 180, 0.4)',
                size: 5 + Math.random() * 4,
                life: 45 + Math.random() * 25,
                maxLife: 70,
                shape: 'smoke',
                gravity: -0.03,
                friction: 0.99
            });
        }
    }

    addSparkles(x, y, count = 18) {
        const colors = ['#FFD700', '#FFF', '#00FFFF', '#FF69B4'];
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const speed = 2 + Math.random() * 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color,
                size: 3 + Math.random() * 2.5,
                life: 35 + Math.random() * 20,
                maxLife: 55,
                shape: 'star',
                gravity: 0.02,
                friction: 0.95
            });
        }
    }

    // --- FLOATING TEXT ---

    addFloatingText(text, x, y, color = '#FFF', fontSize = 14, bold = true) {
        this.floatingTexts.push({
            text, x, y,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -1.2,
            color,
            fontSize,
            bold,
            life: 60,
            maxLife: 60
        });
    }

    addDamageNumber(damage, x, y, isCrit = false, isPlayer = false) {
        const color = isPlayer ? '#FF4444' : (isCrit ? '#FFA500' : '#FFFFFF');
        const text = (isCrit ? '💥 ' : '') + Math.round(damage);
        const size = isCrit ? 18 : 14;
        this.addFloatingText(text, x, y - 10, color, size, true);
    }

    addHealNumber(amount, x, y) {
        this.addFloatingText('+' + Math.round(amount) + ' HP', x, y - 10, '#00FF7F', 14, true);
    }

    // --- UPDATE & RENDER ---

    update(dt) {
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity || 0;
            p.vx *= p.friction || 0.98;
            p.vy *= p.friction || 0.98;
            p.life -= 1;

            if (p.shape === 'smoke') {
                p.size += 0.15;
            }

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // Update floating text
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.x += ft.vx;
            ft.y += ft.vy;
            ft.vy *= 0.97;
            ft.life -= 1;
            if (ft.life <= 0) {
                this.floatingTexts.splice(i, 1);
            }
        }
    }

    render(ctx, camera) {
        // Render particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            const sx = p.x - camera.x;
            const sy = p.y - camera.y;

            // Viewport culling
            if (sx < -50 || sx > camera.width + 50 || sy < -50 || sy > camera.height + 50) {
                continue;
            }

            const alpha = Math.max(0, p.life / p.maxLife);
            ctx.save();
            ctx.globalAlpha = alpha;

            if (p.shape === 'rect') {
                ctx.fillStyle = p.color;
                ctx.fillRect(sx - p.size / 2, sy - p.size / 2, p.size, p.size);
            } else if (p.shape === 'leaf') {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.ellipse(sx, sy, p.size * 1.5, p.size * 0.8, p.vx * 0.5, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.shape === 'smoke') {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(sx, sy, p.size, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.shape === 'star') {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(sx, sy, p.size, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(sx, sy, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

        // Render Floating Texts
        for (let i = 0; i < this.floatingTexts.length; i++) {
            const ft = this.floatingTexts[i];
            const sx = ft.x - camera.x;
            const sy = ft.y - camera.y;

            if (sx < -100 || sx > camera.width + 100 || sy < -100 || sy > camera.height + 100) {
                continue;
            }

            const alpha = Math.min(1, ft.life / 20);
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.font = `${ft.bold ? 'bold ' : ''}${ft.fontSize}px 'Segoe UI', Arial, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Shadow outline
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 3;
            ctx.strokeText(ft.text, sx, sy);

            ctx.fillStyle = ft.color;
            ctx.fillText(ft.text, sx, sy);
            ctx.restore();
        }
    }
}

window.Particles = new ParticleSystem();
