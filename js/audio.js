/**
 * Sound & Music Synthesis Engine for Island Survival
 * Pure Web Audio API - Zero external asset dependencies!
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.musicEnabled = true;
        this.volume = 0.4;
        this.ambientGain = null;
        this.sfxGain = null;
        this.isInitialized = false;

        // Ambient generators
        this.ambientNodes = {
            waves: null,
            wind: null,
            rain: null,
            crickets: null,
            fire: null
        };
    }

    init() {
        if (this.isInitialized) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            this.ctx = new AudioCtx();

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);

            this.sfxGain = this.ctx.createGain();
            this.sfxGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
            this.sfxGain.connect(this.masterGain);

            this.ambientGain = this.ctx.createGain();
            this.ambientGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            this.ambientGain.connect(this.masterGain);

            this.isInitialized = true;
            this.startAmbient();
        } catch (e) {
            console.warn('Web Audio init failed:', e);
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setVolume(val) {
        this.volume = Math.max(0, Math.min(1, val));
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime, 0.05);
        }
    }

    toggleMute() {
        this.enabled = !this.enabled;
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime, 0.05);
        }
        return this.enabled;
    }

    // --- PROCEDURAL SFX GENERATORS ---

    playFootstep(surface = 'grass') {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        if (surface === 'water') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, now);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        } else if (surface === 'sand') {
            this.playNoiseBuffer(0.08, 600, 0.08);
            return;
        } else {
            // Grass / dirt
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        }

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.15);
    }

    playChop() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        // Wood impact thud
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180 + Math.random() * 40, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.16);

        // Crackle noise burst
        this.playNoiseBuffer(0.09, 1400, 0.2);
    }

    playMine() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        // High metallic/stone ping
        const osc = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const baseFreq = 700 + Math.random() * 200;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.2);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
        osc2.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + 0.15);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + 0.22);
        osc2.stop(now + 0.22);
    }

    playGather() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.14);
    }

    playCraft() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        [0, 0.08, 0.16].forEach((delay, idx) => {
            const t = now + delay;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600 + idx * 220, t);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + 0.09);
        });
    }

    playBuild() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(330, now + 0.07);
        osc.frequency.setValueAtTime(440, now + 0.14);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.24);
    }

    playSwing() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.15);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.16);
    }

    playHit(isEnemy = false) {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(isEnemy ? 220 : 150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.16);
    }

    playPlayerHurt() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.22);
    }

    playShoot() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.15);
    }

    playEat() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        [0, 0.09, 0.18].forEach((delay) => {
            const t = now + delay;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(280 + Math.random() * 50, t);
            osc.frequency.exponentialRampToValueAtTime(120, t + 0.07);
            gain.gain.setValueAtTime(0.2, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.07);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + 0.08);
        });
    }

    playDrink() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        [0, 0.12, 0.24].forEach((delay) => {
            const t = now + delay;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, t);
            osc.frequency.exponentialRampToValueAtTime(540, t + 0.09);
            gain.gain.setValueAtTime(0.18, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.09);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + 0.1);
        });
    }

    playQuestComplete() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

        notes.forEach((freq, idx) => {
            const t = now + idx * 0.12;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + 0.4);
        });
    }

    playRadioBeep() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(950, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.setValueAtTime(0.2, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.11);
    }

    playVictoryHorn() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;

        const freqs = [110, 164.81, 220, 329.63];
        freqs.forEach(freq => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.setValueAtTime(0.25, now + 0.8);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now);
            osc.stop(now + 2.6);
        });
    }

    playGameOver() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const notes = [220, 207.65, 196, 185]; // A3, Ab3, G3, F#3

        notes.forEach((freq, idx) => {
            const t = now + idx * 0.28;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + 0.45);
        });
    }

    playFishBite() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.setValueAtTime(800, now + 0.08);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.22);
    }

    playUIClick() {
        if (!this.enabled || !this.ctx) return;
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.05);
    }

    playNoiseBuffer(duration, filterFreq, volume) {
        if (!this.ctx) return;
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(filterFreq, this.ctx.currentTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        noise.start();
    }

    // --- CONTINUOUS AMBIENT SOUNDSCAPE ---

    startAmbient() {
        if (!this.ctx || !this.ambientGain) return;
        this.createOceanSurge();
    }

    createOceanSurge() {
        if (!this.ctx) return;
        const bufferSize = this.ctx.sampleRate * 4;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(250, this.ctx.currentTime);

        // LFO for wave swelling
        const lfo = this.ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime); // one swell every 5s
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(150, this.ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ambientGain);

        noise.start();
        lfo.start();
        this.ambientNodes.waves = { noise, lfo, gain };
    }

    updateWeatherAmbient(isRaining, isNight, isNearFire) {
        if (!this.ctx || !this.isInitialized) return;
        if (this.ambientGain) {
            const targetGain = this.enabled ? (isRaining ? 0.45 : 0.25) : 0;
            this.ambientGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.5);
        }
    }
}

// Global Sound Instance
window.Sound = new SoundEngine();
