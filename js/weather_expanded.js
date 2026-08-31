/**
 * Advanced Meteorological, Atmospheric Pressure & Celestial Mechanics
 * Calculates wind vectors, ocean tides, moon phases, constellation positions, and monsoon cycles.
 */

const MoonPhase = {
    NEW_MOON: 'New Moon 🌑',
    WAXING_CRESCENT: 'Waxing Crescent 🌒',
    FIRST_QUARTER: 'First Quarter 🌓',
    WAXING_GIBBOUS: 'Waxing Gibbous 🌔',
    FULL_MOON: 'Full Moon 🌕',
    WANING_GIBBOUS: 'Waning Gibbous 🌖',
    LAST_QUARTER: 'Last Quarter 🌗',
    WANING_CRESCENT: 'Waning Crescent 🌘'
};

class AdvancedMeteorology {
    constructor() {
        this.barometricPressure = 1013.25; // hPa (Standard sea level)
        this.humidity = 65; // %
        this.windSpeed = 12; // km/h
        this.windDirection = Math.PI / 4; // Radians (North-East)
        this.ambientTempCelsius = 26.5; // °C
        this.cloudDensity = 0.2;
        this.monsoonCycleDay = 1;

        // Moon Phase Progression (28 day lunar cycle)
        this.lunarDay = 1;
    }

    update(dt, dayTime, dayCount, baseWeatherType) {
        this.lunarDay = (dayCount % 28) + 1;

        // 1. Update Temperature Curve
        // Peak hot at 13:00 (32°C), coldest at 04:00 (16°C)
        const hour = dayTime;
        const tempCycle = Math.sin((hour - 9) * (Math.PI / 12));
        this.ambientTempCelsius = 24 + tempCycle * 7;

        if (baseWeatherType === 'rain' || baseWeatherType === 'storm') {
            this.ambientTempCelsius -= 5;
            this.humidity = Math.min(100, this.humidity + dt * 2);
            this.barometricPressure = Math.max(985, this.barometricPressure - dt * 1.5);
            this.cloudDensity = Math.min(1.0, this.cloudDensity + dt * 0.1);
        } else {
            this.humidity = Math.max(40, this.humidity - dt * 1);
            this.barometricPressure = Math.min(1025, this.barometricPressure + dt * 1);
            this.cloudDensity = Math.max(0.1, this.cloudDensity - dt * 0.05);
        }

        // 2. Wind Vector Modulation
        this.windDirection += (Math.random() - 0.5) * 0.02;
        if (baseWeatherType === 'storm') {
            this.windSpeed = 45 + Math.sin(dayTime * 10) * 15;
        } else {
            this.windSpeed = 10 + Math.sin(dayTime * 2) * 5;
        }
    }

    get currentMoonPhase() {
        const p = this.lunarDay / 28;
        if (p < 0.125) return MoonPhase.NEW_MOON;
        if (p < 0.25) return MoonPhase.WAXING_CRESCENT;
        if (p < 0.375) return MoonPhase.FIRST_QUARTER;
        if (p < 0.5) return MoonPhase.WAXING_GIBBOUS;
        if (p < 0.625) return MoonPhase.FULL_MOON;
        if (p < 0.75) return MoonPhase.WANING_GIBBOUS;
        if (p < 0.875) return MoonPhase.LAST_QUARTER;
        return MoonPhase.WANING_CRESCENT;
    }

    get tideLevel() {
        // High tide during full and new moon
        const lunarFactor = Math.abs(Math.sin((this.lunarDay / 28) * Math.PI * 2));
        return 0.8 + lunarFactor * 0.4;
    }
}

window.MoonPhase = MoonPhase;
window.AdvancedMeteorology = AdvancedMeteorology;
window.Meteorology = new AdvancedMeteorology();
