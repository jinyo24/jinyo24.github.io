class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top"
      style="max-width: 100%; box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.5);">
      <a class="navbar-brand" style="margin-left: 20px;" href="https://github.com/jinyo24">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-github"
          viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg> &nbsp;jinyo24</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        style="margin-right: 10px;">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-2">
          <li class="nav-item ms-3"> <a class="nav-link active" href="index.html">Home</a> </li>
          <li class="nav-item ms-3"> <a class="nav-link" href="portfolio.html">Projects</a> </li>
          <li class="nav-item dropdown ms-3"> 
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Me</a> 
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="left: auto; right: 0;">
                <li><a class="dropdown-item" href="https://www.linkedin.com/in/yllerena/" target="_blank"> <i class="bi bi-linkedin"></i> yllerena</a></li>
                <li><a class="dropdown-item" href="https://twitter.com/yllerena1987" target="_blank"><i class="bi bi-twitter"></i> @yllerena1987</a></li>
                <li><a class="dropdown-item" href="mailto:yllerena1987@gmail.com"> <i class="bi bi-envelope-fill"></i> yllerena1987@gmail.com</a></li>
              </ul>   
          </li>
        </ul>
      </div>
    </nav>`

  }
}

customElements.define('navbar-component', Nav);