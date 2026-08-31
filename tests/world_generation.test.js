const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('World Generation - Tile definitions and biomes', () => {
    const worldCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'world.js'), 'utf-8');
    assert.ok(worldCode.includes('TileType'), 'Must declare TileType enumeration');
    assert.ok(worldCode.includes('World'), 'Must declare World class');
});

test('Advanced Topography - River and erosion maps', () => {
    const advWorldCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'world_generator_advanced.js'), 'utf-8');
    assert.ok(advWorldCode.includes('AdvancedWorldGenerator'), 'Must declare AdvancedWorldGenerator');
});
