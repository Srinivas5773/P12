const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Skill Trees & Masteries - Perk matrices validation', () => {
    const skillsCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'skills.js'), 'utf-8');
    assert.ok(skillsCode.includes('SkillDatabase'), 'Must declare SkillDatabase');
    assert.ok(skillsCode.includes('SkillManager'), 'Must declare SkillManager');
});

test('Master Achievements - Milestones verification', () => {
    const achCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'achievements.js'), 'utf-8');
    assert.ok(achCode.includes('AchievementsList'), 'Must declare AchievementsList');
    assert.ok(achCode.includes('AchievementManager'), 'Must declare AchievementManager');
});
