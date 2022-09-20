import './components/index.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode : 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <my-card logo="./img/main/logo.png" homepage="./img/main/homepage.png" messenger="./img/main/messenger.png" add="./img/main/add.png" explore="./img/main/explore.png" like="./img/main/like.png" user="./img/main/user.png"></my-card>
        <my-status status="./img/status/status1.jpg" username="happy22"> </my-status>
        <my-post usuario="./img/post/usuario.png" username="marianaoo_o" post="./img/post/us.jpg" like="./img/post/like.png" charlar="./img/post/charlar.png" enviar="./img/post/enviar.png" guardar="./img/post/guardar.png" cantidad="2333 likes"  username="marianaoo_o" comentarios="View all 103 comments" ></my-post>
        <my-profile profile="./img/profile/profile.jpg" username="marianaoo_o" nombre="Mariana Ocampo Botina"> </my-profile>
        <my-suggestions suggestions="Sugerencias para ti" profile="./img/suggestion/sugg.jpg" username="kittyoo_o" razon="Seguida por conocidos"> </my-suggestions>
        `;
    }
}

customElements.define('app-container', AppContainer);