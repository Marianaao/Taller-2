var ProfileAttributes;
(function (ProfileAttributes) {
    ProfileAttributes["profile"] = "profile";
    ProfileAttributes["username"] = "username";
    ProfileAttributes["nombre"] = "nombre";
})(ProfileAttributes || (ProfileAttributes = {}));
class Profile extends HTMLElement {
    constructor() {
        super();
        this.profile = '';
        this.username = '';
        this.nombre = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(ProfileAttributes);
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
        <div class="profile-card">
        <div class="profile-pic">
            <img src="${this.profile}" width="56px" height="56px" >
        </div>
        <div>
            <p class="username"> <b>${this.username}</b> </p>
            <p class="nombre">${this.nombre}</p>
        </div>
        <button class="action-btn">Cambiar</button>
</div>
        `;
    }
}
customElements.define('my-profile', Profile);
export default Profile;
