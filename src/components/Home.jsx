import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = 'Creaegis Investment Management - Alternative Investment Fund (AIF) Services';
  }, []);

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Header/Logo Section */}
        <header className="header-section">
          <div className="logo-container">
            <img src="/img/logo.png" alt="Creaegis Investment Management Company Logo" className="main-logo" />
          </div>
        </header>

        <main>
          {/* Visually Hidden H1 for Accessibility */}
          <h1 className="sr-only">Creaegis Investment Management - Alternative Investment Fund (AIF) Services</h1>

          {/* Social Media Section */}
          <div className="social-section">
            <h2 className="social-title">Connect With Us</h2>
            <div className="social-grid" role="list">
              <div role="listitem">
                <a 
                  href="https://twitter.com/creaegis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon-wrapper">
                    <i className="fa fa-twitter"></i>
                  </div>
                  <span className="social-label">Twitter</span>
                </a>
              </div>
              
              <div role="listitem">
                <a 
                  href="https://www.linkedin.com/company/creaegis/about/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon-wrapper">
                    <i className="fa fa-linkedin"></i>
                  </div>
                  <span className="social-label">LinkedIn</span>
                </a>
              </div>
              
              <div role="listitem">
                <a 
                  href="mailto:info@creaegis.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon-wrapper">
                    <i className="icon-letter"></i>
                  </div>
                  <span className="social-label">Email</span>
                </a>
              </div>
              
              <div role="listitem">
                <a 
                  href="https://goo.gl/maps/YXRvesadN2mHgKAr7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon-wrapper">
                    <img src="/img/img.svg" alt="" aria-hidden="true" style={{width: '28px', height: '28px'}} />
                  </div>
                  <span className="social-label">Location</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">Our Investment Schemes</h2>
            <div className="cta-grid">
              <Link to="/cif-ii-scheme-i" className="cta-card cta-card-primary">
                <div className="cta-card-inner">
                  <div className="cta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="cta-title-text">CIF II Scheme I</h3>
                  <p className="cta-description">Category II Alternative Investment Fund</p>
                  <div className="cta-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
              
              <Link to="/cif-iii-scheme-i" className="cta-card cta-card-secondary">
                <div className="cta-card-inner">
                  <div className="cta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="cta-title-text">CIF III Scheme I</h3>
                  <p className="cta-description">Category III Alternative Investment Fund</p>
                  <div className="cta-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer-section">
          <p>©{currentYear} Creaegis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;