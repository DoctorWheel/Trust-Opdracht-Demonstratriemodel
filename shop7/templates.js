class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<div class="header"> <div class="assurances"> <ul> <li>Gratis Verzending</li> <li>Snelle Bezorging</li> <li>Gratis Retouneren</li> </ul> </div> <header> <div class="content"> <img src="images/Sneaker Retail Logo Horizontal Transparant.svg" alt="logo"> <nav class="nav-secondary"> <ul> <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i>Zoeken</a></li> <li><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i>Winkelwagen</a></li> <li><a href="#"><i class="fa-solid fa-user"></i>Account</a></li> </ul> </nav> </div> </header> <div class="content"> <hr> <nav class="nav-primary"> <ul> <li><a href="index.html"><i class="fa-solid fa-house"></i></a></li> <li><a href="produkten.html">Heren</a></li> <li><a href="produkten.html">Dames</a></li> <li><a href="produkten.html">Kinderen</a></li> <li><a href="produkten.html">Sale</a></li> <li><a href="produkten.html">Outlet</a></li> </ul> </nav> <hr> </div> </div>';
    }
}

customElements.define('header-template', Header)

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ''
    }
}

customElements.define('footer-template', Footer)