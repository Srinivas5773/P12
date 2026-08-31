/**
 * LocalStorage Save / Load & State Serialization System
 */

class StorageSystem {
    constructor() {
        this.saveKey = 'island_survival_save_v1';
        this.autoSaveTimer = 60; // Auto-save every 60 seconds
    }

    saveGame(game) {
        try {
            const data = {
                version: 1,
                timestamp: Date.now(),
                player: {
                    x: game.player.x,
                    y: game.player.y,
                    inventory: game.player.inventory.slots,
                    equipment: game.player.inventory.equipment,
                    selectedHotbar: game.player.inventory.selectedHotbarIndex
                },
                survival: {
                    health: game.player.survival.health,
                    maxHealth: game.player.survival.maxHealth,
                    hunger: game.player.survival.hunger,
                    thirst: game.player.survival.thirst,
                    energy: game.player.survival.energy,
                    temperature: game.player.survival.temperature,
                    daysSurvived: game.player.survival.daysSurvived,
                    resourcesGathered: game.player.survival.resourcesGathered,
                    enemiesDefeated: game.player.survival.enemiesDefeated
                },
                weather: {
                    time: game.weather.time,
                    dayCount: game.weather.dayCount,
                    currentWeather: game.weather.currentWeather
                },
                quests: {
                    currentIndex: game.quests.currentQuestIndex,
                    tasks: game.quests.getCurrentQuest() ? game.quests.getCurrentQuest().tasks : [],
                    beaconActive: game.quests.beaconActive,
                    beaconTimer: game.quests.beaconTimer
                },
                structures: game.world.structures,
                radioRepaired: game.radioRepaired
            };

            localStorage.setItem(this.saveKey, JSON.stringify(data));
            window.Particles.addFloatingText('💾 Game Saved!', game.player.x, game.player.y - 30, '#00FFCC', 16, true);
            return true;
        } catch (e) {
            console.error('Failed to save game:', e);
            return false;
        }
    }

    hasSave() {
        return !!localStorage.getItem(this.saveKey);
    }

    loadGame(game) {
        try {
            const raw = localStorage.getItem(this.saveKey);
            if (!raw) return false;

            const data = JSON.parse(raw);

            // Restore Player
            if (data.player) {
                game.player.x = data.player.x;
                game.player.y = data.player.y;
                game.player.inventory.slots = data.player.inventory;
                game.player.inventory.equipment = data.player.equipment || game.player.inventory.equipment;
                game.player.inventory.selectedHotbarIndex = data.player.selectedHotbar || 0;
            }

            // Restore Survival
            if (data.survival) {
                game.player.survival.health = data.survival.health;
                game.player.survival.maxHealth = data.survival.maxHealth || 100;
                game.player.survival.hunger = data.survival.hunger;
                game.player.survival.thirst = data.survival.thirst;
                game.player.survival.energy = data.survival.energy;
                game.player.survival.temperature = data.survival.temperature || 50;
                game.player.survival.daysSurvived = data.survival.daysSurvived || 1;
                game.player.survival.resourcesGathered = data.survival.resourcesGathered || 0;
                game.player.survival.enemiesDefeated = data.survival.enemiesDefeated || 0;
            }

            // Restore Weather
            if (data.weather) {
                game.weather.time = data.weather.time;
                game.weather.dayCount = data.weather.dayCount;
                game.weather.currentWeather = data.weather.currentWeather;
            }

            // Restore Quests
            if (data.quests) {
                game.quests.currentQuestIndex = data.quests.currentIndex;
                game.quests.beaconActive = data.quests.beaconActive || false;
                game.quests.beaconTimer = data.quests.beaconTimer || 60;
                const currentQuest = game.quests.getCurrentQuest();
                if (currentQuest && data.quests.tasks) {
                    data.quests.tasks.forEach((savedTask, idx) => {
                        if (currentQuest.tasks[idx]) {
                            currentQuest.tasks[idx].current = savedTask.current;
                        }
                    });
                }
            }

            // Restore Structures
            if (data.structures) {
                game.world.structures = data.structures;
            }

            if (data.radioRepaired !== undefined) {
                game.radioRepaired = data.radioRepaired;
            }

            return true;
        } catch (e) {
            console.error('Failed to load game:', e);
            return false;
        }
    }

    clearSave() {
        localStorage.removeItem(this.saveKey);
    }
}

window.StorageSystem = StorageSystem;
