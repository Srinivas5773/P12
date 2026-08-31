/**
 * Master Game Controller, Game Loop & UI Orchestrator
 */

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        // High-DPI Canvas Scaling
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        // Camera
        this.camera = {
            x: 0,
            y: 0,
            width: this.canvas.width,
            height: this.canvas.height
        };

        // Inputs
        this.keys = {};
        this.mouse = { x: 0, y: 0, isDown: false, rightDown: false };
        this.mouseWorld = { x: 0, y: 0 };
        this.setupInputs();

        // Subsystems
        this.world = new World(120, 120, 48);
        this.player = new Player(this.world.spawnPos.x, this.world.spawnPos.y);
        this.weather = new WeatherSystem();
        this.crafting = new CraftingSystem();
        this.building = new BuildingSystem();
        this.fishing = new FishingSystem();
        this.combat = new CombatSystem();
        this.quests = new QuestSystem();
        this.minimap = new Minimap();
        this.storage = new StorageSystem();

        // Entities
        this.mobs = [];
        this.spawnInitialFauna();

        // Game States
        this.isPaused = false;
        this.isGameOver = false;
        this.isVictory = false;
        this.radioRepaired = false;
        this.activeModal = null; // 'inventory', 'chest', 'furnace', 'radio', 'pause'

        // Timing
        this.lastTime = performance.now();
        this.mobSpawnTimer = 0;
        this.autoSaveTimer = 60;

        // Active Chest / Furnace ref
        this.activeStructure = null;

        // Try load save
        if (this.storage.hasSave()) {
            this.storage.loadGame(this);
        }

        // Start Loop
        this.renderHotbar();
        window.Particles.addFloatingText("🏝️ Welcome to Castaway's Horizon!", this.player.x, this.player.y - 35, '#00FFCC', 18, true);
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.camera) {
            this.camera.width = this.canvas.width;
            this.camera.height = this.canvas.height;
        }
    }

    setupInputs() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            window.Sound.init();

            // Hotbar selection 1 - 8
            if (e.key >= '1' && e.key <= '8') {
                const idx = parseInt(e.key) - 1;
                this.player.inventory.useHotbarItem(idx);
                this.renderHotbar();
                this.checkBuildingPlacement();
            }

            // Key [E] or [I]: Toggle Inventory / Crafting Modal
            if (e.code === 'KeyE' || e.code === 'KeyI') {
                if (this.activeModal === 'inventory') {
                    this.closeModal();
                } else if (!this.activeModal) {
                    this.openModal('inventory');
                }
            }

            // Key [K]: Skill Tree
            if (e.code === 'KeyK') {
                if (this.activeModal === 'skills') {
                    this.closeModal();
                } else if (!this.activeModal) {
                    window.ExtendedUI.openSkillsScreen();
                }
            }

            // Key [J]: Encyclopedia / Field Guide
            if (e.code === 'KeyJ') {
                if (this.activeModal === 'encyclopedia') {
                    this.closeModal();
                } else if (!this.activeModal) {
                    window.ExtendedUI.openEncyclopediaScreen();
                }
            }

            // Key [L]: Achievements
            if (e.code === 'KeyL') {
                if (this.activeModal === 'achievements') {
                    this.closeModal();
                } else if (!this.activeModal) {
                    window.ExtendedUI.openAchievementsScreen();
                }
            }

            // Key [M]: Toggle Fullscreen Map
            if (e.code === 'KeyM') {
                this.minimap.isExpanded = !this.minimap.isExpanded;
            }

            // Key [F]: Interact (Doors, Chests, Campfires, Radio Tower)
            if (e.code === 'KeyF') {
                this.handleInteraction();
            }

            // Key [Escape]: Toggle Pause Menu / Close Modals
            if (e.code === 'Escape') {
                if (this.activeModal) {
                    this.closeModal();
                } else {
                    this.togglePause();
                }
            }

            // Space: Action / Attack / Hook Fish
            if (e.code === 'Space') {
                if (this.fishing.state === window.FishingState.BITING) {
                    this.fishing.hook();
                } else if (this.fishing.state === window.FishingState.REELING) {
                    this.fishing.isReeling = true;
                } else if (!this.activeModal) {
                    this.player.performAction(this.world, this.mobs);
                }
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            if (e.code === 'Space') {
                this.fishing.isReeling = false;
            }
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouseWorld.x = this.mouse.x + this.camera.x;
            this.mouseWorld.y = this.mouse.y + this.camera.y;
        });

        window.addEventListener('mousedown', (e) => {
            window.Sound.init();
            if (e.button === 0) { // Left click
                this.mouse.isDown = true;

                if (this.fishing.state === window.FishingState.BITING) {
                    this.fishing.hook();
                } else if (this.fishing.state === window.FishingState.REELING) {
                    this.fishing.isReeling = true;
                } else if (this.building.isPlacing) {
                    this.building.placeStructure(this.world, this.player.inventory);
                    this.renderHotbar();
                } else if (!this.activeModal) {
                    this.player.performAction(this.world, this.mobs);
                }
            } else if (e.button === 2) { // Right click
                this.mouse.rightDown = true;
                if (this.building.isPlacing) {
                    this.building.cancelPlacement();
                }
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 0) {
                this.mouse.isDown = false;
                this.fishing.isReeling = false;
            } else if (e.button === 2) {
                this.mouse.rightDown = false;
            }
        });

        // Prevent browser context menu on right click
        window.addEventListener('contextmenu', (e) => e.preventDefault());

        // Mouse Wheel for hotbar cycling
        window.addEventListener('wheel', (e) => {
            if (this.activeModal) return;
            let current = this.player.inventory.selectedHotbarIndex;
            if (e.deltaY > 0) {
                current = (current + 1) % 8;
            } else {
                current = (current - 1 + 8) % 8;
            }
            this.player.inventory.useHotbarItem(current);
            this.renderHotbar();
            this.checkBuildingPlacement();
        });
    }

    checkBuildingPlacement() {
        const item = this.player.inventory.getSelectedItem();
        if (item) {
            const def = window.ItemDatabase[item.id];
            if (def && def.category === window.ItemCategory.STRUCTURE) {
                this.building.startPlacement(item.id);
                return;
            }
        }
        this.building.cancelPlacement();
    }

    spawnInitialFauna() {
        this.mobs = [];
        // Crabs on beaches
        for (let i = 0; i < 18; i++) {
            const pos = this.getRandomTilePos(window.TileType.SAND);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, 'crab'));
        }
        // Rabbits on grass
        for (let i = 0; i < 15; i++) {
            const pos = this.getRandomTilePos(window.TileType.GRASS);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, 'rabbit'));
        }
        // Wild Boars in forests
        for (let i = 0; i < 12; i++) {
            const pos = this.getRandomTilePos(window.TileType.FOREST);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, 'boar'));
        }
        // Wolves in mountains / highlands
        for (let i = 0; i < 8; i++) {
            const pos = this.getRandomTilePos(window.TileType.ROCK);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, 'wolf'));
        }
        // Sharks in deep ocean
        for (let i = 0; i < 6; i++) {
            const pos = this.getRandomTilePos(window.TileType.OCEAN);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, 'shark'));
        }
    }

    getRandomTilePos(tileType) {
        for (let tries = 0; tries < 100; tries++) {
            const tx = Math.floor(Math.random() * this.world.width);
            const ty = Math.floor(Math.random() * this.world.height);
            if (this.world.getTile(tx, ty) === tileType) {
                return {
                    x: tx * this.world.tileSize + this.world.tileSize / 2,
                    y: ty * this.world.tileSize + this.world.tileSize / 2
                };
            }
        }
        return null;
    }

    // --- INTERACTION WITH STRUCTURES & RADIO TOWER ---

    handleInteraction() {
        const px = this.player.x;
        const py = this.player.y;

        // 1. Radio Tower Check
        const distRadio = Math.hypot(px - this.world.radioTowerPos.x, py - this.world.radioTowerPos.y);
        if (distRadio < 80) {
            this.openModal('radio');
            return;
        }

        // 2. Placed Structures Check
        for (const s of this.world.structures) {
            const dist = Math.hypot(px - s.x, py - s.y);
            if (dist < 60) {
                if (s.type === 'door') {
                    s.isOpen = !s.isOpen;
                    window.Sound.playUIClick();
                    window.Particles.addFloatingText(s.isOpen ? 'Door Opened' : 'Door Closed', s.x, s.y - 15, '#FFF', 12);
                    return;
                } else if (s.type === 'chest') {
                    this.activeStructure = s;
                    this.openModal('chest');
                    return;
                } else if (s.type === 'campfire' || s.type === 'furnace') {
                    this.activeStructure = s;
                    this.openModal('furnace');
                    return;
                } else if (s.type === 'shelter') {
                    if (this.weather.isNight) {
                        this.weather.sleepThroughNight();
                        this.player.survival.health = this.player.survival.maxHealth;
                        this.player.survival.energy = this.player.survival.maxEnergy;
                        window.Particles.addFloatingText('Rested & Restored!', px, py - 30, '#00FF7F', 18, true);
                    } else {
                        window.Particles.addFloatingText('Can only sleep at night!', px, py - 20, '#FFA500', 14);
                    }
                    return;
                } else if (s.type === 'water_collector') {
                    if (s.waterAmount > 0) {
                        this.player.inventory.addItem('canteen', 1);
                        s.waterAmount = 0;
                        window.Sound.playDrink();
                        window.Particles.addFloatingText('+1 Fresh Water Canteen', px, py - 20, '#00BFFF', 14);
                    } else {
                        window.Particles.addFloatingText('Collector is empty (Wait for rain)', px, py - 20, '#A9A9A9', 14);
                    }
                    return;
                }
            }
        }
    }

    // --- GAME LOOP ---

    gameLoop(timestamp) {
        const dt = Math.min(0.1, (timestamp - this.lastTime) / 1000);
        this.lastTime = timestamp;

        if (!this.isPaused && !this.isGameOver && !this.isVictory) {
            this.update(dt);
        }

        this.render();
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    update(dt) {
        // 1. Update Weather & Day Cycle
        this.weather.update(dt);
        window.Sound.updateWeatherAmbient(this.weather.isRaining, this.weather.isNight, false);

        // 2. Update World & Resources
        this.world.update(dt);

        // Rain fills water collectors
        if (this.weather.isRaining) {
            for (const s of this.world.structures) {
                if (s.type === 'water_collector' && s.waterAmount < 5) {
                    s.waterAmount += dt * 0.1;
                }
            }
        }

        // 3. Update Player & Stats
        this.player.update(dt, {
            isDown: (code) => !!this.keys[code],
            mouseWorld: this.mouseWorld
        }, this.world);

        this.player.survival.update(dt, this.weather, this.world);

        // 4. Update Camera
        const targetCamX = this.player.x - this.camera.width / 2;
        const targetCamY = this.player.y - this.camera.height / 2;
        this.camera.x += (targetCamX - this.camera.x) * (dt * 8);
        this.camera.y += (targetCamY - this.camera.y) * (dt * 8);

        // 5. Update Mobs
        for (let i = this.mobs.length - 1; i >= 0; i--) {
            const mob = this.mobs[i];
            mob.update(dt, this.player, this.world);
            if (mob.dead) {
                this.mobs.splice(i, 1);
            }
        }

        // Respawn fauna occasionally
        this.mobSpawnTimer += dt;
        if (this.mobSpawnTimer >= 15 && this.mobs.length < 35) {
            this.mobSpawnTimer = 0;
            const mobType = Math.random() < 0.3 ? 'crab' : (Math.random() < 0.6 ? 'rabbit' : (Math.random() < 0.85 ? 'boar' : 'wolf'));
            const tile = mobType === 'crab' ? window.TileType.SAND : (mobType === 'wolf' ? window.TileType.ROCK : window.TileType.FOREST);
            const pos = this.getRandomTilePos(tile);
            if (pos) this.mobs.push(new Mob(pos.x, pos.y, mobType));
        }

        // 6. Update Projectiles & Combat
        this.combat.update(dt, this.world, this.mobs, this.player);

        // 7. Update Building Placement Preview
        this.building.update(this.mouseWorld.x, this.mouseWorld.y, this.world, this.player);

        // 8. Update Fishing
        this.fishing.update(dt, this.player);

        // 9. Update Quests & Story Objectives
        this.quests.update(dt, this.player, this.world);

        // 10. Update Particle Systems
        window.Particles.update(dt);

        // 11. Auto-save
        this.autoSaveTimer -= dt;
        if (this.autoSaveTimer <= 0) {
            this.autoSaveTimer = 60;
            this.storage.saveGame(this);
        }

        // 12. Update HUD
        this.updateHUD();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. World & Ground Tiles
        this.world.render(this.ctx, this.camera);

        // 2. Entities & Mobs (Sorted by Y for depth sorting)
        const renderables = [...this.mobs, this.player];
        renderables.sort((a, b) => a.y - b.y);

        for (const entity of renderables) {
            entity.render(this.ctx, this.camera);
        }

        // 3. Projectile Arrows
        this.combat.render(this.ctx, this.camera);

        // 4. Fishing Line & Float
        this.fishing.render(this.ctx, this.camera, this.player);

        // 5. Building Placement Blueprint Preview
        this.building.renderPreview(this.ctx, this.camera, this.world);

        // 6. Dynamic Particles & Floating Damage Texts
        window.Particles.render(this.ctx, this.camera);

        // 7. Dynamic Lighting & Darkness Mask / Rain Shaders
        this.weather.renderLighting(this.ctx, this.camera, this.player, this.world);

        // 8. Minimap Radar
        this.minimap.render(this.ctx, this.camera, this.player, this.world);
    }

    // --- HUD & UI INTERFACE ---

    updateHUD() {
        const s = this.player.survival;

        // Health, Hunger, Thirst, Energy Bar Fills
        const healthFill = document.getElementById('healthFill');
        const hungerFill = document.getElementById('hungerFill');
        const thirstFill = document.getElementById('thirstFill');
        const energyFill = document.getElementById('energyFill');

        if (healthFill) healthFill.style.width = `${Math.max(0, (s.health / s.maxHealth) * 100)}%`;
        if (hungerFill) hungerFill.style.width = `${Math.max(0, (s.hunger / s.maxHunger) * 100)}%`;
        if (thirstFill) thirstFill.style.width = `${Math.max(0, (s.thirst / s.maxThirst) * 100)}%`;
        if (energyFill) energyFill.style.width = `${Math.max(0, (s.energy / s.maxEnergy) * 100)}%`;

        // Text indicators
        const healthText = document.getElementById('healthText');
        const hungerText = document.getElementById('hungerText');
        const thirstText = document.getElementById('thirstText');
        const energyText = document.getElementById('energyText');

        if (healthText) healthText.textContent = `${Math.round(s.health)}/${s.maxHealth}`;
        if (hungerText) hungerText.textContent = `${Math.round(s.hunger)}%`;
        if (thirstText) thirstText.textContent = `${Math.round(s.thirst)}%`;
        if (energyText) energyText.textContent = `${Math.round(s.energy)}%`;

        // Temperature
        const tempElem = document.getElementById('tempIndicator');
        if (tempElem) {
            tempElem.textContent = s.isFreezing ? '❄️ Freezing' : (s.isOverheating ? '🔥 Overheating' : '🌡️ Normal');
            tempElem.className = s.isFreezing ? 'temp-freezing' : (s.isOverheating ? 'temp-hot' : 'temp-normal');
        }

        // Time & Day
        const timeElem = document.getElementById('timeIndicator');
        const dayElem = document.getElementById('dayIndicator');
        const weatherElem = document.getElementById('weatherIndicator');

        if (timeElem) timeElem.textContent = `${this.weather.formattedTime} (${this.weather.timePeriodName})`;
        if (dayElem) dayElem.textContent = `Day ${this.weather.dayCount}`;
        if (weatherElem) {
            let weatherIcon = '☀️ Clear';
            if (this.weather.currentWeather === 'cloudy') weatherIcon = '☁️ Overcast';
            if (this.weather.currentWeather === 'rain') weatherIcon = '🌧️ Rain';
            if (this.weather.currentWeather === 'storm') weatherIcon = '⛈️ Storm';
            weatherElem.textContent = weatherIcon;
        }

        // Active Quest Tracker
        const quest = this.quests.getCurrentQuest();
        const questBox = document.getElementById('questTracker');
        if (questBox && quest) {
            let html = `<h3>${quest.title}</h3><p>${quest.description}</p><div class="quest-tasks">`;
            for (const t of quest.tasks) {
                const done = t.current >= t.target;
                html += `<div class="quest-task ${done ? 'task-done' : ''}">${done ? '✓' : '○'} ${t.label}: ${t.current}/${t.target}</div>`;
            }
            html += `</div>`;
            questBox.innerHTML = html;
        }
    }

    renderHotbar() {
        const container = document.getElementById('hotbarSlots');
        if (!container) return;
        container.innerHTML = '';

        for (let i = 0; i < 8; i++) {
            const slot = this.player.inventory.slots[i];
            const slotEl = document.createElement('div');
            slotEl.className = `hotbar-slot ${i === this.player.inventory.selectedHotbarIndex ? 'active' : ''}`;

            const canvas = document.createElement('canvas');
            canvas.width = 44;
            canvas.height = 44;
            this.player.inventory.renderSlotToCanvas(canvas, slot, 44);

            const keyBadge = document.createElement('span');
            keyBadge.className = 'key-badge';
            keyBadge.textContent = i + 1;

            slotEl.appendChild(canvas);
            slotEl.appendChild(keyBadge);

            if (slot && slot.count > 1) {
                const countBadge = document.createElement('span');
                countBadge.className = 'count-badge';
                countBadge.textContent = slot.count;
                slotEl.appendChild(countBadge);
            }

            slotEl.onclick = () => {
                this.player.inventory.useHotbarItem(i);
                this.renderHotbar();
                this.checkBuildingPlacement();
            };

            container.appendChild(slotEl);
        }
    }

    // --- MODAL MANAGEMENT ---

    openModal(modalId) {
        this.activeModal = modalId;
        window.Sound.playUIClick();

        // Hide all modals
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

        const modalEl = document.getElementById(`${modalId}Modal`);
        if (modalEl) {
            modalEl.classList.add('active');
        }

        if (modalId === 'inventory') {
            this.renderInventoryModal();
            this.renderCraftingModal();
        } else if (modalId === 'chest') {
            this.renderChestModal();
        } else if (modalId === 'furnace') {
            this.renderFurnaceModal();
        } else if (modalId === 'radio') {
            this.renderRadioModal();
        }
    }

    closeModal() {
        this.activeModal = null;
        this.activeStructure = null;
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        this.renderHotbar();
        this.checkBuildingPlacement();
        window.Sound.playUIClick();
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        const pauseModal = document.getElementById('pauseModal');
        if (pauseModal) {
            if (this.isPaused) {
                pauseModal.classList.add('active');
            } else {
                pauseModal.classList.remove('active');
            }
        }
    }

    renderInventoryModal() {
        const grid = document.getElementById('inventoryGrid');
        if (!grid) return;
        grid.innerHTML = '';

        for (let i = 0; i < this.player.inventory.size; i++) {
            const item = this.player.inventory.slots[i];
            const slotEl = document.createElement('div');
            slotEl.className = 'inventory-slot';

            const canvas = document.createElement('canvas');
            canvas.width = 44;
            canvas.height = 44;
            this.player.inventory.renderSlotToCanvas(canvas, item, 44);
            slotEl.appendChild(canvas);

            if (item && item.count > 1) {
                const countBadge = document.createElement('span');
                countBadge.className = 'count-badge';
                countBadge.textContent = item.count;
                slotEl.appendChild(countBadge);
            }

            // Click to use or equip
            slotEl.onclick = () => {
                if (item) {
                    const def = window.ItemDatabase[item.id];
                    if (def && (def.category === window.ItemCategory.FOOD || def.category === window.ItemCategory.MEDICINE)) {
                        this.player.survival.consumeItem(def);
                        this.player.inventory.removeItem(item.id, 1);
                    } else if (def && def.slot) {
                        this.player.inventory.equipItem(i);
                    }
                    this.renderInventoryModal();
                    this.renderHotbar();
                }
            };

            grid.appendChild(slotEl);
        }

        // Equipment Slots
        this.renderEquipmentSlots();
    }

    renderEquipmentSlots() {
        ['mainhand', 'offhand', 'head', 'body'].forEach(slotName => {
            const slotEl = document.getElementById(`equip_${slotName}`);
            if (!slotEl) return;
            slotEl.innerHTML = '';

            const item = this.player.inventory.equipment[slotName];
            const canvas = document.createElement('canvas');
            canvas.width = 44;
            canvas.height = 44;
            this.player.inventory.renderSlotToCanvas(canvas, item, 44);
            slotEl.appendChild(canvas);

            slotEl.onclick = () => {
                if (item) {
                    this.player.inventory.unequipItem(slotName);
                    this.renderInventoryModal();
                    this.renderHotbar();
                }
            };
        });
    }

    renderCraftingModal(category = 'all') {
        const list = document.getElementById('craftingList');
        if (!list) return;
        list.innerHTML = '';

        const isNearWorkstation = this.checkNearStructure('workstation');
        const isNearFurnace = this.checkNearStructure('furnace');

        const filtered = this.crafting.recipes.filter(r => {
            if (category === 'all') return true;
            return r.category === category;
        });

        for (const recipe of filtered) {
            const canCraft = this.crafting.canCraft(recipe, this.player.inventory, isNearWorkstation, isNearFurnace);
            const card = document.createElement('div');
            card.className = `craft-card ${canCraft ? 'can-craft' : 'cannot-craft'}`;

            // Icon
            const canvas = document.createElement('canvas');
            canvas.width = 40;
            canvas.height = 40;
            const outDef = window.ItemDatabase[recipe.output.id];
            if (outDef && outDef.drawIcon) {
                outDef.drawIcon(canvas.getContext('2d'), 0, 0, 40);
            }

            // Info
            const info = document.createElement('div');
            info.className = 'craft-info';
            info.innerHTML = `<h4>${recipe.name}</h4><p>${recipe.description}</p>`;

            // Ingredients
            const reqs = document.createElement('div');
            reqs.className = 'craft-reqs';
            for (const ing of recipe.ingredients) {
                const has = this.player.inventory.getItemCount(ing.id);
                const hasEnough = has >= ing.count;
                const ingDef = window.ItemDatabase[ing.id];
                reqs.innerHTML += `<span class="${hasEnough ? 'req-met' : 'req-missing'}">${ingDef ? ingDef.name : ing.id}: ${has}/${ing.count}</span> `;
            }
            info.appendChild(reqs);

            // Craft button
            const btn = document.createElement('button');
            btn.className = 'craft-btn';
            btn.textContent = 'Craft';
            btn.disabled = !canCraft;
            btn.onclick = () => {
                if (this.crafting.craft(recipe, this.player.inventory, isNearWorkstation, isNearFurnace)) {
                    this.renderInventoryModal();
                    this.renderCraftingModal(category);
                    this.renderHotbar();
                }
            };

            card.appendChild(canvas);
            card.appendChild(info);
            card.appendChild(btn);
            list.appendChild(card);
        }
    }

    checkNearStructure(type) {
        for (const s of this.world.structures) {
            if (s.type === type) {
                const dist = Math.hypot(this.player.x - s.x, this.player.y - s.y);
                if (dist < 100) return true;
            }
        }
        return false;
    }

    renderChestModal() {
        if (!this.activeStructure || this.activeStructure.type !== 'chest') return;
        const grid = document.getElementById('chestGrid');
        if (!grid) return;
        grid.innerHTML = '';

        const chestItems = this.activeStructure.chestItems || [];
        for (let i = 0; i < 18; i++) {
            const item = chestItems[i];
            const slotEl = document.createElement('div');
            slotEl.className = 'inventory-slot';

            const canvas = document.createElement('canvas');
            canvas.width = 44;
            canvas.height = 44;
            this.player.inventory.renderSlotToCanvas(canvas, item, 44);
            slotEl.appendChild(canvas);

            if (item && item.count > 1) {
                const countBadge = document.createElement('span');
                countBadge.className = 'count-badge';
                countBadge.textContent = item.count;
                slotEl.appendChild(countBadge);
            }

            // Transfer from chest to player inventory
            slotEl.onclick = () => {
                if (item) {
                    const added = this.player.inventory.addItem(item.id, item.count);
                    if (added > 0) {
                        item.count -= added;
                        if (item.count <= 0) chestItems[i] = null;
                        this.renderChestModal();
                        this.renderHotbar();
                    }
                }
            };

            grid.appendChild(slotEl);
        }
    }

    renderFurnaceModal() {
        const list = document.getElementById('furnaceRecipes');
        if (!list) return;
        list.innerHTML = '';

        const smeltingRecipes = this.crafting.recipes.filter(r => r.category === 'smelting' || r.category === 'basic');

        for (const recipe of smeltingRecipes) {
            const canCraft = this.crafting.canCraft(recipe, this.player.inventory, true, true);
            const card = document.createElement('div');
            card.className = `craft-card ${canCraft ? 'can-craft' : 'cannot-craft'}`;

            const canvas = document.createElement('canvas');
            canvas.width = 40;
            canvas.height = 40;
            const outDef = window.ItemDatabase[recipe.output.id];
            if (outDef && outDef.drawIcon) {
                outDef.drawIcon(canvas.getContext('2d'), 0, 0, 40);
            }

            const info = document.createElement('div');
            info.className = 'craft-info';
            info.innerHTML = `<h4>${recipe.name}</h4><p>${recipe.description}</p>`;

            const reqs = document.createElement('div');
            reqs.className = 'craft-reqs';
            for (const ing of recipe.ingredients) {
                const has = this.player.inventory.getItemCount(ing.id);
                const hasEnough = has >= ing.count;
                const ingDef = window.ItemDatabase[ing.id];
                reqs.innerHTML += `<span class="${hasEnough ? 'req-met' : 'req-missing'}">${ingDef ? ingDef.name : ing.id}: ${has}/${ing.count}</span> `;
            }
            info.appendChild(reqs);

            const btn = document.createElement('button');
            btn.className = 'craft-btn';
            btn.textContent = 'Smelt / Cook';
            btn.disabled = !canCraft;
            btn.onclick = () => {
                if (this.crafting.craft(recipe, this.player.inventory, true, true)) {
                    this.renderFurnaceModal();
                    this.renderHotbar();
                }
            };

            card.appendChild(canvas);
            card.appendChild(info);
            card.appendChild(btn);
            list.appendChild(card);
        }
    }

    renderRadioModal() {
        const container = document.getElementById('radioComponentsList');
        const transmitBtn = document.getElementById('transmitBtn');
        if (!container || !transmitBtn) return;
        container.innerHTML = '';

        const parts = [
            { id: 'radio_tube', name: 'Vacuum Tube', source: 'Found in Southwest Coastal Shipwreck crate' },
            { id: 'battery', name: 'Heavy Battery', source: 'Found in Eastern Ancient Ruins power cell locker' },
            { id: 'antenna_mast', name: 'Reinforced Antenna', source: 'Crafted at Workstation (Iron + Wire + Scrap)' },
            { id: 'distress_beacon', name: 'Distress Beacon', source: 'Crafted at Workstation (Tube + Battery + Wire)' }
        ];

        let allReady = true;

        for (const p of parts) {
            const has = this.player.inventory.hasItem(p.id, 1) || this.radioRepaired;
            if (!has) allReady = false;

            const div = document.createElement('div');
            div.className = `radio-part-row ${has ? 'part-ready' : 'part-missing'}`;
            div.innerHTML = `
                <div class="part-status">${has ? '✅ INSTALLED' : '❌ MISSING'}</div>
                <div class="part-name"><strong>${p.name}</strong> - <em>${p.source}</em></div>
            `;
            container.appendChild(div);
        }

        transmitBtn.disabled = !allReady || this.quests.beaconActive;
        transmitBtn.onclick = () => {
            this.radioRepaired = true;
            this.quests.startDistressBeacon();
            this.closeModal();
            window.Particles.addFloatingText('📡 SOS TRANSMITTING! SURVIVE 60 SECONDS!', this.player.x, this.player.y - 40, '#00FF00', 20, true);
        };
    }

    // --- GAME OVER & VICTORY ---

    triggerGameOver(cause) {
        this.isGameOver = true;
        const modal = document.getElementById('gameOverModal');
        const causeEl = document.getElementById('deathCause');
        const statsEl = document.getElementById('deathStats');

        if (causeEl) causeEl.textContent = `Cause of death: ${cause}`;
        if (statsEl) {
            statsEl.innerHTML = `
                <p>Days Survived: <strong>${this.weather.dayCount}</strong></p>
                <p>Resources Harvested: <strong>${this.player.survival.resourcesGathered}</strong></p>
                <p>Enemies Defeated: <strong>${this.player.survival.enemiesDefeated}</strong></p>
            `;
        }
        if (modal) modal.classList.add('active');
    }

    triggerVictory() {
        this.isVictory = true;
        const modal = document.getElementById('victoryModal');
        const statsEl = document.getElementById('victoryStats');

        if (statsEl) {
            statsEl.innerHTML = `
                <p>Escape Time: <strong>Day ${this.weather.dayCount} at ${this.weather.formattedTime}</strong></p>
                <p>Total Resources Harvested: <strong>${this.player.survival.resourcesGathered}</strong></p>
                <p>Hostile Predators Overcome: <strong>${this.player.survival.enemiesDefeated}</strong></p>
                <p>Status: <strong>RESCUED BY MARITIME HELICOPTER! 🚁</strong></p>
            `;
        }
        if (modal) modal.classList.add('active');
    }

    restartGame() {
        this.storage.clearSave();
        window.location.reload();
    }
}

// Initialize when window loads
window.addEventListener('DOMContentLoaded', () => {
    window.Game = new GameEngine();
});
