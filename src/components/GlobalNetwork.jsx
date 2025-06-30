import React, { useEffect, useRef } from 'react';
import './GlobalNetwork.css';
import globeVideo from '../assets/innochiviewo.mp4';

const GlobalNetwork = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays immediately
      video.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });

      // Handle video ending to ensure seamless loop
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= video.duration - 0.1) {
          video.currentTime = 0;
        }
      });

      // Preload the video for smoother playback
      video.preload = "auto";

      // Handle visibility change to keep video playing
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          video.play().catch(() => {});
        }
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', () => {});
      }
      document.removeEventListener('visibilitychange', () => {});
    };
  }, []);

  return (
    <div className="global-network">
      <div className="global-network__content">
        <div className="globe-container">
          <video 
            ref={videoRef}
            className="globe-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={globeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork; 