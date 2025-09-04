import React, { useState, useRef } from 'react';
import './SplitSection.css';
import video from '../assets/video.mp4';
import image from '../assets/image.jpg';

const SplitSection = () => {
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [isImageActive, setIsImageActive] = useState(false);
    const [isLeftTextActive, setIsLeftTextActive] = useState(false);
    const [isRightTextActive, setIsRightTextActive] = useState(false);
    const videoRef = useRef(null);

    const handleDonateClick = () => {
        window.open('https://www.helpageindia.org/donate', '_blank', 'noopener,noreferrer');
    };

    const handleMouseMove = (e) => {
        const { clientX } = e;
        const windowWidth = window.innerWidth;
        const isLeftSide = clientX < windowWidth / 2;

        if (isLeftSide) {
            setIsVideoActive(true);
            setIsImageActive(false);
            setIsLeftTextActive(true);
            setIsRightTextActive(false);
            videoRef.current?.play();
        } else {
            setIsVideoActive(false);
            setIsImageActive(true);
            setIsLeftTextActive(false);
            setIsRightTextActive(true);
            videoRef.current?.pause();
        }
    };

    return (
        <div 
            className="split-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setIsVideoActive(false);
                setIsImageActive(false);
                setIsLeftTextActive(false);
                setIsRightTextActive(false);
                videoRef.current?.pause();
            }}
        >
            <div className="split-left">
                <div className="video-container">
                    <video 
                        ref={videoRef}
                        className={`section-video ${isVideoActive ? 'active' : ''}`}
                        src={video}
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className={`overlay-text ${isLeftTextActive ? 'active' : ''}`}>
                        ONE PLAYS.
                    </div>
                </div>
            </div>
            <div className="split-right">
                <div className="image-container">
                    <img 
                        className={`section-image ${isImageActive ? 'active' : ''}`}
                        src={image}
                        alt="QUR Foundation"
                    />
                    <div className={`right-overlay-text ${isRightTextActive ? 'active' : ''}`}>
                        ONE PRAYS.
                    </div>
                </div>
            </div>
            <button 
                className="donate-button"
                onClick={handleDonateClick}
                aria-label="Donate to HelpAge India"
            >
                DONATE
            </button>
        </div>
    );
};

export default SplitSection;
