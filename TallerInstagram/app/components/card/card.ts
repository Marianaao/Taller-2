enum CardAttributes {
    logo = 'logo',
    homepage = 'homepage',
    messenger = 'messenger',
    add = 'add',
    explore = 'explore',
    like = 'like',
    user = 'user',
    
}

class Card extends HTMLElement {
    logo = '';
    homepage = '';
    messenger = '';
    add = '';
    explore = '';
    like = '';
    user = '';
    

    static get observedAttributes(): CardAttributes[] {
        return Object.keys(CardAttributes) as CardAttributes[];
    }

    attributeChangedCallback(prop: CardAttributes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    constructor(){
        super();
        this.attachShadow({ mode : 'open'});
    }

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) return;
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