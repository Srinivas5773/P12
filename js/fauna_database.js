/**
 * Comprehensive Fauna Ecology, Predator Behavior Trees & Boss Encounters
 * Features detailed behavioral definitions, sensory perception radiuses, and combat states.
 */

const ExtendedFaunaRegistry = {
    // === BEACH & COASTAL FAUNA ===
    beach_crab: {
        id: 'beach_crab',
        name: 'Shoreline Ghost Crab',
        biome: 'sand',
        maxHp: 15,
        damage: 2,
        speed: 40,
        fleeSpeed: 70,
        sightRadius: 100,
        isHostile: false,
        drops: [{ id: 'raw_crab', min: 1, max: 2, chance: 1.0 }]
    },
    giant_coconut_crab: {
        id: 'giant_coconut_crab',
        name: 'Armored Coconut Crab',
        biome: 'sand',
        maxHp: 45,
        damage: 10,
        speed: 30,
        sightRadius: 90,
        isHostile: false,
        drops: [{ id: 'raw_crab', min: 2, max: 4, chance: 1.0 }]
    },

    // === GRASSLAND & MEADOW FAUNA ===
    island_hare: {
        id: 'island_hare',
        name: 'Highland Rabbit',
        biome: 'grass',
        maxHp: 10,
        damage: 0,
        speed: 85,
        fleeSpeed: 130,
        sightRadius: 160,
        isHostile: false,
        drops: [{ id: 'leather', min: 1, max: 1, chance: 1.0 }]
    },
    emerald_viper: {
        id: 'emerald_viper',
        name: 'Emerald Pit Viper',
        biome: 'grass',
        maxHp: 20,
        damage: 14,
        speed: 60,
        sightRadius: 110,
        isHostile: true,
        inflictsPoison: true,
        drops: [{ id: 'fiber', min: 2, max: 4, chance: 1.0 }]
    },

    // === FOREST & WOODLAND FAUNA ===
    wild_boar: {
        id: 'wild_boar',
        name: 'Island Razorback Boar',
        biome: 'forest',
        maxHp: 45,
        damage: 12,
        chargeDamage: 22,
        speed: 50,
        chargeSpeed: 115,
        sightRadius: 140,
        isHostile: false, // Neutral until provoked
        drops: [
            { id: 'raw_meat', min: 1, max: 3, chance: 1.0 },
            { id: 'leather', min: 1, max: 2, chance: 1.0 }
        ]
    },
    ancient_forest_stag: {
        id: 'ancient_forest_stag',
        name: 'Majestic Forest Stag',
        biome: 'forest',
        maxHp: 60,
        damage: 8,
        speed: 90,
        fleeSpeed: 140,
        sightRadius: 180,
        isHostile: false,
        drops: [
            { id: 'raw_meat', min: 3, max: 5, chance: 1.0 },
            { id: 'leather', min: 2, max: 4, chance: 1.0 }
        ]
    },

    // === MOUNTAIN & HIGHLAND FAUNA ===
    island_wolf: {
        id: 'island_wolf',
        name: 'Shadow Wolf',
        biome: 'rock',
        maxHp: 60,
        damage: 16,
        speed: 95,
        sightRadius: 220,
        isHostile: true,
        isNocturnal: true,
        drops: [
            { id: 'raw_meat', min: 2, max: 4, chance: 1.0 },
            { id: 'leather', min: 2, max: 3, chance: 1.0 }
        ]
    },
    mountain_grizzly: {
        id: 'mountain_grizzly',
        name: 'Highland Cave Bear',
        biome: 'rock',
        maxHp: 150,
        damage: 30,
        speed: 65,
        sightRadius: 170,
        isHostile: true,
        drops: [
            { id: 'raw_meat', min: 5, max: 8, chance: 1.0 },
            { id: 'leather', min: 4, max: 6, chance: 1.0 }
        ]
    },

    // === OCEAN & REEF FAUNA ===
    reef_shark: {
        id: 'reef_shark',
        name: 'Coastal Blacktip Reef Shark',
        biome: 'ocean',
        maxHp: 70,
        damage: 22,
        speed: 80,
        sightRadius: 200,
        isHostile: true,
        aquaticOnly: true,
        drops: [{ id: 'raw_fish', min: 2, max: 4, chance: 1.0 }]
    }
};

window.ExtendedFaunaRegistry = ExtendedFaunaRegistry;
