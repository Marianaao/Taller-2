var CardAttributes;
(function (CardAttributes) {
    CardAttributes["logo"] = "logo";
    CardAttributes["homepage"] = "homepage";
    CardAttributes["messenger"] = "messenger";
    CardAttributes["add"] = "add";
    CardAttributes["explore"] = "explore";
    CardAttributes["like"] = "like";
    CardAttributes["user"] = "user";
})(CardAttributes || (CardAttributes = {}));
class Card extends HTMLElement {
    constructor() {
        super();
        this.logo = '';
        this.homepage = '';
        this.messenger = '';
        this.add = '';
        this.explore = '';
        this.like = '';
        this.user = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(CardAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/card/style.css"
        <nav class="navbar">
        <div class="nav-wrapper">
            <img src="${this.logo}" class="logo" width="230px" height="75px" alt="">
            <input type="text" class="search-box" width="268px" height="36px" placeholder="search">
            <div class="nav-items">
                <img src="${this.homepage}" class="icons" alt="">
                <img src="${this.messenger}" class="icons" alt="">
                <img src="${this.add}" class="icons" alt="">
                <img src="${this.explore}" class="icons" alt="">
                <img src="${this.like}" class="icons" alt="">
                <img src="${this.user}" class="icons" alt="">
        </div>
        </div>
    </nav>
        `;
    }
}
customElements.define('my-card', Card);
export default Card;
