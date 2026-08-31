/**
 * Extended UI Screens & Interactive Modals for Encyclopedia, Skills, and Achievements
 */

class ExtendedUISystem {
    constructor() {
        this.activeScreen = null;
    }

    openSkillsScreen() {
        window.Game.openModal('skills');
        this.renderSkillsUI();
    }

    openEncyclopediaScreen() {
        window.Game.openModal('encyclopedia');
        this.renderEncyclopediaUI('flora');
    }

    openAchievementsScreen() {
        window.Game.openModal('achievements');
        this.renderAchievementsUI();
    }

    renderSkillsUI() {
        const container = document.getElementById('skillsTreeContainer');
        const pointsBadge = document.getElementById('skillPointsBadge');
        if (!container) return;
        container.innerHTML = '';

        if (pointsBadge) {
            pointsBadge.textContent = `Available Points: ${window.Skills.skillPoints}`;
        }

        for (const catKey in window.SkillDatabase) {
            const cat = window.SkillDatabase[catKey];
            const lvl = window.Skills.levels[catKey];

            const section = document.createElement('div');
            section.className = 'skill-discipline-card';
            section.innerHTML = `
                <div class="discipline-header">
                    <span class="discipline-icon">${cat.icon}</span>
                    <div class="discipline-info">
                        <h4>${cat.name}</h4>
                        <p>Level ${lvl} / 20 &bull; ${cat.description}</p>
                    </div>
                </div>
                <div class="perks-grid" id="perks_${catKey}"></div>
            `;
            container.appendChild(section);

            const perksGrid = section.querySelector(`#perks_${catKey}`);
            for (const perk of cat.perks) {
                const unlocked = window.Skills.hasPerk(perk.id);
                const canUnlock = !unlocked && lvl >= perk.levelReq && window.Skills.skillPoints >= perk.cost;

                const perkBtn = document.createElement('button');
                perkBtn.className = `perk-node ${unlocked ? 'perk-unlocked' : (canUnlock ? 'perk-available' : 'perk-locked')}`;
                perkBtn.innerHTML = `
                    <div class="perk-name">${perk.name} (Lvl ${perk.levelReq})</div>
                    <div class="perk-desc">${perk.description}</div>
                    <div class="perk-status">${unlocked ? '✓ UNLOCKED' : `Cost: ${perk.cost} Pt`}</div>
                `;

                perkBtn.onclick = () => {
                    if (window.Skills.unlockPerk(perk.id)) {
                        this.renderSkillsUI();
                    }
                };

                perksGrid.appendChild(perkBtn);
            }
        }
    }

    renderEncyclopediaUI(activeCategory = 'flora') {
        const list = document.getElementById('encyclopediaEntries');
        if (!list) return;
        list.innerHTML = '';

        const entries = window.Encyclopedia.getEntriesByCategory(activeCategory);
        for (const entry of entries) {
            const isDiscovered = window.Encyclopedia.isDiscovered(entry.id);
            const card = document.createElement('div');
            card.className = `encyclopedia-card ${isDiscovered ? 'entry-discovered' : 'entry-undiscovered'}`;

            if (isDiscovered) {
                card.innerHTML = `
                    <div class="entry-title"><strong>${entry.name || entry.title}</strong></div>
                    <div class="entry-sub"><em>${entry.scientificName || entry.author || entry.threatLevel || ''}</em></div>
                    <div class="entry-body">${entry.description || entry.content}</div>
                    ${entry.survivalTip ? `<div class="entry-tip">💡 <strong>Survival Tip:</strong> ${entry.survivalTip}</div>` : ''}
                `;
            } else {
                card.innerHTML = `
                    <div class="entry-title">❓ Undiscovered Island Specimen</div>
                    <div class="entry-body">Explore the island, forage flora, and defeat fauna to record field data.</div>
                `;
            }

            list.appendChild(card);
        }
    }

    renderAchievementsUI() {
        const list = document.getElementById('achievementsList');
        if (!list) return;
        list.innerHTML = '';

        for (const ach of window.Achievements.achievements) {
            const isUnlocked = window.Achievements.unlocked.has(ach.id);
            const item = document.createElement('div');
            item.className = `achievement-card ${isUnlocked ? 'ach-unlocked' : 'ach-locked'}`;
            item.innerHTML = `
                <div class="ach-icon">${ach.icon}</div>
                <div class="ach-info">
                    <h4>${ach.title}</h4>
                    <p>${ach.description}</p>
                    <span class="ach-reward">Reward: ${ach.reward}</span>
                </div>
                <div class="ach-badge">${isUnlocked ? '🏆 COMPLETE' : '🔒 LOCKED'}</div>
            `;
            list.appendChild(item);
        }
    }
}

window.ExtendedUISystem = ExtendedUISystem;
window.ExtendedUI = new ExtendedUISystem();
