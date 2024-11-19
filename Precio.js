// src/components/Precio.js
import React, { useState, useEffect } from 'react';
import './precio.css';

const Precio = () => {
  const [image, setImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { content: "Encuentra nuestros precios actualizados y ofertas especiales." },
    { content: "Contáctanos para obtener una cotización personalizada." },
    { content: "Nuestros paquetes incluyen instalación gratuita y soporte técnico." },
  ];

  // Configura el cambio automático de diapositiva cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Precio</h2>

      {/* Espacio para subir imagen */}
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
        {image ? (
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <p>Sube una imagen para mostrar aquí</p>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Carrusel de información */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: '40px', // Ajuste según el contenido
        marginTop: '20px',
        maxWidth: '300px', // Ajuste el ancho del contenedor del carrusel
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          transition: 'transform 1.5s ease', // Transición de 1.5 segundos
          transform: `translateX(-${currentIndex * 100}%)`, // Mueve el contenido horizontalmente
        }}>
          {slides.map((slide, index) => (
            <p key={index} style={{
              minWidth: '100%',
              margin: 0,
              textAlign: 'center',
              fontSize: '16px',
            }}>
              {slide.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Precio;
