var PostAttributes;
(function (PostAttributes) {
    PostAttributes["usuario"] = "usuario";
    PostAttributes["username"] = "username";
    PostAttributes["post"] = "post";
    PostAttributes["like"] = "like";
    PostAttributes["charlar"] = "charlar";
    PostAttributes["enviar"] = "enviar";
    PostAttributes["guardar"] = "guardar";
    PostAttributes["cantidad"] = "cantidad";
    PostAttributes["comentarios"] = "comentarios";
})(PostAttributes || (PostAttributes = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.usuario = '';
        this.username = '';
        this.post = '';
        this.like = '';
        this.charlar = '';
        this.enviar = '';
        this.guardar = '';
        this.cantidad = '';
        this.comentarios = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(PostAttributes);
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
        <link rel="stylesheet" href="/components/post/style.css">
        <body>
        <div class="container"> 
            <div class="user">
            <img src="${this.usuario}" class="user" height="15px" width="15px">
            
            <p class="userN"> ${this.username} </p>
            </div>
        <img src="${this.post}" class="post" width="100px" height="100px">
    
        <div class="icons">
        
        <img src="${this.like}" class="like" width="20px" height="20px">
        <img src="${this.charlar}" class="charlar" width="20px" height="20px">
        <img src="${this.enviar}" class="enviar"  width="20px" height="20px">
        <img src="${this.guardar}" class="guardar" width="20px" height="20px">
        
        </div>
    
        <div class="text"> 
        <p class="${this.cantidad}"> <b> 155 likes </b> </p>
        <p class="nombre"> <b> ${this.username}</b> instagram post </p>
        <p class="comentarios"> ${this.comentarios} </p>
        </div>
        </div>
        </body>`;
    }
}
customElements.define('my-post', Post);
export default Post;
