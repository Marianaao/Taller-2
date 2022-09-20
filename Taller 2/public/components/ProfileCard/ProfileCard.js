class ProfileCard extends HTMLElement{
    static get observedAttributes(){
        return['name', 'username', 'likes', 'comentarios', 'description']
    }
    constructor(){
    super();
    this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback(prop, oldValue, newValue){
        this[prop] = newValue;
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel ="stylesheet" href="./components/ProfileCard/styles.css">
        
      <body>
        <div class="container"> 
            <div class="user">
            <img src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" class="user" height="15px" width="15px">
            
            <p class="userN"> ${this.name} </p>
            </div>

        <img src="./components/ProfileCard/img/us.jpeg" class="post" width="100px" height="100px">
    
        <div class="icons">
        
        <img src="./components/ProfileCard/img/like.png" class="like" width="20px" height="20px">
        <img src="./components/ProfileCard/img/charlar.png" class="charlar" width="20px" height="20px">
        <img src="./components/ProfileCard/img/enviar.png" class="enviar"  width="20px" height="20px">
        <img src="./components/ProfileCard/img/guardar.png" class="guardar" width="20px" height="20px">
        
        </div>
    
        <div class="text"> 
        <p class="cantidad"> <b> ${this.likes} </b> </p>
        <p class="nombre"> <b>  ${this.username} </b> ${this.description} </p>
        <p class="comentarios"> ${this.comentarios}  </p>
        </div>
        </div>
        </body>
        `
    }

    }
    
    customElements.define('profile-card', ProfileCard)
    export default ProfileCard
