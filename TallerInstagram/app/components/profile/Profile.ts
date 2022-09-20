enum ProfileAttributes {
    profile = 'profile',
    username = 'username',
    nombre = 'nombre',
}

class Profile extends HTMLElement {
    profile = '';
    username = '';
    nombre = '';


    static get observedAttributes(): ProfileAttributes[] {
        return Object.keys(ProfileAttributes) as ProfileAttributes[];
    }

    attributeChangedCallback(prop: ProfileAttributes, _: string, newValue: string): void {
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