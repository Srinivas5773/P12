/**
 * Island Caves, Hidden Grotto, Ancient Catacombs & Subterranean Dungeon Engine
 * Features procedural subterranean level generation, stalagmites, glowing crystals, and underground boss vaults.
 */

const DungeonType = {
    VOLCANIC_CAVE: 'volcanic_cave',
    CRYSTAL_GROTTO: 'crystal_grotto',
    ANCIENT_CATACOMBS: 'ancient_catacombs',
    SUNKEN_SHIP_INTERIOR: 'sunken_ship_interior'
};

class SubterraneanDungeon {
    constructor(type, width = 60, height = 60) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.tileSize = 48;
        this.grid = [];
        this.entities = [];
        this.treasures = [];
        this.spawnPoint = { x: 0, y: 0 };
        this.exitPoint = { x: 0, y: 0 };
        this.isGenerated = false;

        this.generateDungeon();
    }

    generateDungeon() {
        this.grid = new Array(this.width * this.height).fill(1); // 1 = Solid Rock Wall, 0 = Walkable Floor

        // Cellular Automata Cave Noise
        for (let y = 1; y < this.height - 1; y++) {
            for (let x = 1; x < this.width - 1; x++) {
                this.grid[y * this.width + x] = Math.random() < 0.45 ? 1 : 0;
            }
        }

        // Smooth cave walls across 4 simulation passes
        for (let pass = 0; pass < 4; pass++) {
            const nextGrid = [...this.grid];
            for (let y = 1; y < this.height - 1; y++) {
                for (let x = 1; x < this.width - 1; x++) {
                    const wallCount = this.getAdjacentWallCount(x, y);
                    if (wallCount > 4) {
                        nextGrid[y * this.width + x] = 1;
                    } else if (wallCount < 4) {
                        nextGrid[y * this.width + x] = 0;
                    }
                }
            }
            this.grid = nextGrid;
        }

        // Set borders
        for (let x = 0; x < this.width; x++) {
            this.grid[x] = 1;
            this.grid[(this.height - 1) * this.width + x] = 1;
        }
        for (let y = 0; y < this.height; y++) {
            this.grid[y * this.width] = 1;
            this.grid[y * this.width + (this.width - 1)] = 1;
        }

        // Carve central hub and find entrance / exit
        const cx = Math.floor(this.width / 2);
        const cy = Math.floor(this.height / 2);
        for (let ox = -3; ox <= 3; ox++) {
            for (let oy = -3; oy <= 3; oy++) {
                this.grid[(cy + oy) * this.width + (cx + ox)] = 0;
            }
        }

        this.spawnPoint = { x: cx * this.tileSize, y: cy * this.tileSize };

        // Populate Subterranean Resources & Hostiles
        this.populateDungeonEntities();
        this.isGenerated = true;
    }

    getAdjacentWallCount(x, y) {
        let count = 0;
        for (let ox = -1; ox <= 1; ox++) {
            for (let oy = -1; oy <= 1; oy++) {
                if (ox === 0 && oy === 0) continue;
                if (this.grid[(y + oy) * this.width + (x + ox)] === 1) count++;
            }
        }
        return count;
    }

    populateDungeonEntities() {
        this.entities = [];
        this.treasures = [];

        for (let y = 3; y < this.height - 3; y++) {
            for (let x = 3; x < this.width - 3; x++) {
                if (this.grid[y * this.width + x] === 0) {
                    const wx = x * this.tileSize + this.tileSize / 2;
                    const wy = y * this.tileSize + this.tileSize / 2;
                    const roll = Math.random();

                    if (roll < 0.04) {
                        // Glowing Crystal Node
                        this.treasures.push({
                            type: 'crystal_node',
                            x: wx, y: wy,
                            hp: 50,
                            color: '#00FFFF',
                            drops: [{ id: 'flint', count: 4 }, { id: 'copper_wire', count: 2 }]
                        });
                    } else if (roll < 0.07) {
                        // Pure Iron Ore Seam
                        this.treasures.push({
                            type: 'deep_iron_seam',
                            x: wx, y: wy,
                            hp: 80,
                            color: '#E8A87C',
                            drops: [{ id: 'iron_ore', count: 6 }, { id: 'stone', count: 4 }]
                        });
                    } else if (roll < 0.09) {
                        // Cave Wolf / Spider
                        this.entities.push({
                            type: 'cave_beast',
                            name: 'Obsidian Cave Wolf',
                            x: wx, y: wy,
                            hp: 75,
                            maxHp: 75,
                            damage: 20,
                            speed: 85,
                            radius: 16
                        });
                    }
                }
            }
        }
    }

    render(ctx, camera) {
        const startCol = Math.max(0, Math.floor(camera.x / this.tileSize));
        const endCol = Math.min(this.width - 1, Math.floor((camera.x + camera.width) / this.tileSize));
        const startRow = Math.max(0, Math.floor(camera.y / this.tileSize));
        const endRow = Math.min(this.height - 1, Math.floor((camera.y + camera.height) / this.tileSize));

        for (let y = startRow; y <= endRow; y++) {
            for (let x = startCol; x <= endCol; x++) {
                const isWall = this.grid[y * this.width + x] === 1;
                const sx = x * this.tileSize - camera.x;
                const sy = y * this.tileSize - camera.y;

                if (isWall) {
                    ctx.fillStyle = '#1e1b24';
                    ctx.fillRect(sx, sy, this.tileSize, this.tileSize);
                    ctx.strokeStyle = '#120f18';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(sx, sy, this.tileSize, this.tileSize);
                } else {
                    ctx.fillStyle = '#2d2836';
                    ctx.fillRect(sx, sy, this.tileSize, this.tileSize);
                    // Cave floor cracks
                    if ((x * 7 + y * 13) % 4 === 0) {
                        ctx.fillStyle = '#231f2b';
                        ctx.fillRect(sx + 8, sy + 8, 4, 4);
                    }
                }
            }
        }

        // Render Treasures & Crystals
        for (const t of this.treasures) {
            const sx = t.x - camera.x;
            const sy = t.y - camera.y;
            ctx.save();
            ctx.fillStyle = t.color;
            ctx.beginPath();
            ctx.arc(sx, sy, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
        }
    }
}

class DungeonSystem {
    constructor() {
        this.activeDungeon = null;
        this.isInDungeon = false;
        this.dungeons = {
            volcanic_cave: new SubterraneanDungeon(DungeonType.VOLCANIC_CAVE),
            ancient_catacombs: new SubterraneanDungeon(DungeonType.ANCIENT_CATACOMBS)
        };
    }

    enterDungeon(type, player) {
        if (this.dungeons[type]) {
            this.activeDungeon = this.dungeons[type];
            this.isInDungeon = true;
            player.x = this.activeDungeon.spawnPoint.x;
            player.y = this.activeDungeon.spawnPoint.y;
            window.Sound.playQuestComplete();
            window.Particles.addFloatingText('Entered Subterranean Caverns!', player.x, player.y - 30, '#9C27B0', 18, true);
        }
    }

    exitDungeon(player, world) {
        this.isInDungeon = false;
        this.activeDungeon = null;
        player.x = world.spawnPos.x;
        player.y = world.spawnPos.y;
        window.Particles.addFloatingText('Returned to Island Surface!', player.x, player.y - 30, '#00FF7F', 18, true);
    }
}

window.DungeonType = DungeonType;
window.SubterraneanDungeon = SubterraneanDungeon;
window.DungeonSystem = DungeonSystem;
window.Dungeons = new DungeonSystem();
