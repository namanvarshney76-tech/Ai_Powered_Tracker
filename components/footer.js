class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #111827;
          color: #F3F4F6;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          gap: 3rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-description {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        .footer-social-link {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .footer-social-link:hover {
          color: white;
        }
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-link {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: white;
        }
        .copyright {
          border-top: 1px solid #374151;
          padding: 1.5rem 2rem;
          text-align: center;
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            padding: 2rem 1rem;
          }
        }
      </style>
      <div class="footer-container">
        <div style="text-align: center; width: 100%;">
          <!-- Logo + Title Centered -->
          <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 1rem;">
            <a href="/" class="footer-logo" style="gap: 0.5rem; font-size: 1.125rem; font-weight: 600;">
              <i data-feather="zap" class="footer-logo-icon" style="width: 1.5rem; height: 1.5rem;"></i>
              AI Powered Tracker
            </a>
          </div>

          <!-- Description -->
          <p class="footer-description" style="font-size: 0.875rem; color: #9CA3AF; margin-bottom: 1.5rem;">
            Custom AI automation solutions for your business workflows.
          </p>

          <!-- Social Links -->
          <div class="footer-social" style="justify-content: center; gap: 1.5rem; margin-bottom: 2rem;">
            <a href="#" class="footer-social-link" style="font-size: 1.25rem;">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="footer-social-link" style="font-size: 1.25rem;">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="footer-social-link" style="font-size: 1.25rem;">
              <i data-feather="github"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        &copy; ${new Date().getFullYear()} AI Powered Tracker. All rights reserved.
      </div>
    `;

    // Re-render Feather icons after injecting HTML
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
customElements.define('custom-footer', CustomFooter);
