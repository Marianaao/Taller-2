enum StatusAttributes {
    status = 'status',
    username = 'username',
    
}

class Status extends HTMLElement {
    status = '';
    username = '';
    

    static get observedAttributes(): StatusAttributes[] {
        return Object.keys(StatusAttributes) as StatusAttributes[];
    }

    attributeChangedCallback(prop: StatusAttributes, _: string, newValue: string): void {
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