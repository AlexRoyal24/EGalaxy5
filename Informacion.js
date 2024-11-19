import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Informacion.css';

const Informacion = () => {
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

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000, // 4 segundos en cada cuadro de texto
    speed: 1500,         // 1.5 segundos de transición entre cuadros
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Contenido de los cuadros de texto
  const informationSlides = [
    {
      title: "Información de la empresa",
      content: "Electrónica Galaxia Cinco ofrece servicios de implementación de internet por fibra óptica y cable. También ofrecemos servicios de canales infantiles, deportes, películas, religión, noticias y documentales.",
    },
    {
      title: "Horarios de atención",
      content: "Lunes a viernes: 08:00 AM - 17:00 PM \nDomingos: 08:00 AM - 12:00 PM",
    },
    {
      title: "Ubicación",
      content: "15av. 24-41 'B' Zona 5, Ciudad de Guatemala",
    },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Información General</h2>

      {/* Espacio para subir video */}
      <div style={{
        border: '2px dashed #ccc',
        padding: '0',
        marginTop: '20px',
        marginBottom: '20px',
        width: '300px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {video ? (
          <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <p>Sube un video para mostrar aquí</p>
        )}
      </div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      {/* Carrusel de cuadros de información */}
      <div style={{ width: '80%', margin: '0 auto', marginTop: '40px' }}>
        <Slider {...settings}>
          {informationSlides.map((slide, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Fondo blanco semi-transparente
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}>
              <h4 style={{ color: '#007BFF' }}>{slide.title}</h4>
              <p style={{ fontSize: '1.1em', color: '#999', lineHeight: '1.6' }}>
                {slide.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Informacion;
