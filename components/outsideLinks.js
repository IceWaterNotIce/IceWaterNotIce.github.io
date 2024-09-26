class outsideLinks extends HTMLElement {
  constructor() {
    super();
    // Create a new style element
    const style = document.createElement("style");

    // Define the CSS rules
    style.textContent = /*css*/ ` 
            .outsideLinks {
        /* locate it at the bottom left corner of the page */
        position: absolute;
        left: 0;
        bottom: 0;
        /* size */
        width: max-content;
        height: max-content;
      }
      .icon {
        /* size */
        width: 40px;
        height: 40px;
        /* margin */
        margin: 10px;
        /* margin between icons */
        background-color: #fff;
        border-radius: 50%;
        /* center the icon */
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon a img {
        width: 75%;
        height: 75%;
      }`;

    // Append the style element to the head of the document
    document.head.appendChild(style);

    this.innerHTML = /*html*/ `
    <div class="outsideLinks">
        <!-- Link to bilibili-->
        <div class="icon">
            <a href="https://space.bilibili.com/3494373465524892">
                <img src="assets/images/bilibili-brands-solid.svg" alt="bilibili" />
            </a>
        </div>

        <!-- Link to github-->
        <div class="icon">
            <a href="https://github.com/IceWaterNotIce">
                <img src="assets/images/github-brands-solid.svg" alt="github" />
            </a>
        </div>

        <!-- Link to instagram-->
        <div class="icon">
            <a href="https://www.instagram.com/icewaternotice/">
                <img src="assets/images/instagram-brands-solid.svg" alt="instagram" />
            </a>
        </div>
    </div> 
    `;
  }
}

customElements.define("outside-links", outsideLinks);