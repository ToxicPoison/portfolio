class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">
                <h1>
                    KYLE
                </h1>
                </a>
            </header>

            <style>
                header {
                    position: absolute;
                    top: 10px;
                    left: 0;
                    right: 0;
                    background-image: url("assets/cityside_night.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                    text-align: left;
                    padding-left: 30px;
                    padding-top: 0px;
                    padding-bottom: 0px;
                }
                header h1{
                    font-size:5em;
                    text-align: left;
                    color:whitesmoke;
                }
            </style>
        `;
    }
}

customElements.define('header-component', Header);