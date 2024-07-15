"use client";
import React, { useEffect,useRef } from 'react';
import './VideoHome.css';

export function VideoHome(){
    const videoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
          if (videoRef.current) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            videoRef.current.style.width = `${width}px`;
            videoRef.current.style.height = `${height}px`;
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the size
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="video-container">
        <video ref={videoRef} src='/montageSansEVT.mp4' autoPlay muted loop />
        </div>
    );
};