const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Audio Engine - Sound synthesis parameters', () => {
    const audioCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'audio.js'), 'utf-8');
    assert.ok(audioCode.includes('SoundEngine'), 'Must declare SoundEngine');
});

test('Master Audio Synthesis - Synth frequency tables', () => {
    const masterAudioCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'master_audio_synthesis.js'), 'utf-8');
    assert.ok(masterAudioCode.includes('MasterAudioSynthTables'), 'Must export MasterAudioSynthTables');
});
