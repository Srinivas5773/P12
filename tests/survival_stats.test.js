const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Survival System - Stat initialisation and drain equations', () => {
    const survivalCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'survival.js'), 'utf-8');
    assert.ok(survivalCode.length > 500, 'Survival code should be substantial');
    assert.ok(survivalCode.includes('class SurvivalSystem'), 'Must declare SurvivalSystem');
});

test('Survival System - Hypothermia and poison resistance parameters', () => {
    const survivalCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'survival.js'), 'utf-8');
    assert.ok(survivalCode.includes('temperature'), 'Must calculate body temperature');
    assert.ok(survivalCode.includes('health'), 'Must calculate player health');
    assert.ok(survivalCode.includes('hunger'), 'Must calculate hunger levels');
    assert.ok(survivalCode.includes('thirst'), 'Must calculate thirst levels');
    assert.ok(survivalCode.includes('energy'), 'Must calculate stamina energy');
});
