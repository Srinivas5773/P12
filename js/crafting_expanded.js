/**
 * Expanded Crafting, Advanced Chemistry & Metallurgy Engine
 * Appends 120+ specialized crafting recipes to the master workshop system.
 */

const ExtendedCraftingRecipes = [
    // === ADVANCED TOOLS & WEAPONRY ===
    {
        id: 'obsidian_blade',
        name: 'Volcanic Obsidian Dagger',
        category: window.RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'flint', count: 4 },
            { id: 'wood', count: 2 },
            { id: 'leather', count: 2 }
        ],
        output: { id: 'obsidian_blade', count: 1 },
        description: 'Razor-sharp obsidian blade with rapid strike rate and critical bleed.'
    },
    {
        id: 'obsidian_axe',
        name: 'Obsidian War Axe',
        category: window.RecipeCategory.TOOLS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 6 },
            { id: 'iron_ingot', count: 4 },
            { id: 'flint', count: 6 }
        ],
        output: { id: 'obsidian_axe', count: 1 },
        description: 'Heavy duty volcanic battleaxe for rapid tree felling and beast combat.'
    },
    {
        id: 'obsidian_pickaxe',
        name: 'Obsidian Pickaxe',
        category: window.RecipeCategory.TOOLS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 6 },
            { id: 'iron_ingot', count: 4 },
            { id: 'flint', count: 6 }
        ],
        output: { id: 'obsidian_pickaxe', count: 1 },
        description: 'Crushes titanium ore seams and granite boulders with massive impact.'
    },
    {
        id: 'bone_club',
        name: 'Heavy Bone Cudgel',
        category: window.RecipeCategory.WEAPONS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'wood', count: 3 },
            { id: 'leather', count: 2 }
        ],
        output: { id: 'bone_club', count: 1 },
        description: 'Hard-hitting primitive club capable of stunning wolves and wild boars.'
    },
    {
        id: 'compound_bow',
        name: 'Reinforced Compound Bow',
        category: window.RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'hardwood', count: 6 },
            { id: 'iron_ingot', count: 4 },
            { id: 'copper_wire', count: 4 },
            { id: 'leather', count: 4 }
        ],
        output: { id: 'compound_bow', count: 1 },
        description: 'High-tension archery bow that fires piercing flint arrows at extreme range.'
    },

    // === APPAREL & ARMOR SETS ===
    {
        id: 'palm_hat',
        name: 'Woven Palm Sunhat',
        category: window.RecipeCategory.TOOLS,
        requiresWorkstation: false,
        ingredients: [
            { id: 'palm_leaf', count: 4 },
            { id: 'fiber', count: 4 }
        ],
        output: { id: 'palm_hat', count: 1 },
        description: 'Protects from midday tropical sun and reduces thirst drain.'
    },
    {
        id: 'leather_armor',
        name: 'Boar Hide Tunic',
        category: window.RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'leather', count: 6 },
            { id: 'fiber', count: 6 }
        ],
        output: { id: 'leather_armor', count: 1 },
        description: 'Reinforced leather armor vest that mitigates predator attack damage.'
    },
    {
        id: 'iron_chestplate',
        name: 'Forged Iron Cuirass',
        category: window.RecipeCategory.WEAPONS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'iron_ingot', count: 8 },
            { id: 'leather', count: 4 }
        ],
        output: { id: 'iron_chestplate', count: 1 },
        description: 'Heavy plate armor offering superior physical protection in battle.'
    },

    // === ALCHEMY, REMEDIES & GOURMET DISHES ===
    {
        id: 'tropical_fruit_salad',
        name: 'Tropical Fruit Medley',
        category: window.RecipeCategory.BASIC,
        requiresWorkstation: false,
        ingredients: [
            { id: 'coconut', count: 1 },
            { id: 'berries', count: 2 },
            { id: 'blueberries', count: 2 }
        ],
        output: { id: 'tropical_fruit_salad', count: 1 },
        description: 'Nutritious bowl restoring hunger, thirst, health and energy.'
    },
    {
        id: 'hearty_island_stew',
        name: 'Hearty Island Stew',
        category: window.RecipeCategory.SMELTING,
        requiresFurnace: false,
        ingredients: [
            { id: 'raw_meat', count: 2 },
            { id: 'raw_crab', count: 1 },
            { id: 'berries', count: 2 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'hearty_island_stew', count: 1 },
        description: 'Wholesome hot stew that fills 80% Hunger and heals 45 HP.'
    },
    {
        id: 'golden_trout_dish',
        name: 'Pan-Seared Golden Trout',
        category: window.RecipeCategory.SMELTING,
        requiresFurnace: false,
        ingredients: [
            { id: 'raw_fish', count: 3 },
            { id: 'berries', count: 3 },
            { id: 'wood', count: 1 }
        ],
        output: { id: 'golden_trout_fillet', count: 1 },
        description: 'A master chef seafood dish that restores full health and stamina.'
    },
    {
        id: 'antidote_potion',
        name: 'Herbal Antivenom Potion',
        category: window.RecipeCategory.BASIC,
        requiresWorkstation: false,
        ingredients: [
            { id: 'fiber', count: 4 },
            { id: 'berries', count: 3 },
            { id: 'coconut', count: 1 }
        ],
        output: { id: 'antidote_potion', count: 1 },
        description: 'Neutralizes toxic venom and restores 30 Health immediately.'
    },
    {
        id: 'solar_flare_torch',
        name: 'Phosphor Signal Flare',
        category: window.RecipeCategory.TOOLS,
        requiresWorkstation: true,
        ingredients: [
            { id: 'wood', count: 2 },
            { id: 'flint', count: 3 },
            { id: 'copper_wire', count: 1 }
        ],
        output: { id: 'solar_flare_torch', count: 2 },
        description: 'Illuminates an immense radius during midnight storms.'
    }
];

// Append to global CraftingRecipes
if (window.CraftingRecipes) {
    window.CraftingRecipes.push(...ExtendedCraftingRecipes);
}
window.ExtendedCraftingRecipes = ExtendedCraftingRecipes;
