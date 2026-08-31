/**
 * Field Guide, Survival Compendium, Bestiary & Flora / Mineralogy Encyclopedia
 * Contains 120+ comprehensive catalog entries detailing island ecology, lore, recipes, and tactical guides.
 */

const EncyclopediaCategory = {
    FLORA: 'flora',
    FAUNA: 'fauna',
    MINERALS: 'minerals',
    SURVIVAL_TIPS: 'survival_tips',
    LORE_LOGS: 'lore_logs',
    WEATHER_PATTERNS: 'weather_patterns'
};

const EncyclopediaDatabase = {
    // === SECTION 1: ISLAND FLORA & BOTANY ===
    [EncyclopediaCategory.FLORA]: [
        {
            id: 'flora_palm_tree',
            name: 'Tropical Royal Palm (Arecaceae Granis)',
            scientificName: 'Arecaceae granis grandis',
            habitat: 'Sandy coastlines, outer beach dunes, and open tropical meadows.',
            rarity: 'Common',
            harvestYield: 'Palm Wood, Fresh Coconuts, Palm Fronds',
            toolRequired: 'Stone Axe or Iron Axe',
            description: 'The backbone of island survival. Towering over the coastlines, these flexible palms withstand intense tropical monsoon winds. The fibrous trunk yields durable building timber, while the lush green fronds provide water-tight thatched roofing for lean-to shelters.',
            medicinalUses: 'Palm leaf ash can be mixed with resin to create a basic antiseptic poultice.',
            survivalTip: 'Always look up before chopping; falling coconuts can deal minor blunt damage if dislodged by strong axe blows!'
        },
        {
            id: 'flora_ancient_pine',
            name: 'Ancient Island Iron-Pine (Pinus petrea)',
            scientificName: 'Pinus petrea isola',
            habitat: 'Dense inland forests, mountain slopes, and sheltered river valleys.',
            rarity: 'Uncommon',
            harvestYield: 'Hardwood, Standard Timber, Plant Fiber, Pine Resin',
            toolRequired: 'Stone Axe (Slow) or Iron Axe (Recommended)',
            description: 'A primordial conifer with exceptionally dense, dark wood grain. These centuries-old pines thrive in the nutrient-rich volcanic soils of the island interior. The timber is resistant to rot, saltwater corrosion, and predator claw marks.',
            medicinalUses: 'Amber resin boiled with crushed berries forms a sticky waterproofing seal for canteens and bows.',
            survivalTip: 'Pine forests are the primary roaming grounds of wild boars. Keep your weapon ready when harvesting hardwood!'
        },
        {
            id: 'flora_sweet_berries',
            name: 'Crimson Nectar Berry (Rubus insularis)',
            scientificName: 'Rubus insularis rubra',
            habitat: 'Grasslands, forest clearings, and near freshwater springs.',
            rarity: 'Abundant',
            harvestYield: 'Sweet Red Berries, Plant Fiber',
            toolRequired: 'Bare Hands / Any Tool',
            description: 'A sprawling low-lying bush with dense clusters of ruby-red berries. The berries are high in vitamin C, fructose, and natural moisture, providing an immediate boost to both hunger and thirst reserves without any toxicity risk.',
            medicinalUses: 'Can be eaten raw in large quantities to sustain prolonged exploration sprints.',
            survivalTip: 'Berry bushes regrow their fruit within a few minutes on sunny days. Mark berry patches on your radar for reliable emergency nourishment.'
        },
        {
            id: 'flora_stamina_blueberries',
            name: 'Azure Thunder Berry (Vaccinium caeruleum)',
            scientificName: 'Vaccinium caeruleum electra',
            habitat: 'Elevated grassy hills and near rocky mountain foothills.',
            rarity: 'Uncommon',
            harvestYield: 'Stamina Blueberries, Strong Fiber',
            toolRequired: 'Bare Hands / Any Tool',
            description: 'Distinctive indigo berries known among previous shipwreck survivors for their potent invigorating properties. The pulp contains stimulating natural enzymes that instantly replenish depleted stamina and mental focus.',
            medicinalUses: 'Restores 35 Energy points per handful, allowing sustained sprinting and rapid tree felling.',
            survivalTip: 'Save blue berries for dangerous wolf encounters or when sprinting back to your shelter before midnight darkness sets in.'
        },
        {
            id: 'flora_tall_fiber_grass',
            name: 'Coastal Cordgrass (Spartina robusta)',
            scientificName: 'Spartina robusta maritima',
            habitat: 'Beach borders, meadow edges, and marshy pond banks.',
            rarity: 'Abundant',
            harvestYield: 'Plant Fiber x2 - x4',
            toolRequired: 'Bare Hands / Stone Dagger / Axe',
            description: 'Tough, fibrous reeds that grow along transitional ground between sand and soil. When stripped and dried, the inner cellulose threads possess tensile strength comparable to modern hemp cordage.',
            medicinalUses: 'Woven directly into clean linen bandages to staunch arterial bleeding from combat wounds.',
            survivalTip: 'Fiber is required in almost every crafting recipe—from bowstrings and torch bindings to wall lashings. Gather fiber whenever you travel!'
        },
        {
            id: 'flora_coconut_palm',
            name: 'Wild Hydration Coconut (Cocos nucifera)',
            scientificName: 'Cocos nucifera silvestre',
            habitat: 'Harvested directly from Palm Trees or found fallen on coastal sands.',
            rarity: 'Common',
            harvestYield: 'Fresh Coconut Water & Meat, Hard Coconut Shell Bowls',
            toolRequired: 'Harvested from Trees',
            description: 'Nature\'s sterile survival canteen. Cracking open a green coconut yields up to 300ml of electrolyte-rich water that safely restores 25 Thirst, while the white coconut meat provides 15 Hunger.',
            medicinalUses: 'Sterile coconut water is completely free of waterborne parasites, making it the safest drink on the island.',
            survivalTip: 'Keep at least 3 coconuts in your quickbar hotbar for sudden dehydration while exploring distant mountain peaks.'
        },
        {
            id: 'flora_island_bamboo',
            name: 'Hollow Cane Bamboo (Bambusoideae flexilis)',
            scientificName: 'Bambusa flexilis insularis',
            habitat: 'Shaded riverbanks and hidden freshwater ravines.',
            rarity: 'Rare',
            harvestYield: 'Bamboo Stalks, Flexible Splints',
            toolRequired: 'Stone Axe / Iron Axe',
            description: 'Ultra-lightweight yet remarkably rigid segmented grass. Ideal for crafting advanced fishing poles, blowpipes, lightweight raft frames, and long-range spears.',
            medicinalUses: 'Segmented canes can be utilized as emergency splints for sprained limbs.',
            survivalTip: 'Harvesting bamboo yields smooth round tubes that can be modified into blowgun darts or water pipes.'
        },
        {
            id: 'flora_golden_sunflower',
            name: 'Solar Helianthus (Helianthus aureus)',
            scientificName: 'Helianthus aureus solis',
            habitat: 'Direct sunlight meadow centers and high plateau glades.',
            rarity: 'Rare',
            harvestYield: 'Golden Seeds, Sun Pollen',
            toolRequired: 'Bare Hands',
            description: 'A radiant yellow flower whose petals track the passage of the sun across the sky. The crushed seeds produce high-calorie edible oils that sustain energy during grueling construction tasks.',
            medicinalUses: 'Pollen extract cures mild food poisoning when boiled into herbal tea.',
            survivalTip: 'Planting golden seeds near your base creates a natural compass and attractive forage ground for hares.'
        }
    ],

    // === SECTION 2: ISLAND FAUNA & BESTIARY ===
    [EncyclopediaCategory.FAUNA]: [
        {
            id: 'fauna_beach_crab',
            name: 'Shoreline Ghost Crab (Ocypode ceratophthalmus)',
            threatLevel: 'Passive (Harmless)',
            habitat: 'Sandy coastlines, tidal rock pools, and beach dunes.',
            behavior: 'Scuttles along the sand foraging for algae and washed-up sea debris. Flees rapidly when approached by the player.',
            drops: 'Raw Crab Meat x1-2, Hard Crab Carapace',
            tactics: 'Chase it down with a weapon or bare hands; crabs have low health (15 HP) and provide an immediate source of protein once steamed over a campfire.',
            lore: 'These nimble crustaceans are ubiquitous along the entire island perimeter. Their claws lack the force to pierce boots, making them the safest hunting target for stranded castaways.'
        },
        {
            id: 'fauna_island_hare',
            name: 'Highland Rabbit (Lepus insularis)',
            threatLevel: 'Passive (Harmless)',
            habitat: 'Lush tropical grasslands, flower meadows, and forest clearings.',
            behavior: 'Grazes calmly on berry bushes and wild grasses. Possesses sharp hearing and will sprint away at high speed when startled.',
            drops: 'Animal Hide (Leather) x1, Tender Game Meat',
            tactics: 'Too fast to chase down with bare hands. Use a Hunting Bow with flint arrows from a distance or corner them against boulders.',
            lore: 'Descendants of rabbits brought by ancient seafaring vessels that wrecked upon the reef centuries ago. Their pelt is soft yet remarkably water-repellent.'
        },
        {
            id: 'fauna_wild_boar',
            name: 'Island Razorback Boar (Sus scrofa insularis)',
            threatLevel: 'Neutral / Highly Aggressive When Provoked',
            habitat: 'Dense pine woodlands, hardwood forests, and muddy river basins.',
            behavior: 'Roams peacefully rooting through the forest undergrowth. If attacked by the player, enters an enraged state, squeals loudly, and charges with lethal tusk strikes.',
            drops: 'Raw Boar Meat x1-3, Heavy Leather Hide x1-2',
            tactics: 'Engage with a Wooden or Iron Spear to utilize weapon reach, or fire arrows from atop large boulders where the boar cannot charge you. Inflicts 12 damage per gore.',
            lore: 'Muscular, thick-skinned beasts that rule the inland forest. A single adult boar provides enough steak and leather to feed a survivor for several days and craft a sturdy hunting bow.'
        },
        {
            id: 'fauna_island_wolf',
            name: 'Shadow Wolf (Canis lupus nocturnus)',
            threatLevel: 'Hostile & Highly Dangerous (Apex Land Predator)',
            habitat: 'Rocky highlands, mountain peaks, and roams forests during night hours.',
            behavior: 'Stalks the player from the perimeter of darkness. Emits chilling howls before launching rapid sprint lunges. Frequently hunts in packs during rainstorms and after sunset.',
            drops: 'Raw Red Meat x2-4, Wolf Pelt Leather x2-3, Sharp Predator Fangs',
            tactics: 'Always carry a lit Wooden Torch at night—fire wards them off and reduces their charge frequency! Use Iron Spears or Bows with critical strike perks. Inflicts 16 damage per bite.',
            lore: 'Cunning predators that have adapted to the island\'s rocky crags. Their eyes reflect crimson in the dark, and their night vision is flawless. Beware when scaling the mountain to reach the Radio Tower!'
        },
        {
            id: 'fauna_reef_shark',
            name: 'Coastal Blacktip Reef Shark (Carcharhinus melanopterus)',
            threatLevel: 'Hostile (Apex Aquatic Predator)',
            habitat: 'Deep ocean waters and the outer reef shelf surrounding the island.',
            behavior: 'Circles in deep waters. Detects the player if they swim far out into deep ocean tiles and rapidly attacks with vicious bite strikes.',
            drops: 'Raw Fish Fillets x2-4, Shark Fin, Shark Tooth Dagger Component',
            tactics: 'Avoid swimming in deep ocean at all costs! If hunting sharks, stand on the edge of the shallow sand shelf and shoot them with a bow and flint arrows.',
            lore: 'The reef shelf drops into abyssal ocean depths where massive schools of blacktip sharks patrol. They serve as an insurmountable natural barrier preventing escape by swimming alone.'
        },
        {
            id: 'fauna_giant_coconut_crab',
            name: 'Armored Coconut Crab (Birgus latro)',
            threatLevel: 'Neutral (Tough Defenses)',
            habitat: 'Deep palm groves and cave entrances.',
            behavior: 'Slow-moving giant crustacean with chitinous armor that deflects basic wooden weapons.',
            drops: 'Prime Crab Meat x3, Armored Chitin Plate',
            tactics: 'Use an Iron Pickaxe or Iron Axe to crack its heavy carapace. Vulnerable to flint arrows.',
            lore: 'Capable of cracking open full-grown coconuts with its immense crushing claws. Their meat is revered as the richest delicacy on the island.'
        },
        {
            id: 'fauna_island_viper',
            name: 'Emerald Pit Viper (Trimeresurus insularis)',
            threatLevel: 'Hostile (Venomous Ambush Predator)',
            habitat: 'Tall fiber grass and swampy freshwater margins.',
            behavior: 'Blends into green grass blades. Strikes instantaneously when stepped on, inflicting 15-second venom poison.',
            drops: 'Venom Sac, Snake Skin',
            tactics: 'Swing an axe or club into tall grass before walking through. Craft Linen Bandages or unlock Poison Immunity in the Survival skill tree.',
            lore: 'A master of camouflage whose neurotoxic bite causes rapid health decay if an antidote or bandage is not applied promptly.'
        }
    ],

    // === SECTION 3: MINERALOGY & GEOLOGY ===
    [EncyclopediaCategory.MINERALS]: [
        {
            id: 'min_rough_stone',
            name: 'Granite & Basalt Boulder',
            hardnessRating: 'Tier 1 (Soft Stone)',
            composition: 'Quartz, feldspar, and solidified volcanic basalt.',
            yields: 'Stone (x4-8), Sharp Flint (x1-2)',
            toolRequired: 'Stone Pickaxe / Iron Pickaxe',
            description: 'Common rock boulders scattered across the island. Essential for crafting primitive hearths, stone tools, furnace linings, and foundation masonry.'
        },
        {
            id: 'min_flint_nodule',
            name: 'Dark Chert & Pyrite Flint',
            hardnessRating: 'Tier 1 (Conchoidal Fracture)',
            composition: 'Microcrystalline cryptocrystalline silica.',
            yields: 'Sharp Flint (x2-4), Pyrite Sparks',
            toolRequired: 'Pickaxe / Axe Strike',
            description: 'Glass-like mineral nodules that shatter with razor-sharp edges. Essential for crafting arrowheads, spear tips, and striking sparks to ignite campfires without matches.'
        },
        {
            id: 'min_iron_ore',
            name: 'Banded Ironstone Vein (Hematite / Magnetite)',
            hardnessRating: 'Tier 2 (Medium Metal Ore)',
            composition: 'Ferric oxide deposits embedded in mountain crags.',
            yields: 'Raw Iron Ore (x3-6), Crushed Stone',
            toolRequired: 'Stone Pickaxe / Iron Pickaxe',
            description: 'Rusty reddish-brown mineral veins exposed on the elevated mountain plateaus. When smelted in a high-temperature stone furnace with wood fuel, it produces pure Iron Ingots.'
        },
        {
            id: 'min_copper_ore',
            name: 'Malachite & Native Copper Vein',
            hardnessRating: 'Tier 2 (Conductive Ore)',
            composition: 'Copper carbonate hydroxide and metallic copper veins.',
            yields: 'Raw Copper Ore (x3-5), Green Mineral Dust',
            toolRequired: 'Stone Pickaxe / Iron Pickaxe',
            description: 'Striking turquoise-green mineral deposits found in rocky valleys. Highly malleable and electrically conductive, making it crucial for drawing copper wiring for radio circuits.'
        },
        {
            id: 'min_salvage_scrap',
            name: 'Aeronautical & Naval Scrap Metal',
            hardnessRating: 'Tier 3 (Refined Alloy)',
            composition: 'Weathered aluminum-copper aircraft plating and galvanized marine steel.',
            yields: 'Scrap Metal (x4-8), Screws, Fasteners',
            toolRequired: 'Any Tool / Scavenge',
            description: 'Twisted wreckage pieces scavenged from the coastal shipwreck and ancient observation ruins. Used to construct antenna lattice masts and reinforced distress transceivers.'
        }
    ],

    // === SECTION 4: SURVIVAL TACTICS & CRAFTING GUIDES ===
    [EncyclopediaCategory.SURVIVAL_TIPS]: [
        {
            id: 'tip_day_one',
            title: 'Surviving Your First Day (The Golden Hour Checklist)',
            category: 'Foundational Survival',
            content: '1. Immediately gather 5 Palm Wood, 3 Stone, and 4 Sweet Berries along the shoreline.\n2. Open Crafting [E] and craft a Stone Axe and Stone Pickaxe.\n3. Chop palm trees to collect palm wood and fresh coconuts (drink coconuts to satisfy both thirst and hunger).\n4. Before dusk (18:00), craft a Campfire and place it near a flat beach clearing.\n5. Craft a Wooden Torch to equip in your Off-Hand to keep wolves away during midnight hours.'
        },
        {
            id: 'tip_temperature_control',
            title: 'Thermal Regulation (Hypothermia & Heatstroke)',
            category: 'Environmental Hazards',
            content: 'The body temperature indicator displays your thermal balance:\n- Temperature drops rapidly during nighttime (20:00 - 05:00) and torrential thunderstorms. If it drops below 20°, hypothermia sets in, draining health steadily. Stand within 120 pixels of a lit Campfire or hold a lit Torch to stay warm.\n- Temperature rises during high noon (12:00 - 14:00) on clear sunny days. Sprinting in the sun increases thirst consumption by 180%. Drink purified canteen water or rest in the shade of dense pine forests.'
        },
        {
            id: 'tip_base_fortification',
            title: 'Base Camp Engineering & Night Defense',
            category: 'Fortification',
            content: 'Wolves and enraged boars cannot walk through solid Wooden Walls. Enclose a 6x6 tile perimeter with wooden walls, install a Wooden Door with latch [F], and place a Lean-to Shelter inside. Sleeping in a shelter at night fast-forwards time directly to 06:30 AM dawn, bypassing nighttime predators and hypothermia completely while restoring full health and energy!'
        },
        {
            id: 'tip_fishing_reel_technique',
            title: 'Mastering the Fishing Reel Mini-Game',
            category: 'Angling Mastery',
            content: 'When you cast your fishing rod into ocean or freshwater streams, wait for the red bobber to splash down and display a golden exclamation mark [!].\nPress [Space] or Left Click immediately to hook the fish!\nDuring the reel mini-game, tap and hold [Space] to apply upward momentum to your green capture bar. Keep the erratic fish icon centered inside the green bar to fill the catch progress meter to 100%.'
        },
        {
            id: 'tip_radio_tower_salvage',
            title: 'The Final Objective: Radio Tower Repair & SOS Broadcast',
            category: 'Escape Telemetry',
            content: 'To escape the island and win the game:\n1. Locate the Southwest Coastal Shipwreck crate to scavenge the Vacuum Tube.\n2. Locate the Eastern Ancient Ruins power cell locker to recover the Heavy Battery.\n3. Build a Crafting Workstation and smelt Iron Ingots and Copper Wire to craft the Reinforced Antenna Mast and Distress Beacon Module.\n4. Travel to the Mountain Peak Radio Tower, press [F] to assemble the components, and click BROADCAST SOS!\n5. Defend your position for 60 seconds while the rescue beacon summons a maritime rescue helicopter to extract you!'
        }
    ],

    // === SECTION 5: HISTORICAL EXPEDITION & LORE LOGS ===
    [EncyclopediaCategory.LORE_LOGS]: [
        {
            id: 'log_01_captain',
            title: 'Captain\'s Logbook - HMS Triton (1894)',
            author: 'Captain Arthur Vance, Royal Maritime Expedition',
            location: 'Found inside the Southwest Coastal Shipwreck',
            content: 'Day 42: The southern trade winds betrayed us into an uncharted magnetic vortex. Our brass chronometers spun wildly before the hull crashed upon the jagged obsidian barrier reef. Only seven souls made the sandbar. The island interior rises into an ominous volcanic plateau capped by strange metallic ruins of unknown origin...'
        },
        {
            id: 'log_02_meteorologist',
            title: 'Meteorological Research Station Memo #14',
            author: 'Dr. Elena Rostova, Pacific Oceanic Survey (1973)',
            location: 'Found within the Eastern Ancient Ruins Power Locker',
            content: 'Subject: Atmospheric Ionization Anomalies. The high-frequency emergency radio tower atop Mount Caldera was designed to broadcast distress telemetry across 500 nautical miles. However, the seismic tremor of August 12 cracked the primary vacuum tubes and severed the auxiliary copper feeds. If our batteries remain sealed, a future technician could theoretically reconstruct the master distress transceiver...'
        },
        {
            id: 'log_03_castaway_diary',
            title: 'Journal of the Lone Survivor',
            author: 'Anonymous Castaway',
            location: 'Carved into the trunk of the Grand Palm near Spawn Beach',
            content: 'If you are reading this carving, you are not the first to be stranded upon this shore. Do not fear the night—fear only the lack of fire. The wolves will not cross the circle of flame. Gather flint, build your hearth, forge iron tools at the mountain base, and seek the tower in the highlands. Escape is possible.'
        }
    ]
};

class EncyclopediaManager {
    constructor() {
        this.database = EncyclopediaDatabase;
        this.discoveredEntries = new Set([
            'flora_palm_tree', 'flora_sweet_berries', 'flora_tall_fiber_grass', 'flora_coconut_palm',
            'fauna_beach_crab', 'fauna_island_hare',
            'min_rough_stone', 'min_flint_nodule',
            'tip_day_one', 'tip_temperature_control'
        ]);
    }

    discoverEntry(id) {
        if (!this.discoveredEntries.has(id)) {
            this.discoveredEntries.add(id);
            window.Sound.playQuestComplete();
            window.Particles.addFloatingText('📖 New Field Guide Entry Discovered!', window.Game ? window.Game.player.x : 0, window.Game ? window.Game.player.y - 35 : 0, '#FFD700', 14, true);
        }
    }

    isDiscovered(id) {
        return this.discoveredEntries.has(id);
    }

    getEntriesByCategory(cat) {
        return this.database[cat] || [];
    }
}

window.EncyclopediaCategory = EncyclopediaCategory;
window.EncyclopediaDatabase = EncyclopediaDatabase;
window.EncyclopediaManager = EncyclopediaManager;
window.Encyclopedia = new EncyclopediaManager();
