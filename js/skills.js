/**
 * Comprehensive RPG Skill Tree, Mastery Perks & Leveling System
 * Features 7 distinct skill disciplines with 105+ unique unlockable perks.
 */

const SkillCategory = {
    WOODCUTTING: 'woodcutting',
    MINING: 'mining',
    HUNTING: 'hunting',
    ANGLING: 'angling',
    SURVIVALISM: 'survivalism',
    ENGINEERING: 'engineering',
    RADIO_LOGISTICS: 'radio_logistics'
};

const SkillDatabase = {
    [SkillCategory.WOODCUTTING]: {
        name: 'Woodcutting & Forestry',
        icon: '🪓',
        description: 'Mastery of felling trees, timber processing, and harvesting rare flora.',
        maxLevel: 20,
        perks: [
            {
                id: 'wood_speed_1',
                name: 'Lumberjack Swiftness I',
                levelReq: 1,
                cost: 1,
                description: 'Increases woodchopping attack speed by 15%.',
                effect: { chopSpeed: 0.15 }
            },
            {
                id: 'wood_yield_1',
                name: 'Clean Cut I',
                levelReq: 2,
                cost: 1,
                description: '20% chance to yield +1 bonus Palm Wood when chopping trees.',
                effect: { bonusWoodChance: 0.20 }
            },
            {
                id: 'coconut_gatherer',
                name: 'Coconut Whisperer',
                levelReq: 3,
                cost: 1,
                description: 'Increases fresh coconut drop rate from palm trees by 40%.',
                effect: { coconutBonusChance: 0.40 }
            },
            {
                id: 'hardwood_refinement',
                name: 'Heartwood Harvester',
                levelReq: 4,
                cost: 2,
                description: 'Pine trees have a 30% chance to drop pristine resin and extra hardwood.',
                effect: { resinDrop: true, hardwoodBonus: 0.30 }
            },
            {
                id: 'axe_durability_1',
                name: 'Edge Retention I',
                levelReq: 5,
                cost: 1,
                description: 'Axes lose durability 25% slower when felling trees.',
                effect: { axeDurabilityPreserve: 0.25 }
            },
            {
                id: 'wood_speed_2',
                name: 'Lumberjack Swiftness II',
                levelReq: 6,
                cost: 2,
                description: 'Increases woodchopping speed by an additional 20%.',
                effect: { chopSpeed: 0.20 }
            },
            {
                id: 'forest_stamina',
                name: 'Woodsman Constitution',
                levelReq: 7,
                cost: 2,
                description: 'Reduces energy cost of swinging axes by 35%.',
                effect: { chopEnergyCost: -0.35 }
            },
            {
                id: 'splinter_burst',
                name: 'Splinter Blast',
                levelReq: 8,
                cost: 2,
                description: 'Chopping trees deals 10 splash damage to nearby hostile predators.',
                effect: { chopSplashDamage: 10 }
            },
            {
                id: 'vine_harvester',
                name: 'Botanical Foraging',
                levelReq: 9,
                cost: 2,
                description: 'Harvesting trees yields +2 bonus Plant Fibers and medical vines.',
                effect: { bonusFiber: 2 }
            },
            {
                id: 'tree_feller_master',
                name: 'Timber Mastery',
                levelReq: 10,
                cost: 3,
                description: 'Critical tree strikes deal 3x damage and double all resource drops.',
                effect: { treeCritMultiplier: 3.0 }
            },
            {
                id: 'bark_armor',
                name: 'Bark Shielding',
                levelReq: 11,
                cost: 2,
                description: 'While chopping in forests, your natural defense is increased by 15%.',
                effect: { forestArmor: 0.15 }
            },
            {
                id: 'ancient_timber',
                name: 'Ancient Arboretum',
                levelReq: 12,
                cost: 2,
                description: 'Felled trees have a 15% chance to drop ancient fossilized amber.',
                effect: { amberDropChance: 0.15 }
            },
            {
                id: 'leaf_weaver',
                name: 'Palm Weaving Master',
                levelReq: 13,
                cost: 2,
                description: 'Palm fronds harvested yield double quantity for roofing and beds.',
                effect: { doubleLeaves: true }
            },
            {
                id: 'forest_runner',
                name: 'Canopy Stride',
                levelReq: 14,
                cost: 3,
                description: 'Increases movement speed through dense pine forests by 20%.',
                effect: { forestSpeedBonus: 0.20 }
            },
            {
                id: 'grand_lumberjack',
                name: 'Grand Forest Sovereign',
                levelReq: 15,
                cost: 4,
                description: 'Trees can be felled in half the strikes and regenerate 50% faster.',
                effect: { instakillChance: 0.20, treeRegenSpeed: 0.50 }
            }
        ]
    },

    [SkillCategory.MINING]: {
        name: 'Mining & Metallurgy',
        icon: '⛏️',
        description: 'Excavation of ores, flint, gemstones, and refining molten ingots.',
        maxLevel: 20,
        perks: [
            {
                id: 'mine_speed_1',
                name: 'Prospector Strike I',
                levelReq: 1,
                cost: 1,
                description: 'Increases pickaxe mining speed by 15%.',
                effect: { mineSpeed: 0.15 }
            },
            {
                id: 'stone_yield_1',
                name: 'Quarryman Yield I',
                levelReq: 2,
                cost: 1,
                description: '25% chance to obtain +2 bonus Stone from all boulders.',
                effect: { bonusStoneChance: 0.25 }
            },
            {
                id: 'flint_extractor',
                name: 'Sharp Flaking',
                levelReq: 3,
                cost: 1,
                description: 'Doubles flint yield when mining stone boulders and flint outcrops.',
                effect: { doubleFlint: true }
            },
            {
                id: 'iron_affinity',
                name: 'Iron Seeker',
                levelReq: 4,
                cost: 2,
                description: 'Iron ore veins drop 35% more raw iron ore.',
                effect: { ironYieldBonus: 0.35 }
            },
            {
                id: 'pick_durability_1',
                name: 'Tempered Steel I',
                levelReq: 5,
                cost: 1,
                description: 'Pickaxes lose durability 30% slower.',
                effect: { pickDurabilityPreserve: 0.30 }
            },
            {
                id: 'copper_refinement',
                name: 'Copper Conductor',
                levelReq: 6,
                cost: 2,
                description: 'Smelting copper in furnaces yields +1 bonus wire per batch.',
                effect: { bonusCopperWire: 1 }
            },
            {
                id: 'deep_vein_miner',
                name: 'Deep Crust Extraction',
                levelReq: 7,
                cost: 2,
                description: 'Mountain boulders have a 10% chance to drop precious gold coins and quartz.',
                effect: { gemDropChance: 0.10 }
            },
            {
                id: 'mining_stamina',
                name: 'Enduring Pick',
                levelReq: 8,
                cost: 2,
                description: 'Reduces energy consumed when mining rocks by 40%.',
                effect: { mineEnergyCost: -0.40 }
            },
            {
                id: 'smelt_mastery_1',
                name: 'Bellows Efficiency',
                levelReq: 9,
                cost: 2,
                description: 'Smelting ingots requires 50% less wood fuel.',
                effect: { fuelEfficiency: 0.50 }
            },
            {
                id: 'shatter_strike',
                name: 'Shatterpoint Resonance',
                levelReq: 10,
                cost: 3,
                description: 'Critical pickaxe strikes deal 3.5x mining damage and cause boulders to explode.',
                effect: { rockExplodeChance: 0.25 }
            },
            {
                id: 'scrap_scavenger',
                name: 'Metal Recycler',
                levelReq: 11,
                cost: 2,
                description: 'Shipwreck debris yields double scrap metal.',
                effect: { doubleScrap: true }
            },
            {
                id: 'titanium_prospector',
                name: 'Rare Mineralogy',
                levelReq: 12,
                cost: 3,
                description: 'Allows mining rare volcanic obsidian nodes from mountain craters.',
                effect: { obsidianAccess: true }
            },
            {
                id: 'furnace_heat',
                name: 'Blast Furnace Heat',
                levelReq: 13,
                cost: 3,
                description: 'Furnaces smelt ores instantaneously without wait timers.',
                effect: { instantSmelt: true }
            },
            {
                id: 'mountain_climber',
                name: 'Highland Stride',
                levelReq: 14,
                cost: 3,
                description: 'Increases movement speed in mountain highland terrain by 25%.',
                effect: { mountainSpeedBonus: 0.25 }
            },
            {
                id: 'master_smith',
                name: 'Grandmaster Metallurgist',
                levelReq: 15,
                cost: 4,
                description: 'All crafted metal tools and weapons gain +50% durability and +30% attack power.',
                effect: { metalGearBonus: 0.30 }
            }
        ]
    },

    [SkillCategory.HUNTING]: {
        name: 'Hunting & Marksmanship',
        icon: '🏹',
        description: 'Tracking prey, bow precision, weapon combat prowess, and predator defense.',
        maxLevel: 20,
        perks: [
            {
                id: 'melee_damage_1',
                name: 'Warrior Brawn I',
                levelReq: 1,
                cost: 1,
                description: 'Increases all melee weapon attack damage by 15%.',
                effect: { meleeDamage: 0.15 }
            },
            {
                id: 'bow_range_1',
                name: 'Eagle Eye I',
                levelReq: 2,
                cost: 1,
                description: 'Increases bow arrow velocity and range by 25%.',
                effect: { arrowSpeed: 0.25 }
            },
            {
                id: 'hide_skinner',
                name: 'Expert Skinner',
                levelReq: 3,
                cost: 1,
                description: 'Wild boars and hares drop +2 extra leather hides.',
                effect: { bonusLeather: 2 }
            },
            {
                id: 'crit_strike_1',
                name: 'Lethal Precision I',
                levelReq: 4,
                cost: 2,
                description: 'Increases critical strike chance by 15% (deals 200% damage).',
                effect: { critChance: 0.15 }
            },
            {
                id: 'wolf_slayer',
                name: 'Apex Predator',
                levelReq: 5,
                cost: 2,
                description: 'Deals 35% bonus damage against wolves and sharks.',
                effect: { predatorDamageBonus: 0.35 }
            },
            {
                id: 'arrow_recovery',
                name: 'Arrow Retrieval',
                levelReq: 6,
                cost: 2,
                description: 'Fired arrows have a 50% chance to be recovered from fallen beasts.',
                effect: { arrowRecovery: 0.50 }
            },
            {
                id: 'combat_roll',
                name: 'Evasive Nimbleness',
                levelReq: 7,
                cost: 2,
                description: 'Sprint speed increased by 15% while in combat.',
                effect: { combatSprintBonus: 0.15 }
            },
            {
                id: 'spear_thrust',
                name: 'Spear Mastery',
                levelReq: 8,
                cost: 2,
                description: 'Spear attacks inflict bleeding on enemies, dealing 12 damage over 4 seconds.',
                effect: { bleedDamage: 12 }
            },
            {
                id: 'bloodlust',
                name: 'Hunter Adrenaline',
                levelReq: 9,
                cost: 3,
                description: 'Defeating an enemy restores 15 Health and 25 Energy.',
                effect: { killHeal: 15, killEnergy: 25 }
            },
            {
                id: 'piercing_arrow',
                name: 'Piercing Arrowhead',
                levelReq: 10,
                cost: 3,
                description: 'Arrows pierce through multiple enemies and inflict knockback.',
                effect: { arrowPierce: true }
            },
            {
                id: 'beast_tamer',
                name: 'Predator Camouflage',
                levelReq: 11,
                cost: 2,
                description: 'Hostile wolves will not detect you unless you come within 80 pixels.',
                effect: { stealthBonus: 0.50 }
            },
            {
                id: 'shark_hunter',
                name: 'Harpoon Mastery',
                levelReq: 12,
                cost: 3,
                description: 'Increases combat damage by 50% when fighting aquatic creatures.',
                effect: { waterCombatBonus: 0.50 }
            },
            {
                id: 'rapid_draw',
                name: 'Quickdraw Archery',
                levelReq: 13,
                cost: 3,
                description: 'Reduces bow cooldown by 40%, enabling rapid arrow firing.',
                effect: { bowCooldown: -0.40 }
            },
            {
                id: 'executioner',
                name: 'Death Strike',
                levelReq: 14,
                cost: 3,
                description: 'Attacks against enemies below 30% HP deal triple damage.',
                effect: { executeDamage: 3.0 }
            },
            {
                id: 'grandmaster_hunter',
                name: 'Lord of the Wild',
                levelReq: 15,
                cost: 4,
                description: 'All weapon damage increased by 40%, and wild beasts will flee on sight.',
                effect: { weaponMasteryBonus: 0.40 }
            }
        ]
    },

    [SkillCategory.ANGLING]: {
        name: 'Angling & Marine Biology',
        icon: '🎣',
        description: 'Coastal fishing prowess, rare maritime catches, and tidal understanding.',
        maxLevel: 20,
        perks: [
            {
                id: 'fish_bite_1',
                name: 'Chumming Waters I',
                levelReq: 1,
                cost: 1,
                description: 'Fish bite onto the fishing bobber 25% faster.',
                effect: { biteSpeed: 0.25 }
            },
            {
                id: 'reel_bar_size_1',
                name: 'Steady Hands I',
                levelReq: 2,
                cost: 1,
                description: 'Increases the green reel capture bar size by 20%.',
                effect: { reelBarSize: 0.20 }
            },
            {
                id: 'crab_trapping',
                name: 'Crab Gatherer',
                levelReq: 3,
                cost: 1,
                description: 'Walking near beach crabs yields +1 bonus raw crab meat automatically.',
                effect: { autoCrabLoot: true }
            },
            {
                id: 'treasure_hook',
                name: 'Sunken Salvage',
                levelReq: 4,
                cost: 2,
                description: 'Fishing has a 15% chance to hook antique treasure shells or scrap metal.',
                effect: { treasureFishChance: 0.15 }
            },
            {
                id: 'reel_power_1',
                name: 'High-Tensile Line I',
                levelReq: 5,
                cost: 2,
                description: 'Catch progress fills 30% faster while fish is inside the green bar.',
                effect: { catchRate: 0.30 }
            },
            {
                id: 'rare_trout',
                name: 'Golden Trout Lure',
                levelReq: 6,
                cost: 2,
                description: 'Enables catching legendary Golden Trout that restores full health.',
                effect: { goldenTroutChance: 0.10 }
            },
            {
                id: 'line_snap_guard',
                name: 'Braided Line',
                levelReq: 7,
                cost: 2,
                description: 'Losing the fish from the bar drains catch progress 40% slower.',
                effect: { lossDampening: 0.40 }
            },
            {
                id: 'calm_seas',
                name: 'Tidal Rhythm',
                levelReq: 8,
                cost: 2,
                description: 'Fish move 25% less erratically during the reel mini-game.',
                effect: { fishCalmness: 0.25 }
            },
            {
                id: 'giant_bass',
                name: 'Deep Sea Angler',
                levelReq: 9,
                cost: 3,
                description: 'Allows catching Giant Sea Bass yielding 3x raw fish meat.',
                effect: { giantFishAccess: true }
            },
            {
                id: 'master_angler',
                name: 'Grand Fisherman',
                levelReq: 10,
                cost: 3,
                description: 'Fish hook instantaneously and green bar size is increased by 35%.',
                effect: { instantHook: true, reelBarSize: 0.35 }
            },
            {
                id: 'pearl_diver',
                name: 'Oyster Pearls',
                levelReq: 11,
                cost: 2,
                description: 'Harvesting sea shells has a 20% chance to yield shimmering pearls.',
                effect: { pearlChance: 0.20 }
            },
            {
                id: 'storm_fishing',
                name: 'Monsoon Angler',
                levelReq: 12,
                cost: 3,
                description: 'During rain and thunderstorms, all fish caught yield double items.',
                effect: { stormDoubleCatch: true }
            },
            {
                id: 'sushi_chef',
                name: 'Sashimi Master',
                levelReq: 13,
                cost: 3,
                description: 'Eating raw fish will never cause food poisoning and restores +15 Energy.',
                effect: { rawFishImmunity: true }
            },
            {
                id: 'harpooner',
                name: 'Ocean Hunter',
                levelReq: 14,
                cost: 3,
                description: 'Allows spearing fish directly from shallow waters without a rod.',
                effect: { spearFishing: true }
            },
            {
                id: 'leviathan_whisperer',
                name: 'Master of the Deep',
                levelReq: 15,
                cost: 4,
                description: 'Reel bar covers 60% of the gauge, making it impossible for fish to escape.',
                effect: { masterReelGauge: true }
            }
        ]
    },

    [SkillCategory.SURVIVALISM]: {
        name: 'Survivalism & Constitution',
        icon: '⛺',
        description: 'Metabolism endurance, poison immunity, climate tolerance, and nutrition.',
        maxLevel: 20,
        perks: [
            {
                id: 'metabolism_1',
                name: 'Slow Metabolism I',
                levelReq: 1,
                cost: 1,
                description: 'Hunger bar drains 20% slower over time.',
                effect: { hungerDrainReduction: 0.20 }
            },
            {
                id: 'hydration_1',
                name: 'Desert Camouflage I',
                levelReq: 2,
                cost: 1,
                description: 'Thirst bar drains 20% slower in daylight heat.',
                effect: { thirstDrainReduction: 0.20 }
            },
            {
                id: 'iron_stomach',
                name: 'Cast Iron Stomach',
                levelReq: 3,
                cost: 1,
                description: 'Eating raw meat has a 60% reduced chance of causing food poisoning.',
                effect: { poisonResist: 0.60 }
            },
            {
                id: 'marathon_runner',
                name: 'Island Sprinter',
                levelReq: 4,
                cost: 2,
                description: 'Sprinting consumes 35% less energy stamina.',
                effect: { sprintEnergyCost: -0.35 }
            },
            {
                id: 'thermal_coat',
                name: 'Thick Skin',
                levelReq: 5,
                cost: 2,
                description: 'Hypothermia temperature drops 50% slower during cold nights and storms.',
                effect: { coldResist: 0.50 }
            },
            {
                id: 'gourmand_cooking',
                name: 'Master Chef I',
                levelReq: 6,
                cost: 2,
                description: 'All cooked meals restore +30% more Health and Hunger.',
                effect: { foodBuffMultiplier: 1.30 }
            },
            {
                id: 'rapid_healing',
                name: 'Cellular Regeneration',
                levelReq: 7,
                cost: 2,
                description: 'Natural health regeneration when well-fed is doubled.',
                effect: { naturalRegenDouble: true }
            },
            {
                id: 'poison_immunity',
                name: 'Venom Neutralizer',
                levelReq: 8,
                cost: 3,
                description: 'Immune to all poison status effects from spoiled food and viper bites.',
                effect: { completePoisonImmunity: true }
            },
            {
                id: 'second_wind',
                name: 'Survivor Will',
                levelReq: 9,
                cost: 3,
                description: 'Surviving fatal damage once per day, immediately restoring 30 HP.',
                effect: { cheatDeath: true }
            },
            {
                id: 'max_vitality',
                name: 'Titan Constitution',
                levelReq: 10,
                cost: 3,
                description: 'Permanently increases Max Health and Max Energy by +50.',
                effect: { maxHpBonus: 50, maxEnergyBonus: 50 }
            },
            {
                id: 'sea_swimmer',
                name: 'Dolphin Stride',
                levelReq: 11,
                cost: 2,
                description: 'Increases ocean swimming speed by 50% with zero energy drain.',
                effect: { swimSpeedBonus: 0.50 }
            },
            {
                id: 'deep_sleep',
                name: 'Restorative Slumber',
                levelReq: 12,
                cost: 3,
                description: 'Sleeping in a shelter restores full health and grants a 2-hour speed boost.',
                effect: { sleepSpeedBuff: true }
            },
            {
                id: 'herbal_alchemist',
                name: 'Island Apothecary',
                levelReq: 13,
                cost: 3,
                description: 'Linen bandages restore 70 Health instead of 35.',
                effect: { doubleBandageHeal: true }
            },
            {
                id: 'immune_system',
                name: 'Unbreakable Body',
                levelReq: 14,
                cost: 3,
                description: 'Immune to all hypothermia and heatstroke status penalties.',
                effect: { completeWeatherImmunity: true }
            },
            {
                id: 'immortal_castaway',
                name: 'Apex Survivor',
                levelReq: 15,
                cost: 4,
                description: 'Hunger and thirst drain at 1/4 rate, and energy recovers twice as fast.',
                effect: { apexSurvival: true }
            }
        ]
    },

    [SkillCategory.ENGINEERING]: {
        name: 'Base Engineering & Crafting',
        icon: '🔨',
        description: 'Construction of reinforced bases, automated traps, and advanced machinery.',
        maxLevel: 20,
        perks: [
            {
                id: 'craft_speed_1',
                name: 'Handyman I',
                levelReq: 1,
                cost: 1,
                description: 'Crafting items takes zero delay.',
                effect: { instantCraft: true }
            },
            {
                id: 'wall_reinforce',
                name: 'Fortified Timber',
                levelReq: 2,
                cost: 1,
                description: 'Placed wooden walls have +100% more hit points.',
                effect: { wallHpBonus: 1.0 }
            },
            {
                id: 'chest_expansion',
                name: 'Deep Storage',
                levelReq: 3,
                cost: 1,
                description: 'Placed storage chests have 6 additional storage slots (24 total).',
                effect: { chestSlotsBonus: 6 }
            },
            {
                id: 'rain_catch_2',
                name: 'Hydraulic Collector',
                levelReq: 4,
                cost: 2,
                description: 'Rain collectors fill with fresh water twice as fast during storms.',
                effect: { rainCollectSpeed: 2.0 }
            },
            {
                id: 'craft_discount',
                name: 'Frugal Builder',
                levelReq: 5,
                cost: 2,
                description: 'All building structures cost 25% fewer wood and stone materials.',
                effect: { buildDiscount: 0.25 }
            },
            {
                id: 'spike_trap_tech',
                name: 'Perimeter Defense',
                levelReq: 6,
                cost: 2,
                description: 'Allows crafting lethal defensive spike traps around base perimeter.',
                effect: { spikeTrapUnlock: true }
            },
            {
                id: 'furnace_efficiency',
                name: 'Thermal Insulation',
                levelReq: 7,
                cost: 2,
                description: 'Smelting furnaces yield double ingots per ore unit.',
                effect: { doubleIngots: true }
            },
            {
                id: 'torch_glow',
                name: 'Beacon Lanterns',
                levelReq: 8,
                cost: 2,
                description: 'Placed campfires and held torches illuminate twice the radius.',
                effect: { lightRadiusMultiplier: 2.0 }
            },
            {
                id: 'auto_repair',
                name: 'Architectural Care',
                levelReq: 9,
                cost: 3,
                description: 'Damaged player structures automatically repair themselves over time.',
                effect: { autoRepairStructures: true }
            },
            {
                id: 'master_fortress',
                name: 'Castaway Citadel',
                levelReq: 10,
                cost: 3,
                description: 'Structures inside your base camp grant +25% defense to the player.',
                effect: { baseCampDefense: 0.25 }
            },
            {
                id: 'solar_still',
                name: 'Solar Desalinator',
                levelReq: 11,
                cost: 2,
                description: 'Rain collectors generate fresh drinking water from sunlight on clear days.',
                effect: { solarWaterGeneration: true }
            },
            {
                id: 'reinforced_doors',
                name: 'Ironclad Portcullis',
                levelReq: 12,
                cost: 3,
                description: 'Wooden doors can be reinforced with iron bars to withstand any beast.',
                effect: { indestructibleDoors: true }
            },
            {
                id: 'recycling_bench',
                name: 'Dismantling Anvil',
                levelReq: 13,
                cost: 3,
                description: 'Deconstructing old tools or buildings refunds 100% of material costs.',
                effect: { fullDeconstructRefund: true }
            },
            {
                id: 'workshop_aura',
                name: 'Master Craftsman Aura',
                levelReq: 14,
                cost: 3,
                description: 'Standing near a Crafting Workstation grants +20% movement speed.',
                effect: { workstationSpeedAura: 0.20 }
            },
            {
                id: 'grand_architect',
                name: 'Grand Architect',
                levelReq: 15,
                cost: 4,
                description: 'Unlocks advanced titanium reinforced structures and automated defenses.',
                effect: { grandArchitecture: true }
            }
        ]
    },

    [SkillCategory.RADIO_LOGISTICS]: {
        name: 'Radio Electronics & Signals',
        icon: '📡',
        description: 'Tuning emergency transceivers, antenna amplification, and rescue telemetry.',
        maxLevel: 20,
        perks: [
            {
                id: 'signal_boost_1',
                name: 'Low-Frequency Tuning I',
                levelReq: 1,
                cost: 1,
                description: 'Radio Tower detection radar range on the minimap increased by 50%.',
                effect: { radioRadarRange: 0.50 }
            },
            {
                id: 'battery_efficiency',
                name: 'Electrolyte Preservation',
                levelReq: 2,
                cost: 1,
                description: 'The Heavy Battery charges 30% faster in the ancient ruins.',
                effect: { batteryChargeSpeed: 0.30 }
            },
            {
                id: 'tube_repair',
                name: 'Filament Welder',
                levelReq: 3,
                cost: 1,
                description: 'Vacuum tube installation requires 50% fewer scrap parts.',
                effect: { vacuumTubeDiscount: true }
            },
            {
                id: 'antenna_gain',
                name: 'High-Gain Resonance',
                levelReq: 4,
                cost: 2,
                description: 'Reinforced Antenna Mast reaches 200km distress broadcast radius.',
                effect: { antennaGainBonus: 0.40 }
            },
            {
                id: 'beacon_countdown_1',
                name: 'Optimized Distress Call',
                levelReq: 5,
                cost: 2,
                description: 'Reduces the SOS rescue arrival countdown from 60s to 45s.',
                effect: { rescueTimerReduction: 15 }
            },
            {
                id: 'morse_clarity',
                name: 'Static Filter Core',
                levelReq: 6,
                cost: 2,
                description: 'Distress beacon broadcasts on an encrypted military channel.',
                effect: { encryptedFrequency: true }
            },
            {
                id: 'salvage_radar',
                name: 'Scavenger Magnetometer',
                levelReq: 7,
                cost: 2,
                description: 'Minimap highlights missing radio component locations with pulsing pins.',
                effect: { componentMapPointers: true }
            },
            {
                id: 'solar_repeater',
                name: 'Solar Relay Booster',
                levelReq: 8,
                cost: 2,
                description: 'Radio Tower operates autonomously even if stormy weather strikes.',
                effect: { allWeatherRadio: true }
            },
            {
                id: 'flare_signaling',
                name: 'Phosphor Distress Flares',
                levelReq: 9,
                cost: 3,
                description: 'Firing a flare illuminates the entire map for 30 seconds.',
                effect: { flareIllumination: true }
            },
            {
                id: 'rapid_rescue',
                name: 'Emergency Air-Sea Rescue Protocol',
                levelReq: 10,
                cost: 3,
                description: 'Reduces rescue helicopter arrival timer to just 30 seconds.',
                effect: { rescueTimerReduction: 30 }
            },
            {
                id: 'radar_telemetry',
                name: 'Live Satellite Uplink',
                levelReq: 11,
                cost: 2,
                description: 'Reveals all unexplored fog of war on the minimap permanently.',
                effect: { revealEntireMap: true }
            },
            {
                id: 'shortwave_audio',
                name: 'Transoceanic Receiver',
                levelReq: 12,
                cost: 3,
                description: 'Allows listening to maritime shipping forecasts and storm warnings.',
                effect: { weatherForecastAccess: true }
            },
            {
                id: 'transceiver_overclock',
                name: 'Megawatt Transmitter',
                levelReq: 13,
                cost: 3,
                description: 'Pulsing radio waves stun all nearby hostile beasts during the rescue call.',
                effect: { radioStunWaves: true }
            },
            {
                id: 'gps_coordinate_lock',
                name: 'Precision Geo-Locator',
                levelReq: 14,
                cost: 3,
                description: 'Guarantees the rescue helicopter lands directly on your current position.',
                effect: { instantPickup: true }
            },
            {
                id: 'telecom_legend',
                name: 'Master of Communications',
                levelReq: 15,
                cost: 4,
                description: 'Enables establishing an eternal satellite link for infinite sandbox survival.',
                effect: { eternalSatelliteLink: true }
            }
        ]
    }
};

class SkillManager {
    constructor() {
        this.levels = {
            [SkillCategory.WOODCUTTING]: 1,
            [SkillCategory.MINING]: 1,
            [SkillCategory.HUNTING]: 1,
            [SkillCategory.ANGLING]: 1,
            [SkillCategory.SURVIVALISM]: 1,
            [SkillCategory.ENGINEERING]: 1,
            [SkillCategory.RADIO_LOGISTICS]: 1
        };

        this.experience = {
            [SkillCategory.WOODCUTTING]: 0,
            [SkillCategory.MINING]: 0,
            [SkillCategory.HUNTING]: 0,
            [SkillCategory.ANGLING]: 0,
            [SkillCategory.SURVIVALISM]: 0,
            [SkillCategory.ENGINEERING]: 0,
            [SkillCategory.RADIO_LOGISTICS]: 0
        };

        this.skillPoints = 3; // Starter points
        this.unlockedPerks = new Set();
    }

    addExperience(category, amount) {
        if (!this.experience[category] && this.experience[category] !== 0) return;
        this.experience[category] += amount;

        const currentLvl = this.levels[category];
        const nextLvlExp = this.getExpForLevel(currentLvl + 1);

        if (this.experience[category] >= nextLvlExp && currentLvl < 20) {
            this.levels[category]++;
            this.skillPoints += 2;
            window.Sound.playQuestComplete();
            window.Particles.addSparkles(window.Game.player.x, window.Game.player.y, 20);
            window.Particles.addFloatingText(`⭐ ${SkillDatabase[category].name} Level ${this.levels[category]}! (+2 Skill Points)`, window.Game.player.x, window.Game.player.y - 45, '#FFD700', 16, true);
        }
    }

    getExpForLevel(lvl) {
        return Math.floor(100 * Math.pow(1.35, lvl - 1));
    }

    unlockPerk(perkId) {
        let targetPerk = null;
        let targetCat = null;

        for (const cat in SkillDatabase) {
            const perk = SkillDatabase[cat].perks.find(p => p.id === perkId);
            if (perk) {
                targetPerk = perk;
                targetCat = cat;
                break;
            }
        }

        if (!targetPerk) return false;
        if (this.unlockedPerks.has(perkId)) return false;
        if (this.levels[targetCat] < targetPerk.levelReq) return false;
        if (this.skillPoints < targetPerk.cost) return false;

        this.skillPoints -= targetPerk.cost;
        this.unlockedPerks.add(perkId);
        window.Sound.playCraft();
        window.Particles.addFloatingText(`✨ Unlocked Perk: ${targetPerk.name}!`, window.Game.player.x, window.Game.player.y - 30, '#00FFCC', 16, true);
        return true;
    }

    hasPerk(perkId) {
        return this.unlockedPerks.has(perkId);
    }
}

window.SkillCategory = SkillCategory;
window.SkillDatabase = SkillDatabase;
window.SkillManager = SkillManager;
window.Skills = new SkillManager();
