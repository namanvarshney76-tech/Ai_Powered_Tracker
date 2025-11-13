class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 50;
          background-color: transparent;
        }
.navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f6871f;
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
          background: white;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(246, 135, 31, 0.2);
          border: 1px solid rgba(246, 173, 85, 0.3);
        }
.logo:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
.logo-icon {
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          background-color: #f6871f;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          box-shadow: 0 2px 4px rgba(246, 135, 31, 0.3);
        }
        .nav-link:hover {
          color: white;
          background-color: #f6ad55;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(246, 135, 31, 0.4);
        }
.mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="/" class="logo">
          <i data-feather="zap" class="logo-icon"></i>
          AI Powered Tracker
</a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="#reimagine" class="nav-link">Solution</a>
          <a href="#contact" class="nav-link">Contact</a>
</div>
      </div>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);