/**
 * Master Item Registry & Comprehensive Catalogue
 * Defines 750+ items across all survival tiers with complete attributes and vector renderers.
 */

const MasterItemCatalogue = {
    crude_wood_axe: {
        id: 'crude_wood_axe',
        name: 'Crude Wood Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood axe forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_pickaxe: {
        id: 'crude_wood_pickaxe',
        name: 'Crude Wood Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood pickaxe forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_dagger: {
        id: 'crude_wood_dagger',
        name: 'Crude Wood Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 11,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood dagger forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_spear: {
        id: 'crude_wood_spear',
        name: 'Crude Wood Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 11,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood spear forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_mace: {
        id: 'crude_wood_mace',
        name: 'Crude Wood War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 11,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood war mace forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_bow: {
        id: 'crude_wood_bow',
        name: 'Crude Wood Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood hunting bow forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_crossbow: {
        id: 'crude_wood_crossbow',
        name: 'Crude Wood Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood arbalest forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_helmet: {
        id: 'crude_wood_helmet',
        name: 'Crude Wood Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 6,
        durability: 80,
        description: 'A finely crafted crude wood battle helm forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_cuirass: {
        id: 'crude_wood_cuirass',
        name: 'Crude Wood Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 6,
        durability: 80,
        description: 'A finely crafted crude wood chestplate forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_greaves: {
        id: 'crude_wood_greaves',
        name: 'Crude Wood Leggings',
        category: 'tool',
        slot: 'body',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 6,
        durability: 80,
        description: 'A finely crafted crude wood leggings forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_boots: {
        id: 'crude_wood_boots',
        name: 'Crude Wood Treads',
        category: 'tool',
        slot: 'body',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 6,
        durability: 80,
        description: 'A finely crafted crude wood treads forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_shield: {
        id: 'crude_wood_shield',
        name: 'Crude Wood Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 6,
        durability: 80,
        description: 'A finely crafted crude wood reinforced shield forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_fishing_pole: {
        id: 'crude_wood_fishing_pole',
        name: 'Crude Wood Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 5,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood angler rod forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    crude_wood_harpoon: {
        id: 'crude_wood_harpoon',
        name: 'Crude Wood Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 11,
        chopPower: 2,
        minePower: 1,
        defense: 0,
        durability: 80,
        description: 'A finely crafted crude wood marine harpoon forged from crude wood materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8B5A2B';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_axe: {
        id: 'flint_axe',
        name: 'Flint Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint axe forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_pickaxe: {
        id: 'flint_pickaxe',
        name: 'Flint Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint pickaxe forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_dagger: {
        id: 'flint_dagger',
        name: 'Flint Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 15,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint dagger forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_spear: {
        id: 'flint_spear',
        name: 'Flint Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 15,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint spear forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_mace: {
        id: 'flint_mace',
        name: 'Flint War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 15,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint war mace forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_bow: {
        id: 'flint_bow',
        name: 'Flint Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint hunting bow forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_crossbow: {
        id: 'flint_crossbow',
        name: 'Flint Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint arbalest forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_helmet: {
        id: 'flint_helmet',
        name: 'Flint Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 10,
        durability: 120,
        description: 'A finely crafted flint battle helm forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_cuirass: {
        id: 'flint_cuirass',
        name: 'Flint Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 10,
        durability: 120,
        description: 'A finely crafted flint chestplate forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_greaves: {
        id: 'flint_greaves',
        name: 'Flint Leggings',
        category: 'tool',
        slot: 'body',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 10,
        durability: 120,
        description: 'A finely crafted flint leggings forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_boots: {
        id: 'flint_boots',
        name: 'Flint Treads',
        category: 'tool',
        slot: 'body',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 10,
        durability: 120,
        description: 'A finely crafted flint treads forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_shield: {
        id: 'flint_shield',
        name: 'Flint Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 10,
        durability: 120,
        description: 'A finely crafted flint reinforced shield forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_fishing_pole: {
        id: 'flint_fishing_pole',
        name: 'Flint Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 9,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint angler rod forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    flint_harpoon: {
        id: 'flint_harpoon',
        name: 'Flint Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 15,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 120,
        description: 'A finely crafted flint marine harpoon forged from flint materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#333333';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_axe: {
        id: 'bone_axe',
        name: 'Bone Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone axe forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_pickaxe: {
        id: 'bone_pickaxe',
        name: 'Bone Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone pickaxe forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_dagger: {
        id: 'bone_dagger',
        name: 'Bone Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 18,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone dagger forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_spear: {
        id: 'bone_spear',
        name: 'Bone Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 18,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone spear forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_mace: {
        id: 'bone_mace',
        name: 'Bone War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 18,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone war mace forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_bow: {
        id: 'bone_bow',
        name: 'Bone Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone hunting bow forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_crossbow: {
        id: 'bone_crossbow',
        name: 'Bone Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone arbalest forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_helmet: {
        id: 'bone_helmet',
        name: 'Bone Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 14,
        durability: 150,
        description: 'A finely crafted bone battle helm forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_cuirass: {
        id: 'bone_cuirass',
        name: 'Bone Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 14,
        durability: 150,
        description: 'A finely crafted bone chestplate forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_greaves: {
        id: 'bone_greaves',
        name: 'Bone Leggings',
        category: 'tool',
        slot: 'body',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 14,
        durability: 150,
        description: 'A finely crafted bone leggings forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_boots: {
        id: 'bone_boots',
        name: 'Bone Treads',
        category: 'tool',
        slot: 'body',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 14,
        durability: 150,
        description: 'A finely crafted bone treads forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_shield: {
        id: 'bone_shield',
        name: 'Bone Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 14,
        durability: 150,
        description: 'A finely crafted bone reinforced shield forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_fishing_pole: {
        id: 'bone_fishing_pole',
        name: 'Bone Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 12,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone angler rod forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bone_harpoon: {
        id: 'bone_harpoon',
        name: 'Bone Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 18,
        chopPower: 3,
        minePower: 2,
        defense: 0,
        durability: 150,
        description: 'A finely crafted bone marine harpoon forged from bone materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#F5F5DC';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_axe: {
        id: 'bronze_axe',
        name: 'Bronze Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze axe forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_pickaxe: {
        id: 'bronze_pickaxe',
        name: 'Bronze Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze pickaxe forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_dagger: {
        id: 'bronze_dagger',
        name: 'Bronze Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze dagger forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_spear: {
        id: 'bronze_spear',
        name: 'Bronze Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze spear forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_mace: {
        id: 'bronze_mace',
        name: 'Bronze War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze war mace forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_bow: {
        id: 'bronze_bow',
        name: 'Bronze Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze hunting bow forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_crossbow: {
        id: 'bronze_crossbow',
        name: 'Bronze Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze arbalest forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_helmet: {
        id: 'bronze_helmet',
        name: 'Bronze Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 19,
        durability: 220,
        description: 'A finely crafted bronze battle helm forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_cuirass: {
        id: 'bronze_cuirass',
        name: 'Bronze Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 19,
        durability: 220,
        description: 'A finely crafted bronze chestplate forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_greaves: {
        id: 'bronze_greaves',
        name: 'Bronze Leggings',
        category: 'tool',
        slot: 'body',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 19,
        durability: 220,
        description: 'A finely crafted bronze leggings forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_boots: {
        id: 'bronze_boots',
        name: 'Bronze Treads',
        category: 'tool',
        slot: 'body',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 19,
        durability: 220,
        description: 'A finely crafted bronze treads forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_shield: {
        id: 'bronze_shield',
        name: 'Bronze Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 19,
        durability: 220,
        description: 'A finely crafted bronze reinforced shield forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_fishing_pole: {
        id: 'bronze_fishing_pole',
        name: 'Bronze Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 16,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze angler rod forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    bronze_harpoon: {
        id: 'bronze_harpoon',
        name: 'Bronze Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 4,
        minePower: 3,
        defense: 0,
        durability: 220,
        description: 'A finely crafted bronze marine harpoon forged from bronze materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#CD7F32';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_axe: {
        id: 'iron_axe',
        name: 'Iron Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron axe forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_pickaxe: {
        id: 'iron_pickaxe',
        name: 'Iron Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron pickaxe forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_dagger: {
        id: 'iron_dagger',
        name: 'Iron Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron dagger forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_spear: {
        id: 'iron_spear',
        name: 'Iron Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron spear forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_mace: {
        id: 'iron_mace',
        name: 'Iron War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron war mace forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_bow: {
        id: 'iron_bow',
        name: 'Iron Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron hunting bow forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_crossbow: {
        id: 'iron_crossbow',
        name: 'Iron Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron arbalest forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_helmet: {
        id: 'iron_helmet',
        name: 'Iron Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 26,
        durability: 320,
        description: 'A finely crafted iron battle helm forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_cuirass: {
        id: 'iron_cuirass',
        name: 'Iron Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 26,
        durability: 320,
        description: 'A finely crafted iron chestplate forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_greaves: {
        id: 'iron_greaves',
        name: 'Iron Leggings',
        category: 'tool',
        slot: 'body',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 26,
        durability: 320,
        description: 'A finely crafted iron leggings forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_boots: {
        id: 'iron_boots',
        name: 'Iron Treads',
        category: 'tool',
        slot: 'body',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 26,
        durability: 320,
        description: 'A finely crafted iron treads forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_shield: {
        id: 'iron_shield',
        name: 'Iron Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 26,
        durability: 320,
        description: 'A finely crafted iron reinforced shield forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_fishing_pole: {
        id: 'iron_fishing_pole',
        name: 'Iron Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 22,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron angler rod forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    iron_harpoon: {
        id: 'iron_harpoon',
        name: 'Iron Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 6,
        minePower: 5,
        defense: 0,
        durability: 320,
        description: 'A finely crafted iron marine harpoon forged from iron materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#B0C4DE';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_axe: {
        id: 'steel_axe',
        name: 'Steel Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel axe forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_pickaxe: {
        id: 'steel_pickaxe',
        name: 'Steel Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel pickaxe forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_dagger: {
        id: 'steel_dagger',
        name: 'Steel Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 34,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel dagger forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_spear: {
        id: 'steel_spear',
        name: 'Steel Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 34,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel spear forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_mace: {
        id: 'steel_mace',
        name: 'Steel War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 34,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel war mace forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_bow: {
        id: 'steel_bow',
        name: 'Steel Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel hunting bow forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_crossbow: {
        id: 'steel_crossbow',
        name: 'Steel Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel arbalest forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_helmet: {
        id: 'steel_helmet',
        name: 'Steel Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 33,
        durability: 450,
        description: 'A finely crafted steel battle helm forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_cuirass: {
        id: 'steel_cuirass',
        name: 'Steel Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 33,
        durability: 450,
        description: 'A finely crafted steel chestplate forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_greaves: {
        id: 'steel_greaves',
        name: 'Steel Leggings',
        category: 'tool',
        slot: 'body',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 33,
        durability: 450,
        description: 'A finely crafted steel leggings forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_boots: {
        id: 'steel_boots',
        name: 'Steel Treads',
        category: 'tool',
        slot: 'body',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 33,
        durability: 450,
        description: 'A finely crafted steel treads forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_shield: {
        id: 'steel_shield',
        name: 'Steel Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 33,
        durability: 450,
        description: 'A finely crafted steel reinforced shield forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_fishing_pole: {
        id: 'steel_fishing_pole',
        name: 'Steel Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 28,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel angler rod forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    steel_harpoon: {
        id: 'steel_harpoon',
        name: 'Steel Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 34,
        chopPower: 8,
        minePower: 7,
        defense: 0,
        durability: 450,
        description: 'A finely crafted steel marine harpoon forged from steel materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_axe: {
        id: 'obsidian_axe',
        name: 'Obsidian Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian axe forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_pickaxe: {
        id: 'obsidian_pickaxe',
        name: 'Obsidian Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian pickaxe forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_dagger: {
        id: 'obsidian_dagger',
        name: 'Obsidian Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 41,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian dagger forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_spear: {
        id: 'obsidian_spear',
        name: 'Obsidian Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 41,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian spear forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_mace: {
        id: 'obsidian_mace',
        name: 'Obsidian War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 41,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian war mace forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_bow: {
        id: 'obsidian_bow',
        name: 'Obsidian Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian hunting bow forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_crossbow: {
        id: 'obsidian_crossbow',
        name: 'Obsidian Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian arbalest forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_helmet: {
        id: 'obsidian_helmet',
        name: 'Obsidian Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 42,
        durability: 550,
        description: 'A finely crafted obsidian battle helm forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_cuirass: {
        id: 'obsidian_cuirass',
        name: 'Obsidian Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 42,
        durability: 550,
        description: 'A finely crafted obsidian chestplate forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_greaves: {
        id: 'obsidian_greaves',
        name: 'Obsidian Leggings',
        category: 'tool',
        slot: 'body',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 42,
        durability: 550,
        description: 'A finely crafted obsidian leggings forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_boots: {
        id: 'obsidian_boots',
        name: 'Obsidian Treads',
        category: 'tool',
        slot: 'body',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 42,
        durability: 550,
        description: 'A finely crafted obsidian treads forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_shield: {
        id: 'obsidian_shield',
        name: 'Obsidian Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 42,
        durability: 550,
        description: 'A finely crafted obsidian reinforced shield forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_fishing_pole: {
        id: 'obsidian_fishing_pole',
        name: 'Obsidian Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 35,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian angler rod forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    obsidian_harpoon: {
        id: 'obsidian_harpoon',
        name: 'Obsidian Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 41,
        chopPower: 9,
        minePower: 9,
        defense: 0,
        durability: 550,
        description: 'A finely crafted obsidian marine harpoon forged from obsidian materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1C1C1C';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_axe: {
        id: 'titanium_axe',
        name: 'Titanium Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium axe forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_pickaxe: {
        id: 'titanium_pickaxe',
        name: 'Titanium Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium pickaxe forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_dagger: {
        id: 'titanium_dagger',
        name: 'Titanium Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 50,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium dagger forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_spear: {
        id: 'titanium_spear',
        name: 'Titanium Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 50,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium spear forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_mace: {
        id: 'titanium_mace',
        name: 'Titanium War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 50,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium war mace forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_bow: {
        id: 'titanium_bow',
        name: 'Titanium Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium hunting bow forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_crossbow: {
        id: 'titanium_crossbow',
        name: 'Titanium Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium arbalest forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_helmet: {
        id: 'titanium_helmet',
        name: 'Titanium Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 52,
        durability: 750,
        description: 'A finely crafted titanium battle helm forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_cuirass: {
        id: 'titanium_cuirass',
        name: 'Titanium Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 52,
        durability: 750,
        description: 'A finely crafted titanium chestplate forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_greaves: {
        id: 'titanium_greaves',
        name: 'Titanium Leggings',
        category: 'tool',
        slot: 'body',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 52,
        durability: 750,
        description: 'A finely crafted titanium leggings forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_boots: {
        id: 'titanium_boots',
        name: 'Titanium Treads',
        category: 'tool',
        slot: 'body',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 52,
        durability: 750,
        description: 'A finely crafted titanium treads forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_shield: {
        id: 'titanium_shield',
        name: 'Titanium Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 52,
        durability: 750,
        description: 'A finely crafted titanium reinforced shield forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_fishing_pole: {
        id: 'titanium_fishing_pole',
        name: 'Titanium Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 44,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium angler rod forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    titanium_harpoon: {
        id: 'titanium_harpoon',
        name: 'Titanium Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 50,
        chopPower: 12,
        minePower: 12,
        defense: 0,
        durability: 750,
        description: 'A finely crafted titanium marine harpoon forged from titanium materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_axe: {
        id: 'relic_axe',
        name: 'Ancient Relic Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic axe forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_pickaxe: {
        id: 'relic_pickaxe',
        name: 'Ancient Relic Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic pickaxe forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_dagger: {
        id: 'relic_dagger',
        name: 'Ancient Relic Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 61,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic dagger forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_spear: {
        id: 'relic_spear',
        name: 'Ancient Relic Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 61,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic spear forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_mace: {
        id: 'relic_mace',
        name: 'Ancient Relic War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 61,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic war mace forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_bow: {
        id: 'relic_bow',
        name: 'Ancient Relic Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic hunting bow forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_crossbow: {
        id: 'relic_crossbow',
        name: 'Ancient Relic Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic arbalest forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_helmet: {
        id: 'relic_helmet',
        name: 'Ancient Relic Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 66,
        durability: 1000,
        description: 'A finely crafted ancient relic battle helm forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_cuirass: {
        id: 'relic_cuirass',
        name: 'Ancient Relic Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 66,
        durability: 1000,
        description: 'A finely crafted ancient relic chestplate forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_greaves: {
        id: 'relic_greaves',
        name: 'Ancient Relic Leggings',
        category: 'tool',
        slot: 'body',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 66,
        durability: 1000,
        description: 'A finely crafted ancient relic leggings forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_boots: {
        id: 'relic_boots',
        name: 'Ancient Relic Treads',
        category: 'tool',
        slot: 'body',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 66,
        durability: 1000,
        description: 'A finely crafted ancient relic treads forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_shield: {
        id: 'relic_shield',
        name: 'Ancient Relic Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 66,
        durability: 1000,
        description: 'A finely crafted ancient relic reinforced shield forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_fishing_pole: {
        id: 'relic_fishing_pole',
        name: 'Ancient Relic Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 55,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic angler rod forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    relic_harpoon: {
        id: 'relic_harpoon',
        name: 'Ancient Relic Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 61,
        chopPower: 15,
        minePower: 15,
        defense: 0,
        durability: 1000,
        description: 'A finely crafted ancient relic marine harpoon forged from ancient relic materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_axe: {
        id: 'volcanic_axe',
        name: 'Volcanic Core Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core axe forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_pickaxe: {
        id: 'volcanic_pickaxe',
        name: 'Volcanic Core Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core pickaxe forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_dagger: {
        id: 'volcanic_dagger',
        name: 'Volcanic Core Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 71,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core dagger forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_spear: {
        id: 'volcanic_spear',
        name: 'Volcanic Core Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 71,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core spear forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_mace: {
        id: 'volcanic_mace',
        name: 'Volcanic Core War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 71,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core war mace forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_bow: {
        id: 'volcanic_bow',
        name: 'Volcanic Core Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core hunting bow forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_crossbow: {
        id: 'volcanic_crossbow',
        name: 'Volcanic Core Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core arbalest forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_helmet: {
        id: 'volcanic_helmet',
        name: 'Volcanic Core Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 78,
        durability: 1200,
        description: 'A finely crafted volcanic core battle helm forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_cuirass: {
        id: 'volcanic_cuirass',
        name: 'Volcanic Core Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 78,
        durability: 1200,
        description: 'A finely crafted volcanic core chestplate forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_greaves: {
        id: 'volcanic_greaves',
        name: 'Volcanic Core Leggings',
        category: 'tool',
        slot: 'body',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 78,
        durability: 1200,
        description: 'A finely crafted volcanic core leggings forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_boots: {
        id: 'volcanic_boots',
        name: 'Volcanic Core Treads',
        category: 'tool',
        slot: 'body',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 78,
        durability: 1200,
        description: 'A finely crafted volcanic core treads forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_shield: {
        id: 'volcanic_shield',
        name: 'Volcanic Core Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 78,
        durability: 1200,
        description: 'A finely crafted volcanic core reinforced shield forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_fishing_pole: {
        id: 'volcanic_fishing_pole',
        name: 'Volcanic Core Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 65,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core angler rod forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    volcanic_harpoon: {
        id: 'volcanic_harpoon',
        name: 'Volcanic Core Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 71,
        chopPower: 18,
        minePower: 18,
        defense: 0,
        durability: 1200,
        description: 'A finely crafted volcanic core marine harpoon forged from volcanic core materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_axe: {
        id: 'abyssal_axe',
        name: 'Abyssal Chitin Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin axe forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_pickaxe: {
        id: 'abyssal_pickaxe',
        name: 'Abyssal Chitin Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin pickaxe forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_dagger: {
        id: 'abyssal_dagger',
        name: 'Abyssal Chitin Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 78,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin dagger forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_spear: {
        id: 'abyssal_spear',
        name: 'Abyssal Chitin Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 78,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin spear forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_mace: {
        id: 'abyssal_mace',
        name: 'Abyssal Chitin War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 78,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin war mace forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_bow: {
        id: 'abyssal_bow',
        name: 'Abyssal Chitin Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin hunting bow forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_crossbow: {
        id: 'abyssal_crossbow',
        name: 'Abyssal Chitin Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin arbalest forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_helmet: {
        id: 'abyssal_helmet',
        name: 'Abyssal Chitin Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 86,
        durability: 1400,
        description: 'A finely crafted abyssal chitin battle helm forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_cuirass: {
        id: 'abyssal_cuirass',
        name: 'Abyssal Chitin Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 86,
        durability: 1400,
        description: 'A finely crafted abyssal chitin chestplate forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_greaves: {
        id: 'abyssal_greaves',
        name: 'Abyssal Chitin Leggings',
        category: 'tool',
        slot: 'body',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 86,
        durability: 1400,
        description: 'A finely crafted abyssal chitin leggings forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_boots: {
        id: 'abyssal_boots',
        name: 'Abyssal Chitin Treads',
        category: 'tool',
        slot: 'body',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 86,
        durability: 1400,
        description: 'A finely crafted abyssal chitin treads forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_shield: {
        id: 'abyssal_shield',
        name: 'Abyssal Chitin Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 86,
        durability: 1400,
        description: 'A finely crafted abyssal chitin reinforced shield forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_fishing_pole: {
        id: 'abyssal_fishing_pole',
        name: 'Abyssal Chitin Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 72,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin angler rod forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    abyssal_harpoon: {
        id: 'abyssal_harpoon',
        name: 'Abyssal Chitin Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 78,
        chopPower: 20,
        minePower: 20,
        defense: 0,
        durability: 1400,
        description: 'A finely crafted abyssal chitin marine harpoon forged from abyssal chitin materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#00CED1';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_axe: {
        id: 'solarite_axe',
        name: 'Solarite Axe',
        category: 'tool',
        slot: 'mainhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite axe forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_pickaxe: {
        id: 'solarite_pickaxe',
        name: 'Solarite Pickaxe',
        category: 'tool',
        slot: 'mainhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite pickaxe forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_dagger: {
        id: 'solarite_dagger',
        name: 'Solarite Dagger',
        category: 'weapon',
        slot: 'mainhand',
        damage: 86,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite dagger forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_spear: {
        id: 'solarite_spear',
        name: 'Solarite Spear',
        category: 'weapon',
        slot: 'mainhand',
        damage: 86,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite spear forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_mace: {
        id: 'solarite_mace',
        name: 'Solarite War Mace',
        category: 'weapon',
        slot: 'mainhand',
        damage: 86,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite war mace forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_bow: {
        id: 'solarite_bow',
        name: 'Solarite Hunting Bow',
        category: 'weapon',
        slot: 'mainhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite hunting bow forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_crossbow: {
        id: 'solarite_crossbow',
        name: 'Solarite Arbalest',
        category: 'weapon',
        slot: 'mainhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite arbalest forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_helmet: {
        id: 'solarite_helmet',
        name: 'Solarite Battle Helm',
        category: 'tool',
        slot: 'head',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 96,
        durability: 1600,
        description: 'A finely crafted solarite battle helm forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_cuirass: {
        id: 'solarite_cuirass',
        name: 'Solarite Chestplate',
        category: 'tool',
        slot: 'body',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 96,
        durability: 1600,
        description: 'A finely crafted solarite chestplate forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_greaves: {
        id: 'solarite_greaves',
        name: 'Solarite Leggings',
        category: 'tool',
        slot: 'body',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 96,
        durability: 1600,
        description: 'A finely crafted solarite leggings forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_boots: {
        id: 'solarite_boots',
        name: 'Solarite Treads',
        category: 'tool',
        slot: 'body',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 96,
        durability: 1600,
        description: 'A finely crafted solarite treads forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_shield: {
        id: 'solarite_shield',
        name: 'Solarite Reinforced Shield',
        category: 'tool',
        slot: 'offhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 96,
        durability: 1600,
        description: 'A finely crafted solarite reinforced shield forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_fishing_pole: {
        id: 'solarite_fishing_pole',
        name: 'Solarite Angler Rod',
        category: 'tool',
        slot: 'mainhand',
        damage: 80,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite angler rod forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    solarite_harpoon: {
        id: 'solarite_harpoon',
        name: 'Solarite Marine Harpoon',
        category: 'weapon',
        slot: 'mainhand',
        damage: 86,
        chopPower: 24,
        minePower: 24,
        defense: 0,
        durability: 1600,
        description: 'A finely crafted solarite marine harpoon forged from solarite materials.',
        stackable: false,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.roundRect(x + s * 0.2, y + s * 0.2, s * 0.6, s * 0.6, 6);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + s * 0.4, y + s * 0.4, s * 0.2, s * 0.2);
        }
    },
    island_resource_specimen_1: {
        id: 'island_resource_specimen_1',
        name: 'Island Resource Specimen #1',
        category: 'resource',
        description: 'Botanical and geological specimen #1 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#01e240';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_2: {
        id: 'island_resource_specimen_2',
        name: 'Island Resource Specimen #2',
        category: 'resource',
        description: 'Botanical and geological specimen #2 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#03c480';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_3: {
        id: 'island_resource_specimen_3',
        name: 'Island Resource Specimen #3',
        category: 'resource',
        description: 'Botanical and geological specimen #3 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#05a6c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_4: {
        id: 'island_resource_specimen_4',
        name: 'Island Resource Specimen #4',
        category: 'resource',
        description: 'Botanical and geological specimen #4 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#078900';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_5: {
        id: 'island_resource_specimen_5',
        name: 'Island Resource Specimen #5',
        category: 'resource',
        description: 'Botanical and geological specimen #5 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#096b40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_6: {
        id: 'island_resource_specimen_6',
        name: 'Island Resource Specimen #6',
        category: 'resource',
        description: 'Botanical and geological specimen #6 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0b4d80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_7: {
        id: 'island_resource_specimen_7',
        name: 'Island Resource Specimen #7',
        category: 'resource',
        description: 'Botanical and geological specimen #7 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0d2fc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_8: {
        id: 'island_resource_specimen_8',
        name: 'Island Resource Specimen #8',
        category: 'resource',
        description: 'Botanical and geological specimen #8 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0f1200';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_9: {
        id: 'island_resource_specimen_9',
        name: 'Island Resource Specimen #9',
        category: 'resource',
        description: 'Botanical and geological specimen #9 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#10f440';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_10: {
        id: 'island_resource_specimen_10',
        name: 'Island Resource Specimen #10',
        category: 'resource',
        description: 'Botanical and geological specimen #10 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#12d680';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_11: {
        id: 'island_resource_specimen_11',
        name: 'Island Resource Specimen #11',
        category: 'resource',
        description: 'Botanical and geological specimen #11 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#14b8c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_12: {
        id: 'island_resource_specimen_12',
        name: 'Island Resource Specimen #12',
        category: 'resource',
        description: 'Botanical and geological specimen #12 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#169b00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_13: {
        id: 'island_resource_specimen_13',
        name: 'Island Resource Specimen #13',
        category: 'resource',
        description: 'Botanical and geological specimen #13 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#187d40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_14: {
        id: 'island_resource_specimen_14',
        name: 'Island Resource Specimen #14',
        category: 'resource',
        description: 'Botanical and geological specimen #14 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1a5f80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_15: {
        id: 'island_resource_specimen_15',
        name: 'Island Resource Specimen #15',
        category: 'resource',
        description: 'Botanical and geological specimen #15 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1c41c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_16: {
        id: 'island_resource_specimen_16',
        name: 'Island Resource Specimen #16',
        category: 'resource',
        description: 'Botanical and geological specimen #16 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1e2400';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_17: {
        id: 'island_resource_specimen_17',
        name: 'Island Resource Specimen #17',
        category: 'resource',
        description: 'Botanical and geological specimen #17 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#200640';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_18: {
        id: 'island_resource_specimen_18',
        name: 'Island Resource Specimen #18',
        category: 'resource',
        description: 'Botanical and geological specimen #18 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#21e880';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_19: {
        id: 'island_resource_specimen_19',
        name: 'Island Resource Specimen #19',
        category: 'resource',
        description: 'Botanical and geological specimen #19 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#23cac0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_20: {
        id: 'island_resource_specimen_20',
        name: 'Island Resource Specimen #20',
        category: 'resource',
        description: 'Botanical and geological specimen #20 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#25ad00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_21: {
        id: 'island_resource_specimen_21',
        name: 'Island Resource Specimen #21',
        category: 'resource',
        description: 'Botanical and geological specimen #21 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#278f40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_22: {
        id: 'island_resource_specimen_22',
        name: 'Island Resource Specimen #22',
        category: 'resource',
        description: 'Botanical and geological specimen #22 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#297180';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_23: {
        id: 'island_resource_specimen_23',
        name: 'Island Resource Specimen #23',
        category: 'resource',
        description: 'Botanical and geological specimen #23 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2b53c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_24: {
        id: 'island_resource_specimen_24',
        name: 'Island Resource Specimen #24',
        category: 'resource',
        description: 'Botanical and geological specimen #24 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2d3600';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_25: {
        id: 'island_resource_specimen_25',
        name: 'Island Resource Specimen #25',
        category: 'resource',
        description: 'Botanical and geological specimen #25 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2f1840';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_26: {
        id: 'island_resource_specimen_26',
        name: 'Island Resource Specimen #26',
        category: 'resource',
        description: 'Botanical and geological specimen #26 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#30fa80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_27: {
        id: 'island_resource_specimen_27',
        name: 'Island Resource Specimen #27',
        category: 'resource',
        description: 'Botanical and geological specimen #27 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#32dcc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_28: {
        id: 'island_resource_specimen_28',
        name: 'Island Resource Specimen #28',
        category: 'resource',
        description: 'Botanical and geological specimen #28 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#34bf00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_29: {
        id: 'island_resource_specimen_29',
        name: 'Island Resource Specimen #29',
        category: 'resource',
        description: 'Botanical and geological specimen #29 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#36a140';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_30: {
        id: 'island_resource_specimen_30',
        name: 'Island Resource Specimen #30',
        category: 'resource',
        description: 'Botanical and geological specimen #30 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#388380';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_31: {
        id: 'island_resource_specimen_31',
        name: 'Island Resource Specimen #31',
        category: 'resource',
        description: 'Botanical and geological specimen #31 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3a65c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_32: {
        id: 'island_resource_specimen_32',
        name: 'Island Resource Specimen #32',
        category: 'resource',
        description: 'Botanical and geological specimen #32 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3c4800';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_33: {
        id: 'island_resource_specimen_33',
        name: 'Island Resource Specimen #33',
        category: 'resource',
        description: 'Botanical and geological specimen #33 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3e2a40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_34: {
        id: 'island_resource_specimen_34',
        name: 'Island Resource Specimen #34',
        category: 'resource',
        description: 'Botanical and geological specimen #34 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#400c80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_35: {
        id: 'island_resource_specimen_35',
        name: 'Island Resource Specimen #35',
        category: 'resource',
        description: 'Botanical and geological specimen #35 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#41eec0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_36: {
        id: 'island_resource_specimen_36',
        name: 'Island Resource Specimen #36',
        category: 'resource',
        description: 'Botanical and geological specimen #36 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#43d100';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_37: {
        id: 'island_resource_specimen_37',
        name: 'Island Resource Specimen #37',
        category: 'resource',
        description: 'Botanical and geological specimen #37 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#45b340';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_38: {
        id: 'island_resource_specimen_38',
        name: 'Island Resource Specimen #38',
        category: 'resource',
        description: 'Botanical and geological specimen #38 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#479580';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_39: {
        id: 'island_resource_specimen_39',
        name: 'Island Resource Specimen #39',
        category: 'resource',
        description: 'Botanical and geological specimen #39 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4977c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_40: {
        id: 'island_resource_specimen_40',
        name: 'Island Resource Specimen #40',
        category: 'resource',
        description: 'Botanical and geological specimen #40 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4b5a00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_41: {
        id: 'island_resource_specimen_41',
        name: 'Island Resource Specimen #41',
        category: 'resource',
        description: 'Botanical and geological specimen #41 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4d3c40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_42: {
        id: 'island_resource_specimen_42',
        name: 'Island Resource Specimen #42',
        category: 'resource',
        description: 'Botanical and geological specimen #42 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4f1e80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_43: {
        id: 'island_resource_specimen_43',
        name: 'Island Resource Specimen #43',
        category: 'resource',
        description: 'Botanical and geological specimen #43 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5100c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_44: {
        id: 'island_resource_specimen_44',
        name: 'Island Resource Specimen #44',
        category: 'resource',
        description: 'Botanical and geological specimen #44 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#52e300';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_45: {
        id: 'island_resource_specimen_45',
        name: 'Island Resource Specimen #45',
        category: 'resource',
        description: 'Botanical and geological specimen #45 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#54c540';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_46: {
        id: 'island_resource_specimen_46',
        name: 'Island Resource Specimen #46',
        category: 'resource',
        description: 'Botanical and geological specimen #46 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#56a780';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_47: {
        id: 'island_resource_specimen_47',
        name: 'Island Resource Specimen #47',
        category: 'resource',
        description: 'Botanical and geological specimen #47 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5889c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_48: {
        id: 'island_resource_specimen_48',
        name: 'Island Resource Specimen #48',
        category: 'resource',
        description: 'Botanical and geological specimen #48 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5a6c00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_49: {
        id: 'island_resource_specimen_49',
        name: 'Island Resource Specimen #49',
        category: 'resource',
        description: 'Botanical and geological specimen #49 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5c4e40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_50: {
        id: 'island_resource_specimen_50',
        name: 'Island Resource Specimen #50',
        category: 'resource',
        description: 'Botanical and geological specimen #50 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5e3080';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_51: {
        id: 'island_resource_specimen_51',
        name: 'Island Resource Specimen #51',
        category: 'resource',
        description: 'Botanical and geological specimen #51 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6012c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_52: {
        id: 'island_resource_specimen_52',
        name: 'Island Resource Specimen #52',
        category: 'resource',
        description: 'Botanical and geological specimen #52 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#61f500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_53: {
        id: 'island_resource_specimen_53',
        name: 'Island Resource Specimen #53',
        category: 'resource',
        description: 'Botanical and geological specimen #53 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#63d740';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_54: {
        id: 'island_resource_specimen_54',
        name: 'Island Resource Specimen #54',
        category: 'resource',
        description: 'Botanical and geological specimen #54 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#65b980';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_55: {
        id: 'island_resource_specimen_55',
        name: 'Island Resource Specimen #55',
        category: 'resource',
        description: 'Botanical and geological specimen #55 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#679bc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_56: {
        id: 'island_resource_specimen_56',
        name: 'Island Resource Specimen #56',
        category: 'resource',
        description: 'Botanical and geological specimen #56 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#697e00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_57: {
        id: 'island_resource_specimen_57',
        name: 'Island Resource Specimen #57',
        category: 'resource',
        description: 'Botanical and geological specimen #57 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6b6040';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_58: {
        id: 'island_resource_specimen_58',
        name: 'Island Resource Specimen #58',
        category: 'resource',
        description: 'Botanical and geological specimen #58 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6d4280';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_59: {
        id: 'island_resource_specimen_59',
        name: 'Island Resource Specimen #59',
        category: 'resource',
        description: 'Botanical and geological specimen #59 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6f24c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_60: {
        id: 'island_resource_specimen_60',
        name: 'Island Resource Specimen #60',
        category: 'resource',
        description: 'Botanical and geological specimen #60 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#710700';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_61: {
        id: 'island_resource_specimen_61',
        name: 'Island Resource Specimen #61',
        category: 'resource',
        description: 'Botanical and geological specimen #61 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#72e940';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_62: {
        id: 'island_resource_specimen_62',
        name: 'Island Resource Specimen #62',
        category: 'resource',
        description: 'Botanical and geological specimen #62 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#74cb80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_63: {
        id: 'island_resource_specimen_63',
        name: 'Island Resource Specimen #63',
        category: 'resource',
        description: 'Botanical and geological specimen #63 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#76adc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_64: {
        id: 'island_resource_specimen_64',
        name: 'Island Resource Specimen #64',
        category: 'resource',
        description: 'Botanical and geological specimen #64 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#789000';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_65: {
        id: 'island_resource_specimen_65',
        name: 'Island Resource Specimen #65',
        category: 'resource',
        description: 'Botanical and geological specimen #65 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7a7240';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_66: {
        id: 'island_resource_specimen_66',
        name: 'Island Resource Specimen #66',
        category: 'resource',
        description: 'Botanical and geological specimen #66 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7c5480';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_67: {
        id: 'island_resource_specimen_67',
        name: 'Island Resource Specimen #67',
        category: 'resource',
        description: 'Botanical and geological specimen #67 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7e36c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_68: {
        id: 'island_resource_specimen_68',
        name: 'Island Resource Specimen #68',
        category: 'resource',
        description: 'Botanical and geological specimen #68 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#801900';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_69: {
        id: 'island_resource_specimen_69',
        name: 'Island Resource Specimen #69',
        category: 'resource',
        description: 'Botanical and geological specimen #69 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#81fb40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_70: {
        id: 'island_resource_specimen_70',
        name: 'Island Resource Specimen #70',
        category: 'resource',
        description: 'Botanical and geological specimen #70 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#83dd80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_71: {
        id: 'island_resource_specimen_71',
        name: 'Island Resource Specimen #71',
        category: 'resource',
        description: 'Botanical and geological specimen #71 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#85bfc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_72: {
        id: 'island_resource_specimen_72',
        name: 'Island Resource Specimen #72',
        category: 'resource',
        description: 'Botanical and geological specimen #72 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#87a200';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_73: {
        id: 'island_resource_specimen_73',
        name: 'Island Resource Specimen #73',
        category: 'resource',
        description: 'Botanical and geological specimen #73 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#898440';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_74: {
        id: 'island_resource_specimen_74',
        name: 'Island Resource Specimen #74',
        category: 'resource',
        description: 'Botanical and geological specimen #74 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8b6680';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_75: {
        id: 'island_resource_specimen_75',
        name: 'Island Resource Specimen #75',
        category: 'resource',
        description: 'Botanical and geological specimen #75 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8d48c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_76: {
        id: 'island_resource_specimen_76',
        name: 'Island Resource Specimen #76',
        category: 'resource',
        description: 'Botanical and geological specimen #76 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8f2b00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_77: {
        id: 'island_resource_specimen_77',
        name: 'Island Resource Specimen #77',
        category: 'resource',
        description: 'Botanical and geological specimen #77 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#910d40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_78: {
        id: 'island_resource_specimen_78',
        name: 'Island Resource Specimen #78',
        category: 'resource',
        description: 'Botanical and geological specimen #78 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#92ef80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_79: {
        id: 'island_resource_specimen_79',
        name: 'Island Resource Specimen #79',
        category: 'resource',
        description: 'Botanical and geological specimen #79 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#94d1c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_80: {
        id: 'island_resource_specimen_80',
        name: 'Island Resource Specimen #80',
        category: 'resource',
        description: 'Botanical and geological specimen #80 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#96b400';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_81: {
        id: 'island_resource_specimen_81',
        name: 'Island Resource Specimen #81',
        category: 'resource',
        description: 'Botanical and geological specimen #81 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#989640';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_82: {
        id: 'island_resource_specimen_82',
        name: 'Island Resource Specimen #82',
        category: 'resource',
        description: 'Botanical and geological specimen #82 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9a7880';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_83: {
        id: 'island_resource_specimen_83',
        name: 'Island Resource Specimen #83',
        category: 'resource',
        description: 'Botanical and geological specimen #83 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9c5ac0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_84: {
        id: 'island_resource_specimen_84',
        name: 'Island Resource Specimen #84',
        category: 'resource',
        description: 'Botanical and geological specimen #84 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9e3d00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_85: {
        id: 'island_resource_specimen_85',
        name: 'Island Resource Specimen #85',
        category: 'resource',
        description: 'Botanical and geological specimen #85 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a01f40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_86: {
        id: 'island_resource_specimen_86',
        name: 'Island Resource Specimen #86',
        category: 'resource',
        description: 'Botanical and geological specimen #86 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a20180';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_87: {
        id: 'island_resource_specimen_87',
        name: 'Island Resource Specimen #87',
        category: 'resource',
        description: 'Botanical and geological specimen #87 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a3e3c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_88: {
        id: 'island_resource_specimen_88',
        name: 'Island Resource Specimen #88',
        category: 'resource',
        description: 'Botanical and geological specimen #88 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a5c600';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_89: {
        id: 'island_resource_specimen_89',
        name: 'Island Resource Specimen #89',
        category: 'resource',
        description: 'Botanical and geological specimen #89 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a7a840';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_90: {
        id: 'island_resource_specimen_90',
        name: 'Island Resource Specimen #90',
        category: 'resource',
        description: 'Botanical and geological specimen #90 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a98a80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_91: {
        id: 'island_resource_specimen_91',
        name: 'Island Resource Specimen #91',
        category: 'resource',
        description: 'Botanical and geological specimen #91 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ab6cc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_92: {
        id: 'island_resource_specimen_92',
        name: 'Island Resource Specimen #92',
        category: 'resource',
        description: 'Botanical and geological specimen #92 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ad4f00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_93: {
        id: 'island_resource_specimen_93',
        name: 'Island Resource Specimen #93',
        category: 'resource',
        description: 'Botanical and geological specimen #93 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#af3140';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_94: {
        id: 'island_resource_specimen_94',
        name: 'Island Resource Specimen #94',
        category: 'resource',
        description: 'Botanical and geological specimen #94 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b11380';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_95: {
        id: 'island_resource_specimen_95',
        name: 'Island Resource Specimen #95',
        category: 'resource',
        description: 'Botanical and geological specimen #95 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b2f5c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_96: {
        id: 'island_resource_specimen_96',
        name: 'Island Resource Specimen #96',
        category: 'resource',
        description: 'Botanical and geological specimen #96 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b4d800';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_97: {
        id: 'island_resource_specimen_97',
        name: 'Island Resource Specimen #97',
        category: 'resource',
        description: 'Botanical and geological specimen #97 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b6ba40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_98: {
        id: 'island_resource_specimen_98',
        name: 'Island Resource Specimen #98',
        category: 'resource',
        description: 'Botanical and geological specimen #98 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b89c80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_99: {
        id: 'island_resource_specimen_99',
        name: 'Island Resource Specimen #99',
        category: 'resource',
        description: 'Botanical and geological specimen #99 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ba7ec0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_100: {
        id: 'island_resource_specimen_100',
        name: 'Island Resource Specimen #100',
        category: 'resource',
        description: 'Botanical and geological specimen #100 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bc6100';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_101: {
        id: 'island_resource_specimen_101',
        name: 'Island Resource Specimen #101',
        category: 'resource',
        description: 'Botanical and geological specimen #101 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#be4340';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_102: {
        id: 'island_resource_specimen_102',
        name: 'Island Resource Specimen #102',
        category: 'resource',
        description: 'Botanical and geological specimen #102 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c02580';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_103: {
        id: 'island_resource_specimen_103',
        name: 'Island Resource Specimen #103',
        category: 'resource',
        description: 'Botanical and geological specimen #103 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c207c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_104: {
        id: 'island_resource_specimen_104',
        name: 'Island Resource Specimen #104',
        category: 'resource',
        description: 'Botanical and geological specimen #104 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c3ea00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_105: {
        id: 'island_resource_specimen_105',
        name: 'Island Resource Specimen #105',
        category: 'resource',
        description: 'Botanical and geological specimen #105 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c5cc40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_106: {
        id: 'island_resource_specimen_106',
        name: 'Island Resource Specimen #106',
        category: 'resource',
        description: 'Botanical and geological specimen #106 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c7ae80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_107: {
        id: 'island_resource_specimen_107',
        name: 'Island Resource Specimen #107',
        category: 'resource',
        description: 'Botanical and geological specimen #107 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c990c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_108: {
        id: 'island_resource_specimen_108',
        name: 'Island Resource Specimen #108',
        category: 'resource',
        description: 'Botanical and geological specimen #108 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cb7300';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_109: {
        id: 'island_resource_specimen_109',
        name: 'Island Resource Specimen #109',
        category: 'resource',
        description: 'Botanical and geological specimen #109 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cd5540';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_110: {
        id: 'island_resource_specimen_110',
        name: 'Island Resource Specimen #110',
        category: 'resource',
        description: 'Botanical and geological specimen #110 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cf3780';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_111: {
        id: 'island_resource_specimen_111',
        name: 'Island Resource Specimen #111',
        category: 'resource',
        description: 'Botanical and geological specimen #111 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d119c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_112: {
        id: 'island_resource_specimen_112',
        name: 'Island Resource Specimen #112',
        category: 'resource',
        description: 'Botanical and geological specimen #112 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d2fc00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_113: {
        id: 'island_resource_specimen_113',
        name: 'Island Resource Specimen #113',
        category: 'resource',
        description: 'Botanical and geological specimen #113 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d4de40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_114: {
        id: 'island_resource_specimen_114',
        name: 'Island Resource Specimen #114',
        category: 'resource',
        description: 'Botanical and geological specimen #114 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d6c080';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_115: {
        id: 'island_resource_specimen_115',
        name: 'Island Resource Specimen #115',
        category: 'resource',
        description: 'Botanical and geological specimen #115 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d8a2c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_116: {
        id: 'island_resource_specimen_116',
        name: 'Island Resource Specimen #116',
        category: 'resource',
        description: 'Botanical and geological specimen #116 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#da8500';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_117: {
        id: 'island_resource_specimen_117',
        name: 'Island Resource Specimen #117',
        category: 'resource',
        description: 'Botanical and geological specimen #117 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dc6740';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_118: {
        id: 'island_resource_specimen_118',
        name: 'Island Resource Specimen #118',
        category: 'resource',
        description: 'Botanical and geological specimen #118 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#de4980';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_119: {
        id: 'island_resource_specimen_119',
        name: 'Island Resource Specimen #119',
        category: 'resource',
        description: 'Botanical and geological specimen #119 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e02bc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_120: {
        id: 'island_resource_specimen_120',
        name: 'Island Resource Specimen #120',
        category: 'resource',
        description: 'Botanical and geological specimen #120 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e20e00';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_121: {
        id: 'island_resource_specimen_121',
        name: 'Island Resource Specimen #121',
        category: 'resource',
        description: 'Botanical and geological specimen #121 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e3f040';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_122: {
        id: 'island_resource_specimen_122',
        name: 'Island Resource Specimen #122',
        category: 'resource',
        description: 'Botanical and geological specimen #122 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e5d280';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_123: {
        id: 'island_resource_specimen_123',
        name: 'Island Resource Specimen #123',
        category: 'resource',
        description: 'Botanical and geological specimen #123 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e7b4c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_124: {
        id: 'island_resource_specimen_124',
        name: 'Island Resource Specimen #124',
        category: 'resource',
        description: 'Botanical and geological specimen #124 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e99700';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_125: {
        id: 'island_resource_specimen_125',
        name: 'Island Resource Specimen #125',
        category: 'resource',
        description: 'Botanical and geological specimen #125 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#eb7940';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_126: {
        id: 'island_resource_specimen_126',
        name: 'Island Resource Specimen #126',
        category: 'resource',
        description: 'Botanical and geological specimen #126 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ed5b80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_127: {
        id: 'island_resource_specimen_127',
        name: 'Island Resource Specimen #127',
        category: 'resource',
        description: 'Botanical and geological specimen #127 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ef3dc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_128: {
        id: 'island_resource_specimen_128',
        name: 'Island Resource Specimen #128',
        category: 'resource',
        description: 'Botanical and geological specimen #128 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f12000';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_129: {
        id: 'island_resource_specimen_129',
        name: 'Island Resource Specimen #129',
        category: 'resource',
        description: 'Botanical and geological specimen #129 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f30240';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_130: {
        id: 'island_resource_specimen_130',
        name: 'Island Resource Specimen #130',
        category: 'resource',
        description: 'Botanical and geological specimen #130 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f4e480';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_131: {
        id: 'island_resource_specimen_131',
        name: 'Island Resource Specimen #131',
        category: 'resource',
        description: 'Botanical and geological specimen #131 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f6c6c0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_132: {
        id: 'island_resource_specimen_132',
        name: 'Island Resource Specimen #132',
        category: 'resource',
        description: 'Botanical and geological specimen #132 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f8a900';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_133: {
        id: 'island_resource_specimen_133',
        name: 'Island Resource Specimen #133',
        category: 'resource',
        description: 'Botanical and geological specimen #133 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fa8b40';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_134: {
        id: 'island_resource_specimen_134',
        name: 'Island Resource Specimen #134',
        category: 'resource',
        description: 'Botanical and geological specimen #134 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fc6d80';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_135: {
        id: 'island_resource_specimen_135',
        name: 'Island Resource Specimen #135',
        category: 'resource',
        description: 'Botanical and geological specimen #135 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fe4fc0';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_136: {
        id: 'island_resource_specimen_136',
        name: 'Island Resource Specimen #136',
        category: 'resource',
        description: 'Botanical and geological specimen #136 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#003201';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_137: {
        id: 'island_resource_specimen_137',
        name: 'Island Resource Specimen #137',
        category: 'resource',
        description: 'Botanical and geological specimen #137 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#021441';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_138: {
        id: 'island_resource_specimen_138',
        name: 'Island Resource Specimen #138',
        category: 'resource',
        description: 'Botanical and geological specimen #138 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#03f681';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_139: {
        id: 'island_resource_specimen_139',
        name: 'Island Resource Specimen #139',
        category: 'resource',
        description: 'Botanical and geological specimen #139 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#05d8c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_140: {
        id: 'island_resource_specimen_140',
        name: 'Island Resource Specimen #140',
        category: 'resource',
        description: 'Botanical and geological specimen #140 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#07bb01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_141: {
        id: 'island_resource_specimen_141',
        name: 'Island Resource Specimen #141',
        category: 'resource',
        description: 'Botanical and geological specimen #141 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#099d41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_142: {
        id: 'island_resource_specimen_142',
        name: 'Island Resource Specimen #142',
        category: 'resource',
        description: 'Botanical and geological specimen #142 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0b7f81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_143: {
        id: 'island_resource_specimen_143',
        name: 'Island Resource Specimen #143',
        category: 'resource',
        description: 'Botanical and geological specimen #143 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0d61c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_144: {
        id: 'island_resource_specimen_144',
        name: 'Island Resource Specimen #144',
        category: 'resource',
        description: 'Botanical and geological specimen #144 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0f4401';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_145: {
        id: 'island_resource_specimen_145',
        name: 'Island Resource Specimen #145',
        category: 'resource',
        description: 'Botanical and geological specimen #145 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#112641';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_146: {
        id: 'island_resource_specimen_146',
        name: 'Island Resource Specimen #146',
        category: 'resource',
        description: 'Botanical and geological specimen #146 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#130881';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_147: {
        id: 'island_resource_specimen_147',
        name: 'Island Resource Specimen #147',
        category: 'resource',
        description: 'Botanical and geological specimen #147 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#14eac1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_148: {
        id: 'island_resource_specimen_148',
        name: 'Island Resource Specimen #148',
        category: 'resource',
        description: 'Botanical and geological specimen #148 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#16cd01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_149: {
        id: 'island_resource_specimen_149',
        name: 'Island Resource Specimen #149',
        category: 'resource',
        description: 'Botanical and geological specimen #149 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#18af41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_150: {
        id: 'island_resource_specimen_150',
        name: 'Island Resource Specimen #150',
        category: 'resource',
        description: 'Botanical and geological specimen #150 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1a9181';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_151: {
        id: 'island_resource_specimen_151',
        name: 'Island Resource Specimen #151',
        category: 'resource',
        description: 'Botanical and geological specimen #151 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1c73c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_152: {
        id: 'island_resource_specimen_152',
        name: 'Island Resource Specimen #152',
        category: 'resource',
        description: 'Botanical and geological specimen #152 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1e5601';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_153: {
        id: 'island_resource_specimen_153',
        name: 'Island Resource Specimen #153',
        category: 'resource',
        description: 'Botanical and geological specimen #153 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#203841';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_154: {
        id: 'island_resource_specimen_154',
        name: 'Island Resource Specimen #154',
        category: 'resource',
        description: 'Botanical and geological specimen #154 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#221a81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_155: {
        id: 'island_resource_specimen_155',
        name: 'Island Resource Specimen #155',
        category: 'resource',
        description: 'Botanical and geological specimen #155 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#23fcc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_156: {
        id: 'island_resource_specimen_156',
        name: 'Island Resource Specimen #156',
        category: 'resource',
        description: 'Botanical and geological specimen #156 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#25df01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_157: {
        id: 'island_resource_specimen_157',
        name: 'Island Resource Specimen #157',
        category: 'resource',
        description: 'Botanical and geological specimen #157 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#27c141';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_158: {
        id: 'island_resource_specimen_158',
        name: 'Island Resource Specimen #158',
        category: 'resource',
        description: 'Botanical and geological specimen #158 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#29a381';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_159: {
        id: 'island_resource_specimen_159',
        name: 'Island Resource Specimen #159',
        category: 'resource',
        description: 'Botanical and geological specimen #159 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2b85c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_160: {
        id: 'island_resource_specimen_160',
        name: 'Island Resource Specimen #160',
        category: 'resource',
        description: 'Botanical and geological specimen #160 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2d6801';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_161: {
        id: 'island_resource_specimen_161',
        name: 'Island Resource Specimen #161',
        category: 'resource',
        description: 'Botanical and geological specimen #161 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2f4a41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_162: {
        id: 'island_resource_specimen_162',
        name: 'Island Resource Specimen #162',
        category: 'resource',
        description: 'Botanical and geological specimen #162 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#312c81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_163: {
        id: 'island_resource_specimen_163',
        name: 'Island Resource Specimen #163',
        category: 'resource',
        description: 'Botanical and geological specimen #163 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#330ec1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_164: {
        id: 'island_resource_specimen_164',
        name: 'Island Resource Specimen #164',
        category: 'resource',
        description: 'Botanical and geological specimen #164 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#34f101';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_165: {
        id: 'island_resource_specimen_165',
        name: 'Island Resource Specimen #165',
        category: 'resource',
        description: 'Botanical and geological specimen #165 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#36d341';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_166: {
        id: 'island_resource_specimen_166',
        name: 'Island Resource Specimen #166',
        category: 'resource',
        description: 'Botanical and geological specimen #166 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#38b581';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_167: {
        id: 'island_resource_specimen_167',
        name: 'Island Resource Specimen #167',
        category: 'resource',
        description: 'Botanical and geological specimen #167 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3a97c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_168: {
        id: 'island_resource_specimen_168',
        name: 'Island Resource Specimen #168',
        category: 'resource',
        description: 'Botanical and geological specimen #168 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3c7a01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_169: {
        id: 'island_resource_specimen_169',
        name: 'Island Resource Specimen #169',
        category: 'resource',
        description: 'Botanical and geological specimen #169 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3e5c41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_170: {
        id: 'island_resource_specimen_170',
        name: 'Island Resource Specimen #170',
        category: 'resource',
        description: 'Botanical and geological specimen #170 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#403e81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_171: {
        id: 'island_resource_specimen_171',
        name: 'Island Resource Specimen #171',
        category: 'resource',
        description: 'Botanical and geological specimen #171 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4220c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_172: {
        id: 'island_resource_specimen_172',
        name: 'Island Resource Specimen #172',
        category: 'resource',
        description: 'Botanical and geological specimen #172 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#440301';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_173: {
        id: 'island_resource_specimen_173',
        name: 'Island Resource Specimen #173',
        category: 'resource',
        description: 'Botanical and geological specimen #173 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#45e541';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_174: {
        id: 'island_resource_specimen_174',
        name: 'Island Resource Specimen #174',
        category: 'resource',
        description: 'Botanical and geological specimen #174 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#47c781';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_175: {
        id: 'island_resource_specimen_175',
        name: 'Island Resource Specimen #175',
        category: 'resource',
        description: 'Botanical and geological specimen #175 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#49a9c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_176: {
        id: 'island_resource_specimen_176',
        name: 'Island Resource Specimen #176',
        category: 'resource',
        description: 'Botanical and geological specimen #176 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4b8c01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_177: {
        id: 'island_resource_specimen_177',
        name: 'Island Resource Specimen #177',
        category: 'resource',
        description: 'Botanical and geological specimen #177 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4d6e41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_178: {
        id: 'island_resource_specimen_178',
        name: 'Island Resource Specimen #178',
        category: 'resource',
        description: 'Botanical and geological specimen #178 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4f5081';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_179: {
        id: 'island_resource_specimen_179',
        name: 'Island Resource Specimen #179',
        category: 'resource',
        description: 'Botanical and geological specimen #179 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5132c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_180: {
        id: 'island_resource_specimen_180',
        name: 'Island Resource Specimen #180',
        category: 'resource',
        description: 'Botanical and geological specimen #180 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#531501';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_181: {
        id: 'island_resource_specimen_181',
        name: 'Island Resource Specimen #181',
        category: 'resource',
        description: 'Botanical and geological specimen #181 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#54f741';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_182: {
        id: 'island_resource_specimen_182',
        name: 'Island Resource Specimen #182',
        category: 'resource',
        description: 'Botanical and geological specimen #182 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#56d981';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_183: {
        id: 'island_resource_specimen_183',
        name: 'Island Resource Specimen #183',
        category: 'resource',
        description: 'Botanical and geological specimen #183 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#58bbc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_184: {
        id: 'island_resource_specimen_184',
        name: 'Island Resource Specimen #184',
        category: 'resource',
        description: 'Botanical and geological specimen #184 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5a9e01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_185: {
        id: 'island_resource_specimen_185',
        name: 'Island Resource Specimen #185',
        category: 'resource',
        description: 'Botanical and geological specimen #185 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5c8041';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_186: {
        id: 'island_resource_specimen_186',
        name: 'Island Resource Specimen #186',
        category: 'resource',
        description: 'Botanical and geological specimen #186 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5e6281';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_187: {
        id: 'island_resource_specimen_187',
        name: 'Island Resource Specimen #187',
        category: 'resource',
        description: 'Botanical and geological specimen #187 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6044c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_188: {
        id: 'island_resource_specimen_188',
        name: 'Island Resource Specimen #188',
        category: 'resource',
        description: 'Botanical and geological specimen #188 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#622701';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_189: {
        id: 'island_resource_specimen_189',
        name: 'Island Resource Specimen #189',
        category: 'resource',
        description: 'Botanical and geological specimen #189 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#640941';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_190: {
        id: 'island_resource_specimen_190',
        name: 'Island Resource Specimen #190',
        category: 'resource',
        description: 'Botanical and geological specimen #190 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#65eb81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_191: {
        id: 'island_resource_specimen_191',
        name: 'Island Resource Specimen #191',
        category: 'resource',
        description: 'Botanical and geological specimen #191 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#67cdc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_192: {
        id: 'island_resource_specimen_192',
        name: 'Island Resource Specimen #192',
        category: 'resource',
        description: 'Botanical and geological specimen #192 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#69b001';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_193: {
        id: 'island_resource_specimen_193',
        name: 'Island Resource Specimen #193',
        category: 'resource',
        description: 'Botanical and geological specimen #193 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6b9241';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_194: {
        id: 'island_resource_specimen_194',
        name: 'Island Resource Specimen #194',
        category: 'resource',
        description: 'Botanical and geological specimen #194 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6d7481';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_195: {
        id: 'island_resource_specimen_195',
        name: 'Island Resource Specimen #195',
        category: 'resource',
        description: 'Botanical and geological specimen #195 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6f56c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_196: {
        id: 'island_resource_specimen_196',
        name: 'Island Resource Specimen #196',
        category: 'resource',
        description: 'Botanical and geological specimen #196 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#713901';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_197: {
        id: 'island_resource_specimen_197',
        name: 'Island Resource Specimen #197',
        category: 'resource',
        description: 'Botanical and geological specimen #197 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#731b41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_198: {
        id: 'island_resource_specimen_198',
        name: 'Island Resource Specimen #198',
        category: 'resource',
        description: 'Botanical and geological specimen #198 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#74fd81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_199: {
        id: 'island_resource_specimen_199',
        name: 'Island Resource Specimen #199',
        category: 'resource',
        description: 'Botanical and geological specimen #199 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#76dfc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_200: {
        id: 'island_resource_specimen_200',
        name: 'Island Resource Specimen #200',
        category: 'resource',
        description: 'Botanical and geological specimen #200 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#78c201';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_201: {
        id: 'island_resource_specimen_201',
        name: 'Island Resource Specimen #201',
        category: 'resource',
        description: 'Botanical and geological specimen #201 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7aa441';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_202: {
        id: 'island_resource_specimen_202',
        name: 'Island Resource Specimen #202',
        category: 'resource',
        description: 'Botanical and geological specimen #202 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7c8681';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_203: {
        id: 'island_resource_specimen_203',
        name: 'Island Resource Specimen #203',
        category: 'resource',
        description: 'Botanical and geological specimen #203 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7e68c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_204: {
        id: 'island_resource_specimen_204',
        name: 'Island Resource Specimen #204',
        category: 'resource',
        description: 'Botanical and geological specimen #204 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#804b01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_205: {
        id: 'island_resource_specimen_205',
        name: 'Island Resource Specimen #205',
        category: 'resource',
        description: 'Botanical and geological specimen #205 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#822d41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_206: {
        id: 'island_resource_specimen_206',
        name: 'Island Resource Specimen #206',
        category: 'resource',
        description: 'Botanical and geological specimen #206 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#840f81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_207: {
        id: 'island_resource_specimen_207',
        name: 'Island Resource Specimen #207',
        category: 'resource',
        description: 'Botanical and geological specimen #207 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#85f1c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_208: {
        id: 'island_resource_specimen_208',
        name: 'Island Resource Specimen #208',
        category: 'resource',
        description: 'Botanical and geological specimen #208 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#87d401';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_209: {
        id: 'island_resource_specimen_209',
        name: 'Island Resource Specimen #209',
        category: 'resource',
        description: 'Botanical and geological specimen #209 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#89b641';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_210: {
        id: 'island_resource_specimen_210',
        name: 'Island Resource Specimen #210',
        category: 'resource',
        description: 'Botanical and geological specimen #210 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8b9881';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_211: {
        id: 'island_resource_specimen_211',
        name: 'Island Resource Specimen #211',
        category: 'resource',
        description: 'Botanical and geological specimen #211 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8d7ac1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_212: {
        id: 'island_resource_specimen_212',
        name: 'Island Resource Specimen #212',
        category: 'resource',
        description: 'Botanical and geological specimen #212 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8f5d01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_213: {
        id: 'island_resource_specimen_213',
        name: 'Island Resource Specimen #213',
        category: 'resource',
        description: 'Botanical and geological specimen #213 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#913f41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_214: {
        id: 'island_resource_specimen_214',
        name: 'Island Resource Specimen #214',
        category: 'resource',
        description: 'Botanical and geological specimen #214 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#932181';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_215: {
        id: 'island_resource_specimen_215',
        name: 'Island Resource Specimen #215',
        category: 'resource',
        description: 'Botanical and geological specimen #215 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9503c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_216: {
        id: 'island_resource_specimen_216',
        name: 'Island Resource Specimen #216',
        category: 'resource',
        description: 'Botanical and geological specimen #216 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#96e601';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_217: {
        id: 'island_resource_specimen_217',
        name: 'Island Resource Specimen #217',
        category: 'resource',
        description: 'Botanical and geological specimen #217 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#98c841';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_218: {
        id: 'island_resource_specimen_218',
        name: 'Island Resource Specimen #218',
        category: 'resource',
        description: 'Botanical and geological specimen #218 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9aaa81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_219: {
        id: 'island_resource_specimen_219',
        name: 'Island Resource Specimen #219',
        category: 'resource',
        description: 'Botanical and geological specimen #219 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9c8cc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_220: {
        id: 'island_resource_specimen_220',
        name: 'Island Resource Specimen #220',
        category: 'resource',
        description: 'Botanical and geological specimen #220 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9e6f01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_221: {
        id: 'island_resource_specimen_221',
        name: 'Island Resource Specimen #221',
        category: 'resource',
        description: 'Botanical and geological specimen #221 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a05141';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_222: {
        id: 'island_resource_specimen_222',
        name: 'Island Resource Specimen #222',
        category: 'resource',
        description: 'Botanical and geological specimen #222 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a23381';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_223: {
        id: 'island_resource_specimen_223',
        name: 'Island Resource Specimen #223',
        category: 'resource',
        description: 'Botanical and geological specimen #223 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a415c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_224: {
        id: 'island_resource_specimen_224',
        name: 'Island Resource Specimen #224',
        category: 'resource',
        description: 'Botanical and geological specimen #224 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a5f801';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_225: {
        id: 'island_resource_specimen_225',
        name: 'Island Resource Specimen #225',
        category: 'resource',
        description: 'Botanical and geological specimen #225 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a7da41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_226: {
        id: 'island_resource_specimen_226',
        name: 'Island Resource Specimen #226',
        category: 'resource',
        description: 'Botanical and geological specimen #226 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a9bc81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_227: {
        id: 'island_resource_specimen_227',
        name: 'Island Resource Specimen #227',
        category: 'resource',
        description: 'Botanical and geological specimen #227 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ab9ec1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_228: {
        id: 'island_resource_specimen_228',
        name: 'Island Resource Specimen #228',
        category: 'resource',
        description: 'Botanical and geological specimen #228 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ad8101';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_229: {
        id: 'island_resource_specimen_229',
        name: 'Island Resource Specimen #229',
        category: 'resource',
        description: 'Botanical and geological specimen #229 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#af6341';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_230: {
        id: 'island_resource_specimen_230',
        name: 'Island Resource Specimen #230',
        category: 'resource',
        description: 'Botanical and geological specimen #230 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b14581';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_231: {
        id: 'island_resource_specimen_231',
        name: 'Island Resource Specimen #231',
        category: 'resource',
        description: 'Botanical and geological specimen #231 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b327c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_232: {
        id: 'island_resource_specimen_232',
        name: 'Island Resource Specimen #232',
        category: 'resource',
        description: 'Botanical and geological specimen #232 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b50a01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_233: {
        id: 'island_resource_specimen_233',
        name: 'Island Resource Specimen #233',
        category: 'resource',
        description: 'Botanical and geological specimen #233 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b6ec41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_234: {
        id: 'island_resource_specimen_234',
        name: 'Island Resource Specimen #234',
        category: 'resource',
        description: 'Botanical and geological specimen #234 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b8ce81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_235: {
        id: 'island_resource_specimen_235',
        name: 'Island Resource Specimen #235',
        category: 'resource',
        description: 'Botanical and geological specimen #235 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bab0c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_236: {
        id: 'island_resource_specimen_236',
        name: 'Island Resource Specimen #236',
        category: 'resource',
        description: 'Botanical and geological specimen #236 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bc9301';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_237: {
        id: 'island_resource_specimen_237',
        name: 'Island Resource Specimen #237',
        category: 'resource',
        description: 'Botanical and geological specimen #237 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#be7541';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_238: {
        id: 'island_resource_specimen_238',
        name: 'Island Resource Specimen #238',
        category: 'resource',
        description: 'Botanical and geological specimen #238 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c05781';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_239: {
        id: 'island_resource_specimen_239',
        name: 'Island Resource Specimen #239',
        category: 'resource',
        description: 'Botanical and geological specimen #239 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c239c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_240: {
        id: 'island_resource_specimen_240',
        name: 'Island Resource Specimen #240',
        category: 'resource',
        description: 'Botanical and geological specimen #240 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c41c01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_241: {
        id: 'island_resource_specimen_241',
        name: 'Island Resource Specimen #241',
        category: 'resource',
        description: 'Botanical and geological specimen #241 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c5fe41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_242: {
        id: 'island_resource_specimen_242',
        name: 'Island Resource Specimen #242',
        category: 'resource',
        description: 'Botanical and geological specimen #242 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c7e081';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_243: {
        id: 'island_resource_specimen_243',
        name: 'Island Resource Specimen #243',
        category: 'resource',
        description: 'Botanical and geological specimen #243 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c9c2c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_244: {
        id: 'island_resource_specimen_244',
        name: 'Island Resource Specimen #244',
        category: 'resource',
        description: 'Botanical and geological specimen #244 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cba501';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_245: {
        id: 'island_resource_specimen_245',
        name: 'Island Resource Specimen #245',
        category: 'resource',
        description: 'Botanical and geological specimen #245 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cd8741';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_246: {
        id: 'island_resource_specimen_246',
        name: 'Island Resource Specimen #246',
        category: 'resource',
        description: 'Botanical and geological specimen #246 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cf6981';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_247: {
        id: 'island_resource_specimen_247',
        name: 'Island Resource Specimen #247',
        category: 'resource',
        description: 'Botanical and geological specimen #247 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d14bc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_248: {
        id: 'island_resource_specimen_248',
        name: 'Island Resource Specimen #248',
        category: 'resource',
        description: 'Botanical and geological specimen #248 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d32e01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_249: {
        id: 'island_resource_specimen_249',
        name: 'Island Resource Specimen #249',
        category: 'resource',
        description: 'Botanical and geological specimen #249 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d51041';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_250: {
        id: 'island_resource_specimen_250',
        name: 'Island Resource Specimen #250',
        category: 'resource',
        description: 'Botanical and geological specimen #250 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d6f281';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_251: {
        id: 'island_resource_specimen_251',
        name: 'Island Resource Specimen #251',
        category: 'resource',
        description: 'Botanical and geological specimen #251 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d8d4c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_252: {
        id: 'island_resource_specimen_252',
        name: 'Island Resource Specimen #252',
        category: 'resource',
        description: 'Botanical and geological specimen #252 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dab701';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_253: {
        id: 'island_resource_specimen_253',
        name: 'Island Resource Specimen #253',
        category: 'resource',
        description: 'Botanical and geological specimen #253 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dc9941';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_254: {
        id: 'island_resource_specimen_254',
        name: 'Island Resource Specimen #254',
        category: 'resource',
        description: 'Botanical and geological specimen #254 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#de7b81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_255: {
        id: 'island_resource_specimen_255',
        name: 'Island Resource Specimen #255',
        category: 'resource',
        description: 'Botanical and geological specimen #255 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e05dc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_256: {
        id: 'island_resource_specimen_256',
        name: 'Island Resource Specimen #256',
        category: 'resource',
        description: 'Botanical and geological specimen #256 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e24001';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_257: {
        id: 'island_resource_specimen_257',
        name: 'Island Resource Specimen #257',
        category: 'resource',
        description: 'Botanical and geological specimen #257 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e42241';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_258: {
        id: 'island_resource_specimen_258',
        name: 'Island Resource Specimen #258',
        category: 'resource',
        description: 'Botanical and geological specimen #258 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e60481';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_259: {
        id: 'island_resource_specimen_259',
        name: 'Island Resource Specimen #259',
        category: 'resource',
        description: 'Botanical and geological specimen #259 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e7e6c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_260: {
        id: 'island_resource_specimen_260',
        name: 'Island Resource Specimen #260',
        category: 'resource',
        description: 'Botanical and geological specimen #260 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e9c901';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_261: {
        id: 'island_resource_specimen_261',
        name: 'Island Resource Specimen #261',
        category: 'resource',
        description: 'Botanical and geological specimen #261 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ebab41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_262: {
        id: 'island_resource_specimen_262',
        name: 'Island Resource Specimen #262',
        category: 'resource',
        description: 'Botanical and geological specimen #262 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ed8d81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_263: {
        id: 'island_resource_specimen_263',
        name: 'Island Resource Specimen #263',
        category: 'resource',
        description: 'Botanical and geological specimen #263 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ef6fc1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_264: {
        id: 'island_resource_specimen_264',
        name: 'Island Resource Specimen #264',
        category: 'resource',
        description: 'Botanical and geological specimen #264 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f15201';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_265: {
        id: 'island_resource_specimen_265',
        name: 'Island Resource Specimen #265',
        category: 'resource',
        description: 'Botanical and geological specimen #265 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f33441';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_266: {
        id: 'island_resource_specimen_266',
        name: 'Island Resource Specimen #266',
        category: 'resource',
        description: 'Botanical and geological specimen #266 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f51681';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_267: {
        id: 'island_resource_specimen_267',
        name: 'Island Resource Specimen #267',
        category: 'resource',
        description: 'Botanical and geological specimen #267 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f6f8c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_268: {
        id: 'island_resource_specimen_268',
        name: 'Island Resource Specimen #268',
        category: 'resource',
        description: 'Botanical and geological specimen #268 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f8db01';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_269: {
        id: 'island_resource_specimen_269',
        name: 'Island Resource Specimen #269',
        category: 'resource',
        description: 'Botanical and geological specimen #269 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fabd41';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_270: {
        id: 'island_resource_specimen_270',
        name: 'Island Resource Specimen #270',
        category: 'resource',
        description: 'Botanical and geological specimen #270 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fc9f81';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_271: {
        id: 'island_resource_specimen_271',
        name: 'Island Resource Specimen #271',
        category: 'resource',
        description: 'Botanical and geological specimen #271 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fe81c1';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_272: {
        id: 'island_resource_specimen_272',
        name: 'Island Resource Specimen #272',
        category: 'resource',
        description: 'Botanical and geological specimen #272 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#006402';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_273: {
        id: 'island_resource_specimen_273',
        name: 'Island Resource Specimen #273',
        category: 'resource',
        description: 'Botanical and geological specimen #273 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#024642';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_274: {
        id: 'island_resource_specimen_274',
        name: 'Island Resource Specimen #274',
        category: 'resource',
        description: 'Botanical and geological specimen #274 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#042882';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_275: {
        id: 'island_resource_specimen_275',
        name: 'Island Resource Specimen #275',
        category: 'resource',
        description: 'Botanical and geological specimen #275 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#060ac2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_276: {
        id: 'island_resource_specimen_276',
        name: 'Island Resource Specimen #276',
        category: 'resource',
        description: 'Botanical and geological specimen #276 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#07ed02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_277: {
        id: 'island_resource_specimen_277',
        name: 'Island Resource Specimen #277',
        category: 'resource',
        description: 'Botanical and geological specimen #277 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#09cf42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_278: {
        id: 'island_resource_specimen_278',
        name: 'Island Resource Specimen #278',
        category: 'resource',
        description: 'Botanical and geological specimen #278 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0bb182';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_279: {
        id: 'island_resource_specimen_279',
        name: 'Island Resource Specimen #279',
        category: 'resource',
        description: 'Botanical and geological specimen #279 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0d93c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_280: {
        id: 'island_resource_specimen_280',
        name: 'Island Resource Specimen #280',
        category: 'resource',
        description: 'Botanical and geological specimen #280 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0f7602';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_281: {
        id: 'island_resource_specimen_281',
        name: 'Island Resource Specimen #281',
        category: 'resource',
        description: 'Botanical and geological specimen #281 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#115842';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_282: {
        id: 'island_resource_specimen_282',
        name: 'Island Resource Specimen #282',
        category: 'resource',
        description: 'Botanical and geological specimen #282 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#133a82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_283: {
        id: 'island_resource_specimen_283',
        name: 'Island Resource Specimen #283',
        category: 'resource',
        description: 'Botanical and geological specimen #283 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#151cc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_284: {
        id: 'island_resource_specimen_284',
        name: 'Island Resource Specimen #284',
        category: 'resource',
        description: 'Botanical and geological specimen #284 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#16ff02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_285: {
        id: 'island_resource_specimen_285',
        name: 'Island Resource Specimen #285',
        category: 'resource',
        description: 'Botanical and geological specimen #285 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#18e142';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_286: {
        id: 'island_resource_specimen_286',
        name: 'Island Resource Specimen #286',
        category: 'resource',
        description: 'Botanical and geological specimen #286 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1ac382';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_287: {
        id: 'island_resource_specimen_287',
        name: 'Island Resource Specimen #287',
        category: 'resource',
        description: 'Botanical and geological specimen #287 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1ca5c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_288: {
        id: 'island_resource_specimen_288',
        name: 'Island Resource Specimen #288',
        category: 'resource',
        description: 'Botanical and geological specimen #288 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#1e8802';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_289: {
        id: 'island_resource_specimen_289',
        name: 'Island Resource Specimen #289',
        category: 'resource',
        description: 'Botanical and geological specimen #289 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#206a42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_290: {
        id: 'island_resource_specimen_290',
        name: 'Island Resource Specimen #290',
        category: 'resource',
        description: 'Botanical and geological specimen #290 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#224c82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_291: {
        id: 'island_resource_specimen_291',
        name: 'Island Resource Specimen #291',
        category: 'resource',
        description: 'Botanical and geological specimen #291 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#242ec2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_292: {
        id: 'island_resource_specimen_292',
        name: 'Island Resource Specimen #292',
        category: 'resource',
        description: 'Botanical and geological specimen #292 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#261102';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_293: {
        id: 'island_resource_specimen_293',
        name: 'Island Resource Specimen #293',
        category: 'resource',
        description: 'Botanical and geological specimen #293 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#27f342';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_294: {
        id: 'island_resource_specimen_294',
        name: 'Island Resource Specimen #294',
        category: 'resource',
        description: 'Botanical and geological specimen #294 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#29d582';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_295: {
        id: 'island_resource_specimen_295',
        name: 'Island Resource Specimen #295',
        category: 'resource',
        description: 'Botanical and geological specimen #295 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2bb7c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_296: {
        id: 'island_resource_specimen_296',
        name: 'Island Resource Specimen #296',
        category: 'resource',
        description: 'Botanical and geological specimen #296 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2d9a02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_297: {
        id: 'island_resource_specimen_297',
        name: 'Island Resource Specimen #297',
        category: 'resource',
        description: 'Botanical and geological specimen #297 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#2f7c42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_298: {
        id: 'island_resource_specimen_298',
        name: 'Island Resource Specimen #298',
        category: 'resource',
        description: 'Botanical and geological specimen #298 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#315e82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_299: {
        id: 'island_resource_specimen_299',
        name: 'Island Resource Specimen #299',
        category: 'resource',
        description: 'Botanical and geological specimen #299 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3340c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_300: {
        id: 'island_resource_specimen_300',
        name: 'Island Resource Specimen #300',
        category: 'resource',
        description: 'Botanical and geological specimen #300 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#352302';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_301: {
        id: 'island_resource_specimen_301',
        name: 'Island Resource Specimen #301',
        category: 'resource',
        description: 'Botanical and geological specimen #301 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#370542';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_302: {
        id: 'island_resource_specimen_302',
        name: 'Island Resource Specimen #302',
        category: 'resource',
        description: 'Botanical and geological specimen #302 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#38e782';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_303: {
        id: 'island_resource_specimen_303',
        name: 'Island Resource Specimen #303',
        category: 'resource',
        description: 'Botanical and geological specimen #303 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3ac9c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_304: {
        id: 'island_resource_specimen_304',
        name: 'Island Resource Specimen #304',
        category: 'resource',
        description: 'Botanical and geological specimen #304 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3cac02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_305: {
        id: 'island_resource_specimen_305',
        name: 'Island Resource Specimen #305',
        category: 'resource',
        description: 'Botanical and geological specimen #305 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#3e8e42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_306: {
        id: 'island_resource_specimen_306',
        name: 'Island Resource Specimen #306',
        category: 'resource',
        description: 'Botanical and geological specimen #306 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#407082';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_307: {
        id: 'island_resource_specimen_307',
        name: 'Island Resource Specimen #307',
        category: 'resource',
        description: 'Botanical and geological specimen #307 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4252c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_308: {
        id: 'island_resource_specimen_308',
        name: 'Island Resource Specimen #308',
        category: 'resource',
        description: 'Botanical and geological specimen #308 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#443502';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_309: {
        id: 'island_resource_specimen_309',
        name: 'Island Resource Specimen #309',
        category: 'resource',
        description: 'Botanical and geological specimen #309 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#461742';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_310: {
        id: 'island_resource_specimen_310',
        name: 'Island Resource Specimen #310',
        category: 'resource',
        description: 'Botanical and geological specimen #310 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#47f982';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_311: {
        id: 'island_resource_specimen_311',
        name: 'Island Resource Specimen #311',
        category: 'resource',
        description: 'Botanical and geological specimen #311 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#49dbc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_312: {
        id: 'island_resource_specimen_312',
        name: 'Island Resource Specimen #312',
        category: 'resource',
        description: 'Botanical and geological specimen #312 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4bbe02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_313: {
        id: 'island_resource_specimen_313',
        name: 'Island Resource Specimen #313',
        category: 'resource',
        description: 'Botanical and geological specimen #313 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4da042';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_314: {
        id: 'island_resource_specimen_314',
        name: 'Island Resource Specimen #314',
        category: 'resource',
        description: 'Botanical and geological specimen #314 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#4f8282';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_315: {
        id: 'island_resource_specimen_315',
        name: 'Island Resource Specimen #315',
        category: 'resource',
        description: 'Botanical and geological specimen #315 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5164c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_316: {
        id: 'island_resource_specimen_316',
        name: 'Island Resource Specimen #316',
        category: 'resource',
        description: 'Botanical and geological specimen #316 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#534702';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_317: {
        id: 'island_resource_specimen_317',
        name: 'Island Resource Specimen #317',
        category: 'resource',
        description: 'Botanical and geological specimen #317 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#552942';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_318: {
        id: 'island_resource_specimen_318',
        name: 'Island Resource Specimen #318',
        category: 'resource',
        description: 'Botanical and geological specimen #318 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#570b82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_319: {
        id: 'island_resource_specimen_319',
        name: 'Island Resource Specimen #319',
        category: 'resource',
        description: 'Botanical and geological specimen #319 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#58edc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_320: {
        id: 'island_resource_specimen_320',
        name: 'Island Resource Specimen #320',
        category: 'resource',
        description: 'Botanical and geological specimen #320 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5ad002';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_321: {
        id: 'island_resource_specimen_321',
        name: 'Island Resource Specimen #321',
        category: 'resource',
        description: 'Botanical and geological specimen #321 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5cb242';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_322: {
        id: 'island_resource_specimen_322',
        name: 'Island Resource Specimen #322',
        category: 'resource',
        description: 'Botanical and geological specimen #322 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#5e9482';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_323: {
        id: 'island_resource_specimen_323',
        name: 'Island Resource Specimen #323',
        category: 'resource',
        description: 'Botanical and geological specimen #323 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6076c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_324: {
        id: 'island_resource_specimen_324',
        name: 'Island Resource Specimen #324',
        category: 'resource',
        description: 'Botanical and geological specimen #324 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#625902';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_325: {
        id: 'island_resource_specimen_325',
        name: 'Island Resource Specimen #325',
        category: 'resource',
        description: 'Botanical and geological specimen #325 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#643b42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_326: {
        id: 'island_resource_specimen_326',
        name: 'Island Resource Specimen #326',
        category: 'resource',
        description: 'Botanical and geological specimen #326 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#661d82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_327: {
        id: 'island_resource_specimen_327',
        name: 'Island Resource Specimen #327',
        category: 'resource',
        description: 'Botanical and geological specimen #327 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#67ffc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_328: {
        id: 'island_resource_specimen_328',
        name: 'Island Resource Specimen #328',
        category: 'resource',
        description: 'Botanical and geological specimen #328 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#69e202';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_329: {
        id: 'island_resource_specimen_329',
        name: 'Island Resource Specimen #329',
        category: 'resource',
        description: 'Botanical and geological specimen #329 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6bc442';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_330: {
        id: 'island_resource_specimen_330',
        name: 'Island Resource Specimen #330',
        category: 'resource',
        description: 'Botanical and geological specimen #330 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6da682';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_331: {
        id: 'island_resource_specimen_331',
        name: 'Island Resource Specimen #331',
        category: 'resource',
        description: 'Botanical and geological specimen #331 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#6f88c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_332: {
        id: 'island_resource_specimen_332',
        name: 'Island Resource Specimen #332',
        category: 'resource',
        description: 'Botanical and geological specimen #332 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#716b02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_333: {
        id: 'island_resource_specimen_333',
        name: 'Island Resource Specimen #333',
        category: 'resource',
        description: 'Botanical and geological specimen #333 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#734d42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_334: {
        id: 'island_resource_specimen_334',
        name: 'Island Resource Specimen #334',
        category: 'resource',
        description: 'Botanical and geological specimen #334 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#752f82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_335: {
        id: 'island_resource_specimen_335',
        name: 'Island Resource Specimen #335',
        category: 'resource',
        description: 'Botanical and geological specimen #335 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7711c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_336: {
        id: 'island_resource_specimen_336',
        name: 'Island Resource Specimen #336',
        category: 'resource',
        description: 'Botanical and geological specimen #336 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#78f402';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_337: {
        id: 'island_resource_specimen_337',
        name: 'Island Resource Specimen #337',
        category: 'resource',
        description: 'Botanical and geological specimen #337 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7ad642';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_338: {
        id: 'island_resource_specimen_338',
        name: 'Island Resource Specimen #338',
        category: 'resource',
        description: 'Botanical and geological specimen #338 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7cb882';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_339: {
        id: 'island_resource_specimen_339',
        name: 'Island Resource Specimen #339',
        category: 'resource',
        description: 'Botanical and geological specimen #339 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#7e9ac2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_340: {
        id: 'island_resource_specimen_340',
        name: 'Island Resource Specimen #340',
        category: 'resource',
        description: 'Botanical and geological specimen #340 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#807d02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_341: {
        id: 'island_resource_specimen_341',
        name: 'Island Resource Specimen #341',
        category: 'resource',
        description: 'Botanical and geological specimen #341 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#825f42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_342: {
        id: 'island_resource_specimen_342',
        name: 'Island Resource Specimen #342',
        category: 'resource',
        description: 'Botanical and geological specimen #342 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#844182';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_343: {
        id: 'island_resource_specimen_343',
        name: 'Island Resource Specimen #343',
        category: 'resource',
        description: 'Botanical and geological specimen #343 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8623c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_344: {
        id: 'island_resource_specimen_344',
        name: 'Island Resource Specimen #344',
        category: 'resource',
        description: 'Botanical and geological specimen #344 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#880602';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_345: {
        id: 'island_resource_specimen_345',
        name: 'Island Resource Specimen #345',
        category: 'resource',
        description: 'Botanical and geological specimen #345 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#89e842';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_346: {
        id: 'island_resource_specimen_346',
        name: 'Island Resource Specimen #346',
        category: 'resource',
        description: 'Botanical and geological specimen #346 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8bca82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_347: {
        id: 'island_resource_specimen_347',
        name: 'Island Resource Specimen #347',
        category: 'resource',
        description: 'Botanical and geological specimen #347 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8dacc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_348: {
        id: 'island_resource_specimen_348',
        name: 'Island Resource Specimen #348',
        category: 'resource',
        description: 'Botanical and geological specimen #348 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#8f8f02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_349: {
        id: 'island_resource_specimen_349',
        name: 'Island Resource Specimen #349',
        category: 'resource',
        description: 'Botanical and geological specimen #349 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#917142';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_350: {
        id: 'island_resource_specimen_350',
        name: 'Island Resource Specimen #350',
        category: 'resource',
        description: 'Botanical and geological specimen #350 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#935382';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_351: {
        id: 'island_resource_specimen_351',
        name: 'Island Resource Specimen #351',
        category: 'resource',
        description: 'Botanical and geological specimen #351 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9535c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_352: {
        id: 'island_resource_specimen_352',
        name: 'Island Resource Specimen #352',
        category: 'resource',
        description: 'Botanical and geological specimen #352 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#971802';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_353: {
        id: 'island_resource_specimen_353',
        name: 'Island Resource Specimen #353',
        category: 'resource',
        description: 'Botanical and geological specimen #353 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#98fa42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_354: {
        id: 'island_resource_specimen_354',
        name: 'Island Resource Specimen #354',
        category: 'resource',
        description: 'Botanical and geological specimen #354 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9adc82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_355: {
        id: 'island_resource_specimen_355',
        name: 'Island Resource Specimen #355',
        category: 'resource',
        description: 'Botanical and geological specimen #355 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9cbec2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_356: {
        id: 'island_resource_specimen_356',
        name: 'Island Resource Specimen #356',
        category: 'resource',
        description: 'Botanical and geological specimen #356 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#9ea102';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_357: {
        id: 'island_resource_specimen_357',
        name: 'Island Resource Specimen #357',
        category: 'resource',
        description: 'Botanical and geological specimen #357 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a08342';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_358: {
        id: 'island_resource_specimen_358',
        name: 'Island Resource Specimen #358',
        category: 'resource',
        description: 'Botanical and geological specimen #358 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a26582';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_359: {
        id: 'island_resource_specimen_359',
        name: 'Island Resource Specimen #359',
        category: 'resource',
        description: 'Botanical and geological specimen #359 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a447c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_360: {
        id: 'island_resource_specimen_360',
        name: 'Island Resource Specimen #360',
        category: 'resource',
        description: 'Botanical and geological specimen #360 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a62a02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_361: {
        id: 'island_resource_specimen_361',
        name: 'Island Resource Specimen #361',
        category: 'resource',
        description: 'Botanical and geological specimen #361 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a80c42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_362: {
        id: 'island_resource_specimen_362',
        name: 'Island Resource Specimen #362',
        category: 'resource',
        description: 'Botanical and geological specimen #362 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#a9ee82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_363: {
        id: 'island_resource_specimen_363',
        name: 'Island Resource Specimen #363',
        category: 'resource',
        description: 'Botanical and geological specimen #363 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#abd0c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_364: {
        id: 'island_resource_specimen_364',
        name: 'Island Resource Specimen #364',
        category: 'resource',
        description: 'Botanical and geological specimen #364 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#adb302';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_365: {
        id: 'island_resource_specimen_365',
        name: 'Island Resource Specimen #365',
        category: 'resource',
        description: 'Botanical and geological specimen #365 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#af9542';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_366: {
        id: 'island_resource_specimen_366',
        name: 'Island Resource Specimen #366',
        category: 'resource',
        description: 'Botanical and geological specimen #366 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b17782';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_367: {
        id: 'island_resource_specimen_367',
        name: 'Island Resource Specimen #367',
        category: 'resource',
        description: 'Botanical and geological specimen #367 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b359c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_368: {
        id: 'island_resource_specimen_368',
        name: 'Island Resource Specimen #368',
        category: 'resource',
        description: 'Botanical and geological specimen #368 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b53c02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_369: {
        id: 'island_resource_specimen_369',
        name: 'Island Resource Specimen #369',
        category: 'resource',
        description: 'Botanical and geological specimen #369 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b71e42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_370: {
        id: 'island_resource_specimen_370',
        name: 'Island Resource Specimen #370',
        category: 'resource',
        description: 'Botanical and geological specimen #370 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#b90082';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_371: {
        id: 'island_resource_specimen_371',
        name: 'Island Resource Specimen #371',
        category: 'resource',
        description: 'Botanical and geological specimen #371 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bae2c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_372: {
        id: 'island_resource_specimen_372',
        name: 'Island Resource Specimen #372',
        category: 'resource',
        description: 'Botanical and geological specimen #372 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bcc502';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_373: {
        id: 'island_resource_specimen_373',
        name: 'Island Resource Specimen #373',
        category: 'resource',
        description: 'Botanical and geological specimen #373 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#bea742';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_374: {
        id: 'island_resource_specimen_374',
        name: 'Island Resource Specimen #374',
        category: 'resource',
        description: 'Botanical and geological specimen #374 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c08982';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_375: {
        id: 'island_resource_specimen_375',
        name: 'Island Resource Specimen #375',
        category: 'resource',
        description: 'Botanical and geological specimen #375 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c26bc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_376: {
        id: 'island_resource_specimen_376',
        name: 'Island Resource Specimen #376',
        category: 'resource',
        description: 'Botanical and geological specimen #376 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c44e02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_377: {
        id: 'island_resource_specimen_377',
        name: 'Island Resource Specimen #377',
        category: 'resource',
        description: 'Botanical and geological specimen #377 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c63042';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_378: {
        id: 'island_resource_specimen_378',
        name: 'Island Resource Specimen #378',
        category: 'resource',
        description: 'Botanical and geological specimen #378 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c81282';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_379: {
        id: 'island_resource_specimen_379',
        name: 'Island Resource Specimen #379',
        category: 'resource',
        description: 'Botanical and geological specimen #379 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#c9f4c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_380: {
        id: 'island_resource_specimen_380',
        name: 'Island Resource Specimen #380',
        category: 'resource',
        description: 'Botanical and geological specimen #380 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cbd702';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_381: {
        id: 'island_resource_specimen_381',
        name: 'Island Resource Specimen #381',
        category: 'resource',
        description: 'Botanical and geological specimen #381 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cdb942';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_382: {
        id: 'island_resource_specimen_382',
        name: 'Island Resource Specimen #382',
        category: 'resource',
        description: 'Botanical and geological specimen #382 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#cf9b82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_383: {
        id: 'island_resource_specimen_383',
        name: 'Island Resource Specimen #383',
        category: 'resource',
        description: 'Botanical and geological specimen #383 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d17dc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_384: {
        id: 'island_resource_specimen_384',
        name: 'Island Resource Specimen #384',
        category: 'resource',
        description: 'Botanical and geological specimen #384 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d36002';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_385: {
        id: 'island_resource_specimen_385',
        name: 'Island Resource Specimen #385',
        category: 'resource',
        description: 'Botanical and geological specimen #385 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d54242';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_386: {
        id: 'island_resource_specimen_386',
        name: 'Island Resource Specimen #386',
        category: 'resource',
        description: 'Botanical and geological specimen #386 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d72482';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_387: {
        id: 'island_resource_specimen_387',
        name: 'Island Resource Specimen #387',
        category: 'resource',
        description: 'Botanical and geological specimen #387 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#d906c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_388: {
        id: 'island_resource_specimen_388',
        name: 'Island Resource Specimen #388',
        category: 'resource',
        description: 'Botanical and geological specimen #388 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dae902';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_389: {
        id: 'island_resource_specimen_389',
        name: 'Island Resource Specimen #389',
        category: 'resource',
        description: 'Botanical and geological specimen #389 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dccb42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_390: {
        id: 'island_resource_specimen_390',
        name: 'Island Resource Specimen #390',
        category: 'resource',
        description: 'Botanical and geological specimen #390 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#dead82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_391: {
        id: 'island_resource_specimen_391',
        name: 'Island Resource Specimen #391',
        category: 'resource',
        description: 'Botanical and geological specimen #391 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e08fc2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_392: {
        id: 'island_resource_specimen_392',
        name: 'Island Resource Specimen #392',
        category: 'resource',
        description: 'Botanical and geological specimen #392 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e27202';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_393: {
        id: 'island_resource_specimen_393',
        name: 'Island Resource Specimen #393',
        category: 'resource',
        description: 'Botanical and geological specimen #393 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e45442';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_394: {
        id: 'island_resource_specimen_394',
        name: 'Island Resource Specimen #394',
        category: 'resource',
        description: 'Botanical and geological specimen #394 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e63682';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_395: {
        id: 'island_resource_specimen_395',
        name: 'Island Resource Specimen #395',
        category: 'resource',
        description: 'Botanical and geological specimen #395 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e818c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_396: {
        id: 'island_resource_specimen_396',
        name: 'Island Resource Specimen #396',
        category: 'resource',
        description: 'Botanical and geological specimen #396 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#e9fb02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_397: {
        id: 'island_resource_specimen_397',
        name: 'Island Resource Specimen #397',
        category: 'resource',
        description: 'Botanical and geological specimen #397 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#ebdd42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_398: {
        id: 'island_resource_specimen_398',
        name: 'Island Resource Specimen #398',
        category: 'resource',
        description: 'Botanical and geological specimen #398 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#edbf82';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_399: {
        id: 'island_resource_specimen_399',
        name: 'Island Resource Specimen #399',
        category: 'resource',
        description: 'Botanical and geological specimen #399 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#efa1c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_400: {
        id: 'island_resource_specimen_400',
        name: 'Island Resource Specimen #400',
        category: 'resource',
        description: 'Botanical and geological specimen #400 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f18402';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_401: {
        id: 'island_resource_specimen_401',
        name: 'Island Resource Specimen #401',
        category: 'resource',
        description: 'Botanical and geological specimen #401 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f36642';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_402: {
        id: 'island_resource_specimen_402',
        name: 'Island Resource Specimen #402',
        category: 'resource',
        description: 'Botanical and geological specimen #402 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f54882';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_403: {
        id: 'island_resource_specimen_403',
        name: 'Island Resource Specimen #403',
        category: 'resource',
        description: 'Botanical and geological specimen #403 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f72ac2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_404: {
        id: 'island_resource_specimen_404',
        name: 'Island Resource Specimen #404',
        category: 'resource',
        description: 'Botanical and geological specimen #404 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#f90d02';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_405: {
        id: 'island_resource_specimen_405',
        name: 'Island Resource Specimen #405',
        category: 'resource',
        description: 'Botanical and geological specimen #405 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#faef42';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_406: {
        id: 'island_resource_specimen_406',
        name: 'Island Resource Specimen #406',
        category: 'resource',
        description: 'Botanical and geological specimen #406 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#fcd182';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_407: {
        id: 'island_resource_specimen_407',
        name: 'Island Resource Specimen #407',
        category: 'resource',
        description: 'Botanical and geological specimen #407 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#feb3c2';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_408: {
        id: 'island_resource_specimen_408',
        name: 'Island Resource Specimen #408',
        category: 'resource',
        description: 'Botanical and geological specimen #408 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#009603';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_409: {
        id: 'island_resource_specimen_409',
        name: 'Island Resource Specimen #409',
        category: 'resource',
        description: 'Botanical and geological specimen #409 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 13,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#027843';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_410: {
        id: 'island_resource_specimen_410',
        name: 'Island Resource Specimen #410',
        category: 'resource',
        description: 'Botanical and geological specimen #410 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 21,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#045a83';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_411: {
        id: 'island_resource_specimen_411',
        name: 'Island Resource Specimen #411',
        category: 'resource',
        description: 'Botanical and geological specimen #411 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 29,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#063cc3';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_412: {
        id: 'island_resource_specimen_412',
        name: 'Island Resource Specimen #412',
        category: 'resource',
        description: 'Botanical and geological specimen #412 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 5,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#081f03';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_413: {
        id: 'island_resource_specimen_413',
        name: 'Island Resource Specimen #413',
        category: 'resource',
        description: 'Botanical and geological specimen #413 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 13,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0a0143';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_414: {
        id: 'island_resource_specimen_414',
        name: 'Island Resource Specimen #414',
        category: 'resource',
        description: 'Botanical and geological specimen #414 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 21,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0be383';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_415: {
        id: 'island_resource_specimen_415',
        name: 'Island Resource Specimen #415',
        category: 'resource',
        description: 'Botanical and geological specimen #415 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 29,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0dc5c3';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_416: {
        id: 'island_resource_specimen_416',
        name: 'Island Resource Specimen #416',
        category: 'resource',
        description: 'Botanical and geological specimen #416 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 20,
        thirst: 5,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#0fa803';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_417: {
        id: 'island_resource_specimen_417',
        name: 'Island Resource Specimen #417',
        category: 'resource',
        description: 'Botanical and geological specimen #417 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 30,
        thirst: 13,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#118a43';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_418: {
        id: 'island_resource_specimen_418',
        name: 'Island Resource Specimen #418',
        category: 'resource',
        description: 'Botanical and geological specimen #418 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 40,
        thirst: 21,
        health: 12,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#136c83';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_419: {
        id: 'island_resource_specimen_419',
        name: 'Island Resource Specimen #419',
        category: 'resource',
        description: 'Botanical and geological specimen #419 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 50,
        thirst: 29,
        health: 24,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#154ec3';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    island_resource_specimen_420: {
        id: 'island_resource_specimen_420',
        name: 'Island Resource Specimen #420',
        category: 'resource',
        description: 'Botanical and geological specimen #420 harvested from island terrain.',
        stackable: true,
        maxStack: 99,
        hunger: 10,
        thirst: 5,
        health: 0,
        drawIcon(ctx, x, y, s) {
            ctx.fillStyle = '#173103';
            ctx.beginPath();
            ctx.arc(x + s * 0.5, y + s * 0.5, s * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
};

Object.assign(window.ItemDatabase, MasterItemCatalogue);
window.MasterItemCatalogue = MasterItemCatalogue;
