import React from 'react';
import './Footer.css';

const Footer = () => {
    const handleSocialClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleEmailClick = () => {
        window.open('mailto:mohafhamm@gmail.com', '_self');
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-decorative-top">
                    <div className="decorative-dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <div className="logo-circle">
                                <span className="logo-text">QUR</span>
                            </div>
                        </div>
                        <h3 className="footer-title">QUR Foundation</h3>
                        <p className="footer-tagline">
                            Bridging compassion with action, connecting hearts across boundaries.
                        </p>
                        <div className="brand-stats">
                            <div className="stat-item">
                                <span className="stat-number">1000+</span>
                                <span className="stat-label">Lives Touched</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">NGO Partners</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-social">
                        <h4 className="social-title">Connect With Us</h4>
                        <div className="social-links">
                            <button 
                                className="social-link linkedin"
                                onClick={() => handleSocialClick('https://linkedin.com/in/mohammad-afham-975010220')}
                                aria-label="LinkedIn"
                            >
                                <div className="social-icon-wrapper">
                                    <span className="social-icon">💼</span>
                                </div>
                                <div className="social-info">
                                    <span className="social-text">LinkedIn</span>
                                    <span className="social-handle">mohammad-afham</span>
                                </div>
                            </button>
                            
                            <button 
                                className="social-link instagram"
                                onClick={() => handleSocialClick('https://instagram.com/ohhafham')}
                                aria-label="Instagram"
                            >
                                <div className="social-icon-wrapper">
                                    <span className="social-icon">📸</span>
                                </div>
                                <div className="social-info">
                                    <span className="social-text">Instagram</span>
                                    <span className="social-handle">@ohhafham</span>
                                </div>
                            </button>
                            
                            <button 
                                className="social-link email"
                                onClick={handleEmailClick}
                                aria-label="Email"
                            >
                                <div className="social-icon-wrapper">
                                    <span className="social-icon">📧</span>
                                </div>
                                <div className="social-info">
                                    <span className="social-text">Email</span>
                                    <span className="social-handle">mohafhamm@gmail.com</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-divider">
                        <div className="divider-decoration">
                            <span className="divider-dot"></span>
                            <span className="divider-line"></span>
                            <span className="divider-dot"></span>
                        </div>
                    </div>
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} QUR Foundation. Made with ❤️ for a better world.
                        </p>
                        <div className="footer-heart-animation">
                            <span className="heart-pulse">💝</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
