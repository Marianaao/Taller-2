import './components/index.js'
import data from './components/data.js'


class AppContainer extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode: 'open'})
    console.log(data.length);
    }
    connectedCallback (){
        this.render();
    }

    render() {
        const compts = data.map(({name, username, likes, comentarios, description}) => `<profile-card name = ${name} username=${username} likes= ${likes} comentarios=${comentarios} description=${description}></profile-card> `)

        this.shadowRoot.innerHTML = compts.join("")
    }
}

customElements.define('app-container', AppContainer)