/**
 * Player, Wildlife & Hostile Creatures Entity System
 */

// === PLAYER CLASS ===
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 14;
        this.angle = 0;
        this.speed = 135;
        this.sprintSpeed = 210;
        this.swimSpeed = 75;

        this.isSprinting = false;
        this.isSwimming = false;
        this.isAttacking = false;
        this.isMining = false;

        this.attackTimer = 0;
        this.attackDuration = 0.22;
        this.attackCooldown = 0;
        this.swingAngle = 0;

        this.walkAnim = 0;
        this.footstepTimer = 0;

        this.inventory = new Inventory(24);
        this.survival = new SurvivalSystem(this);

        // Starter items
        this.inventory.addItem('coconut', 2);
        this.inventory.addItem('berries', 3);
    }

    hasTorchEquipped() {
        return (this.inventory.equipment.offhand && this.inventory.equipment.offhand.id === 'torch') ||
               (this.inventory.getSelectedItem() && this.inventory.getSelectedItem().id === 'torch');
    }

    update(dt, input, world) {
        if (this.survival.health <= 0) return;

        // 1. Movement Inputs
        let dx = 0;
        let dy = 0;

        if (input.isDown('KeyW') || input.isDown('ArrowUp')) dy -= 1;
        if (input.isDown('KeyS') || input.isDown('ArrowDown')) dy += 1;
        if (input.isDown('KeyA') || input.isDown('ArrowLeft')) dx -= 1;
        if (input.isDown('KeyD') || input.isDown('ArrowRight')) dx += 1;

        // Normalize diagonal vector
        const len = Math.hypot(dx, dy);
        if (len > 0) {
            dx /= len;
            dy /= len;
        }

        // 2. Check Swimming & Sprinting
        this.isSwimming = world.isWater(this.x, this.y);
        const shiftPressed = input.isDown('ShiftLeft') || input.isDown('ShiftRight');
        this.isSprinting = shiftPressed && len > 0 && !this.isSwimming && this.survival.energy > 5;

        if (this.isSprinting) {
            this.survival.useEnergy(14 * dt);
        }

        let currentSpeed = this.isSwimming ? this.swimSpeed : (this.isSprinting ? this.sprintSpeed : this.speed);

        // 3. Collision-Checked Movement
        const targetVx = dx * currentSpeed;
        const targetVy = dy * currentSpeed;

        this.vx += (targetVx - this.vx) * (dt * 15);
        this.vy += (targetVy - this.vy) * (dt * 15);

        const newX = this.x + this.vx * dt;
        const newY = this.y + this.vy * dt;

        // X-axis collision
        if (!world.isBlocked(newX, this.y, this.radius)) {
            this.x = newX;
        } else {
            this.vx = 0;
        }

        // Y-axis collision
        if (!world.isBlocked(this.x, newY, this.radius)) {
            this.y = newY;
        } else {
            this.vy = 0;
        }

        // Clamp inside map boundaries
        this.x = Math.max(30, Math.min(world.width * world.tileSize - 30, this.x));
        this.y = Math.max(30, Math.min(world.height * world.tileSize - 30, this.y));

        // 4. Reveal Fog of War
        world.revealArea(this.x, this.y, 8);

        // 5. Aim Direction
        if (input.mouseWorld) {
            this.angle = Math.atan2(input.mouseWorld.y - this.y, input.mouseWorld.x - this.x);
        }

        // 6. Walking & Footstep Sounds
        if (len > 0) {
            this.walkAnim += dt * (this.isSprinting ? 16 : 10);
            this.footstepTimer -= dt;
            if (this.footstepTimer <= 0) {
                const surface = this.isSwimming ? 'water' : (world.getTileAtWorld(this.x, this.y) === window.TileType.SAND ? 'sand' : 'grass');
                window.Sound.playFootstep(surface);
                this.footstepTimer = this.isSprinting ? 0.28 : 0.42;

                if (this.isSwimming) {
                    window.Particles.addWaterSplash(this.x, this.y, 4);
                }
            }
        } else {
            this.walkAnim = 0;
        }

        // 7. Attack / Swing Animation update
        if (this.attackCooldown > 0) {
            this.attackCooldown -= dt;
        }

        if (this.isAttacking) {
            this.attackTimer += dt;
            const progress = this.attackTimer / this.attackDuration;
            this.swingAngle = Math.sin(progress * Math.PI) * 1.3;

            if (this.attackTimer >= this.attackDuration) {
                this.isAttacking = false;
                this.attackTimer = 0;
                this.swingAngle = 0;
            }
        }
    }

    performAction(world, mobs) {
        if (this.attackCooldown > 0 || this.survival.energy < 4) return;

        const selected = this.inventory.getSelectedItem();
        const def = selected ? window.ItemDatabase[selected.id] : null;

        // 1. Food / Consumable Check
        if (def && (def.category === window.ItemCategory.FOOD || def.category === window.ItemCategory.MEDICINE)) {
            const consumed = this.survival.consumeItem(def);
            if (consumed) {
                this.inventory.removeItem(def.id, 1);
                this.attackCooldown = 0.4;
                return;
            }
        }

        // 2. Fishing Rod Check
        if (def && def.id === 'fishing_rod') {
            if (window.Game && window.Game.fishing.state === window.FishingState.IDLE) {
                window.Game.fishing.startFishing(this, world);
                this.attackCooldown = 0.5;
                return;
            }
        }

        // 3. Bow Ranged Attack
        if (def && def.isRanged) {
            if (this.inventory.hasItem('arrow', 1)) {
                this.inventory.removeItem('arrow', 1);
                this.survival.useEnergy(8);
                window.Sound.playShoot();
                if (window.Game) {
                    window.Game.combat.spawnArrow(this.x, this.y, this.angle, def.damage);
                }
                this.attackCooldown = 0.45;
                return;
            } else {
                window.Particles.addFloatingText('Need arrows!', this.x, this.y - 25, '#FFA500', 14, true);
                return;
            }
        }

        // 4. Melee Weapon / Tool Swing
        this.isAttacking = true;
        this.attackTimer = 0;
        this.attackCooldown = 0.28;
        this.survival.useEnergy(4);
        window.Sound.playSwing();

        // Hit range and angle
        const reach = (def && def.range ? def.range : 1.0) * 48;
        const hitX = this.x + Math.cos(this.angle) * reach;
        const hitY = this.y + Math.sin(this.angle) * reach;

        // Check Mob Hits
        let hitMob = false;
        const baseDamage = def && def.damage ? def.damage : 4;

        for (const mob of mobs) {
            if (mob.dead) continue;
            const dist = Math.hypot(mob.x - hitX, mob.y - hitY);
            if (dist < mob.radius + 18) {
                mob.takeDamage(baseDamage, this);
                hitMob = true;
            }
        }

        if (hitMob) {
            if (selected && def.durability) {
                selected.durability -= 1;
                if (selected.durability <= 0) {
                    this.inventory.removeItem(selected.id, 1);
                    window.Particles.addFloatingText('Tool broke!', this.x, this.y - 20, '#FF4444', 14, true);
                }
            }
            return;
        }

        // Check Resource Node Hits (Trees, Boulders, etc.)
        for (const r of world.resources) {
            if (r.dead) continue;
            const dist = Math.hypot(r.x - hitX, r.y - hitY);
            if (dist < r.radius + 20) {
                this.harvestResource(r, def, selected);
                break;
            }
        }
    }

    harvestResource(node, toolDef, selectedItem) {
        let power = 2; // Bare hands base
        let effective = false;

        if (node.toolRequired === 'axe') {
            if (toolDef && toolDef.chopPower) {
                power = toolDef.chopPower * 10;
                effective = true;
            } else {
                power = 4;
            }
            window.Sound.playChop();
            window.Particles.addWoodChips(node.x, node.y, 8);
        } else if (node.toolRequired === 'pickaxe') {
            if (toolDef && toolDef.minePower) {
                power = toolDef.minePower * 10;
                effective = true;
            } else {
                power = 3;
            }
            window.Sound.playMine();
            window.Particles.addRockSparks(node.x, node.y, 10);
        } else {
            power = 15;
            effective = true;
            window.Sound.playGather();
            window.Particles.addLeafBurst(node.x, node.y, 10);
        }

        node.hp -= power;
        node.shake = 1.0;

        // Tool Durability reduction
        if (selectedItem && toolDef && toolDef.durability) {
            selectedItem.durability -= 1;
            if (selectedItem.durability <= 0) {
                this.inventory.removeItem(selectedItem.id, 1);
                window.Particles.addFloatingText('Tool broke!', this.x, this.y - 20, '#FF4444', 14, true);
            }
        }

        if (node.hp <= 0) {
            node.dead = true;
            node.respawnTimer = 120; // 2 minutes respawn

            // Drop resources directly to player inventory or floor
            for (const drop of node.drops) {
                if (drop.chance && Math.random() > drop.chance) continue;
                const count = Math.floor(drop.min + Math.random() * (drop.max - drop.min + 1));
                this.inventory.addItem(drop.id, count);
                this.survival.resourcesGathered += count;
            }

            if (node.toolRequired === 'axe') {
                window.Particles.addWoodChips(node.x, node.y, 25);
            } else if (node.toolRequired === 'pickaxe') {
                window.Particles.addRockSparks(node.x, node.y, 30);
            } else {
                window.Particles.addLeafBurst(node.x, node.y, 25);
            }
        }
    }

    render(ctx, camera) {
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;

        ctx.save();
        ctx.translate(sx, sy);

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 8, 14, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Rotate facing direction
        ctx.rotate(this.angle);

        // 1. Hands & Equipped Weapon / Tool
        const selected = this.inventory.getSelectedItem();
        const def = selected ? window.ItemDatabase[selected.id] : null;

        const swingOffset = this.isAttacking ? this.swingAngle * 0.8 : 0;
        const walkBob = Math.sin(this.walkAnim) * 3;

        // Left Hand
        ctx.fillStyle = '#E0AC69';
        ctx.beginPath();
        ctx.arc(8, -12, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Right Hand (Main Tool)
        ctx.save();
        ctx.translate(8, 12);
        ctx.rotate(swingOffset);

        ctx.fillStyle = '#E0AC69';
        ctx.beginPath();
        ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
        ctx.fill();

        if (def && def.drawIcon) {
            ctx.save();
            ctx.translate(4, -8);
            ctx.rotate(Math.PI / 4);
            def.drawIcon(ctx, 0, 0, 20);
            ctx.restore();
        }
        ctx.restore();

        // 2. Torso / Clothes
        ctx.fillStyle = '#4682B4'; // Blue shirt
        ctx.beginPath();
        ctx.roundRect(-10, -10 + walkBob * 0.3, 20, 20, 5);
        ctx.fill();

        // 3. Head & Hair
        ctx.fillStyle = '#E0AC69';
        ctx.beginPath();
        ctx.arc(0, walkBob * 0.3, 10, 0, Math.PI * 2);
        ctx.fill();

        // Survivor headband / hair
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(0, -3 + walkBob * 0.3, 9, Math.PI, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(6, -2, 1.5, 0, Math.PI * 2);
        ctx.arc(6, 2, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}

// === WILDLIFE & MONSTER BASE CLASS ===
class Mob {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.vx = 0;
        this.vy = 0;
        this.angle = Math.random() * Math.PI * 2;
        this.state = 'wander';
        this.stateTimer = 2 + Math.random() * 3;
        this.dead = false;
        this.hitFlash = 0;

        this.initMobType(type);
    }

    initMobType(type) {
        switch (type) {
            case 'crab':
                this.name = 'Beach Crab';
                this.maxHp = 15;
                this.hp = 15;
                this.speed = 35;
                this.radius = 12;
                this.isAggressive = false;
                this.drops = [{ id: 'raw_crab', min: 1, max: 2 }];
                break;

            case 'rabbit':
                this.name = 'Island Hare';
                this.maxHp = 10;
                this.hp = 10;
                this.speed = 85;
                this.radius = 10;
                this.isAggressive = false;
                this.drops = [{ id: 'leather', min: 1, max: 1 }];
                break;

            case 'boar':
                this.name = 'Wild Boar';
                this.maxHp = 45;
                this.hp = 45;
                this.speed = 50;
                this.chargeSpeed = 110;
                this.radius = 16;
                this.isAggressive = false; // Neutral until attacked
                this.damage = 12;
                this.drops = [
                    { id: 'raw_meat', min: 1, max: 3 },
                    { id: 'leather', min: 1, max: 2 }
                ];
                break;

            case 'wolf':
                this.name = 'Island Wolf';
                this.maxHp = 60;
                this.hp = 60;
                this.speed = 95;
                this.radius = 16;
                this.isAggressive = true;
                this.damage = 16;
                this.drops = [
                    { id: 'raw_meat', min: 2, max: 4 },
                    { id: 'leather', min: 2, max: 3 }
                ];
                break;

            case 'shark':
                this.name = 'Reef Shark';
                this.maxHp = 70;
                this.hp = 70;
                this.speed = 80;
                this.radius = 18;
                this.isAggressive = true;
                this.damage = 22;
                this.drops = [{ id: 'raw_fish', min: 2, max: 4 }];
                break;
        }
    }

    update(dt, player, world) {
        if (this.dead) return;

        if (this.hitFlash > 0) {
            this.hitFlash -= dt * 5;
        }

        const distToPlayer = Math.hypot(player.x - this.x, player.y - this.y);

        // --- AI STATE MACHINE ---
        if (this.isAggressive || this.state === 'chase') {
            if (distToPlayer < 240) {
                this.state = 'chase';
                this.angle = Math.atan2(player.y - this.y, player.x - this.x);

                // Shark only attacks if player is swimming in water
                if (this.type === 'shark' && !player.isSwimming) {
                    this.state = 'wander';
                }

                // Attack Player on contact
                if (distToPlayer < this.radius + player.radius + 5) {
                    player.survival.takeDamage(this.damage, this.name);
                    this.vx = -Math.cos(this.angle) * 60;
                    this.vy = -Math.sin(this.angle) * 60;
                }
            } else {
                this.state = 'wander';
            }
        } else if (this.state === 'flee') {
            this.stateTimer -= dt;
            if (this.stateTimer <= 0) this.state = 'wander';
        }

        // Wander Behavior
        if (this.state === 'wander') {
            this.stateTimer -= dt;
            if (this.stateTimer <= 0) {
                this.angle = Math.random() * Math.PI * 2;
                this.stateTimer = 2 + Math.random() * 4;
            }
        }

        // Speed calculation
        let curSpeed = this.speed;
        if (this.state === 'chase') {
            curSpeed = this.chargeSpeed || (this.speed * 1.3);
        } else if (this.state === 'flee') {
            curSpeed = this.speed * 1.4;
        }

        // Apply physics
        const targetVx = Math.cos(this.angle) * curSpeed;
        const targetVy = Math.sin(this.angle) * curSpeed;

        this.vx += (targetVx - this.vx) * (dt * 5);
        this.vy += (targetVy - this.vy) * (dt * 5);

        const newX = this.x + this.vx * dt;
        const newY = this.y + this.vy * dt;

        // Specific movement restriction (Shark stays in water, land mobs avoid deep water)
        const isTargetWater = world.isWater(newX, newY);
        if (this.type === 'shark') {
            if (isTargetWater && !world.isBlocked(newX, newY, this.radius)) {
                this.x = newX;
                this.y = newY;
            } else {
                this.angle += Math.PI * 0.8;
            }
        } else {
            if (!world.isBlocked(newX, newY, this.radius) && world.getTileAtWorld(newX, newY) !== window.TileType.DEEP_OCEAN) {
                this.x = newX;
                this.y = newY;
            } else {
                this.angle += Math.PI * 0.8;
            }
        }
    }

    takeDamage(amount, source) {
        if (this.dead) return;

        this.hp -= amount;
        this.hitFlash = 1.0;
        window.Sound.playHit(true);
        window.Particles.addHitSparks(this.x, this.y, true, 10);
        window.Particles.addDamageNumber(amount, this.x, this.y, amount > 15, false);

        // Knockback
        const pushAngle = Math.atan2(this.y - source.y, this.x - source.x);
        this.vx = Math.cos(pushAngle) * 120;
        this.vy = Math.sin(pushAngle) * 120;

        // Retaliate or Flee
        if (this.type === 'boar') {
            this.isAggressive = true;
            this.state = 'chase';
        } else if (!this.isAggressive) {
            this.state = 'flee';
            this.angle = pushAngle;
            this.stateTimer = 4.0;
        }

        if (this.hp <= 0) {
            this.die(source);
        }
    }

    die(killer) {
        this.dead = true;
        window.Particles.addHitSparks(this.x, this.y, true, 20);
        window.Particles.addFloatingText(`${this.name} Defeated!`, this.x, this.y - 20, '#FFD700', 14, true);

        // Drop loot items
        for (const drop of this.drops) {
            const count = Math.floor(drop.min + Math.random() * (drop.max - drop.min + 1));
            killer.inventory.addItem(drop.id, count);
        }

        killer.survival.enemiesDefeated++;

        if (window.Game) {
            window.Game.quests.onMobKilled(this.type);
        }
    }

    render(ctx, camera) {
        if (this.dead) return;

        const sx = this.x - camera.x;
        const sy = this.y - camera.y;

        ctx.save();
        ctx.translate(sx, sy);

        if (this.hitFlash > 0) {
            ctx.fillStyle = '#FFFFFF';
        }

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.beginPath();
        ctx.ellipse(0, 6, this.radius, this.radius * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.rotate(this.angle);

        // Render Creature Body
        switch (this.type) {
            case 'crab':
                ctx.fillStyle = this.hitFlash > 0 ? '#FFF' : '#FF4500';
                ctx.beginPath();
                ctx.arc(0, 0, 10, 0, Math.PI * 2);
                ctx.fill();
                // Claws
                ctx.fillRect(8, -8, 6, 4);
                ctx.fillRect(8, 4, 6, 4);
                break;

            case 'rabbit':
                ctx.fillStyle = this.hitFlash > 0 ? '#FFF' : '#D2B48C';
                ctx.beginPath();
                ctx.ellipse(0, 0, 10, 7, 0, 0, Math.PI * 2);
                ctx.fill();
                // Ears
                ctx.fillRect(-6, -10, 4, 8);
                ctx.fillRect(-6, 2, 4, 8);
                break;

            case 'boar':
                ctx.fillStyle = this.hitFlash > 0 ? '#FFF' : '#5C3818';
                ctx.beginPath();
                ctx.roundRect(-14, -10, 28, 20, 6);
                ctx.fill();
                // Tusks
                ctx.fillStyle = '#FFF';
                ctx.beginPath();
                ctx.moveTo(12, -6);
                ctx.lineTo(18, -10);
                ctx.lineTo(14, -2);
                ctx.closePath();
                ctx.fill();
                break;

            case 'wolf':
                ctx.fillStyle = this.hitFlash > 0 ? '#FFF' : '#696969';
                ctx.beginPath();
                ctx.roundRect(-14, -8, 28, 16, 5);
                ctx.fill();
                // Glowing predatory eyes
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(8, -5, 2, 2);
                ctx.fillRect(8, 3, 2, 2);
                break;

            case 'shark':
                ctx.fillStyle = this.hitFlash > 0 ? '#FFF' : '#2F4F4F';
                ctx.beginPath();
                ctx.ellipse(0, 0, 18, 9, 0, 0, Math.PI * 2);
                ctx.fill();
                // Dorsal Fin
                ctx.fillStyle = '#1C3131';
                ctx.beginPath();
                ctx.moveTo(-4, -14);
                ctx.lineTo(6, 0);
                ctx.lineTo(-8, 0);
                ctx.closePath();
                ctx.fill();
                break;
        }

        // Render health bar if hurt
        if (this.hp < this.maxHp) {
            ctx.rotate(-this.angle);
            const barW = 26;
            const barH = 3;
            const pct = Math.max(0, this.hp / this.maxHp);
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(-barW / 2, -22, barW, barH);
            ctx.fillStyle = '#FF4500';
            ctx.fillRect(-barW / 2, -22, barW * pct, barH);
        }

        ctx.restore();
    }
}

window.Player = Player;
window.Mob = Mob;
