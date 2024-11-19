// src/components/Servicio.js
import React, { useState } from 'react';

const Servicio = () => {
  const [video, setVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setVideo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Servicio al Cliente</h2>
      
      {/* Espacio para subir video */}
      <div style={{
        border: '2px dashed #ccc',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        width: '300px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {video ? (
          <video controls style={{ maxWidth: '100%', maxHeight: '100%' }}>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <p>Sube un video para mostrar aquí</p>
        )}
      </div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      
      {/* Texto de asistencia */}
      <p style={{ marginTop: '20px' }}>Estamos aquí para ayudarte. Descubre cómo podemos asistirte en cualquier momento.</p>
    </div>
  );
};

export default Servicio;
