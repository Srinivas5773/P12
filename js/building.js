/**
 * Base Building, Grid Placement & Structure Interaction
 */

class BuildingSystem {
    constructor() {
        this.isPlacing = false;
        this.selectedBuildingType = null;
        this.previewX = 0;
        this.previewY = 0;
        this.isValidLocation = false;
    }

    startPlacement(buildingType) {
        this.isPlacing = true;
        this.selectedBuildingType = buildingType;
    }

    cancelPlacement() {
        this.isPlacing = false;
        this.selectedBuildingType = null;
    }

    update(mouseWorldX, mouseWorldY, world, player) {
        if (!this.isPlacing || !this.selectedBuildingType) return;

        // Snap to tile grid
        const tileSize = world.tileSize;
        const gridX = Math.floor(mouseWorldX / tileSize) * tileSize + tileSize / 2;
        const gridY = Math.floor(mouseWorldY / tileSize) * tileSize + tileSize / 2;

        this.previewX = gridX;
        this.previewY = gridY;

        // Validation checks
        const distToPlayer = Math.hypot(player.x - gridX, player.y - gridY);
        const inBuildRange = distToPlayer < 220;

        const tile = world.getTileAtWorld(gridX, gridY);
        const isGround = tile !== window.TileType.DEEP_OCEAN && tile !== window.TileType.OCEAN;

        // Check if overlaps another structure or resource
        let isOccupied = false;
        for (const s of world.structures) {
            if (Math.hypot(s.x - gridX, s.y - gridY) < tileSize * 0.8) {
                isOccupied = true;
                break;
            }
        }
        for (const r of world.resources) {
            if (!r.dead && Math.hypot(r.x - gridX, r.y - gridY) < tileSize * 0.8) {
                isOccupied = true;
                break;
            }
        }

        // Check radio tower collision
        if (Math.hypot(world.radioTowerPos.x - gridX, world.radioTowerPos.y - gridY) < 60) {
            isOccupied = true;
        }

        this.isValidLocation = inBuildRange && isGround && !isOccupied;
    }

    placeStructure(world, inventory) {
        if (!this.isPlacing || !this.isValidLocation || !this.selectedBuildingType) return false;

        const structDef = window.ItemDatabase[this.selectedBuildingType];
        if (!structDef) return false;

        const structure = {
            id: Date.now() + Math.random(),
            type: structDef.buildingType || this.selectedBuildingType,
            x: this.previewX,
            y: this.previewY,
            hp: structDef.health || 100,
            maxHp: structDef.health || 100,
            isOpen: false,
            isLit: true,
            waterAmount: 0,
            chestItems: structDef.buildingType === 'chest' ? new Array(18).fill(null) : null
        };

        world.structures.push(structure);
        inventory.removeItem(this.selectedBuildingType, 1);

        window.Sound.playBuild();
        window.Particles.addWoodChips(this.previewX, this.previewY, 15);
        window.Particles.addFloatingText(`Built ${structDef.name}!`, this.previewX, this.previewY - 20, '#00FF7F', 14, true);

        if (window.Game) {
            window.Game.quests.onStructureBuilt(structure.type);
        }

        // If no more items in inventory of this type, cancel placement
        if (!inventory.hasItem(this.selectedBuildingType, 1)) {
            this.cancelPlacement();
        }

        return true;
    }

    renderPreview(ctx, camera, world) {
        if (!this.isPlacing || !this.selectedBuildingType) return;

        const sx = this.previewX - camera.x;
        const sy = this.previewY - camera.y;
        const s = world.tileSize;

        ctx.save();
        ctx.fillStyle = this.isValidLocation ? 'rgba(46, 204, 113, 0.4)' : 'rgba(231, 76, 60, 0.4)';
        ctx.strokeStyle = this.isValidLocation ? '#2ECC71' : '#E74C3C';
        ctx.lineWidth = 2;

        ctx.fillRect(sx - s / 2, sy - s / 2, s, s);
        ctx.strokeRect(sx - s / 2, sy - s / 2, s, s);

        // Preview item icon
        const def = window.ItemDatabase[this.selectedBuildingType];
        if (def && def.drawIcon) {
            ctx.globalAlpha = 0.7;
            def.drawIcon(ctx, sx - s / 2, sy - s / 2, s);
        }

        ctx.restore();
    }
}

window.BuildingSystem = BuildingSystem;
