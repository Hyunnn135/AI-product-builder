// k-idol-lunch.js
class KPopIdolLunch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.idolData = {};
        this.currentLang = 'ko'; // Default language
    }

    static get observedAttributes() {
        return ['lang'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'lang') {
            this.currentLang = newValue;
            this.render();
        }
    }

    setIdolData(data) {
        this.idolData = data;
        this.render();
    }

    render() {
        if (!this.idolData[this.currentLang] || Object.keys(this.idolData[this.currentLang]).length === 0) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host { display: block; }
                    .k-idol-lunch-container {
                        padding: 20px;
                        text-align: center;
                        color: var(--text-color);
                    }
                </style>
                <div class="k-idol-lunch-container">
                    <p>${this.currentLang === 'ko' ? '아이돌 점심 메뉴 데이터가 없습니다.' : 'No K-Pop Idol Lunch data available.'}</p>
                </div>
            `;
            return;
        }

        const idols = this.idolData[this.currentLang];
        const idolKeys = Object.keys(idols);
        const randomIdolKey = idolKeys[Math.floor(Math.random() * idolKeys.length)];
        const idol = idols[randomIdolKey];

        const title = this.currentLang === 'ko' ? 'K-POP 아이돌의 점심 메뉴' : 'K-POP Idol's Lunch';
        const idolNameLabel = this.currentLang === 'ko' ? '아이돌:' : 'Idol:';
        const groupLabel = this.currentLang === 'ko' ? '그룹:' : 'Group:';
        const menuLabel = this.currentLang === 'ko' ? '점심 메뉴:' : 'Lunch Menu:';


        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: var(--container-bg-color);
                    box-shadow: var(--shadow-md);
                    margin-top: 25px;
                    text-align: center;
                    color: var(--text-color);
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .idol-lunch-title {
                    font-size: 1.5em;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--primary-color);
                }
                .idol-info p {
                    margin: 8px 0;
                    font-size: 1.1em;
                    line-height: 1.5;
                }
                .idol-info strong {
                    color: var(--accent-color);
                }
                .idol-menu {
                    font-size: 1.3em;
                    font-weight: 600;
                    margin-top: 15px;
                    color: var(--primary-dark);
                }
            </style>
            <div class="k-idol-lunch-container">
                <h3 class="idol-lunch-title">${title}</h3>
                <div class="idol-info">
                    <p>${idolNameLabel} <strong>${idol.name}</strong></p>
                    <p>${groupLabel} <strong>${idol.group}</strong></p>
                    <p class="idol-menu">${menuLabel} <strong>${idol.menu}</strong></p>
                </div>
            </div>
        `;
    }
}

customElements.define('k-idol-lunch', KPopIdolLunch);