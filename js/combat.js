/**
 * Combat & Projectile Arrow Physics Engine
 */

class Arrow {
    constructor(x, y, angle, damage) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 460;
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;
        this.damage = damage;
        this.life = 1.2; // Seconds alive
        this.dead = false;
    }

    update(dt, world, mobs, player) {
        if (this.dead) return;

        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.life -= dt;

        if (this.life <= 0) {
            this.dead = true;
            return;
        }

        // Check world collision (wall / boulder)
        if (world.isBlocked(this.x, this.y, 4)) {
            this.dead = true;
            window.Sound.playMine();
            window.Particles.addRockSparks(this.x, this.y, 5);
            return;
        }

        // Check Mob Hits
        for (const mob of mobs) {
            if (mob.dead) continue;
            const dist = Math.hypot(mob.x - this.x, mob.y - this.y);
            if (dist < mob.radius + 6) {
                mob.takeDamage(this.damage, player);
                this.dead = true;
                return;
            }
        }
    }

    render(ctx, camera) {
        if (this.dead) return;
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(this.angle);

        // Shaft
        ctx.strokeStyle = '#8B5A2B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(10, 0);
        ctx.stroke();

        // Arrowhead
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(4, -3);
        ctx.lineTo(4, 3);
        ctx.closePath();
        ctx.fill();

        // Fletching
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(-14, -3);
        ctx.moveTo(-10, 0);
        ctx.lineTo(-14, 3);
        ctx.stroke();

        ctx.restore();
    }
}

class CombatSystem {
    constructor() {
        this.arrows = [];
    }

    spawnArrow(x, y, angle, damage) {
        this.arrows.push(new Arrow(x, y, angle, damage));
    }

    update(dt, world, mobs, player) {
        for (let i = this.arrows.length - 1; i >= 0; i--) {
            const arrow = this.arrows[i];
            arrow.update(dt, world, mobs, player);
            if (arrow.dead) {
                this.arrows.splice(i, 1);
            }
        }
    }

    render(ctx, camera) {
        for (const arrow of this.arrows) {
            arrow.render(ctx, camera);
        }
    }
}

window.CombatSystem = CombatSystem;
