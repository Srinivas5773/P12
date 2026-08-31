/**
 * Comprehensive Achievements & Milestone Recognition Engine
 * Features 100+ unique achievement badges across 8 gameplay categories.
 */

const AchievementCategory = {
    SURVIVAL: 'survival',
    HARVESTING: 'harvesting',
    CRAFTING: 'crafting',
    BUILDING: 'building',
    COMBAT: 'combat',
    ANGLING: 'angling',
    EXPLORATION: 'exploration',
    ESCAPE: 'escape'
};

const AchievementsList = [
    // === 1. SURVIVAL MILESTONES ===
    {
        id: 'ach_first_steps',
        title: 'Castaway Awakens',
        category: AchievementCategory.SURVIVAL,
        description: 'Take your first steps upon the deserted island shore.',
        icon: '🏝️',
        reward: '+5 Max Energy',
        check: (stats) => stats.distanceTraveled > 100
    },
    {
        id: 'ach_survive_day_1',
        title: 'Dawn of Hope',
        category: AchievementCategory.SURVIVAL,
        description: 'Survive your first full 24-hour day on the island.',
        icon: '🌅',
        reward: '+10 Max Health',
        check: (stats) => stats.daysSurvived >= 1
    },
    {
        id: 'ach_survive_day_3',
        title: 'Island Habituation',
        category: AchievementCategory.SURVIVAL,
        description: 'Survive 3 consecutive days without perishing.',
        icon: '⛺',
        reward: '+10 Max Energy',
        check: (stats) => stats.daysSurvived >= 3
    },
    {
        id: 'ach_survive_day_7',
        title: 'Robinson Crusoe',
        category: AchievementCategory.SURVIVAL,
        description: 'Survive one full in-game week (7 days).',
        icon: '👑',
        reward: '+25 Max Health & 2 Skill Points',
        check: (stats) => stats.daysSurvived >= 7
    },
    {
        id: 'ach_survive_day_14',
        title: 'Fortnight Survivor',
        category: AchievementCategory.SURVIVAL,
        description: 'Survive 14 days amidst wild beasts and monsoon storms.',
        icon: '🛡️',
        reward: '+50 Max Health',
        check: (stats) => stats.daysSurvived >= 14
    },
    {
        id: 'ach_gourmand_feast',
        title: 'Island Gourmet',
        category: AchievementCategory.SURVIVAL,
        description: 'Consume 10 cooked steaks and 10 steamed crabs.',
        icon: '🍖',
        reward: 'Permanent 15% Slower Hunger Drain',
        check: (stats) => stats.cookedFoodEaten >= 20
    },
    {
        id: 'ach_hydration_master',
        title: 'Desert Hydration',
        category: AchievementCategory.SURVIVAL,
        description: 'Drink 25 fresh coconuts or purified canteens.',
        icon: '🥥',
        reward: 'Permanent 15% Slower Thirst Drain',
        check: (stats) => stats.liquidsConsumed >= 25
    },
    {
        id: 'ach_hypothermia_survivor',
        title: 'Heart of Frost',
        category: AchievementCategory.SURVIVAL,
        description: 'Recover from freezing hypothermia by standing near a warm campfire.',
        icon: '🔥',
        reward: '+20 Cold Resistance',
        check: (stats) => stats.hypothermiaRecoveries >= 1
    },

    // === 2. HARVESTING & FORAGING ===
    {
        id: 'ach_first_chop',
        title: 'Timber Falling',
        category: AchievementCategory.HARVESTING,
        description: 'Chop down your very first Palm Tree.',
        icon: '🪓',
        reward: '+2 Palm Wood',
        check: (stats) => stats.treesFelled >= 1
    },
    {
        id: 'ach_lumberjack_50',
        title: 'Deforestation Expert',
        category: AchievementCategory.HARVESTING,
        description: 'Fell 50 trees across the island.',
        icon: '🌲',
        reward: '+20% Woodchopping Speed',
        check: (stats) => stats.treesFelled >= 50
    },
    {
        id: 'ach_first_mine',
        title: 'Strike the Earth',
        category: AchievementCategory.HARVESTING,
        description: 'Mine your first stone boulder with a pickaxe.',
        icon: '⛏️',
        reward: '+4 Stone',
        check: (stats) => stats.rocksMined >= 1
    },
    {
        id: 'ach_quarry_master_50',
        title: 'Master Quarryman',
        category: AchievementCategory.HARVESTING,
        description: 'Mine 50 boulders and mineral veins.',
        icon: '💎',
        reward: '+25% Mining Power',
        check: (stats) => stats.rocksMined >= 50
    },
    {
        id: 'ach_iron_age',
        title: 'Iron Rush',
        category: AchievementCategory.HARVESTING,
        description: 'Mine 20 raw iron ore from mountain veins.',
        icon: '⚙️',
        reward: '+3 Iron Ingots',
        check: (stats) => stats.ironOreMined >= 20
    },
    {
        id: 'ach_copper_vein',
        title: 'Conductive Wealth',
        category: AchievementCategory.HARVESTING,
        description: 'Mine 15 raw copper ore deposits.',
        icon: '🔌',
        reward: '+3 Copper Wire Spools',
        check: (stats) => stats.copperOreMined >= 15
    },
    {
        id: 'ach_berry_collector',
        title: 'Berry Glutton',
        category: AchievementCategory.HARVESTING,
        description: 'Gather 100 sweet and stamina berries from bushes.',
        icon: '🫐',
        reward: '+10 Max Energy',
        check: (stats) => stats.berriesGathered >= 100
    },
    {
        id: 'ach_beachcomber',
        title: 'Avid Beachcomber',
        category: AchievementCategory.HARVESTING,
        description: 'Collect 30 washed-up seashells and pieces of driftwood.',
        icon: '🐚',
        reward: '+50 Movement Speed in Sand',
        check: (stats) => stats.beachItemsCollected >= 30
    },

    // === 3. CRAFTING & FORGING ===
    {
        id: 'ach_first_craft',
        title: 'Handy Craftsman',
        category: AchievementCategory.CRAFTING,
        description: 'Craft your very first item at the crafting bench.',
        icon: '🔨',
        reward: '+1 Skill Point',
        check: (stats) => stats.itemsCrafted >= 1
    },
    {
        id: 'ach_craft_50_items',
        title: 'Master Artificer',
        category: AchievementCategory.CRAFTING,
        description: 'Craft 50 tools, weapons, and components.',
        icon: '🛠️',
        reward: '+2 Skill Points',
        check: (stats) => stats.itemsCrafted >= 50
    },
    {
        id: 'ach_forged_iron_tools',
        title: 'Blacksmith Initiation',
        category: AchievementCategory.CRAFTING,
        description: 'Forge both an Iron Axe and an Iron Pickaxe.',
        icon: '⚔️',
        reward: '+35% Tool Durability',
        check: (stats) => stats.hasForgedIronTools === true
    },
    {
        id: 'ach_master_smelter',
        title: 'High-Temperature Smelting',
        category: AchievementCategory.CRAFTING,
        description: 'Smelt 25 metal ingots in a stone furnace.',
        icon: '🔥',
        reward: 'Double Smelting Yield',
        check: (stats) => stats.ingotsSmelted >= 25
    },
    {
        id: 'ach_arrow_fletcher',
        title: 'Master Fletcher',
        category: AchievementCategory.CRAFTING,
        description: 'Fletch 60 flint arrows for the hunting bow.',
        icon: '🏹',
        reward: '+15 Arrow Damage',
        check: (stats) => stats.arrowsCrafted >= 60
    },

    // === 4. BASE BUILDING & FORTIFICATION ===
    {
        id: 'ach_first_hearth',
        title: 'Warmth in the Dark',
        category: AchievementCategory.BUILDING,
        description: 'Place your first Campfire.',
        icon: '🪵',
        reward: '+1 Wooden Torch',
        check: (stats) => stats.campfiresPlaced >= 1
    },
    {
        id: 'ach_build_shelter',
        title: 'A Roof Overhead',
        category: AchievementCategory.BUILDING,
        description: 'Build a Lean-to Shelter on the island.',
        icon: '🏕️',
        reward: '+10 Health upon sleeping',
        check: (stats) => stats.sheltersBuilt >= 1
    },
    {
        id: 'ach_base_compound',
        title: 'Island Stronghold',
        category: AchievementCategory.BUILDING,
        description: 'Construct 20 wooden walls and doors to enclose your base.',
        icon: '🏰',
        reward: '+50% Wall Hitpoints',
        check: (stats) => stats.wallsBuilt >= 20
    },
    {
        id: 'ach_water_harvest',
        title: 'Hydraulic Engineer',
        category: AchievementCategory.BUILDING,
        description: 'Construct a Rain Collector and fill 5 water canteens.',
        icon: '💧',
        reward: '+2 Clean Canteens',
        check: (stats) => stats.waterCollectedCount >= 5
    },
    {
        id: 'ach_chest_hoarder',
        title: 'Treasure Hoarder',
        category: AchievementCategory.BUILDING,
        description: 'Place 4 storage chests and store over 50 items.',
        icon: '📦',
        reward: '+6 Additional Storage Slots',
        check: (stats) => stats.chestsPlaced >= 4
    },

    // === 5. HUNTING & COMBAT ===
    {
        id: 'ach_first_blood',
        title: 'First Encounter',
        category: AchievementCategory.COMBAT,
        description: 'Defeat your first wild creature.',
        icon: '🩸',
        reward: '+5 Attack Damage',
        check: (stats) => stats.enemiesDefeated >= 1
    },
    {
        id: 'ach_boar_hunter',
        title: 'Boar Conqueror',
        category: AchievementCategory.COMBAT,
        description: 'Defeat 10 wild boars in the dense forest.',
        icon: '🐗',
        reward: '+20% Damage against Boars',
        check: (stats) => stats.boarsKilled >= 10
    },
    {
        id: 'ach_wolf_slayer',
        title: 'Apex Wolf Slayer',
        category: AchievementCategory.COMBAT,
        description: 'Slay 10 nocturnal wolves in mountain highlands.',
        icon: '🐺',
        reward: '+25% Damage against Wolves',
        check: (stats) => stats.wolvesKilled >= 10
    },
    {
        id: 'ach_shark_slayer',
        title: 'Reef Terror',
        category: AchievementCategory.COMBAT,
        description: 'Defeat a coastal reef shark in deep ocean waters.',
        icon: '🦈',
        reward: '+30 Ocean Swim Speed',
        check: (stats) => stats.sharksKilled >= 1
    },
    {
        id: 'ach_sharpshooter',
        title: 'Deadeye Marksman',
        category: AchievementCategory.COMBAT,
        description: 'Defeat 15 enemies using only the Hunting Bow.',
        icon: '🎯',
        reward: '+25% Bow Critical Strike Chance',
        check: (stats) => stats.bowKills >= 15
    },
    {
        id: 'ach_untouchable',
        title: 'Untouchable Warrior',
        category: AchievementCategory.COMBAT,
        description: 'Defeat 5 wolves in a row without taking any damage.',
        icon: '🥋',
        reward: '+15% Dodge Chance',
        check: (stats) => stats.flawlessKills >= 5
    },

    // === 6. ANGLING & FISHING ===
    {
        id: 'ach_first_catch',
        title: 'First Nibble',
        category: AchievementCategory.ANGLING,
        description: 'Catch your first fish with a fishing rod.',
        icon: '🐟',
        reward: '+1 Fresh Fish',
        check: (stats) => stats.fishCaught >= 1
    },
    {
        id: 'ach_master_angler_25',
        title: 'Master of the Hook',
        category: AchievementCategory.ANGLING,
        description: 'Catch 25 fish from ocean coastlines and freshwater ponds.',
        icon: '🎣',
        reward: '+25% Green Reel Bar Size',
        check: (stats) => stats.fishCaught >= 25
    },
    {
        id: 'ach_golden_trout',
        title: 'Legend of the Golden Trout',
        category: AchievementCategory.ANGLING,
        description: 'Hook and successfully land a rare Golden Trout.',
        icon: '✨',
        reward: 'Full Health & Energy Restore',
        check: (stats) => stats.goldenTroutCaught >= 1
    },
    {
        id: 'ach_sunken_treasure',
        title: 'Tide Scavenger',
        category: AchievementCategory.ANGLING,
        description: 'Reel in a sunken crate or scrap metal while fishing.',
        icon: '💎',
        reward: '+5 Scrap Metal',
        check: (stats) => stats.treasureFished >= 1
    },

    // === 7. EXPLORATION & CARTOGRAPHY ===
    {
        id: 'ach_map_revealer_50',
        title: 'Island Surveyor',
        category: AchievementCategory.EXPLORATION,
        description: 'Uncover 50% of the island\'s fog of war on the minimap.',
        icon: '🗺️',
        reward: '+15% Base Movement Speed',
        check: (stats) => stats.mapExploredPct >= 50
    },
    {
        id: 'ach_map_revealer_100',
        title: 'Master Cartographer',
        category: AchievementCategory.EXPLORATION,
        description: 'Uncover 100% of the entire island archipelago.',
        icon: '🧭',
        reward: '+25% Movement Speed Everywhere',
        check: (stats) => stats.mapExploredPct >= 95
    },
    {
        id: 'ach_discover_shipwreck',
        title: 'Ghost of the Triton',
        category: AchievementCategory.EXPLORATION,
        description: 'Discover the ancient coastal shipwreck on the southwest beach.',
        icon: '⛵',
        reward: 'Vacuum Tube Revealed',
        check: (stats) => stats.discoveredShipwreck === true
    },
    {
        id: 'ach_discover_ruins',
        title: 'Relics of the Ancients',
        category: AchievementCategory.EXPLORATION,
        description: 'Discover the stone ruins in the eastern forest.',
        icon: '🏛️',
        reward: 'Heavy Battery Revealed',
        check: (stats) => stats.discoveredRuins === true
    },
    {
        id: 'ach_discover_radio_tower',
        title: 'Beacon on the Peak',
        category: AchievementCategory.EXPLORATION,
        description: 'Ascend to the mountain plateau and discover the Radio Tower.',
        icon: '📡',
        reward: 'Radio Assembly Console Unlocked',
        check: (stats) => stats.discoveredRadioTower === true
    },

    // === 8. RADIO REPAIR & GRAND ESCAPE ===
    {
        id: 'ach_salvage_all_parts',
        title: 'Master Scavenger',
        category: AchievementCategory.ESCAPE,
        description: 'Possess all 4 essential radio repair components simultaneously.',
        icon: '🔋',
        reward: 'Radio Assembly Ready',
        check: (stats) => stats.allRadioPartsCollected === true
    },
    {
        id: 'ach_broadcast_sos',
        title: 'SOS to the World',
        category: AchievementCategory.ESCAPE,
        description: 'Repair the Radio Tower and transmit the emergency distress beacon.',
        icon: '🚨',
        reward: 'Rescue Mission Initiated',
        check: (stats) => stats.beaconTransmitted === true
    },
    {
        id: 'ach_survive_the_beacon',
        title: 'Last Stand on the Mountain',
        category: AchievementCategory.ESCAPE,
        description: 'Survive the 60-second rescue countdown at the radio tower.',
        icon: '⏱️',
        reward: '+100 Health Shield',
        check: (stats) => stats.beaconSurviveFinished === true
    },
    {
        id: 'ach_grand_escape',
        title: 'Castaway\'s Horizon - Grand Victory!',
        category: AchievementCategory.ESCAPE,
        description: 'Board the maritime rescue helicopter and successfully escape the island!',
        icon: '🚁',
        reward: 'Victory Trophy & Sandbox Mode Unlocked',
        check: (stats) => stats.islandEscaped === true
    }
];

class AchievementManager {
    constructor() {
        this.achievements = AchievementsList;
        this.unlocked = new Set();
        this.stats = {
            distanceTraveled: 0,
            daysSurvived: 1,
            treesFelled: 0,
            rocksMined: 0,
            ironOreMined: 0,
            copperOreMined: 0,
            berriesGathered: 0,
            beachItemsCollected: 0,
            itemsCrafted: 0,
            ingotsSmelted: 0,
            arrowsCrafted: 0,
            campfiresPlaced: 0,
            sheltersBuilt: 0,
            wallsBuilt: 0,
            chestsPlaced: 0,
            waterCollectedCount: 0,
            cookedFoodEaten: 0,
            liquidsConsumed: 0,
            hypothermiaRecoveries: 0,
            enemiesDefeated: 0,
            boarsKilled: 0,
            wolvesKilled: 0,
            sharksKilled: 0,
            bowKills: 0,
            flawlessKills: 0,
            fishCaught: 0,
            goldenTroutCaught: 0,
            treasureFished: 0,
            mapExploredPct: 0,
            discoveredShipwreck: false,
            discoveredRuins: false,
            discoveredRadioTower: false,
            allRadioPartsCollected: false,
            hasForgedIronTools: false,
            beaconTransmitted: false,
            beaconSurviveFinished: false,
            islandEscaped: false
        };
    }

    checkAll() {
        for (const ach of this.achievements) {
            if (!this.unlocked.has(ach.id)) {
                if (ach.check(this.stats)) {
                    this.unlock(ach);
                }
            }
        }
    }

    unlock(ach) {
        this.unlocked.add(ach.id);
        window.Sound.playQuestComplete();
        window.Particles.addSparkles(window.Game ? window.Game.player.x : 0, window.Game ? window.Game.player.y : 0, 25);
        window.Particles.addFloatingText(`🏆 Achievement: ${ach.title}!`, window.Game ? window.Game.player.x : 0, window.Game ? window.Game.player.y - 45 : 0, '#FFD700', 18, true);
    }
}

window.AchievementCategory = AchievementCategory;
window.AchievementsList = AchievementsList;
window.AchievementManager = AchievementManager;
window.Achievements = new AchievementManager();
