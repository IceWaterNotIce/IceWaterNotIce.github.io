class NavigationMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = /*html*/ `
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>
                        <a href="#">Services manager</a>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="#">Setting</a>
                        <ul>
                            <li>
                                <a href="#">
                                    Theme 
                                    <button>Dark</button>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        `;

        const style = document.createElement("style");
        style.textContent = /*css*/ `

            /* Style the navigation menu */
            nav {
                background-color: var(--nav-background-color);
            }
            /* Style the navigation menu items */
            nav > ul {
                list-style-type: none;
                display: flex;
            }
            nav > ul > li {
                position: relative; /* Needed for positioning the submenu */
            }
            nav > ul > li > ul {
                display: none; /* Hide the submenu by default */
                position: absolute; /* Position it relative to the parent */
                top: 100%; /* Position it below the parent menu item */
                left: 0;
                width: max-content;
                background-color: var(--nav-background-color);
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            /* Show the submenu on hover */
                nav > ul > li:hover > ul {
                display: block;
            }

            /* Style the navigation menu links */
            li a:hover {
                background-color: #666;
            }
            a {
                display: flex;
                padding: 15px 20px;
                color: var(--nav-text-color);
                text-decoration: none;
                width: max-content;
            }
            button {
                background-color: #666;
                color: white;
                border: none;
                padding: 5px 10px;
                margin-left: 10px;
                border-radius: 5px;
            }

        `;  
        // Append the style element to the head of the document
        this.shadowRoot.appendChild(style);

        // Add event listener to the button
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", () => {
            // add a class to the body
            document.body.classList.toggle("dark");
            //save the theme in local storage
            localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
        });
        // load the theme from local storage
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }


        



    }
}

customElements.define("navigation-menu", NavigationMenu);
