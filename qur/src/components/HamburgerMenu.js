import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNGOClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const ngoLinks = [
        { name: "The Akshaya Patra", url: "https://www.akshayapatra.org/" },
        { name: "Goonj", url: "https://goonj.org/" },
        { name: "Smile Foundation", url: "https://www.smilefoundationindia.org/" },
        { name: "CRY", url: "https://www.cry.org/" },
        { name: "Pratham Education", url: "https://www.pratham.org/" }
    ];

    return (
        <div className="hamburger-container">
            <button 
                className={`hamburger-button ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`menu-items ${isOpen ? 'active' : ''}`}>
                {ngoLinks.map((ngo, index) => (
                    <button 
                        key={index} 
                        className="menu-item"
                        onClick={() => handleNGOClick(ngo.url)}
                    >
                        {ngo.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HamburgerMenu;
