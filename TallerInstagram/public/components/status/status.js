var StatusAttributes;
(function (StatusAttributes) {
    StatusAttributes["status"] = "status";
    StatusAttributes["username"] = "username";
})(StatusAttributes || (StatusAttributes = {}));
class Status extends HTMLElement {
    constructor() {
        super();
        this.status = '';
        this.username = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(StatusAttributes);
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
        <link rel="stylesheet" href="/components/status/style.css"
        <section class="main">
        <div class="wrapper">
        <div class="left-col">
        <div class="status-wrapper">
        <div class="status-card">
        <div class="profile-pic"> <img src="${this.status}" alt=""></div>
        <p class="username"> ${this.username} </p>
 </div>
 <div class="status-card">
 <div class="profile-pic"> <img src="${this.status}" alt=""></div>
 <p class="username"> ${this.username} </p>
</div>
<div class="status-card">
<div class="profile-pic"> <img src="${this.status}" alt=""></div>
<p class="username"> ${this.username} </p>
</div>
<div class="status-card">
<div class="profile-pic"> <img src="${this.status}" alt=""></div>
<p class="username"> ${this.username} </p>
</div>
<div class="status-card">
<div class="profile-pic"> <img src="${this.status}" alt=""></div>
<p class="username"> ${this.username} </p>
</div> <div class="status-card">
<div class="profile-pic"> <img src="${this.status}" alt=""></div>
<p class="username"> ${this.username} </p>
</div>
        </div>
        </div>
        <div class="right-col">
        
        </div>
            
            </div>
    </section>
        `;
    }
}
customElements.define('my-status', Status);
export default Status;
