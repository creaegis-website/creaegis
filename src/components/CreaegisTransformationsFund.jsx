import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreaegisTransformationsFund = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = 'Creaegis Transformations Fund Trust - Category III AIF | Creaegis Investment Management';
  }, []);

  return (
    <div className="scheme-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="scheme-content-wrapper">
        {/* Back Button */}
        <Link to="/" className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* Header Section */}
        <header className="scheme-header">
          <div className="scheme-badge scheme-badge-alt">Category III AIF</div>
          <h1 className="scheme-title">Creaegis Transformations Fund Trust</h1>
          <h2 className="scheme-subtitle">Alternative Investment Fund - Category III</h2>
        </header>

        <main>

          {/* Info Cards Grid */}
          <div className="info-cards-grid">
            {/* SEBI Registration Card */}
            <div className="info-card info-card-primary">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="info-card-content">
                <h3 className="info-card-title">SEBI Registration</h3>
                <p className="info-card-value">IN/AIF3/25-26/1778</p>
                <p className="info-card-description">Registered with Securities and Exchange Board of India</p>
              </div>
            </div>

            {/* Investment Manager Card */}
            <div className="info-card info-card-secondary">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="info-card-content">
                <h3 className="info-card-title">Investment Manager</h3>
                <p className="info-card-value">Creaegis Advisors LLP</p>
                <p className="info-card-description">Professional fund management services</p>
              </div>
            </div>

            {/* SCORES ID Card */}
            <div className="info-card info-card-accent">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="info-card-content">
                <h3 className="info-card-title">SCORES ID</h3>
                <p className="info-card-value">AIFN00332</p>
                <a 
                  href="https://scores.sebi.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="info-card-link"
                >
                  Visit SEBI SCORES
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="scheme-social-section">
            <h2 className="scheme-social-title">Connect With Us</h2>
            <ul className="scheme-social-grid">
              <li>
                <a 
                  href="mailto:info@creaegis.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="scheme-social-link"
                >
                  <i className="icon-letter"></i>
                  <span>Email</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://goo.gl/maps/YXRvesadN2mHgKAr7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="scheme-social-link"
                >
                  <img src="/img/img.svg" alt="" aria-hidden="true" style={{width: '20px', height: '20px'}} />
                  <span>Location</span>
                </a>
              </li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <footer className="scheme-footer">
          <p>©{currentYear} Creaegis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CreaegisTransformationsFund;
