// src/components/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = ({ backgroundMedia }) => {
  return (
    <div className="video-background">
      {backgroundMedia && (
        backgroundMedia.includes('video') ? (  // Si el archivo es un video
          <video autoPlay loop muted className="background-video">
            <source src={backgroundMedia} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <img src={backgroundMedia} alt="Background" className="background-image" />  // Si es una imagen
        )
      )}
      <div className="content">
        <h1>Bienvenido a Electrónica Galaxia Cinco</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
