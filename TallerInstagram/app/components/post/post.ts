enum PostAttributes {
    usuario = 'usuario',
    username = 'username',
    post = 'post',
    like = 'like',
    charlar = 'charlar',
    enviar = 'enviar',
    guardar = 'guardar',
    cantidad = 'cantidad',
    comentarios = 'comentarios',   
}

class Post extends HTMLElement {
    usuario = '';
    username = '';
    post = '';
    like = '';
    charlar = '';
    enviar = '';
    guardar = '';
    cantidad = '';
    comentarios = '';

    

    static get observedAttributes(): PostAttributes[] {
        return Object.keys(PostAttributes) as PostAttributes[];
    }

    attributeChangedCallback(prop: PostAttributes, _: string, newValue: string): void {
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
        <link rel="stylesheet" href="/components/post/style.css"
        <div class="container"> 
            <div class="user">
            <img src="${this.usuario}" class="user" height="15px" width="15px">
            
            <p class="userN"> <b>${this.username}</b> </p>
            </div>
        <img src="${this.post}" class="post" width="100px" height="100px">
    
        <div class="icons">
        
        <img src="${this.like}" class="like" width="20px" height="20px">
        <img src="${this.charlar}" class="charlar" width="20px" height="20px">
        <img src="${this.enviar}" class="enviar"  width="20px" height="20px">
        <img src="${this.guardar}" class="guardar" width="20px" height="20px">
        
        </div>
    
        <div class="text"> 
        <p class="cantidad"> <b> <b>${this.cantidad}</b> </b> </p>
        <p class="nombre"> <b>${this.username} </b> instagram post </p>
        <p class="comentarios"> ${this.comentarios} </p>
        </div>
        </div>
        `;
    }
}

customElements.define('my-post', Post);
export default Post;