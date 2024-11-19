// src/components/BackgroundVideo.js
import React, { useState } from 'react';

const BackgroundVideo = ({ backgroundVideo }) => {
  return (
    <div className="video-background">
      {backgroundVideo && (
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
