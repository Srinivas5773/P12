/**
 * Item Database & Canvas Icon Drawing System
 * Features 40+ unique items with dynamic procedural vector/pixel icons.
 */

const ItemCategory = {
    RESOURCE: 'resource',
    TOOL: 'tool',
    WEAPON: 'weapon',
    FOOD: 'food',
    STRUCTURE: 'structure',
    QUEST: 'quest',
    MEDICINE: 'medicine'
};

const ItemDatabase = {
    // === RAW RESOURCES ===
    wood: {
        id: 'wood',
        name: 'Palm Wood',
        category: ItemCategory.RESOURCE,
        description: 'Sturdy wood chopped from palm trees. Essential for basic crafting and fires.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.15, y + s * 0.2, s * 0.7, s * 0.6, s * 0.1);
            ctx.fill();
            ctx.fillStyle = '#5C3818';
            ctx.fillRect(x + s * 0.25, y + s * 0.35, s * 0.5, s * 0.08);
            ctx.fillRect(x + s * 0.2, y + s * 0.55, s * 0.6, s * 0.08);
            // End rings
            ctx.fillStyle = '#D2B48C';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.85, y + s * 0.5, s * 0.08, s * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
    },
    hardwood: {
        id: 'hardwood',
        name: 'Hardwood',
        category: ItemCategory.RESOURCE,
        description: 'Dense dark wood from ancient pines. Needed for advanced structures.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4A2E18';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.15, y + s * 0.2, s * 0.7, s * 0.6, s * 0.1);
            ctx.fill();
            ctx.fillStyle = '#2A170A';
            ctx.fillRect(x + s * 0.25, y + s * 0.35, s * 0.5, s * 0.08);
            ctx.fillRect(x + s * 0.2, y + s * 0.55, s * 0.6, s * 0.08);
            ctx.fillStyle = '#A07040';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.85, y + s * 0.5, s * 0.08, s * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    stone: {
        id: 'stone',
        name: 'Stone',
        category: ItemCategory.RESOURCE,
        description: 'Rough stone picked up from the ground or mined from boulders.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#808080';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.7);
            ctx.lineTo(x + s * 0.35, y + s * 0.25);
            ctx.lineTo(x + s * 0.7, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.5);
            ctx.lineTo(x + s * 0.75, y + s * 0.8);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#A9A9A9';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.35, y + s * 0.25);
            ctx.lineTo(x + s * 0.7, y + s * 0.2);
            ctx.lineTo(x + s * 0.55, y + s * 0.5);
            ctx.closePath();
            ctx.fill();
        }
    },
    flint: {
        id: 'flint',
        name: 'Sharp Flint',
        category: ItemCategory.RESOURCE,
        description: 'Hard, sharp mineral used for making arrowheads and starting fires.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3A3B3C';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.5, y + s * 0.15);
            ctx.lineTo(x + s * 0.8, y + s * 0.65);
            ctx.lineTo(x + s * 0.5, y + s * 0.85);
            ctx.lineTo(x + s * 0.2, y + s * 0.6);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    },
    fiber: {
        id: 'fiber',
        name: 'Plant Fiber',
        category: ItemCategory.RESOURCE,
        description: 'Strong strands gathered from bushes and tall grass. Used for rope and clothing.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#6B8E23';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.4, s * 0.25, 0, Math.PI * 1.6);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.6, s * 0.25, Math.PI * 0.8, Math.PI * 2.4);
            ctx.stroke();
        }
    },
    palm_leaf: {
        id: 'palm_leaf',
        name: 'Palm Frond',
        category: ItemCategory.RESOURCE,
        description: 'Large palm leaves for roofing shelters and weaving beds.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.quadraticCurveTo(x + s * 0.3, y + s * 0.2, x + s * 0.8, y + s * 0.2);
            ctx.quadraticCurveTo(x + s * 0.6, y + s * 0.5, x + s * 0.8, y + s * 0.8);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#006400';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.3);
            ctx.stroke();
        }
    },
    iron_ore: {
        id: 'iron_ore',
        name: 'Iron Ore',
        category: ItemCategory.RESOURCE,
        description: 'Unrefined iron rock mined from mountain veins. Smelt in a furnace.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5A4D41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.35, 0, Math.PI * 2);
            ctx.fill();
            // Iron specks
            ctx.fillStyle = '#E8A87C';
            ctx.fillRect(x + s * 0.35, y + s * 0.35, s * 0.12, s * 0.12);
            ctx.fillRect(x + s * 0.55, y + s * 0.55, s * 0.14, s * 0.14);
            ctx.fillRect(x + s * 0.3, y + s * 0.6, s * 0.1, s * 0.1);
        }
    },
    iron_ingot: {
        id: 'iron_ingot',
        name: 'Iron Ingot',
        category: ItemCategory.RESOURCE,
        description: 'Smelted bar of pure iron. Used for advanced tools, weapons and radio parts.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.65);
            ctx.lineTo(x + s * 0.3, y + s * 0.35);
            ctx.lineTo(x + s * 0.7, y + s * 0.35);
            ctx.lineTo(x + s * 0.8, y + s * 0.65);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#E6E6FA';
            ctx.fillRect(x + s * 0.3, y + s * 0.35, s * 0.4, s * 0.08);
            ctx.strokeStyle = '#708090';
            ctx.stroke();
        }
    },
    copper_ore: {
        id: 'copper_ore',
        name: 'Copper Ore',
        category: ItemCategory.RESOURCE,
        description: 'Raw copper mineral with a reddish-green hue. Smelt to make wire.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6B5446';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#3CB371';
            ctx.fillRect(x + s * 0.35, y + s * 0.4, s * 0.15, s * 0.15);
            ctx.fillStyle = '#CD7F32';
            ctx.fillRect(x + s * 0.55, y + s * 0.35, s * 0.15, s * 0.15);
        }
    },
    copper_wire: {
        id: 'copper_wire',
        name: 'Copper Wire Spool',
        category: ItemCategory.RESOURCE,
        description: 'Conductive wire needed to wire the radio transmitter circuit.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x + s * 0.3, y + s * 0.2, s * 0.4, s * 0.6);
            ctx.fillStyle = '#D97724';
            for (let i = 0; i < 4; i++) {
                ctx.fillRect(x + s * 0.25, y + s * (0.3 + i * 0.1), s * 0.5, s * 0.06);
            }
        }
    },
    scrap_metal: {
        id: 'scrap_metal',
        name: 'Scrap Metal',
        category: ItemCategory.RESOURCE,
        description: 'Twisted wreckage pieces found around the coast and shipwreck.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#778899';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.3);
            ctx.lineTo(x + s * 0.6, y + s * 0.2);
            ctx.lineTo(x + s * 0.8, y + s * 0.6);
            ctx.lineTo(x + s * 0.5, y + s * 0.85);
            ctx.lineTo(x + s * 0.3, y + s * 0.7);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#B22222';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.1, s * 0.1);
        }
    },
    leather: {
        id: 'leather',
        name: 'Animal Hide',
        category: ItemCategory.RESOURCE,
        description: 'Tough hide from wild boars. Used for armor, backpacks, and waterskins.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.3, y + s * 0.2);
            ctx.lineTo(x + s * 0.7, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.5);
            ctx.lineTo(x + s * 0.75, y + s * 0.85);
            ctx.lineTo(x + s * 0.25, y + s * 0.85);
            ctx.lineTo(x + s * 0.15, y + s * 0.5);
            ctx.closePath();
            ctx.fill();
        }
    },

    // === FOOD & DRINKS ===
    coconut: {
        id: 'coconut',
        name: 'Fresh Coconut',
        category: ItemCategory.FOOD,
        description: 'Nutritious tropical fruit. Restores thirst and hunger.',
        stackable: true,
        maxStack: 20,
        hunger: 15,
        thirst: 25,
        energy: 10,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.32, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#221105';
            ctx.beginPath();
            ctx.arc(x + s * 0.42, y + s * 0.4, s * 0.04, 0, Math.PI * 2);
            ctx.arc(x + s * 0.58, y + s * 0.4, s * 0.04, 0, Math.PI * 2);
            ctx.arc(x + s * 0.5, y + s * 0.55, s * 0.04, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    berries: {
        id: 'berries',
        name: 'Sweet Berries',
        category: ItemCategory.FOOD,
        description: 'Juicy wild red berries picked from island bushes.',
        stackable: true,
        maxStack: 40,
        hunger: 12,
        thirst: 8,
        health: 2,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#DC143C';
            ctx.beginPath();
            ctx.arc(x + s * 0.4, y + s * 0.55, s * 0.16, 0, Math.PI * 2);
            ctx.arc(x + s * 0.62, y + s * 0.55, s * 0.16, 0, Math.PI * 2);
            ctx.arc(x + s * 0.51, y + s * 0.38, s * 0.16, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#228B22';
            ctx.fillRect(x + s * 0.48, y + s * 0.22, s * 0.06, s * 0.15);
        }
    },
    blueberries: {
        id: 'blueberries',
        name: 'Stamina Berries',
        category: ItemCategory.FOOD,
        description: 'Blue berries packed with energy. Restores a large amount of stamina.',
        stackable: true,
        maxStack: 40,
        hunger: 8,
        thirst: 6,
        energy: 35,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4169E1';
            ctx.beginPath();
            ctx.arc(x + s * 0.4, y + s * 0.55, s * 0.16, 0, Math.PI * 2);
            ctx.arc(x + s * 0.62, y + s * 0.55, s * 0.16, 0, Math.PI * 2);
            ctx.arc(x + s * 0.51, y + s * 0.38, s * 0.16, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#008000';
            ctx.fillRect(x + s * 0.48, y + s * 0.22, s * 0.06, s * 0.15);
        }
    },
    raw_meat: {
        id: 'raw_meat',
        name: 'Raw Boar Meat',
        category: ItemCategory.FOOD,
        description: 'Fresh game meat. Dangerous to eat raw—cook it over a campfire!',
        stackable: true,
        maxStack: 20,
        hunger: 10,
        thirst: -5,
        poisonChance: 0.5,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B22222';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.5, y + s * 0.5, s * 0.32, s * 0.22, Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(x + s * 0.35, y + s * 0.45, s * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    cooked_meat: {
        id: 'cooked_meat',
        name: 'Cooked Steak',
        category: ItemCategory.FOOD,
        description: 'Deliciously roasted boar steak. Restores massive hunger and health.',
        stackable: true,
        maxStack: 20,
        hunger: 45,
        health: 20,
        energy: 20,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.5, y + s * 0.5, s * 0.32, s * 0.22, Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
            // Grill marks
            ctx.strokeStyle = '#2B1408';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.3, y + s * 0.35);
            ctx.lineTo(x + s * 0.5, y + s * 0.65);
            ctx.moveTo(x + s * 0.45, y + s * 0.32);
            ctx.lineTo(x + s * 0.65, y + s * 0.62);
            ctx.stroke();
        }
    },
    raw_crab: {
        id: 'raw_crab',
        name: 'Raw Crab Meat',
        category: ItemCategory.FOOD,
        description: 'Harvested from beach crabs. Cook it for safe eating.',
        stackable: true,
        maxStack: 20,
        hunger: 8,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#E9967A';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.25, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    cooked_crab: {
        id: 'cooked_crab',
        name: 'Steamed Crab',
        category: ItemCategory.FOOD,
        description: 'Tender steamed crab meat. Restores health and hunger.',
        stackable: true,
        maxStack: 20,
        hunger: 30,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.28, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.fillRect(x + s * 0.35, y + s * 0.45, s * 0.3, s * 0.1);
        }
    },
    raw_fish: {
        id: 'raw_fish',
        name: 'Fresh Fish',
        category: ItemCategory.FOOD,
        description: 'Caught with a fishing rod. Cook it over a fire.',
        stackable: true,
        maxStack: 20,
        hunger: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.48, y + s * 0.5, s * 0.28, s * 0.16, 0, 0, Math.PI * 2);
            ctx.fill();
            // Tail
            ctx.beginPath();
            ctx.moveTo(x + s * 0.72, y + s * 0.5);
            ctx.lineTo(x + s * 0.88, y + s * 0.35);
            ctx.lineTo(x + s * 0.88, y + s * 0.65);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillRect(x + s * 0.28, y + s * 0.45, s * 0.04, s * 0.04);
        }
    },
    cooked_fish: {
        id: 'cooked_fish',
        name: 'Grilled Fish',
        category: ItemCategory.FOOD,
        description: 'Nutritious golden-grilled fish fillet.',
        stackable: true,
        maxStack: 20,
        hunger: 38,
        health: 15,
        energy: 15,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD853F';
            ctx.beginPath();
            ctx.ellipse(x + s * 0.48, y + s * 0.5, s * 0.28, s * 0.16, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x + s * 0.72, y + s * 0.5);
            ctx.lineTo(x + s * 0.88, y + s * 0.35);
            ctx.lineTo(x + s * 0.88, y + s * 0.65);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#5C3818';
            ctx.stroke();
        }
    },
    canteen: {
        id: 'canteen',
        name: 'Water Canteen (Clean)',
        category: ItemCategory.FOOD,
        description: 'Flask filled with purified water. Quenches thirst immediately.',
        stackable: false,
        thirst: 60,
        health: 5,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1E90FF';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.28, y + s * 0.35, s * 0.44, s * 0.5, s * 0.1);
            ctx.fill();
            ctx.fillStyle = '#708090';
            ctx.fillRect(x + s * 0.4, y + s * 0.22, s * 0.2, s * 0.13);
        }
    },
    bandage: {
        id: 'bandage',
        name: 'Linen Bandage',
        category: ItemCategory.MEDICINE,
        description: 'Treated cloth to stop bleeding and heal wounds.',
        stackable: true,
        maxStack: 20,
        health: 35,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.28, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#DC143C';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.5, y + s * 0.35);
            ctx.lineTo(x + s * 0.5, y + s * 0.65);
            ctx.moveTo(x + s * 0.35, y + s * 0.5);
            ctx.lineTo(x + s * 0.65, y + s * 0.5);
            ctx.stroke();
        }
    },

    // === TOOLS & WEAPONS ===
    stone_axe: {
        id: 'stone_axe',
        name: 'Stone Axe',
        category: ItemCategory.TOOL,
        slot: 'mainhand',
        chopPower: 2,
        minePower: 1,
        damage: 8,
        durability: 100,
        description: 'Primitive axe for felling trees and cutting foliage quickly.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            // Handle
            ctx.strokeStyle = '#8B5A2B';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.25, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.25);
            ctx.stroke();
            // Stone head
            ctx.fillStyle = '#808080';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.55, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.3);
            ctx.lineTo(x + s * 0.75, y + s * 0.5);
            ctx.lineTo(x + s * 0.5, y + s * 0.4);
            ctx.closePath();
            ctx.fill();
        }
    },
    iron_axe: {
        id: 'iron_axe',
        name: 'Iron Axe',
        category: ItemCategory.TOOL,
        slot: 'mainhand',
        chopPower: 5,
        damage: 16,
        durability: 250,
        description: 'Heavy iron axe that harvests wood rapidly and deals solid damage.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#5C3818';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.25, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.25);
            ctx.stroke();
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.55, y + s * 0.15);
            ctx.lineTo(x + s * 0.9, y + s * 0.25);
            ctx.lineTo(x + s * 0.8, y + s * 0.55);
            ctx.lineTo(x + s * 0.5, y + s * 0.4);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#4682B4';
            ctx.stroke();
        }
    },
    stone_pickaxe: {
        id: 'stone_pickaxe',
        name: 'Stone Pickaxe',
        category: ItemCategory.TOOL,
        slot: 'mainhand',
        minePower: 2,
        chopPower: 1,
        damage: 6,
        durability: 100,
        description: 'Crucial for mining stone, flint, and surface ore deposits.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#8B5A2B';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.25, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.25);
            ctx.stroke();
            // Pick head
            ctx.strokeStyle = '#808080';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.arc(x + s * 0.8, y + s * 0.2, s * 0.35, Math.PI * 0.6, Math.PI * 1.1);
            ctx.stroke();
        }
    },
    iron_pickaxe: {
        id: 'iron_pickaxe',
        name: 'Iron Pickaxe',
        category: ItemCategory.TOOL,
        slot: 'mainhand',
        minePower: 5,
        damage: 12,
        durability: 250,
        description: 'Sturdy forged pickaxe that cleaves through hard mountain rocks.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#5C3818';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.25, y + s * 0.8);
            ctx.lineTo(x + s * 0.7, y + s * 0.25);
            ctx.stroke();
            ctx.strokeStyle = '#B0C4DE';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.arc(x + s * 0.8, y + s * 0.2, s * 0.35, Math.PI * 0.6, Math.PI * 1.1);
            ctx.stroke();
        }
    },
    wooden_spear: {
        id: 'wooden_spear',
        name: 'Wooden Spear',
        category: ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 14,
        range: 1.4,
        durability: 80,
        description: 'Long wooden spear with extended reach for hunting wild beasts.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#8B5A2B';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.15, y + s * 0.85);
            ctx.lineTo(x + s * 0.75, y + s * 0.25);
            ctx.stroke();
            // Point
            ctx.fillStyle = '#D2B48C';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.7, y + s * 0.3);
            ctx.lineTo(x + s * 0.9, y + s * 0.1);
            ctx.lineTo(x + s * 0.75, y + s * 0.25);
            ctx.closePath();
            ctx.fill();
        }
    },
    iron_spear: {
        id: 'iron_spear',
        name: 'Iron Spear',
        category: ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 28,
        range: 1.5,
        durability: 200,
        description: 'Lethal reinforced spear with a razor-sharp iron tip.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#5C3818';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.15, y + s * 0.85);
            ctx.lineTo(x + s * 0.75, y + s * 0.25);
            ctx.stroke();
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.7, y + s * 0.3);
            ctx.lineTo(x + s * 0.9, y + s * 0.1);
            ctx.lineTo(x + s * 0.8, y + s * 0.2);
            ctx.closePath();
            ctx.fill();
        }
    },
    bow: {
        id: 'bow',
        name: 'Hunting Bow',
        category: ItemCategory.WEAPON,
        slot: 'mainhand',
        damage: 22,
        isRanged: true,
        durability: 120,
        description: 'Fires arrows at long range. Requires arrows in your inventory.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x + s * 0.4, y + s * 0.5, s * 0.35, -Math.PI * 0.4, Math.PI * 0.4);
            ctx.stroke();
            // Bowstring
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.5, y + s * 0.18);
            ctx.lineTo(x + s * 0.5, y + s * 0.82);
            ctx.stroke();
        }
    },
    arrow: {
        id: 'arrow',
        name: 'Flint Arrows',
        category: ItemCategory.WEAPON,
        description: 'Ammunition for the Hunting Bow.',
        stackable: true,
        maxStack: 99,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#8B5A2B';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.8);
            ctx.lineTo(x + s * 0.75, y + s * 0.25);
            ctx.stroke();
            // Arrowhead
            ctx.fillStyle = '#333';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.85, y + s * 0.15);
            ctx.lineTo(x + s * 0.7, y + s * 0.2);
            ctx.lineTo(x + s * 0.8, y + s * 0.3);
            ctx.closePath();
            ctx.fill();
        }
    },
    torch: {
        id: 'torch',
        name: 'Wooden Torch',
        category: ItemCategory.TOOL,
        slot: 'offhand',
        lightRadius: 180,
        durability: 300,
        description: 'Lights up darkness around the player and wards off wild animals.',
        stackable: true,
        maxStack: 10,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.fillRect(x + s * 0.42, y + s * 0.4, s * 0.16, s * 0.45);
            // Flame
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.3, s * 0.18, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.3, s * 0.1, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    fishing_rod: {
        id: 'fishing_rod',
        name: 'Fishing Rod',
        category: ItemCategory.TOOL,
        slot: 'mainhand',
        description: 'Cast into coastal ocean or freshwater streams to catch fish.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#8B5A2B';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.15, y + s * 0.85);
            ctx.lineTo(x + s * 0.8, y + s * 0.2);
            ctx.stroke();
            // Line
            ctx.strokeStyle = '#A9A9A9';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.8, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.6);
            ctx.stroke();
            // Bobber
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(x + s * 0.85, y + s * 0.6, s * 0.07, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    // === STRUCTURES & BASE BUILDING ===
    campfire: {
        id: 'campfire',
        name: 'Campfire',
        category: ItemCategory.STRUCTURE,
        description: 'Provides light, warmth at night, and cooks raw food.',
        stackable: true,
        maxStack: 10,
        buildingType: 'campfire',
        drawIcon(ctx, x, y, s) {
            // Logs
            ctx.strokeStyle = '#5C3818';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.2, y + s * 0.7);
            ctx.lineTo(x + s * 0.8, y + s * 0.7);
            ctx.moveTo(x + s * 0.25, y + s * 0.6);
            ctx.lineTo(x + s * 0.75, y + s * 0.8);
            ctx.stroke();
            // Fire
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.45, s * 0.22, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.45, s * 0.12, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    shelter: {
        id: 'shelter',
        name: 'Lean-to Shelter',
        category: ItemCategory.STRUCTURE,
        description: 'Rest here to sleep through the night and restore full energy.',
        stackable: true,
        maxStack: 5,
        buildingType: 'shelter',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.5, y + s * 0.2);
            ctx.lineTo(x + s * 0.85, y + s * 0.8);
            ctx.lineTo(x + s * 0.15, y + s * 0.8);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#5C3818';
            ctx.fillRect(x + s * 0.45, y + s * 0.55, s * 0.1, s * 0.25);
        }
    },
    wood_wall: {
        id: 'wood_wall',
        name: 'Wooden Wall',
        category: ItemCategory.STRUCTURE,
        description: 'Solid wooden barricade to fortify your island compound.',
        stackable: true,
        maxStack: 50,
        buildingType: 'wall',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.fillRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6);
            ctx.strokeStyle = '#3E2714';
            ctx.lineWidth = 2;
            ctx.strokeRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6);
            ctx.beginPath();
            ctx.moveTo(x + s * 0.4, y + s * 0.2);
            ctx.lineTo(x + s * 0.4, y + s * 0.8);
            ctx.moveTo(x + s * 0.6, y + s * 0.2);
            ctx.lineTo(x + s * 0.6, y + s * 0.8);
            ctx.stroke();
        }
    },
    wood_door: {
        id: 'wood_door',
        name: 'Wooden Door',
        category: ItemCategory.STRUCTURE,
        description: 'Doorway that can be toggled open and closed with [F].',
        stackable: true,
        maxStack: 20,
        buildingType: 'door',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#A0522D';
            ctx.fillRect(x + s * 0.25, y + s * 0.15, s * 0.5, s * 0.7);
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x + s * 0.65, y + s * 0.5, s * 0.05, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    storage_chest: {
        id: 'storage_chest',
        name: 'Storage Chest',
        category: ItemCategory.STRUCTURE,
        description: 'Stores up to 18 stacks of items securely.',
        stackable: true,
        maxStack: 10,
        buildingType: 'chest',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x + s * 0.2, y + s * 0.28, s * 0.6, s * 0.5);
            ctx.fillStyle = '#D2B48C';
            ctx.fillRect(x + s * 0.2, y + s * 0.45, s * 0.6, s * 0.08);
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.45, y + s * 0.42, s * 0.1, s * 0.12);
        }
    },
    furnace: {
        id: 'furnace',
        name: 'Stone Furnace',
        category: ItemCategory.STRUCTURE,
        description: 'High-heat furnace to smelt copper and iron ores into ingots.',
        stackable: true,
        maxStack: 5,
        buildingType: 'furnace',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#696969';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, s * 0.08);
            ctx.fill();
            // Fire mouth
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.58, s * 0.18, 0, Math.PI);
            ctx.fill();
        }
    },
    workstation: {
        id: 'workstation',
        name: 'Crafting Workstation',
        category: ItemCategory.STRUCTURE,
        description: 'Unlocks advanced survival tools, heavy weapons, and metal engineering.',
        stackable: true,
        maxStack: 5,
        buildingType: 'workstation',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.fillRect(x + s * 0.15, y + s * 0.35, s * 0.7, s * 0.2);
            ctx.fillRect(x + s * 0.2, y + s * 0.55, s * 0.1, s * 0.3);
            ctx.fillRect(x + s * 0.7, y + s * 0.55, s * 0.1, s * 0.3);
            // Hammer on table
            ctx.fillStyle = '#708090';
            ctx.fillRect(x + s * 0.4, y + s * 0.25, s * 0.2, s * 0.1);
        }
    },
    water_collector: {
        id: 'water_collector',
        name: 'Rain Collector',
        category: ItemCategory.STRUCTURE,
        description: 'Gathers pure fresh rainwater automatically during tropical downpours.',
        stackable: true,
        maxStack: 5,
        buildingType: 'water_collector',
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.15, y + s * 0.25);
            ctx.lineTo(x + s * 0.85, y + s * 0.25);
            ctx.lineTo(x + s * 0.7, y + s * 0.75);
            ctx.lineTo(x + s * 0.3, y + s * 0.75);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#00BFFF';
            ctx.fillRect(x + s * 0.35, y + s * 0.45, s * 0.3, s * 0.25);
        }
    },

    // === QUEST & ESCAPE ITEMS ===
    radio_tube: {
        id: 'radio_tube',
        name: 'Vacuum Tube',
        category: ItemCategory.QUEST,
        description: 'An intact electronic vacuum tube scavenged from the coastal shipwreck.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.35, y + s * 0.2, s * 0.3, s * 0.5, s * 0.1);
            ctx.fill();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.45, y + s * 0.35, s * 0.1, s * 0.2);
            ctx.fillStyle = '#555';
            ctx.fillRect(x + s * 0.38, y + s * 0.7, s * 0.24, s * 0.12);
        }
    },
    battery: {
        id: 'battery',
        name: 'Heavy Battery',
        category: ItemCategory.QUEST,
        description: 'A sealed chemical battery found deep within the ancient ruins.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2F4F4F';
            ctx.fillRect(x + s * 0.3, y + s * 0.3, s * 0.4, s * 0.5);
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.2, s * 0.2, s * 0.1);
            // Bolt icon
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.moveTo(x + s * 0.52, y + s * 0.38);
            ctx.lineTo(x + s * 0.42, y + s * 0.54);
            ctx.lineTo(x + s * 0.5, y + s * 0.54);
            ctx.lineTo(x + s * 0.46, y + s * 0.7);
            ctx.lineTo(x + s * 0.58, y + s * 0.5);
            ctx.lineTo(x + s * 0.5, y + s * 0.5);
            ctx.closePath();
            ctx.fill();
        }
    },
    antenna_mast: {
        id: 'antenna_mast',
        name: 'Reinforced Antenna',
        category: ItemCategory.QUEST,
        description: 'High-gain steel antenna rod to broadcast an emergency distress signal.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.strokeStyle = '#A9A9A9';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.5, y + s * 0.85);
            ctx.lineTo(x + s * 0.5, y + s * 0.15);
            ctx.stroke();
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x + s * 0.3, y + s * 0.3);
            ctx.lineTo(x + s * 0.7, y + s * 0.3);
            ctx.moveTo(x + s * 0.35, y + s * 0.45);
            ctx.lineTo(x + s * 0.65, y + s * 0.45);
            ctx.stroke();
        }
    },
    distress_beacon: {
        id: 'distress_beacon',
        name: 'Distress Beacon Module',
        category: ItemCategory.QUEST,
        description: 'Tuned Morse code transmitter configured to summon a rescue team.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B22222';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.25, y + s * 0.3, s * 0.5, s * 0.45, s * 0.08);
            ctx.fill();
            ctx.fillStyle = '#00FF00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.45, s * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
    }
};

window.ItemDatabase = ItemDatabase;
window.ItemCategory = ItemCategory;
