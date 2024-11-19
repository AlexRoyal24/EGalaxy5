// src/components/Editor.js
import React from 'react';

const Editor = ({ setBackground }) => {

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      // Crear un URL temporal para el archivo de video
      const videoURL = URL.createObjectURL(file);

      // Imprimir en consola para verificar que la URL se está generando correctamente
      console.log('Video URL generado:', videoURL);

      // Establecer el nuevo fondo de video
      setBackground(videoURL);
    } else {
      alert('Por favor, selecciona un archivo de video válido.');
    }
  };

  return (
    <div>
      <h3>Editor de Fondo</h3>
      <input 
        type="file" 
        accept="video/mp4, video/webm, video/ogg" 
        onChange={handleVideoUpload} 
        style={{ marginBottom: '10px' }}
      />
      <p>Selecciona un video para cambiar el fondo</p>
    </div>
  );
};

export default Editor;
