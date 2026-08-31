/**
 * Quest Chain, Story Missions & Radio Escape Objective
 */

class QuestSystem {
    constructor() {
        this.currentQuestIndex = 0;
        this.rescued = false;
        this.beaconActive = false;
        this.beaconTimer = 60; // 60 seconds rescue arrival countdown

        this.quests = [
            {
                id: 'quest_1',
                title: '1. Stranded on the Shore',
                description: 'Forage basic survival resources along the beach and grassy meadows.',
                tasks: [
                    { type: 'collect', item: 'wood', target: 5, current: 0, label: 'Gather Palm Wood' },
                    { type: 'collect', item: 'stone', target: 3, current: 0, label: 'Gather Stones' },
                    { type: 'collect', item: 'berries', target: 4, current: 0, label: 'Gather Berries' }
                ],
                rewardText: 'Unlocked: Stone Tool Blueprints'
            },
            {
                id: 'quest_2',
                title: '2. Primitive Tools',
                description: 'Open Crafting [E] to craft a Stone Axe and Stone Pickaxe.',
                tasks: [
                    { type: 'craft', item: 'stone_axe', target: 1, current: 0, label: 'Craft Stone Axe' },
                    { type: 'craft', item: 'stone_pickaxe', target: 1, current: 0, label: 'Craft Stone Pickaxe' }
                ],
                rewardText: '+2 Coconuts, Linen Bandages'
            },
            {
                id: 'quest_3',
                title: '3. Warmth & Sustenance',
                description: 'Craft a Campfire, place it on the ground, and secure cooked food.',
                tasks: [
                    { type: 'build', item: 'campfire', target: 1, current: 0, label: 'Place Campfire' },
                    { type: 'collect', item: 'raw_crab', target: 1, current: 0, label: 'Catch Crab / Meat' }
                ],
                rewardText: 'Equippable Torch'
            },
            {
                id: 'quest_4',
                title: '4. Build a Shelter',
                description: 'Construct a Lean-to Shelter to sleep through cold dark nights.',
                tasks: [
                    { type: 'build', item: 'shelter', target: 1, current: 0, label: 'Build Lean-to Shelter' }
                ],
                rewardText: 'Unlocked: Crafting Workstation'
            },
            {
                id: 'quest_5',
                title: '5. Hunter & Angler',
                description: 'Craft a Fishing Rod to catch fish or craft a Spear to hunt boars.',
                tasks: [
                    { type: 'fish', target: 1, current: 0, label: 'Catch a Fish from water' }
                ],
                rewardText: '+4 Linen Bandages'
            },
            {
                id: 'quest_6',
                title: '6. Smelting Forge',
                description: 'Build a Stone Furnace and smelt Iron Ore into an Iron Ingot.',
                tasks: [
                    { type: 'build', item: 'furnace', target: 1, current: 0, label: 'Build Furnace' },
                    { type: 'collect', item: 'iron_ingot', target: 2, current: 0, label: 'Smelt 2 Iron Ingots' }
                ],
                rewardText: '+15 Max Health Boost'
            },
            {
                id: 'quest_7',
                title: '7. Discover Island Landmarks',
                description: 'Explore the map to locate the Shipwreck, Ancient Ruins, and Radio Tower.',
                tasks: [
                    { type: 'explore_shipwreck', target: 1, current: 0, label: 'Find Coast Shipwreck' },
                    { type: 'explore_ruins', target: 1, current: 0, label: 'Find Ancient Ruins' },
                    { type: 'explore_radio', target: 1, current: 0, label: 'Find Mountain Radio Tower' }
                ],
                rewardText: 'Unlocked: Radio Escape Blueprints'
            },
            {
                id: 'quest_8',
                title: '8. Scavenge Radio Components',
                description: 'Gather all 4 key radio parts required to repair the emergency tower.',
                tasks: [
                    { type: 'have_item', item: 'radio_tube', target: 1, current: 0, label: 'Scavenge Vacuum Tube' },
                    { type: 'have_item', item: 'battery', target: 1, current: 0, label: 'Scavenge Heavy Battery' },
                    { type: 'have_item', item: 'antenna_mast', target: 1, current: 0, label: 'Craft Reinforced Antenna' },
                    { type: 'have_item', item: 'distress_beacon', target: 1, current: 0, label: 'Craft Distress Beacon' }
                ],
                rewardText: 'Radio Ready for Assembly!'
            },
            {
                id: 'quest_9',
                title: '9. Transmit SOS Beacon & Escape!',
                description: 'Approach the Radio Tower, press [F] to repair it, and survive until rescue arrives!',
                tasks: [
                    { type: 'repair_radio', target: 1, current: 0, label: 'Repair & Activate Tower' },
                    { type: 'survive_beacon', target: 60, current: 0, label: 'Survive until Rescue' }
                ],
                rewardText: 'Island Escaped - Victory!'
            }
        ];
    }

    getCurrentQuest() {
        return this.quests[this.currentQuestIndex] || null;
    }

    update(dt, player, world) {
        const quest = this.getCurrentQuest();
        if (!quest) return;

        // Check Landmark exploration
        if (quest.id === 'quest_7') {
            const distShip = Math.hypot(player.x - world.shipwreckPos.x, player.y - world.shipwreckPos.y);
            const distRuins = Math.hypot(player.x - world.ruinsPos.x, player.y - world.ruinsPos.y);
            const distRadio = Math.hypot(player.x - world.radioTowerPos.x, player.y - world.radioTowerPos.y);

            if (distShip < 150) this.completeTaskType('explore_shipwreck', 1);
            if (distRuins < 150) this.completeTaskType('explore_ruins', 1);
            if (distRadio < 150) this.completeTaskType('explore_radio', 1);
        }

        // Check Inventory possession quests (e.g. have_item)
        for (const task of quest.tasks) {
            if (task.type === 'have_item') {
                task.current = player.inventory.getItemCount(task.item);
            }
        }

        // Handle active rescue beacon timer
        if (this.beaconActive && !this.rescued) {
            this.beaconTimer -= dt;
            const task = quest.tasks.find(t => t.type === 'survive_beacon');
            if (task) {
                task.current = Math.max(0, Math.floor(60 - this.beaconTimer));
            }

            // Periodic radio beeps
            if (Math.floor(this.beaconTimer) % 5 === 0 && Math.random() < 0.1) {
                window.Sound.playRadioBeep();
            }

            if (this.beaconTimer <= 0) {
                this.triggerVictory();
            }
        }

        this.checkQuestCompletion(player);
    }

    onItemCollected(itemId, count) {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === 'collect' && t.item === itemId) {
                t.current = Math.min(t.target, t.current + count);
            }
        }
    }

    onItemCrafted(itemId, count) {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === 'craft' && t.item === itemId) {
                t.current = Math.min(t.target, t.current + count);
            }
        }
    }

    onStructureBuilt(type) {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === 'build' && t.item === type) {
                t.current = Math.min(t.target, t.current + 1);
            }
        }
    }

    onFishCaught() {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === 'fish') {
                t.current = Math.min(t.target, t.current + 1);
            }
        }
    }

    onMobKilled(mobType) {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === 'kill_mob' && (t.mob === mobType || t.mob === 'any')) {
                t.current = Math.min(t.target, t.current + 1);
            }
        }
    }

    completeTaskType(type, val = 1) {
        const quest = this.getCurrentQuest();
        if (!quest) return;
        for (const t of quest.tasks) {
            if (t.type === type) {
                t.current = Math.min(t.target, t.current + val);
            }
        }
    }

    checkQuestCompletion(player) {
        const quest = this.getCurrentQuest();
        if (!quest) return;

        const allDone = quest.tasks.every(t => t.current >= t.target);
        if (allDone) {
            this.currentQuestIndex++;
            window.Sound.playQuestComplete();
            window.Particles.addSparkles(player.x, player.y, 25);
            window.Particles.addFloatingText(`✨ Quest Complete: ${quest.title}!`, player.x, player.y - 35, '#00FF7F', 18, true);

            // Apply specific rewards
            if (quest.id === 'quest_2') {
                player.inventory.addItem('coconut', 2);
                player.inventory.addItem('bandage', 2);
            } else if (quest.id === 'quest_3') {
                player.inventory.addItem('torch', 1);
            } else if (quest.id === 'quest_5') {
                player.inventory.addItem('bandage', 4);
            } else if (quest.id === 'quest_6') {
                player.survival.maxHealth += 15;
                player.survival.health = player.survival.maxHealth;
            }
        }
    }

    startDistressBeacon() {
        this.beaconActive = true;
        this.beaconTimer = 60;
        this.completeTaskType('repair_radio', 1);
        window.Sound.playQuestComplete();
        window.Sound.playRadioBeep();
    }

    triggerVictory() {
        if (this.rescued) return;
        this.rescued = true;
        window.Sound.playVictoryHorn();
        if (window.Game) {
            window.Game.triggerVictory();
        }
    }
}

window.QuestSystem = QuestSystem;
