import React from 'react';
import './NavigationButton.css';
import HamburgerMenu from './HamburgerMenu';

const NavigationButton = () => {
    return (
        <div className="nav-button-container">
            <button className="nav-button">
                <em>The QUR Foundation</em>
            </button>
            <HamburgerMenu />
        </div>
    );
};

export default NavigationButton;
