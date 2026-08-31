/**
 * Procedural Island World Generator & Tile Engine
 */

const TileType = {
    DEEP_OCEAN: 0,
    OCEAN: 1,
    SAND: 2,
    GRASS: 3,
    FOREST: 4,
    ROCK: 5,
    RUINS: 6
};

class World {
    constructor(width = 120, height = 120, tileSize = 48) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tiles = [];
        this.resources = [];
        this.structures = []; // Placed player buildings
        this.explored = []; // Fog of War
        this.waterAnimTime = 0;
        this.radioTowerPos = { x: 0, y: 0 };
        this.shipwreckPos = { x: 0, y: 0 };
        this.ruinsPos = { x: 0, y: 0 };
        this.spawnPos = { x: 0, y: 0 };

        this.generateIsland();
    }

    // --- PROCEDURAL GENERATION ---

    generateIsland() {
        this.tiles = new Array(this.width * this.height).fill(TileType.DEEP_OCEAN);
        this.explored = new Array(this.width * this.height).fill(false);
        this.resources = [];
        this.structures = [];

        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const maxRadius = Math.min(this.width, this.height) * 0.44;

        // Multi-frequency Perlin-like pseudo-noise
        const seed = Math.random() * 1000;
        const noise = (x, y, scale, oct = 3) => {
            let val = 0;
            let amp = 1;
            let freq = scale;
            let maxAmp = 0;
            for (let o = 0; o < oct; o++) {
                val += Math.sin((x + seed) * freq + Math.cos((y + seed) * freq * 0.8)) *
                       Math.cos((y + seed) * freq + Math.sin((x + seed) * freq * 0.7)) * amp;
                maxAmp += amp;
                amp *= 0.5;
                freq *= 2.1;
            }
            return (val / maxAmp + 1) / 2;
        };

        // Pass 1: Tile Elevation & Biomes
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const distFactor = Math.max(0, 1 - (dist / maxRadius));

                const n = noise(x, y, 0.045, 4);
                const elevation = n * 0.75 + distFactor * 0.55;

                let tile = TileType.DEEP_OCEAN;
                if (elevation > 0.82) {
                    tile = TileType.ROCK;
                } else if (elevation > 0.65) {
                    tile = TileType.FOREST;
                } else if (elevation > 0.45) {
                    tile = TileType.GRASS;
                } else if (elevation > 0.34) {
                    tile = TileType.SAND;
                } else if (elevation > 0.25) {
                    tile = TileType.OCEAN;
                } else {
                    tile = TileType.DEEP_OCEAN;
                }

                this.tiles[y * this.width + x] = tile;
            }
        }

        // Pass 2: Freshwater ponds in grass interior
        for (let i = 0; i < 6; i++) {
            const px = Math.floor(centerX + (Math.random() - 0.5) * 40);
            const py = Math.floor(centerY + (Math.random() - 0.5) * 40);
            if (this.getTile(px, py) === TileType.GRASS) {
                const pondSize = 2 + Math.floor(Math.random() * 3);
                for (let ox = -pondSize; ox <= pondSize; ox++) {
                    for (let oy = -pondSize; oy <= pondSize; oy++) {
                        if (ox * ox + oy * oy <= pondSize * pondSize) {
                            if (this.getTile(px + ox, py + oy) === TileType.GRASS) {
                                this.setTile(px + ox, py + oy, TileType.OCEAN);
                            }
                        }
                    }
                }
            }
        }

        // Pass 3: Special Landmarks Setup
        // 1. Radio Tower in rocky mountain plateau
        let radioPlaced = false;
        for (let r = 0; r < 200 && !radioPlaced; r++) {
            const rx = Math.floor(centerX + (Math.random() - 0.5) * 30);
            const ry = Math.floor(centerY - 10 + (Math.random() - 0.5) * 25);
            if (this.getTile(rx, ry) === TileType.ROCK || this.getTile(rx, ry) === TileType.FOREST) {
                this.radioTowerPos = { x: rx * this.tileSize + this.tileSize / 2, y: ry * this.tileSize + this.tileSize / 2 };
                this.setTile(rx, ry, TileType.RUINS);
                this.setTile(rx + 1, ry, TileType.RUINS);
                this.setTile(rx, ry + 1, TileType.RUINS);
                this.setTile(rx + 1, ry + 1, TileType.RUINS);
                radioPlaced = true;
            }
        }
        if (!radioPlaced) {
            this.radioTowerPos = { x: centerX * this.tileSize, y: (centerY - 10) * this.tileSize };
        }

        // 2. Ancient Ruins in Forest / Rock border
        const ruinsX = Math.floor(centerX + 20);
        const ruinsY = Math.floor(centerY + 10);
        this.ruinsPos = { x: ruinsX * this.tileSize, y: ruinsY * this.tileSize };
        for (let ox = -2; ox <= 2; ox++) {
            for (let oy = -2; oy <= 2; oy++) {
                this.setTile(ruinsX + ox, ruinsY + oy, TileType.RUINS);
            }
        }

        // 3. Shipwreck on Southwest Coastline
        let shipPlaced = false;
        for (let y = this.height - 20; y > centerY && !shipPlaced; y--) {
            for (let x = 10; x < centerX; x++) {
                if (this.getTile(x, y) === TileType.SAND) {
                    this.shipwreckPos = { x: x * this.tileSize + this.tileSize / 2, y: y * this.tileSize + this.tileSize / 2 };
                    shipPlaced = true;
                    break;
                }
            }
        }

        // 4. Player Spawn on South Beach
        let spawnFound = false;
        for (let y = this.height - 15; y > centerY && !spawnFound; y--) {
            for (let x = Math.floor(centerX - 10); x <= Math.floor(centerX + 10); x++) {
                if (this.getTile(x, y) === TileType.SAND) {
                    this.spawnPos = { x: x * this.tileSize + this.tileSize / 2, y: y * this.tileSize + this.tileSize / 2 };
                    spawnFound = true;
                    break;
                }
            }
        }
        if (!spawnFound) {
            this.spawnPos = { x: centerX * this.tileSize, y: centerY * this.tileSize };
        }

        // Pass 4: Populate Resources & Interactive Nodes
        this.populateResources();
    }

    populateResources() {
        this.resources = [];
        let idCounter = 1;

        for (let y = 3; y < this.height - 3; y++) {
            for (let x = 3; x < this.width - 3; x++) {
                const tile = this.getTile(x, y);
                const worldX = x * this.tileSize + this.tileSize / 2;
                const worldY = y * this.tileSize + this.tileSize / 2;

                // Skip spawn immediate area
                const distToSpawn = Math.hypot(worldX - this.spawnPos.x, worldY - this.spawnPos.y);
                if (distToSpawn < 90) continue;

                // Skip radio tower & ruins area
                const distToRadio = Math.hypot(worldX - this.radioTowerPos.x, worldY - this.radioTowerPos.y);
                if (distToRadio < 110) continue;

                const roll = Math.random();

                if (tile === TileType.SAND) {
                    if (roll < 0.04) {
                        this.resources.push(this.createResourceNode(idCounter++, 'driftwood', worldX, worldY));
                    } else if (roll < 0.08) {
                        this.resources.push(this.createResourceNode(idCounter++, 'shell', worldX, worldY));
                    } else if (roll < 0.12) {
                        this.resources.push(this.createResourceNode(idCounter++, 'flint_rock', worldX, worldY));
                    }
                } else if (tile === TileType.GRASS) {
                    if (roll < 0.07) {
                        this.resources.push(this.createResourceNode(idCounter++, 'palm_tree', worldX, worldY));
                    } else if (roll < 0.13) {
                        this.resources.push(this.createResourceNode(idCounter++, 'berry_bush', worldX, worldY));
                    } else if (roll < 0.17) {
                        this.resources.push(this.createResourceNode(idCounter++, 'blue_berry_bush', worldX, worldY));
                    } else if (roll < 0.21) {
                        this.resources.push(this.createResourceNode(idCounter++, 'fiber_grass', worldX, worldY));
                    } else if (roll < 0.25) {
                        this.resources.push(this.createResourceNode(idCounter++, 'boulder', worldX, worldY));
                    }
                } else if (tile === TileType.FOREST) {
                    if (roll < 0.14) {
                        this.resources.push(this.createResourceNode(idCounter++, 'pine_tree', worldX, worldY));
                    } else if (roll < 0.20) {
                        this.resources.push(this.createResourceNode(idCounter++, 'palm_tree', worldX, worldY));
                    } else if (roll < 0.26) {
                        this.resources.push(this.createResourceNode(idCounter++, 'boulder', worldX, worldY));
                    } else if (roll < 0.31) {
                        this.resources.push(this.createResourceNode(idCounter++, 'berry_bush', worldX, worldY));
                    }
                } else if (tile === TileType.ROCK) {
                    if (roll < 0.12) {
                        this.resources.push(this.createResourceNode(idCounter++, 'boulder', worldX, worldY));
                    } else if (roll < 0.18) {
                        this.resources.push(this.createResourceNode(idCounter++, 'iron_node', worldX, worldY));
                    } else if (roll < 0.23) {
                        this.resources.push(this.createResourceNode(idCounter++, 'copper_node', worldX, worldY));
                    } else if (roll < 0.27) {
                        this.resources.push(this.createResourceNode(idCounter++, 'flint_rock', worldX, worldY));
                    }
                }
            }
        }

        // Add special landmark resource nodes:
        // Shipwreck crate
        this.resources.push(this.createResourceNode(idCounter++, 'shipwreck_crate', this.shipwreckPos.x, this.shipwreckPos.y));
        // Ancient ruins cache
        this.resources.push(this.createResourceNode(idCounter++, 'ancient_chest', this.ruinsPos.x, this.ruinsPos.y));
    }

    createResourceNode(id, type, x, y) {
        const base = {
            id, type, x, y,
            shake: 0,
            shakeX: 0,
            dead: false,
            respawnTimer: 0
        };

        switch (type) {
            case 'palm_tree':
                return {
                    ...base,
                    name: 'Palm Tree',
                    maxHp: 40, hp: 40,
                    radius: 20,
                    toolRequired: 'axe',
                    drops: [
                        { id: 'wood', min: 3, max: 6 },
                        { id: 'coconut', min: 1, max: 3, chance: 0.8 },
                        { id: 'palm_leaf', min: 2, max: 4 }
                    ]
                };
            case 'pine_tree':
                return {
                    ...base,
                    name: 'Ancient Pine',
                    maxHp: 65, hp: 65,
                    radius: 22,
                    toolRequired: 'axe',
                    drops: [
                        { id: 'hardwood', min: 3, max: 6 },
                        { id: 'wood', min: 2, max: 4 },
                        { id: 'fiber', min: 2, max: 4 }
                    ]
                };
            case 'berry_bush':
                return {
                    ...base,
                    name: 'Sweet Berry Bush',
                    maxHp: 15, hp: 15,
                    radius: 14,
                    toolRequired: 'any',
                    drops: [
                        { id: 'berries', min: 3, max: 6 },
                        { id: 'fiber', min: 1, max: 3 }
                    ]
                };
            case 'blue_berry_bush':
                return {
                    ...base,
                    name: 'Stamina Berry Bush',
                    maxHp: 15, hp: 15,
                    radius: 14,
                    toolRequired: 'any',
                    drops: [
                        { id: 'blueberries', min: 3, max: 5 },
                        { id: 'fiber', min: 1, max: 2 }
                    ]
                };
            case 'fiber_grass':
                return {
                    ...base,
                    name: 'Tall Fiber Grass',
                    maxHp: 10, hp: 10,
                    radius: 10,
                    toolRequired: 'any',
                    drops: [{ id: 'fiber', min: 2, max: 4 }]
                };
            case 'boulder':
                return {
                    ...base,
                    name: 'Stone Boulder',
                    maxHp: 50, hp: 50,
                    radius: 20,
                    toolRequired: 'pickaxe',
                    drops: [
                        { id: 'stone', min: 4, max: 8 },
                        { id: 'flint', min: 1, max: 2, chance: 0.6 }
                    ]
                };
            case 'flint_rock':
                return {
                    ...base,
                    name: 'Flint Deposit',
                    maxHp: 30, hp: 30,
                    radius: 14,
                    toolRequired: 'pickaxe',
                    drops: [
                        { id: 'flint', min: 2, max: 4 },
                        { id: 'stone', min: 1, max: 2 }
                    ]
                };
            case 'iron_node':
                return {
                    ...base,
                    name: 'Iron Ore Vein',
                    maxHp: 75, hp: 75,
                    radius: 20,
                    toolRequired: 'pickaxe',
                    drops: [
                        { id: 'iron_ore', min: 3, max: 6 },
                        { id: 'stone', min: 2, max: 4 }
                    ]
                };
            case 'copper_node':
                return {
                    ...base,
                    name: 'Copper Ore Vein',
                    maxHp: 60, hp: 60,
                    radius: 18,
                    toolRequired: 'pickaxe',
                    drops: [
                        { id: 'copper_ore', min: 3, max: 5 },
                        { id: 'stone', min: 1, max: 3 }
                    ]
                };
            case 'driftwood':
                return {
                    ...base,
                    name: 'Washed-up Driftwood',
                    maxHp: 10, hp: 10,
                    radius: 12,
                    toolRequired: 'any',
                    drops: [{ id: 'wood', min: 1, max: 3 }]
                };
            case 'shell':
                return {
                    ...base,
                    name: 'Sea Shell',
                    maxHp: 5, hp: 5,
                    radius: 8,
                    toolRequired: 'any',
                    drops: [{ id: 'stone', min: 1, max: 1 }]
                };
            case 'shipwreck_crate':
                return {
                    ...base,
                    name: 'Shipwreck Supply Crate',
                    maxHp: 30, hp: 30,
                    radius: 22,
                    toolRequired: 'any',
                    isLandmark: true,
                    drops: [
                        { id: 'radio_tube', min: 1, max: 1 },
                        { id: 'scrap_metal', min: 4, max: 8 },
                        { id: 'canteen', min: 1, max: 1 },
                        { id: 'bandage', min: 3, max: 5 }
                    ]
                };
            case 'ancient_chest':
                return {
                    ...base,
                    name: 'Ruins Power Cell Locker',
                    maxHp: 40, hp: 40,
                    radius: 22,
                    toolRequired: 'any',
                    isLandmark: true,
                    drops: [
                        { id: 'battery', min: 1, max: 1 },
                        { id: 'copper_wire', min: 3, max: 6 },
                        { id: 'iron_ingot', min: 4, max: 6 }
                    ]
                };
            default:
                return base;
        }
    }

    // --- TILE & COLLISION QUERIES ---

    getTile(tx, ty) {
        if (tx < 0 || tx >= this.width || ty < 0 || ty >= this.height) return TileType.DEEP_OCEAN;
        return this.tiles[ty * this.width + tx];
    }

    setTile(tx, ty, type) {
        if (tx < 0 || tx >= this.width || ty < 0 || ty >= this.height) return;
        this.tiles[ty * this.width + tx] = type;
    }

    getTileAtWorld(wx, wy) {
        const tx = Math.floor(wx / this.tileSize);
        const ty = Math.floor(wy / this.tileSize);
        return this.getTile(tx, ty);
    }

    isWater(wx, wy) {
        const t = this.getTileAtWorld(wx, wy);
        return t === TileType.DEEP_OCEAN || t === TileType.OCEAN;
    }

    isBlocked(wx, wy, radius = 12) {
        // Deep ocean is impassable barrier
        const t = this.getTileAtWorld(wx, wy);
        if (t === TileType.DEEP_OCEAN) return true;

        // Check placed solid structures (walls, closed doors)
        for (const s of this.structures) {
            if (s.type === 'wall' || (s.type === 'door' && !s.isOpen)) {
                if (Math.abs(wx - s.x) < (this.tileSize / 2 + radius * 0.7) &&
                    Math.abs(wy - s.y) < (this.tileSize / 2 + radius * 0.7)) {
                    return true;
                }
            }
        }

        // Check solid rock nodes and trees collision box
        for (const r of this.resources) {
            if (r.dead) continue;
            if (r.type === 'palm_tree' || r.type === 'pine_tree' || r.type === 'boulder' ||
                r.type === 'iron_node' || r.type === 'copper_node' || r.type === 'shipwreck_crate' || r.type === 'ancient_chest') {
                const dist = Math.hypot(wx - r.x, wy - r.y);
                if (dist < (r.radius * 0.65 + radius)) {
                    return true;
                }
            }
        }

        // Radio Tower collision
        const distRadio = Math.hypot(wx - this.radioTowerPos.x, wy - this.radioTowerPos.y);
        if (distRadio < 28 + radius) return true;

        return false;
    }

    // --- REVEAL FOG OF WAR ---
    revealArea(wx, wy, radius = 6) {
        const cx = Math.floor(wx / this.tileSize);
        const cy = Math.floor(wy / this.tileSize);
        const rSq = radius * radius;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= rSq) {
                    const tx = cx + dx;
                    const ty = cy + dy;
                    if (tx >= 0 && tx < this.width && ty >= 0 && ty < this.height) {
                        this.explored[ty * this.width + tx] = true;
                    }
                }
            }
        }
    }

    // --- UPDATE & RENDER ---

    update(dt) {
        this.waterAnimTime += dt * 1.5;

        // Resource node shaking and respawn
        for (let i = 0; i < this.resources.length; i++) {
            const r = this.resources[i];
            if (r.shake > 0) {
                r.shake -= dt * 10;
                r.shakeX = Math.sin(r.shake * 30) * (r.shake * 4);
                if (r.shake <= 0) {
                    r.shake = 0;
                    r.shakeX = 0;
                }
            }

            if (r.dead && !r.isLandmark) {
                r.respawnTimer -= dt;
                if (r.respawnTimer <= 0) {
                    r.dead = false;
                    r.hp = r.maxHp;
                }
            }
        }
    }

    render(ctx, camera) {
        const startCol = Math.max(0, Math.floor(camera.x / this.tileSize));
        const endCol = Math.min(this.width - 1, Math.floor((camera.x + camera.width) / this.tileSize));
        const startRow = Math.max(0, Math.floor(camera.y / this.tileSize));
        const endRow = Math.min(this.height - 1, Math.floor((camera.y + camera.height) / this.tileSize));

        // 1. Render Ground Tiles
        for (let y = startRow; y <= endRow; y++) {
            for (let x = startCol; x <= endCol; x++) {
                const tile = this.getTile(x, y);
                const sx = Math.floor(x * this.tileSize - camera.x);
                const sy = Math.floor(y * this.tileSize - camera.y);

                this.renderTile(ctx, tile, sx, sy, x, y);
            }
        }

        // 2. Render Placed Player Floors & Buildings Underneath
        for (const s of this.structures) {
            if (s.type === 'floor') {
                const sx = s.x - camera.x;
                const sy = s.y - camera.y;
                ctx.fillStyle = '#8B5A2B';
                ctx.fillRect(sx - this.tileSize / 2, sy - this.tileSize / 2, this.tileSize, this.tileSize);
                ctx.strokeStyle = '#5C3818';
                ctx.strokeRect(sx - this.tileSize / 2, sy - this.tileSize / 2, this.tileSize, this.tileSize);
            }
        }

        // 3. Render Radio Tower Landmark
        this.renderRadioTower(ctx, camera);

        // 4. Render Placed Structures (Campfires, Walls, Bed, Chest, Furnace)
        for (const s of this.structures) {
            if (s.type !== 'floor') {
                this.renderStructure(ctx, s, camera);
            }
        }

        // 5. Render Resources (Sorted Y for depth)
        const visibleResources = this.resources.filter(r => {
            if (r.dead) return false;
            const sx = r.x - camera.x;
            const sy = r.y - camera.y;
            return (sx > -60 && sx < camera.width + 60 && sy > -80 && sy < camera.height + 60);
        });

        visibleResources.sort((a, b) => a.y - b.y);

        for (const r of visibleResources) {
            this.renderResourceNode(ctx, r, camera);
        }
    }

    renderTile(ctx, tile, sx, sy, tx, ty) {
        const s = this.tileSize;

        switch (tile) {
            case TileType.DEEP_OCEAN:
                ctx.fillStyle = '#104E8B';
                ctx.fillRect(sx, sy, s, s);
                // Dark waves
                ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
                const waveOffset = Math.sin(this.waterAnimTime + (tx + ty)) * 3;
                ctx.fillRect(sx + 8, sy + 14 + waveOffset, s - 16, 2);
                break;

            case TileType.OCEAN:
                ctx.fillStyle = '#2080B0';
                ctx.fillRect(sx, sy, s, s);
                // Shimmer waves
                ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
                const waveOffset2 = Math.cos(this.waterAnimTime + tx * 0.8) * 3;
                ctx.fillRect(sx + 6, sy + 18 + waveOffset2, s - 12, 3);
                break;

            case TileType.SAND:
                ctx.fillStyle = '#F4D06F';
                ctx.fillRect(sx, sy, s, s);
                // Sand grains texture
                if ((tx * 7 + ty * 13) % 5 === 0) {
                    ctx.fillStyle = '#D4AF37';
                    ctx.fillRect(sx + (tx * 11) % (s - 6), sy + (ty * 17) % (s - 6), 2, 2);
                }
                break;

            case TileType.GRASS:
                ctx.fillStyle = '#5A9E32';
                ctx.fillRect(sx, sy, s, s);
                // Subtle grass blades
                if ((tx * 13 + ty * 7) % 3 === 0) {
                    ctx.fillStyle = '#4A8528';
                    ctx.fillRect(sx + (tx * 19) % (s - 8), sy + (ty * 23) % (s - 8), 3, 5);
                }
                break;

            case TileType.FOREST:
                ctx.fillStyle = '#2D6A28';
                ctx.fillRect(sx, sy, s, s);
                // Forest moss spots
                if ((tx + ty) % 2 === 0) {
                    ctx.fillStyle = '#22521F';
                    ctx.fillRect(sx + 10, sy + 10, s - 20, s - 20);
                }
                break;

            case TileType.ROCK:
                ctx.fillStyle = '#7A7A7A';
                ctx.fillRect(sx, sy, s, s);
                ctx.fillStyle = '#656565';
                ctx.fillRect(sx + 4, sy + 4, s - 8, s - 8);
                break;

            case TileType.RUINS:
                ctx.fillStyle = '#4A4A5A';
                ctx.fillRect(sx, sy, s, s);
                // Tile paver cracks
                ctx.strokeStyle = '#2E2E3A';
                ctx.lineWidth = 1;
                ctx.strokeRect(sx + 2, sy + 2, s - 4, s - 4);
                break;
        }
    }

    renderResourceNode(ctx, r, camera) {
        const sx = r.x - camera.x + r.shakeX;
        const sy = r.y - camera.y;

        ctx.save();

        switch (r.type) {
            case 'palm_tree':
                // Tree shadow
                ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
                ctx.beginPath();
                ctx.ellipse(sx, sy + 10, 18, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                // Trunk
                ctx.strokeStyle = '#8B5A2B';
                ctx.lineWidth = 8;
                ctx.beginPath();
                ctx.moveTo(sx, sy + 10);
                ctx.quadraticCurveTo(sx + 8, sy - 20, sx, sy - 45);
                ctx.stroke();
                // Leaves / Canopy
                ctx.fillStyle = '#228B22';
                ctx.beginPath();
                ctx.arc(sx, sy - 50, 24, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#32CD32';
                ctx.beginPath();
                ctx.arc(sx - 10, sy - 52, 14, 0, Math.PI * 2);
                ctx.arc(sx + 10, sy - 52, 14, 0, Math.PI * 2);
                ctx.fill();
                // Coconuts
                ctx.fillStyle = '#654321';
                ctx.beginPath();
                ctx.arc(sx - 4, sy - 42, 4, 0, Math.PI * 2);
                ctx.arc(sx + 4, sy - 42, 4, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'pine_tree':
                ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
                ctx.beginPath();
                ctx.ellipse(sx, sy + 10, 16, 7, 0, 0, Math.PI * 2);
                ctx.fill();
                // Trunk
                ctx.fillStyle = '#4A2E18';
                ctx.fillRect(sx - 4, sy - 20, 8, 30);
                // Pine triangles
                ctx.fillStyle = '#1E4D2B';
                ctx.beginPath();
                ctx.moveTo(sx, sy - 65);
                ctx.lineTo(sx + 22, sy - 25);
                ctx.lineTo(sx - 22, sy - 25);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#2D6A3E';
                ctx.beginPath();
                ctx.moveTo(sx, sy - 65);
                ctx.lineTo(sx + 16, sy - 38);
                ctx.lineTo(sx - 16, sy - 38);
                ctx.closePath();
                ctx.fill();
                break;

            case 'berry_bush':
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                ctx.beginPath();
                ctx.ellipse(sx, sy + 5, 14, 6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#2E8B57';
                ctx.beginPath();
                ctx.arc(sx, sy - 4, 16, 0, Math.PI * 2);
                ctx.fill();
                // Red berries
                ctx.fillStyle = '#FF0000';
                ctx.beginPath();
                ctx.arc(sx - 6, sy - 8, 3.5, 0, Math.PI * 2);
                ctx.arc(sx + 6, sy - 5, 3.5, 0, Math.PI * 2);
                ctx.arc(sx, sy + 2, 3.5, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'blue_berry_bush':
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                ctx.beginPath();
                ctx.ellipse(sx, sy + 5, 14, 6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#1C6B47';
                ctx.beginPath();
                ctx.arc(sx, sy - 4, 16, 0, Math.PI * 2);
                ctx.fill();
                // Blue berries
                ctx.fillStyle = '#4169E1';
                ctx.beginPath();
                ctx.arc(sx - 6, sy - 8, 3.5, 0, Math.PI * 2);
                ctx.arc(sx + 6, sy - 5, 3.5, 0, Math.PI * 2);
                ctx.arc(sx, sy + 2, 3.5, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'fiber_grass':
                ctx.strokeStyle = '#7CFC00';
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(sx - 6, sy + 6);
                ctx.lineTo(sx - 10, sy - 14);
                ctx.moveTo(sx, sy + 6);
                ctx.lineTo(sx, sy - 18);
                ctx.moveTo(sx + 6, sy + 6);
                ctx.lineTo(sx + 10, sy - 12);
                ctx.stroke();
                break;

            case 'boulder':
                ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
                ctx.beginPath();
                ctx.ellipse(sx, sy + 6, 18, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#777777';
                ctx.beginPath();
                ctx.arc(sx, sy, 16, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#A0A0A0';
                ctx.beginPath();
                ctx.arc(sx - 4, sy - 5, 10, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'iron_node':
                ctx.fillStyle = '#5A4D41';
                ctx.beginPath();
                ctx.arc(sx, sy, 17, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8A87C';
                ctx.fillRect(sx - 8, sy - 6, 6, 6);
                ctx.fillRect(sx + 2, sy + 2, 7, 7);
                break;

            case 'copper_node':
                ctx.fillStyle = '#6B5446';
                ctx.beginPath();
                ctx.arc(sx, sy, 16, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#3CB371';
                ctx.fillRect(sx - 7, sy - 5, 5, 5);
                ctx.fillStyle = '#CD7F32';
                ctx.fillRect(sx + 2, sy + 1, 6, 6);
                break;

            case 'flint_rock':
                ctx.fillStyle = '#333333';
                ctx.beginPath();
                ctx.moveTo(sx, sy - 10);
                ctx.lineTo(sx + 10, sy + 6);
                ctx.lineTo(sx - 10, sy + 6);
                ctx.closePath();
                ctx.fill();
                break;

            case 'driftwood':
                ctx.fillStyle = '#8B5A2B';
                ctx.fillRect(sx - 10, sy - 3, 20, 6);
                ctx.fillStyle = '#D2B48C';
                ctx.fillRect(sx - 4, sy - 8, 8, 5);
                break;

            case 'shell':
                ctx.fillStyle = '#FFFAF0';
                ctx.beginPath();
                ctx.arc(sx, sy, 6, 0, Math.PI, true);
                ctx.fill();
                break;

            case 'shipwreck_crate':
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(sx - 18, sy - 18, 36, 36);
                ctx.strokeStyle = '#D2B48C';
                ctx.lineWidth = 3;
                ctx.strokeRect(sx - 18, sy - 18, 36, 36);
                ctx.beginPath();
                ctx.moveTo(sx - 18, sy - 18);
                ctx.lineTo(sx + 18, sy + 18);
                ctx.moveTo(sx + 18, sy - 18);
                ctx.lineTo(sx - 18, sy + 18);
                ctx.stroke();
                break;

            case 'ancient_chest':
                ctx.fillStyle = '#2F4F4F';
                ctx.fillRect(sx - 18, sy - 14, 36, 28);
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(sx - 4, sy - 4, 8, 8);
                ctx.strokeStyle = '#00CED1';
                ctx.lineWidth = 2;
                ctx.strokeRect(sx - 18, sy - 14, 36, 28);
                break;
        }

        // Render health bar if damaged
        if (r.hp < r.maxHp) {
            const barW = 32;
            const barH = 4;
            const pct = Math.max(0, r.hp / r.maxHp);
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(sx - barW / 2, sy - 30, barW, barH);
            ctx.fillStyle = '#00FF7F';
            ctx.fillRect(sx - barW / 2, sy - 30, barW * pct, barH);
        }

        ctx.restore();
    }

    renderStructure(ctx, s, camera) {
        const sx = s.x - camera.x;
        const sy = s.y - camera.y;
        const size = this.tileSize;

        ctx.save();

        switch (s.type) {
            case 'wall':
                ctx.fillStyle = '#8B5A2B';
                ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
                ctx.strokeStyle = '#3E2714';
                ctx.lineWidth = 3;
                ctx.strokeRect(sx - size / 2, sy - size / 2, size, size);
                ctx.beginPath();
                ctx.moveTo(sx - size / 4, sy - size / 2);
                ctx.lineTo(sx - size / 4, sy + size / 2);
                ctx.moveTo(sx + size / 4, sy - size / 2);
                ctx.lineTo(sx + size / 4, sy + size / 2);
                ctx.stroke();
                break;

            case 'door':
                if (s.isOpen) {
                    ctx.fillStyle = '#A0522D';
                    ctx.fillRect(sx - size / 2, sy - size / 2, size * 0.25, size);
                } else {
                    ctx.fillStyle = '#A0522D';
                    ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath();
                    ctx.arc(sx + size / 4, sy, 4, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'campfire':
                // Logs
                ctx.strokeStyle = '#5C3818';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(sx - 14, sy + 6);
                ctx.lineTo(sx + 14, sy + 6);
                ctx.moveTo(sx - 10, sy - 6);
                ctx.lineTo(sx + 10, sy + 12);
                ctx.stroke();
                // Animated fire
                if (s.isLit !== false) {
                    const fireR = 10 + Math.sin(this.waterAnimTime * 8) * 3;
                    ctx.fillStyle = '#FF4500';
                    ctx.beginPath();
                    ctx.arc(sx, sy - 2, fireR, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath();
                    ctx.arc(sx, sy - 2, fireR * 0.55, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'shelter':
                // Lean-to tent
                ctx.fillStyle = '#228B22';
                ctx.beginPath();
                ctx.moveTo(sx, sy - 24);
                ctx.lineTo(sx + 24, sy + 16);
                ctx.lineTo(sx - 24, sy + 16);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#5C3818';
                ctx.lineWidth = 3;
                ctx.stroke();
                break;

            case 'chest':
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(sx - 16, sy - 12, 32, 24);
                ctx.fillStyle = '#D2B48C';
                ctx.fillRect(sx - 16, sy - 2, 32, 4);
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(sx - 3, sy - 4, 6, 8);
                break;

            case 'furnace':
                ctx.fillStyle = '#696969';
                ctx.beginPath();
                ctx.roundRect(sx - 18, sy - 18, 36, 36, 6);
                ctx.fill();
                ctx.fillStyle = '#FF4500';
                ctx.beginPath();
                ctx.arc(sx, sy + 4, 8 + Math.sin(this.waterAnimTime * 6) * 2, 0, Math.PI);
                ctx.fill();
                break;

            case 'workstation':
                ctx.fillStyle = '#8B5A2B';
                ctx.fillRect(sx - 20, sy - 8, 40, 16);
                ctx.fillStyle = '#5C3818';
                ctx.fillRect(sx - 16, sy + 8, 6, 12);
                ctx.fillRect(sx + 10, sy + 8, 6, 12);
                ctx.fillStyle = '#708090';
                ctx.fillRect(sx - 8, sy - 14, 14, 6);
                break;

            case 'water_collector':
                ctx.fillStyle = '#708090';
                ctx.beginPath();
                ctx.moveTo(sx - 18, sy - 14);
                ctx.lineTo(sx + 18, sy - 14);
                ctx.lineTo(sx + 12, sy + 16);
                ctx.lineTo(sx - 12, sy + 16);
                ctx.closePath();
                ctx.fill();
                if (s.waterAmount > 0) {
                    ctx.fillStyle = '#00BFFF';
                    ctx.fillRect(sx - 8, sy, 16, 12);
                }
                break;
        }

        ctx.restore();
    }

    renderRadioTower(ctx, camera) {
        const sx = this.radioTowerPos.x - camera.x;
        const sy = this.radioTowerPos.y - camera.y;

        if (sx < -100 || sx > camera.width + 100 || sy < -150 || sy > camera.height + 100) return;

        ctx.save();

        // Concrete base
        ctx.fillStyle = '#555';
        ctx.fillRect(sx - 24, sy - 8, 48, 20);

        // Tower lattice mast
        ctx.strokeStyle = '#A9A9A9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(sx - 14, sy - 8);
        ctx.lineTo(sx, sy - 70);
        ctx.lineTo(sx + 14, sy - 8);
        ctx.stroke();

        // Cross braces
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(sx - 10, sy - 25);
        ctx.lineTo(sx + 10, sy - 25);
        ctx.moveTo(sx - 6, sy - 45);
        ctx.lineTo(sx + 6, sy - 45);
        ctx.moveTo(sx - 10, sy - 25);
        ctx.lineTo(sx + 6, sy - 45);
        ctx.moveTo(sx + 10, sy - 25);
        ctx.lineTo(sx - 6, sy - 45);
        ctx.stroke();

        // Transmitter dish / antenna light
        const isRepaired = window.Game && window.Game.radioRepaired;
        ctx.fillStyle = isRepaired ? '#00FF00' : (Math.sin(this.waterAnimTime * 4) > 0 ? '#FF0000' : '#440000');
        ctx.beginPath();
        ctx.arc(sx, sy - 72, 5, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing radio wave rings if repaired
        if (isRepaired) {
            const waveR = (this.waterAnimTime * 25) % 40;
            ctx.strokeStyle = `rgba(0, 255, 128, ${1 - waveR / 40})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(sx, sy - 72, waveR, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Radio control panel box
        ctx.fillStyle = '#2F4F4F';
        ctx.fillRect(sx - 12, sy, 24, 16);
        ctx.fillStyle = '#00FFCC';
        ctx.fillRect(sx - 8, sy + 3, 6, 4);

        ctx.restore();
    }
}

window.World = World;
window.TileType = TileType;
