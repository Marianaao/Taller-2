var SuggestionsAttributes;
(function (SuggestionsAttributes) {
    SuggestionsAttributes["suggestions"] = "suggestions";
    SuggestionsAttributes["profile"] = "profile";
    SuggestionsAttributes["username"] = "username";
    SuggestionsAttributes["razon"] = "razon";
})(SuggestionsAttributes || (SuggestionsAttributes = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.suggestions = '';
        this.profile = '';
        this.username = '';
        this.razon = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(SuggestionsAttributes);
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
        <div class="suggestions-card">
        <div class="suggestions text">
        <p class="suggestions">${this.suggestions}</p>
        </div>
        <div class="right-col">
        <div class="profile-pic">
        <img src="${this.profile}" width="56px" height="56px" >
    </div>
        <div>
            <p class="username"> <b>${this.username}</b> </p>
            <p class="razon">${this.razon}</p>
        </div>
        <button class="action-btn">Cambiar</button>
        </div>
</div>
        `;
    }
}
customElements.define('my-suggestions', Suggestions);
export default Suggestions;
