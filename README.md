# 🏝️ Castaway's Horizon - 2D Island Survival Game

**Castaway's Horizon** is an extensive, standalone 2D top-down Island Survival game built with **HTML5 Canvas, CSS, and Vanilla JavaScript** containing **59,000+ lines of production code**.

---

## 🚀 Features

- **Procedural Island World**: 120x120 organic terrain grid featuring 7 distinct biomes (ocean, sandy beaches, lush grasslands, dense pine forests, rocky highlands, volcanic calderas, and subterranean caves).
- **Survival Ecology System**: Comprehensive player vitals simulation tracking Health, Hunger, Thirst, Stamina Energy, and Body Temperature (with Hypothermia and Hyperthermia hazards).
- **Extensive Inventory & Hotbar**: 24-slot backpack storage, 8 quickslot action hotbar, and equipment slots with item durability.
- **Dynamic Crafting & Smelting**: Tiered crafting recipes across Primitive, Bone, Bronze, Iron, Steel, Obsidian, Titanium, and Ancient Relic tiers.
- **Base Fortification & Building**: Real-time blueprint grid placement for wooden walls, operable doors, campfire hearths, storage chests, sleeping shelters, and clay furnaces.
- **Interactive Angling Mini-Game**: Realistic fishing line casting with bite alert indicators and dynamic tension reel mini-game.
- **Real-Time Combat & Fauna AI**: Wildlife AI state machines for crabs, hares, wild boars, shadow wolves, and coastal reef sharks.
- **Procedural Web Audio Engine**: Pure Web Audio API sound synthesis and dynamic music chord progressions without external audio assets.
- **Story Questline & Grand Escape**: 9-step narrative progression to scavenge components, assemble the summit Radio Tower, transmit an SOS beacon, and board the extraction helicopter.
- **Persistence**: Auto-saves every 60 seconds and manual local storage state persistence.

---

## 📦 Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- NPM (v9.0.0 or higher)

### Setup Steps
1. Clone or extract the repository:
   ```bash
   git clone https://github.com/Srinivas5773/P12.git
   cd P12
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```

---

## 🔨 Build & Verification

Run the build and asset verification script:
```bash
npm run build
```

---

## 🎮 Running the Game

### Method 1: Local HTTP Server (Recommended)
Start the local server:
```bash
npm start
```
Then open your browser and navigate to:
```
http://localhost:3000/
```

### Method 2: Direct Browser Play (Offline)
Simply double-click [`index.html`](file:///c:/Users/91934/OneDrive/Desktop/Github%20Projects/island_survival_game/index.html) or open it directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

---

## 🐳 Docker Deployment

You can build and containerize the application using Docker:

### Build Container
```bash
docker build -t island-survival-game .
```

### Run Container
```bash
docker run -d -p 3000:3000 --name island-survival-app island-survival-game
```

### Docker Compose
```bash
docker-compose up -d
```

---

## 🧪 Testing

Execute the comprehensive unit test suite:
```bash
npm test
```

---

## 📚 Dependencies

- `mime-types`: Standard MIME type mappings for the local static file server.

---

## 🕹️ Controls Guide

| Input | Action |
| :--- | :--- |
| **`W`, `A`, `S`, `D` / `Arrow Keys`** | Character Movement |
| **`Shift`** | Sprint (Consumes Stamina) |
| **`Left Click` / `Space`** | Action / Attack / Harvest / Cast Line |
| **`Right Click`** | Cancel Structure Placement |
| **`E` / `I`** | Inventory & Crafting Workshop |
| **`K`** | RPG Skill Tree & Masteries |
| **`J`** | Field Guide & Island Bestiary |
| **`L`** | Achievements Showcase |
| **`F`** | Interact (Door, Chest, Shelter, Radio) |
| **`1` – `8` / `Scroll Wheel`** | Hotbar Quickslot Selection |
| **`M`** | Radar Minimap Toggle |
| **`Escape`** | Pause Menu & Save Game |
