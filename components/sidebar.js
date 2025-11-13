class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 280px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 80px;
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          z-index: 40;
          padding: 1.5rem;
        }
        .sidebar-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #f6871f;
          border-bottom: 2px solid #f6ad55;
          padding-bottom: 0.5rem;
        }
.sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          color: #4B5563;
          text-decoration: none;
          transition: all 0.2s;
        }
        .sidebar-link:hover {
          background: #fffaf0;
          color: #f6871f;
        }
        .sidebar-link.active {
          background: #fff5e6;
          color: #f6871f;
          font-weight: 500;
          border-left: 4px solid #f6871f;
        }
.sidebar-link i {
          margin-right: 0.75rem;
          width: 20px;
          height: 20px;
        }
        @media (max-width: 1024px) {
          :host {
            display: none;
          }
        }
      </style>
      <div>
        <h3 class="sidebar-title">AI Solutions</h3>
        <nav class="sidebar-menu">
          <a href="/" class="sidebar-link">
            <i data-feather="home"></i>
            Dashboard
          </a>
          <a href="solutions.html" class="sidebar-link active">
            <i data-feather="zap"></i>
            Automation Solutions
          </a>
          <a href="#demo" class="sidebar-link">
            <i data-feather="file-text"></i>
            GRN Tracker Demo
          </a>
          <a href="#contact" class="sidebar-link">
            <i data-feather="mail"></i>
            Contact Us
          </a>
        </nav>
      </div>
    `;
  }
}
customElements.define('custom-sidebar', CustomSidebar);