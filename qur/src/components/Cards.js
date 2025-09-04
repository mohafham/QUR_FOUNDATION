import React, { useState, useRef } from 'react';
import './Cards.css';
import image1 from '../assets/imdadul-hussain-YiA4wqVpLQQ-unsplash.jpg';
import video from '../assets/9249395-hd_1920_1080_30fps.mp4';
import image3 from '../assets/juan-daniel-guzman-zapata-8q4TGEtTaR4-unsplash.jpg';

const Cards = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const handleFirstCardClick = () => {
        window.open('https://www.feedthechildren.org/?form=donate', '_blank', 'noopener,noreferrer');
    };

    const handleSecondCardClick = () => {
        window.open('https://khalsaaid.org/donate/in', '_blank', 'noopener,noreferrer');
    };

    const handleThirdCardClick = () => {
        window.open('https://anandamoldagehome.org/donate-cc/', '_blank', 'noopener,noreferrer');
    };

    const togglePlayPause = (e) => {
        e.stopPropagation(); // Prevent card click when button is clicked
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };
    return (
        <div className="cards-section">
            <div className="cards-container">
                <div className="card" onClick={handleFirstCardClick} style={{cursor: 'pointer'}}>
                    <div className="card-media">
                        <img 
                            src={image1} 
                            alt="Community Support" 
                            className="card-image"
                        />
                    </div>
                </div>
                
                <div className="card video-card" onClick={handleSecondCardClick} style={{cursor: 'pointer'}}>
                    <div className="card-media">
                        <div className="video-container">
                            <video 
                                ref={videoRef}
                                className="card-video"
                                src={video}
                                loop
                                muted
                                autoPlay
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <button 
                                className={`play-pause-btn ${isPlaying ? 'pause' : 'play'}`}
                                onClick={togglePlayPause}
                            >
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="card" onClick={handleThirdCardClick} style={{cursor: 'pointer'}}>
                    <div className="card-media">
                        <img 
                            src={image3} 
                            alt="Hope and Support" 
                            className="card-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
