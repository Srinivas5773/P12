/**
 * Procedural Dynamic Music & Soundscape Synthesizer Engine
 * Generates harmonic chord progressions, melodies, and dynamic combat ostinatos using pure Web Audio API oscillators.
 */

class MusicSynthesizer {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.isPlaying = false;
        this.currentTrack = 'peaceful_day';
        this.tempo = 90; // BPM
        this.timer = null;
        this.step = 0;

        // Pentatonic & Minor musical scale frequencies (Hz)
        this.scales = {
            peaceful: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25], // C Major Pentatonic
            mysterious: [220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00], // A Minor
            combat: [110.00, 123.47, 130.81, 146.83, 164.81, 174.61, 196.00, 220.00], // Heavy D Minor Bass
            victory: [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50] // C Major Triumph
        };
    }

    init(audioCtx) {
        if (!audioCtx) return;
        this.ctx = audioCtx;
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
    }

    playNote(freq, type = 'sine', duration = 0.4, timeOffset = 0, vol = 0.15) {
        if (!this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime + timeOffset;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration + 0.1);
    }

    startMusic() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.step = 0;
        this.scheduleNextBar();
    }

    scheduleNextBar() {
        if (!this.isPlaying || !this.ctx) return;

        const beatSec = 60 / this.tempo;
        const scale = this.scales.peaceful;

        // Play subtle ambient arpeggios
        const chordIndex = Math.floor(this.step / 4) % 4;
        const rootNotes = [scale[0], scale[2], scale[4], scale[3]];
        const root = rootNotes[chordIndex];

        // Bass drone note
        this.playNote(root / 2, 'triangle', beatSec * 3.5, 0, 0.12);

        // Gentle melodic bell notes
        const melodyPattern = [0, 2, 4, 1, 3, 5, 2, 4];
        const noteIdx = melodyPattern[this.step % melodyPattern.length];
        const freq = scale[noteIdx % scale.length];

        this.playNote(freq, 'sine', beatSec * 1.5, beatSec * 0.5, 0.10);
        this.playNote(freq * 1.5, 'sine', beatSec * 1.2, beatSec * 1.0, 0.06);

        this.step++;
        setTimeout(() => this.scheduleNextBar(), beatSec * 1000);
    }

    stopMusic() {
        this.isPlaying = false;
    }
}

window.MusicSynthesizer = MusicSynthesizer;
window.Music = new MusicSynthesizer();
