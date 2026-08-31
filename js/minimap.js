/**
 * Real-Time Radar Minimap & Exploration Map
 */

class Minimap {
    constructor() {
        this.size = 140; // HUD square size
        this.isExpanded = false;
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = 120;
        this.offscreenCanvas.height = 120;
        this.dirty = true;
    }

    render(ctx, camera, player, world) {
        const hudX = camera.width - this.size - 20;
        const hudY = 20;
        const s = this.size;

        ctx.save();

        // 1. Radar Circular / Rounded Frame
        ctx.fillStyle = 'rgba(15, 20, 30, 0.85)';
        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(hudX, hudY, s, s, 10);
        ctx.fill();
        ctx.stroke();

        ctx.clip(); // Clip everything inside radar box

        // 2. Draw World Map onto Radar
        const scaleX = s / (world.width * world.tileSize);
        const scaleY = s / (world.height * world.tileSize);

        // Center radar on player
        ctx.save();
        ctx.translate(hudX + s / 2, hudY + s / 2);
        ctx.scale(2.2, 2.2); // Zoom in on radar
        ctx.translate(-player.x * scaleX, -player.y * scaleY);

        // Render explored tiles in low-res
        const step = 2;
        for (let y = 0; y < world.height; y += step) {
            for (let x = 0; x < world.width; x += step) {
                const idx = y * world.width + x;
                if (!world.explored[idx]) {
                    ctx.fillStyle = '#050810';
                } else {
                    const tile = world.tiles[idx];
                    switch (tile) {
                        case window.TileType.DEEP_OCEAN: ctx.fillStyle = '#104E8B'; break;
                        case window.TileType.OCEAN: ctx.fillStyle = '#2080B0'; break;
                        case window.TileType.SAND: ctx.fillStyle = '#F4D06F'; break;
                        case window.TileType.GRASS: ctx.fillStyle = '#5A9E32'; break;
                        case window.TileType.FOREST: ctx.fillStyle = '#2D6A28'; break;
                        case window.TileType.ROCK: ctx.fillStyle = '#7A7A7A'; break;
                        case window.TileType.RUINS: ctx.fillStyle = '#9C27B0'; break;
                    }
                }
                const wx = x * world.tileSize * scaleX;
                const wy = y * world.tileSize * scaleY;
                ctx.fillRect(wx, wy, step * world.tileSize * scaleX, step * world.tileSize * scaleY);
            }
        }

        // Render Landmarks
        // 1. Radio Tower
        const rx = world.radioTowerPos.x * scaleX;
        const ry = world.radioTowerPos.y * scaleY;
        ctx.fillStyle = '#00FFCC';
        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, Math.PI * 2);
        ctx.fill();

        // 2. Shipwreck
        const sx = world.shipwreckPos.x * scaleX;
        const sy = world.shipwreckPos.y * scaleY;
        ctx.fillStyle = '#FF9800';
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fill();

        // 3. Ancient Ruins
        const ux = world.ruinsPos.x * scaleX;
        const uy = world.ruinsPos.y * scaleY;
        ctx.fillStyle = '#E040FB';
        ctx.beginPath();
        ctx.arc(ux, uy, 3, 0, Math.PI * 2);
        ctx.fill();

        // 4. Placed Campfires
        for (const str of world.structures) {
            if (str.type === 'campfire') {
                ctx.fillStyle = '#FF5722';
                ctx.beginPath();
                ctx.arc(str.x * scaleX, str.y * scaleY, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 5. Player Icon & Direction
        const px = player.x * scaleX;
        const py = player.y * scaleY;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(player.angle);

        ctx.fillStyle = '#00FF00';
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(-4, -4);
        ctx.lineTo(-2, 0);
        ctx.lineTo(-4, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.restore();

        // Radar Compass Rings
        ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(hudX + s / 2, hudY + s / 2, s * 0.3, 0, Math.PI * 2);
        ctx.arc(hudX + s / 2, hudY + s / 2, s * 0.45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }
}

window.Minimap = Minimap;
