const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Crafting & Inventory - Recipes data verification', () => {
    const craftingCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'crafting.js'), 'utf-8');
    assert.ok(craftingCode.includes('CraftingRecipes'), 'Must define CraftingRecipes');
    assert.ok(craftingCode.includes('RecipeCategory'), 'Must define RecipeCategory');
});

test('Master Items Catalogue - Comprehensive item definitions', () => {
    const itemsCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'master_item_registry.js'), 'utf-8');
    assert.ok(itemsCode.length > 50000, 'Master items catalogue must be comprehensive');
    assert.ok(itemsCode.includes('MasterItemCatalogue'), 'Must export MasterItemCatalogue');
});
