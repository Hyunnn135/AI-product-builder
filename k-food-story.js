// k-food-story.js
class KFoodStory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.stories = {}; // This will be populated from main.js or an external source
    }

    static get observedAttributes() {
        return ['menu-name', 'lang'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'menu-name' || name === 'lang') {
            this.render();
        }
    }

    setStories(stories) {
        this.stories = stories;
        this.render();
    }

    render() {
        const menuName = this.getAttribute('menu-name');
        const lang = this.getAttribute('lang') || 'ko';

        let story = this.stories[lang]?.[menuName] || this.stories['ko']?.[menuName] || 'No story available for this menu.';
        if (lang === 'en' && story === 'No story available for this menu.') {
            story = 'No story available for this menu.';
        } else if (lang === 'ko' && story === 'No story available for this menu.') {
            story = '이 메뉴에 대한 스토리가 없습니다.';
        }


        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: var(--container-bg-color);
                    box-shadow: var(--shadow-md);
                    margin-top: 20px;
                    text-align: left;
                    color: var(--text-color);
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .story-title {
                    font-size: 1.5em;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: var(--primary-color);
                    text-align: center;
                }
                .story-content {
                    font-size: 1em;
                    line-height: 1.6;
                    color: var(--text-color);
                }
            </style>
            <div class="k-food-story-container">
                <h3 class="story-title">${lang === 'ko' ? `${menuName} 이야기` : `${menuName} Story`}</h3>
                <p class="story-content">${story}</p>
            </div>
        `;
    }
}

customElements.define('k-food-story', KFoodStory);