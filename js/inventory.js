/**
 * Inventory, Quickslot Hotbar & Equipment System
 */

class Inventory {
    constructor(size = 24) {
        this.size = size;
        this.slots = new Array(size).fill(null);
        this.selectedHotbarIndex = 0; // 0 to 7
        this.equipment = {
            mainhand: null,
            offhand: null,
            head: null,
            body: null
        };
    }

    reset() {
        this.slots = new Array(this.size).fill(null);
        this.selectedHotbarIndex = 0;
        this.equipment = {
            mainhand: null,
            offhand: null,
            head: null,
            body: null
        };
    }

    // --- ITEM STORAGE & MANAGEMENT ---

    addItem(itemId, count = 1) {
        const itemDef = window.ItemDatabase[itemId];
        if (!itemDef) return 0;

        let remaining = count;

        // 1. Try to stack with existing items
        if (itemDef.stackable) {
            for (let i = 0; i < this.size; i++) {
                const slot = this.slots[i];
                if (slot && slot.id === itemId && slot.count < itemDef.maxStack) {
                    const space = itemDef.maxStack - slot.count;
                    const add = Math.min(space, remaining);
                    slot.count += add;
                    remaining -= add;
                    if (remaining <= 0) break;
                }
            }
        }

        // 2. Add to first empty slot
        if (remaining > 0) {
            for (let i = 0; i < this.size; i++) {
                if (!this.slots[i]) {
                    const add = itemDef.stackable ? Math.min(itemDef.maxStack, remaining) : 1;
                    this.slots[i] = {
                        id: itemId,
                        count: add,
                        durability: itemDef.durability || 100
                    };
                    remaining -= add;
                    if (remaining <= 0) break;
                }
            }
        }

        const added = count - remaining;
        if (added > 0) {
            window.Sound.playGather();
            if (window.Game) {
                window.Particles.addFloatingText(`+${added} ${itemDef.name}`, window.Game.player.x, window.Game.player.y - 25, '#FFD700', 14, true);
                window.Game.quests.onItemCollected(itemId, added);
            }
        }

        return added;
    }

    hasItem(itemId, count = 1) {
        let total = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.slots[i] && this.slots[i].id === itemId) {
                total += this.slots[i].count;
            }
        }
        return total >= count;
    }

    getItemCount(itemId) {
        let total = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.slots[i] && this.slots[i].id === itemId) {
                total += this.slots[i].count;
            }
        }
        return total;
    }

    removeItem(itemId, count = 1) {
        let remaining = count;
        for (let i = 0; i < this.size; i++) {
            const slot = this.slots[i];
            if (slot && slot.id === itemId) {
                if (slot.count > remaining) {
                    slot.count -= remaining;
                    remaining = 0;
                    break;
                } else {
                    remaining -= slot.count;
                    this.slots[i] = null;
                }
            }
        }
        return remaining === 0;
    }

    getSelectedItem() {
        return this.slots[this.selectedHotbarIndex] || null;
    }

    getSelectedItemDef() {
        const item = this.getSelectedItem();
        return item ? window.ItemDatabase[item.id] : null;
    }

    equipItem(slotIndex) {
        const item = this.slots[slotIndex];
        if (!item) return;
        const itemDef = window.ItemDatabase[item.id];
        if (!itemDef || !itemDef.slot) return;

        const targetSlot = itemDef.slot;
        const prevEquipped = this.equipment[targetSlot];

        this.equipment[targetSlot] = item;
        this.slots[slotIndex] = prevEquipped;

        window.Sound.playUIClick();
    }

    unequipItem(slotName) {
        const item = this.equipment[slotName];
        if (!item) return;

        // Find empty slot
        const emptyIdx = this.slots.findIndex(s => s === null);
        if (emptyIdx !== -1) {
            this.slots[emptyIdx] = item;
            this.equipment[slotName] = null;
            window.Sound.playUIClick();
        }
    }

    useHotbarItem(index) {
        if (index >= 0 && index < 8) {
            this.selectedHotbarIndex = index;
        }
    }

    // --- UI RENDERING HELPERS ---

    renderSlotToCanvas(slotCanvas, item, size = 44) {
        if (!slotCanvas) return;
        const ctx = slotCanvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        if (item) {
            const def = window.ItemDatabase[item.id];
            if (def && def.drawIcon) {
                def.drawIcon(ctx, 0, 0, size);
            }

            // Durability bar
            if (def && def.durability && item.durability !== undefined) {
                const pct = Math.max(0, item.durability / def.durability);
                ctx.fillStyle = 'rgba(0,0,0,0.6)';
                ctx.fillRect(4, size - 6, size - 8, 3);
                ctx.fillStyle = pct > 0.5 ? '#00FF7F' : (pct > 0.2 ? '#FFD700' : '#FF4500');
                ctx.fillRect(4, size - 6, (size - 8) * pct, 3);
            }
        }
    }
}

window.Inventory = Inventory;
