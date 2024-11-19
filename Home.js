import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [imageURLs, setImageURLs] = useState([null, null, null, null, null]);

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setImageURLs((prevURLs) => {
        const updatedURLs = [...prevURLs];
        updatedURLs[index] = fileURL;
        return updatedURLs;
      });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '40px' }}>Bienvenido a Electrónica Galaxia 5</h2>

      {/* Carrusel principal */}
      <Slider {...settings} style={{ margin: '20px auto', width: '70%' }}>
        {imageURLs.map((url, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {url ? (
              <img
                src={url}
                alt={`Carrusel ${index + 1}`}
                style={{
                  width: '100%',
                  maxHeight: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'opacity 1s ease',
                }}
              />
            ) : (
              <div
                style={{
                  height: '250px',
                  backgroundColor: '#ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                }}
              >
                <span style={{ fontSize: '1.5em', color: '#555' }}>Imagen {index + 1}</span>
              </div>
            )}
          </div>
        ))}
      </Slider>

      {/* Botones para subir imágenes al carrusel */}
      <h3 style={{ marginTop: '30px' }}>Subir Imágenes al Carrusel</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {imageURLs.map((_, index) => (
          <div key={index}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, index)}
              style={{ display: 'none' }}
              id={`file-upload-${index}`}
            />
            <label
              htmlFor={`file-upload-${index}`}
              style={{
                display: 'inline-block',
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              {imageURLs[index] ? `Cambiar Imagen ${index + 1}` : `Subir Imagen ${index + 1}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
