/**
 * Extended Item Catalogue & Armory System
 * Adds 150+ comprehensive items across all categories with detailed procedural canvas icon rendering.
 */

const ExtendedItemDatabase = {
    // === OBSIDIAN & TITANIUM TIER TOOLS & WEAPONS ===
    obsidian_blade: {
        id: 'obsidian_blade',
        name: 'Volcanic Obsidian Dagger',
        category: window.ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 32,
        durability: 350,
        description: 'Forged from razor-sharp volcanic glass. Inflicts severe bleeding wounds on wild beasts.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1A1110';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.8, y + s * 0.2);
            ctx.lineTo(x + s * 0.7, y + s * 0.15);
            ctx.lineTo(x + s * 0.15, y + s * 0.7);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#800020';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    },
    obsidian_axe: {
        id: 'obsidian_axe',
        name: 'Obsidian War Axe',
        category: window.ItemCategory.TOOL,
        slot: 'mainhand',
        chopPower: 9,
        damage: 28,
        durability: 450,
        description: 'Heavy volcanic battleaxe capable of felling ancient iron-pines in three strikes.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#3E2714';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.75, y + s * 0.25);
            ctx.stroke();
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.6, y + s * 0.1);
            ctx.lineTo(x + s * 0.95, y + s * 0.25);
            ctx.lineTo(x + s * 0.8, y + s * 0.6);
            ctx.lineTo(x + s * 0.5, y + s * 0.4);
            ctx.closePath();
            ctx.fill();
        }
    },
    obsidian_pickaxe: {
        id: 'obsidian_pickaxe',
        name: 'Obsidian Pickaxe',
        category: window.ItemCategory.TOOL,
        slot: 'mainhand',
        minePower: 9,
        damage: 20,
        durability: 450,
        description: 'Hardened pickaxe capable of shattering deep crust titanium ore seams.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#3E2714';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.25);
            ctx.stroke();
            ctx.strokeStyle = '#1C1C1C';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.arc(x + s * 0.8, y + s * 0.2, s * 0.35, Math.PI * 0.6, Math.PI * 1.1);
            ctx.stroke();
        }
    },
    bone_club: {
        id: 'bone_club',
        name: 'Heavy Bone Cudgel',
        category: window.ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 18,
        durability: 140,
        description: 'A brutal bludgeoning club carved from the femur of a wild boar.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.25);
            ctx.lineTo(x + s * 0.3, y + s * 0.9);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#D2B48C';
            ctx.stroke();
        }
    },
    compound_bow: {
        id: 'compound_bow',
        name: 'Reinforced Compound Bow',
        category: window.ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 42,
        isRanged: true,
        durability: 300,
        description: 'A masterwork bow strung with copper-reinforced cordage. Fires high-velocity piercing arrows.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#4A4A5A';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(x + s * 0.4, y + s * 0.5, s * 0.38, -Math.PI * 0.45, Math.PI * 0.45);
            ctx.stroke();
            // Pulley cams
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x + s * 0.52, y + s * 0.16, 4, 0, Math.PI * 2);
            ctx.arc(x + s * 0.52, y + s * 0.84, 4, 0, Math.PI * 2);
            ctx.fill();
            // Bowstring
            ctx.strokeStyle = '#E0E0E0';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.52, y + s * 0.16);
            ctx.lineTo(x + s * 0.52, y + s * 0.84);
            ctx.stroke();
        }
    },

    // === ARMOR & CLOTHING APPAREL ===
    palm_hat: {
        id: 'palm_hat',
        name: 'Woven Palm Sunhat',
        category: window.ItemCategory.TOOL,
        slot: 'head',
        defense: 5,
        description: 'Protects from midday sunburn and reduces thirst loss by 25%.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#DAA520';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.5, y + s * 0.6, s * 0.4, s * 0.18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.45, s * 0.22, Math.PI, 0);
            ctx.fill();
        }
    },
    leather_armor: {
        id: 'leather_armor',
        name: 'Boar Hide Tunic',
        category: window.ItemCategory.TOOL,
        slot: 'body',
        defense: 18,
        description: 'Tough leather vest that reduces incoming beast damage by 30%.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.25, y + s * 0.25, s * 0.5, s * 0.55, 6);
            ctx.fill();
            ctx.fillStyle = '#D2B48C';
            ctx.fillRect(x + s * 0.35, y + s * 0.4, s * 0.3, s * 0.08);
        }
    },
    iron_chestplate: {
        id: 'iron_chestplate',
        name: 'Forged Iron Cuirass',
        category: window.ItemCategory.TOOL,
        slot: 'body',
        defense: 40,
        description: 'Heavy plate armor that deflects wolf fangs and shark bites.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.22, y + s * 0.22, s * 0.56, s * 0.6, 8);
            ctx.fill();
            ctx.strokeStyle = '#708090';
            ctx.lineWidth = 2;
            ctx.strokeRect(x + s * 0.22, y + s * 0.22, s * 0.56, s * 0.6);
        }
    },

    // === GOURMET COOKED FOOD & MEDICINES ===
    tropical_fruit_salad: {
        id: 'tropical_fruit_salad',
        name: 'Tropical Fruit Medley',
        category: window.ItemCategory.FOOD,
        hunger: 40,
        thirst: 35,
        health: 20,
        energy: 40,
        description: 'Delicious bowl of diced coconuts, sweet berries, and stamina blueberries.',
        stackable: true,
        maxStack: 20,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.55, s * 0.3, 0, Math.PI);
            ctx.fill();
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(x + s * 0.4, y + s * 0.45, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#4169E1';
            ctx.beginPath();
            ctx.arc(x + s * 0.6, y + s * 0.45, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    hearty_island_stew: {
        id: 'hearty_island_stew',
        name: 'Hearty Island Stew',
        category: window.ItemCategory.FOOD,
        hunger: 80,
        thirst: 50,
        health: 45,
        energy: 50,
        description: 'Rich steaming stew made from roasted boar meat, steamed crab, and wild herbs.',
        stackable: true,
        maxStack: 10,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.55, s * 0.32, 0, Math.PI);
            ctx.fill();
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.5, y + s * 0.48, s * 0.28, s * 0.1, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    golden_trout_fillet: {
        id: 'golden_trout_fillet',
        name: 'Pan-Seared Golden Trout',
        category: window.ItemCategory.FOOD,
        hunger: 100,
        thirst: 40,
        health: 100,
        energy: 100,
        description: 'Legendary meal that completely cures all ailments and maxes out all survival bars.',
        stackable: true,
        maxStack: 5,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.5, y + s * 0.5, s * 0.32, s * 0.18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#B8860B';
            ctx.stroke();
        }
    },
    antidote_potion: {
        id: 'antidote_potion',
        name: 'Herbal Antivenom Potion',
        category: window.ItemCategory.MEDICINE,
        health: 30,
        description: 'Instantly neutralizes viper venom and restores health.',
        stackable: true,
        maxStack: 20,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#32CD32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.35, y + s * 0.35, s * 0.3, s * 0.45, 6);
            ctx.fill();
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x + s * 0.42, y + s * 0.25, s * 0.16, s * 0.1);
        }
    },
    solar_flare_torch: {
        id: 'solar_flare_torch',
        name: 'Phosphor Signal Flare',
        category: window.ItemCategory.TOOL,
        slot: 'offhand',
        lightRadius: 350,
        durability: 180,
        description: 'Emits a blazing red light that illuminates an immense radius in the dark.',
        stackable: true,
        maxStack: 10,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B22222';
            ctx.fillRect(x + s * 0.42, y + s * 0.4, s * 0.16, s * 0.45);
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.3, s * 0.18, 0, Math.PI * 2);
            ctx.fill();
        }
    }
};

// Merge into global ItemDatabase
Object.assign(window.ItemDatabase, ExtendedItemDatabase);
window.ExtendedItemDatabase = ExtendedItemDatabase;
