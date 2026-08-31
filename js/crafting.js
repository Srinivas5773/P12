/**
 * Crafting Recipes & Workshop Engine
 */

const RecipeCategory = {
    BASIC: 'basic',
    TOOLS: 'tools',
    WEAPONS: 'weapons',
    STRUCTURES: 'structures',
    SMELTING: 'smelting',
    ESCAPE: 'escape'
};

const CraftingRecipes = [
    // === BASIC SURVIVAL ===
    {
        id: 'stone_axe',
        name: 'Stone Axe',
        category: RecipeCategory.TOOLS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 3 },
            { id: 'stone', count: 2 },
            { id: 'fiber', count: 2 }
        ],
        output: { id: 'stone_axe', count: 1 },
        description: 'Crucial for harvesting palm wood and pine trees quickly.'
    },
    {
        id: 'stone_pickaxe',
        name: 'Stone Pickaxe',
        category: RecipeCategory.TOOLS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 3 },
            { id: 'stone', count: 3 },
            { id: 'fiber', count: 2 }
        ],
        output: { id: 'stone_pickaxe', count: 1 },
        description: 'Mines stone boulders, flint nodes, and mineral veins.'
    },
    {
        id: 'torch',
        name: 'Wooden Torch',
        category: RecipeCategory.BASIC,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 1 },
            { id: 'fiber', count: 2 }
        ],
        output: { id: 'torch', count: 1 },
        description: 'Illuminates the dark night and provides gentle warmth.'
    },
    {
        id: 'campfire',
        name: 'Campfire',
        category: RecipeCategory.BASIC,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 4 },
            { id: 'stone', count: 4 },
            { id: 'flint', count: 1 }
        ],
        output: { id: 'campfire', count: 1 },
        description: 'Cooks raw meats and keeps wild nocturnal predators at bay.'
    },
    {
        id: 'shelter',
        name: 'Lean-to Shelter',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 6 },
            { id: 'palm_leaf', count: 4 },
            { id: 'fiber', count: 4 }
        ],
        output: { id: 'shelter', count: 1 },
        description: 'Sleep here to safely pass the night and replenish energy.'
    },
    {
        id: 'bandage',
        name: 'Linen Bandage',
        category: RecipeCategory.BASIC,
        requiresWorkstation: false,
        ingredients: [
            { id: 'fiber', count: 4 }
        ],
        output: { id: 'bandage', count: 2 },
        description: 'Quickly patches wounds and restores 35 Health.'
    },

    // === TOOLS & ANGLING ===
    {
        id: 'fishing_rod',
        name: 'Fishing Rod',
        category: RecipeCategory.TOOLS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 3 },
            { id: 'fiber', count: 4 },
            { id: 'flint', count: 1 }
        ],
        output: { id: 'fishing_rod', count: 1 },
        description: 'Fish in the ocean or fresh ponds to secure reliable food.'
    },
    {
        id: 'iron_axe',
        name: 'Iron Axe',
        category: RecipeCategory.TOOLS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 4 },
            { id: 'iron_ingot', count: 3 }
        ],
        output: { id: 'iron_axe', count: 1 },
        description: 'High-durability forged axe for rapid deforestation.'
    },
    {
        id: 'iron_pickaxe',
        name: 'Iron Pickaxe',
        category: RecipeCategory.TOOLS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 4 },
            { id: 'iron_ingot', count: 3 }
        ],
        output: { id: 'iron_pickaxe', count: 1 },
        description: 'Heavy duty pickaxe for mining hardened mountain ore veins.'
    },

    // === WEAPONS & COMBAT ===
    {
        id: 'wooden_spear',
        name: 'Wooden Spear',
        category: RecipeCategory.WEAPONS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 4 },
            { id: 'flint', count: 2 }
        ],
        output: { id: 'wooden_spear', count: 1 },
        description: 'Has long reach to keep dangerous wolves and boars at a distance.'
    },
    {
        id: 'iron_spear',
        name: 'Iron Spear',
        category: RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 4 },
            { id: 'iron_ingot', count: 4 }
        ],
        output: { id: 'iron_spear', count: 1 },
        description: 'Deadly thrusting weapon that deals immense combat damage.'
    },
    {
        id: 'bow',
        name: 'Hunting Bow',
        category: RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 4 },
            { id: 'fiber', count: 6 },
            { id: 'leather', count: 2 }
        ],
        output: { id: 'bow', count: 1 },
        description: 'Allows taking down fast prey and dangerous predators from safety.'
    },
    {
        id: 'arrow',
        name: 'Flint Arrows x6',
        category: RecipeCategory.WEAPONS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 2 },
            { id: 'flint', count: 2 },
            { id: 'fiber', count: 2 }
        ],
        output: { id: 'arrow', count: 6 },
        description: 'Quiver of 6 sharp arrows for the Hunting Bow.'
    },

    // === BASE BUILDING & STATIONS ===
    {
        id: 'workstation',
        name: 'Crafting Workstation',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 8 },
            { id: 'stone', count: 4 },
            { id: 'fiber', count: 4 }
        ],
        output: { id: 'workstation', count: 1 },
        description: 'Enables construction of advanced iron tools, bows, and escape parts.'
    },
    {
        id: 'furnace',
        name: 'Stone Furnace',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'stone', count: 12 },
            { id: 'flint', count: 3 }
        ],
        output: { id: 'furnace', count: 1 },
        description: 'Smelts raw iron ore and copper into refined ingots and wire.'
    },
    {
        id: 'storage_chest',
        name: 'Storage Chest',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 8 },
            { id: 'fiber', count: 4 }
        ],
        output: { id: 'storage_chest', count: 1 },
        description: 'Stores up to 18 stacks of surplus materials.'
    },
    {
        id: 'water_collector',
        name: 'Rain Collector',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: true,
        ingredients: [
            { id: 'wood', count: 6 },
            { id: 'palm_leaf', count: 6 },
            { id: 'scrap_metal', count: 2 }
        ],
        output: { id: 'water_collector', count: 1 },
        description: 'Fills with purified fresh drinking water whenever it rains.'
    },
    {
        id: 'wood_wall',
        name: 'Wooden Wall x2',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 4 }
        ],
        output: { id: 'wood_wall', count: 2 },
        description: 'Sturdy wall to enclose your survival base.'
    },
    {
        id: 'wood_door',
        name: 'Wooden Door',
        category: RecipeCategory.STRUCTURES,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 4 },
            { id: 'fiber', count: 2 }
        ],
        output: { id: 'wood_door', count: 1 },
        description: 'Enterable door that can be opened and locked with [F].'
    },

    // === SMELTING & COOKING (FURNACE / CAMPFIRE RECIPES) ===
    {
        id: 'cook_steak',
        name: 'Cooked Steak',
        category: RecipeCategory.SMELTING,
        requiresFurnace: false,
        ingredients: [
            { id: 'raw_meat', count: 1 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'cooked_meat', count: 1 },
        description: 'Roast raw game meat over fire to make a restorative steak.'
    },
    {
        id: 'cook_crab',
        name: 'Steamed Crab',
        category: RecipeCategory.SMELTING,
        requiresFurnace: false,
        ingredients: [
            { id: 'raw_crab', count: 1 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'cooked_crab', count: 1 },
        description: 'Steam fresh crab meat to safely satisfy hunger.'
    },
    {
        id: 'cook_fish',
        name: 'Grilled Fish',
        category: RecipeCategory.SMELTING,
        requiresFurnace: false,
        ingredients: [
            { id: 'raw_fish', count: 1 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'cooked_fish', count: 1 },
        description: 'Grill fresh catch over the flames for a delicious feast.'
    },
    {
        id: 'smelt_iron',
        name: 'Smelt Iron Ingot',
        category: RecipeCategory.SMELTING,
        requiresFurnace: true,
        ingredients: [
            { id: 'iron_ore', count: 1 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'iron_ingot', count: 1 },
        description: 'Smelt pure iron bar from raw mountain ore.'
    },
    {
        id: 'smelt_copper',
        name: 'Smelt Copper Wire',
        category: RecipeCategory.SMELTING,
        requiresFurnace: true,
        ingredients: [
            { id: 'copper_ore', count: 1 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'copper_wire', count: 1 },
        description: 'Draw conductive copper wiring for radio electronics.'
    },

    // === ESCAPE & RADIO OBJECTIVES ===
    {
        id: 'antenna_mast',
        name: 'Reinforced Antenna Mast',
        category: RecipeCategory.ESCAPE,
        requiresWorkstation: true,
        ingredients: [
            { id: 'iron_ingot', count: 4 },
            { id: 'copper_wire', count: 2 },
            { id: 'scrap_metal', count: 3 }
        ],
        output: { id: 'antenna_mast', count: 1 },
        description: 'Heavy duty high-gain antenna to transmit the emergency beacon signal.'
    },
    {
        id: 'distress_beacon',
        name: 'SOS Distress Beacon Module',
        category: RecipeCategory.ESCAPE,
        requiresWorkstation: true,
        ingredients: [
            { id: 'radio_tube', count: 1 },
            { id: 'battery', count: 1 },
            { id: 'copper_wire', count: 2 },
            { id: 'scrap_metal', count: 2 }
        ],
        output: { id: 'distress_beacon', count: 1 },
        description: 'The master transceiver core needed to activate the island radio tower!'
    }
];

class CraftingSystem {
    constructor() {
        this.recipes = CraftingRecipes;
    }

    canCraft(recipe, inventory, isNearWorkstation = false, isNearFurnace = false) {
        if (recipe.requiresWorkstation && !isNearWorkstation) return false;
        if (recipe.requiresFurnace && !isNearFurnace) return false;

        for (const ing of recipe.ingredients) {
            if (!inventory.hasItem(ing.id, ing.count)) {
                return false;
            }
        }
        return true;
    }

    craft(recipe, inventory, isNearWorkstation = false, isNearFurnace = false) {
        if (!this.canCraft(recipe, inventory, isNearWorkstation, isNearFurnace)) {
            return false;
        }

        // Deduct ingredients
        for (const ing of recipe.ingredients) {
            inventory.removeItem(ing.id, ing.count);
        }

        // Add output item
        inventory.addItem(recipe.output.id, recipe.output.count);
        window.Sound.playCraft();

        if (window.Game) {
            window.Game.quests.onItemCrafted(recipe.output.id, recipe.output.count);
        }

        return true;
    }
}

window.CraftingSystem = CraftingSystem;
window.CraftingRecipes = CraftingRecipes;
window.RecipeCategory = RecipeCategory;
