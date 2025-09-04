import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">About The QUR Foundation</h2>
                    <div className="title-underline"></div>
                    <p className="about-description">
                        QUR Foundation is more than just a platform – it's a bridge between compassion and action. 
                        We've created a revolutionary collaborative ecosystem where trusted NGOs unite under one roof, 
                        making it effortless for donors to discover, connect with, and support the causes closest to their hearts.
                    </p>
                </div>
                
                <div className="about-features">
                    <div className="feature-item">
                        <div className="feature-icon">🤝</div>
                        <h3 className="feature-title">Collaborative Platform</h3>
                        <p className="feature-description">
                            A unified space where verified NGOs showcase their missions, creating a trusted network of changemakers working together for maximum impact.
                        </p>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">🎯</div>
                        <h3 className="feature-title">Targeted Giving</h3>
                        <p className="feature-description">
                            Discover and support causes that resonate with your values – from education to healthcare, environmental conservation to social justice.
                        </p>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">🌍</div>
                        <h3 className="feature-title">Global Impact</h3>
                        <p className="feature-description">
                            Every donation creates ripples of positive change, transforming communities and lives across the globe with measurable, lasting results.
                        </p>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Verified Trust</h3>
                        <p className="feature-description">
                            All partner NGOs undergo rigorous verification processes, ensuring your donations reach legitimate, impactful organizations.
                        </p>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">📊</div>
                        <h3 className="feature-title">Transparent Tracking</h3>
                        <p className="feature-description">
                            Track your impact with detailed reports and updates, seeing exactly how your contributions are making a difference.
                        </p>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">💡</div>
                        <h3 className="feature-title">Smart Matching</h3>
                        <p className="feature-description">
                            Our intelligent platform suggests causes and organizations that align with your interests and giving history.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
