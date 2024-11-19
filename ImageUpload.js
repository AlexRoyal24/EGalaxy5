// src/components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setImage(imageData);
        onImageUpload(imageData); // Llamar a la función para actualizar el estado en Home.js
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Sube una Imagen</h2>
      <div
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          marginTop: '20px',
          marginBottom: '20px',
          width: '300px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {image ? (
          <img src={image} alt="Subida" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <p>Sube una imagen para mostrar aquí</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

export default ImageUpload;
