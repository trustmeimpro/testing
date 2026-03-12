class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <div class="off_menu">
        <ul>
            <li><a href="gate1.html">CoffeShop</a></li>
            <li><a href="gate2.html">FoodPhotography</a></li>
            <li><a href="gate3.html">Sketch</a></li>
            <br>
            <li><a href="gate4.html">About Me</a></li>

        </ul>
      </div>
      


      <nav>
        <div class="logo">
          <h1><a href="index.html">Kontol</a></h1>
        </div>

        <div class="ham_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      
    `;
  }
}

customElements.define("my-navbar", MyNavbar);