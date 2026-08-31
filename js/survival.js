/**
 * Survival Stats & Status Effect System
 */

class SurvivalSystem {
    constructor(player) {
        this.player = player;

        // Core Stats (0 - 100)
        this.health = 100;
        this.maxHealth = 100;
        this.hunger = 100;
        this.maxHunger = 100;
        this.thirst = 100;
        this.maxThirst = 100;
        this.energy = 100;
        this.maxEnergy = 100;

        // Rates (units per second)
        this.hungerDrainRate = 0.28;
        this.thirstDrainRate = 0.42;
        this.energyRegenRate = 12.0;
        this.healthRegenRate = 0.5;

        // Temperature (0 = freezing hypothermia, 50 = ideal, 100 = heatstroke)
        this.temperature = 50;

        // Status Effects
        this.isPoisoned = false;
        this.poisonTimer = 0;
        this.isFreezing = false;
        this.isOverheating = false;
        this.isResting = false;

        // Survival Statistics
        this.daysSurvived = 1;
        this.resourcesGathered = 0;
        this.enemiesDefeated = 0;
        this.causeOfDeath = 'Exhaustion';
    }

    reset() {
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.energy = 100;
        this.temperature = 50;
        this.isPoisoned = false;
        this.poisonTimer = 0;
        this.isFreezing = false;
        this.isOverheating = false;
        this.isResting = false;
    }

    update(dt, weather, world) {
        if (this.health <= 0) return;

        // 1. Hunger & Thirst Drains
        let hungerMultiplier = 1.0;
        let thirstMultiplier = 1.0;

        if (this.player.isSprinting) {
            hungerMultiplier += 0.8;
            thirstMultiplier += 1.2;
        }
        if (this.player.isSwimming) {
            hungerMultiplier += 0.5;
            thirstMultiplier += 0.8;
        }
        if (weather.isHotNoon) {
            thirstMultiplier += 0.6;
        }

        this.hunger = Math.max(0, this.hunger - this.hungerDrainRate * hungerMultiplier * dt);
        this.thirst = Math.max(0, this.thirst - this.thirstDrainRate * thirstMultiplier * dt);

        // 2. Energy / Stamina Management
        if (!this.player.isSprinting && !this.player.isAttacking && !this.player.isMining) {
            let regen = this.energyRegenRate;
            if (this.hunger < 20 || this.thirst < 20) regen *= 0.4;
            this.energy = Math.min(this.maxEnergy, this.energy + regen * dt);
        }

        // 3. Temperature Calculation
        const isNearCampfire = this.checkNearCampfire(world);
        const hasTorch = this.player.hasTorchEquipped();

        if (weather.isNight || weather.isRaining) {
            if (isNearCampfire || hasTorch) {
                this.temperature = Math.min(60, this.temperature + 5 * dt);
            } else {
                this.temperature = Math.max(10, this.temperature - (weather.isRaining ? 6 : 4) * dt);
            }
        } else if (weather.isHotNoon) {
            this.temperature = Math.min(85, this.temperature + 4 * dt);
        } else {
            // Normalize towards 50
            if (this.temperature > 50) this.temperature -= 2 * dt;
            if (this.temperature < 50) this.temperature += 2 * dt;
        }

        this.isFreezing = this.temperature <= 20;
        this.isOverheating = this.temperature >= 80;

        // 4. Health Penalties & Regeneration
        let healthDelta = 0;

        // Starvation & Dehydration
        if (this.hunger <= 0) {
            healthDelta -= 2.5 * dt;
            this.causeOfDeath = 'Starvation';
        }
        if (this.thirst <= 0) {
            healthDelta -= 3.5 * dt;
            this.causeOfDeath = 'Dehydration';
        }
        if (this.isFreezing) {
            healthDelta -= 2.0 * dt;
            this.causeOfDeath = 'Hypothermia';
        }
        if (this.isOverheating) {
            healthDelta -= 1.5 * dt;
            this.causeOfDeath = 'Heatstroke';
        }

        // Poison
        if (this.isPoisoned) {
            this.poisonTimer -= dt;
            healthDelta -= 2.0 * dt;
            if (this.poisonTimer <= 0) {
                this.isPoisoned = false;
            }
        }

        // Natural Healing when well fed & hydrated
        if (this.hunger > 75 && this.thirst > 75 && healthDelta >= 0 && !this.isFreezing && !this.isPoisoned) {
            healthDelta += this.healthRegenRate * dt;
        }

        this.health = Math.max(0, Math.min(this.maxHealth, this.health + healthDelta));

        if (this.health <= 0) {
            this.onPlayerDeath();
        }
    }

    checkNearCampfire(world) {
        for (const s of world.structures) {
            if (s.type === 'campfire' && s.isLit !== false) {
                const dist = Math.hypot(this.player.x - s.x, this.player.y - s.y);
                if (dist < 120) return true;
            }
        }
        return false;
    }

    consumeItem(item) {
        if (!item) return false;

        let used = false;

        if (item.hunger) {
            this.hunger = Math.min(this.maxHunger, this.hunger + item.hunger);
            used = true;
        }
        if (item.thirst) {
            this.thirst = Math.min(this.maxThirst, this.thirst + item.thirst);
            used = true;
        }
        if (item.health) {
            this.health = Math.min(this.maxHealth, this.health + item.health);
            window.Particles.addHealNumber(item.health, this.player.x, this.player.y);
            used = true;
        }
        if (item.energy) {
            this.energy = Math.min(this.maxEnergy, this.energy + item.energy);
            used = true;
        }

        if (item.poisonChance && Math.random() < item.poisonChance) {
            this.isPoisoned = true;
            this.poisonTimer = 15;
            window.Particles.addFloatingText('🤢 Poisoned!', this.player.x, this.player.y - 20, '#32CD32', 16, true);
        }

        if (used) {
            if (item.thirst && item.thirst > 15) {
                window.Sound.playDrink();
            } else {
                window.Sound.playEat();
            }
        }

        return used;
    }

    takeDamage(amount, source = 'Attack') {
        if (this.health <= 0) return;
        this.health = Math.max(0, this.health - amount);
        this.causeOfDeath = source;
        window.Sound.playPlayerHurt();
        window.Particles.addHitSparks(this.player.x, this.player.y, false, 8);
        window.Particles.addDamageNumber(amount, this.player.x, this.player.y, false, true);

        if (this.health <= 0) {
            this.onPlayerDeath();
        }
    }

    useEnergy(amount) {
        if (this.energy < amount) return false;
        this.energy = Math.max(0, this.energy - amount);
        return true;
    }

    onPlayerDeath() {
        window.Sound.playGameOver();
        if (window.Game) {
            window.Game.triggerGameOver(this.causeOfDeath);
        }
    }
}

window.SurvivalSystem = SurvivalSystem;
