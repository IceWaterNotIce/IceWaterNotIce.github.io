class MyGreeting extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html*/ `
        <p>Hello, <slot></slot>!</p>
        `;
    }
}

customElements.define("my-greeting", MyGreeting);
