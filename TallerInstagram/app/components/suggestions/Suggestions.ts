enum SuggestionsAttributes {
    suggestions = 'suggestions',
    profile = 'profile',
    username = 'username',
    razon = 'razon',
}

class Suggestions extends HTMLElement {
    suggestions = '';
    profile = '';
    username = '';
    razon = '';


    static get observedAttributes(): SuggestionsAttributes[] {
        return Object.keys(SuggestionsAttributes) as SuggestionsAttributes[];
    }

    attributeChangedCallback(prop: SuggestionsAttributes, _: string, newValue: string): void {
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
        <div class="suggestions-card">
        <div class="suggestions text">
        <p class="suggestions">${this.suggestions}</p>
        </div>
        <div class="profile-pic">
        <img src="${this.profile}" width="56px" height="56px" >
    </div>
        <div>
            <p class="username"> <b>${this.username}</b> </p>
            <p class="razon">${this.razon}</p>
        </div>
        <button class="action-btn">Cambiar</button>
</div>
        `;
    }
}

customElements.define('my-suggestions', Suggestions);
export default Suggestions;