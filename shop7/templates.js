class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<div class="header"><div class="assurances"><ul><li>Verzending</li><li>Bezorging</li><li>Retouneren</li></ul></div><header><img src="images/Sneaker Retail Logo Horizontal.svg" alt="logo"><nav class="nav-secondary"><ul><li>Zoeken</li><li>Winkelwagen</li><li>Account</li></ul></nav></header><hr><nav class="nav-primary"><ul><li>Voorpagina</li><li>Heren Schoenen</li><li>Dames Schoenen</li><li>Kinder Schoenen</li></ul></nav><hr></div>';
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