import './CTASection.css'
import ctaPhones from '../assets/images/cta-phones.png'
import ctaPattern from '../assets/images/cta-pattern.png'

export default function CTASection() {
  return (
    <section className="cta-section" id="cta-section">
      <div className="container">
        {/* Green rounded banner — 1200px wide inside the container padding */}
        <div className="cta-section__banner">
          {/* Wavy pattern overlay — original topographic PNG
              Figma: Pattern layer, 1820×1820, fill "Accent Color", opacity 3%
              Using mix-blend-mode to blend against the green background */}
          <img
            src={ctaPattern}
            alt=""
            className="cta-section__pattern"
            aria-hidden="true"
          />

          {/* Content grid: left text + right phone mockups */}
          <div className="cta-section__grid">
            {/* Left — copy & buttons */}
            <div className="cta-section__content">
              <h2 className="cta-section__title">
                Get started on<br />Coinsend today
              </h2>
              <p className="cta-section__subtitle">
                Join a growing community using Coinsend to send,
                receive, and spend money across borders without delays.
              </p>
              <div className="cta-section__buttons">
                <a href="#" className="cta-store-btn">
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                    <path d="M14.94 11.63C14.96 9.1 17.04 7.88 17.14 7.82C15.96 6.1 14.14 5.87 13.5 5.84C11.94 5.68 10.72 6.59 10.09 6.59C9.31 6.59 8.09 5.86 6.81 5.88C5.12 5.91 3.55 6.87 2.69 8.39C0.97 11.49 2.25 15.99 3.96 18.47C4.8 19.68 5.88 21.05 7.22 21.03C8.53 21.01 8.96 20.18 10.48 20.18C12 20.18 12.37 21.03 13.72 21.01C15.06 20.99 15.94 19.74 16.77 18.5C17.73 17.11 18.12 15.74 18.15 15.67C18.12 15.66 14.92 14.39 14.94 11.63Z" fill="currentColor"/>
                    <path d="M12.12 4.04C12.78 3.2 13.25 2.04 13.12 0.83C12.15 0.87 10.94 1.5 10.24 2.33C9.62 3.06 9.06 4.26 9.21 5.41C10.29 5.5 11.41 4.84 12.12 4.04Z" fill="currentColor"/>
                  </svg>
                  <div className="cta-store-btn__label">
                    <small>Download on the</small>
                    <span>Apple Store</span>
                  </div>
                </a>
                <a href="#" className="cta-store-btn">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M1 1.5V20.5C1 21.09 1.34 21.61 1.84 21.85L11.69 12L1.84 2.15C1.34 2.39 1 2.91 1 3.5V1.5Z" fill="#4285F4"/>
                    <path d="M15.81 15.12L4.05 21.34L12.54 12.85L15.81 15.12Z" fill="#EA4335"/>
                    <path d="M18.16 10.81C18.5 11.08 18.75 11.5 18.75 12C18.75 12.5 18.53 12.9 18.18 13.18L15.89 14.5L13.39 12L15.89 9.5L18.16 10.81Z" fill="#FBBC04"/>
                    <path d="M4.05 2.66L15.81 8.88L12.54 11.15L4.05 2.66Z" fill="#34A853"/>
                  </svg>
                  <div className="cta-store-btn__label">
                    <small>GET IT ON</small>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — phone mockup image */}
            <div className="cta-section__mockup">
              <img
                src={ctaPhones}
                alt="Coinsend app showing Withdraw Successful and wallet dashboard screens"
                className="cta-section__phones-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
