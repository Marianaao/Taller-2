import { getCharacters } from "./services/charactes.js";
import { Character } from "./types/index.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const charactes = await getCharacters();
        this.render(charactes);
    }

    render (charactes: Array<Character>) {
        if(!this.shadowRoot) return;

        const personajes = charactes.map( ({ id, image, gender,name, species, status }) => `
        <link rel="stylesheet" href="./styles.css">
        <article>
        <div class="card">

        <div class="face front">
        <img src=${image}></img>
        <h3>${id}: ${name}</h3>
        </div>

        <div class="face back">
        <h3>${name}</h3>
        <p>${gender}, ${species}, ${status}</p>
        <div class="link">
        <a href=''#>Detalles </a>
        </div>
        </div>

        </div>
        </article>`)
        this.shadowRoot.innerHTML = `<section>
        ${personajes.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContainer)
