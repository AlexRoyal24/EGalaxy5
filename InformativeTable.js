import React, { useState } from 'react';
import './InformativeTable.css';

const InformativeTable = () => {
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.*\/videos\/.+/;
    const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/p\/.+/;

    return youtubeRegex.test(url) || facebookRegex.test(url) || instagramRegex.test(url);
  };

  const handleAddVideo = () => {
    if (url === '') {
      setError('La URL no puede estar vacía.');
    } else if (!validateUrl(url)) {
      setError('Por favor ingrese una URL válida de YouTube, Instagram o Facebook.');
    } else if (videos.length >= 3) {
      setError('No puedes agregar más de 3 videos.');
    } else {
      setVideos([...videos, url]);
      setUrl('');
      setError('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddVideo();
    }
  };

  const getThumbnail = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    } else if (url.includes('facebook.com')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Facebook_Logo_2023.png';
    } else if (url.includes('instagram.com')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Instagram_logo_2016.svg';
    } else {
      return 'https://via.placeholder.com/250';
    }
  };

  return (
    <div className="video-container">
      <h2 className="section-title">Agrega tus Videos</h2>

      <div className="url-input">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingresa la URL de un video (YouTube, Facebook, Instagram)"
          onKeyDown={handleKeyDown} // Escucha el evento de tecla Enter
        />
        <button onClick={handleAddVideo}>Agregar Video</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="carousel">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <a href={video} target="_blank" rel="noopener noreferrer">
              <div className="video-title">Video {index + 1}</div>
              <div className="video-thumbnail">
                <img
                  src={getThumbnail(video)}
                  alt={`Video ${index + 1}`}
                  className="thumbnail"
                />
              </div>
              <div className="video-description">Haz clic para ver el video</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformativeTable;
