import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import Informacion from './components/Informacion';
import Contacto from './components/Contacto';
import Servicio from './components/Servicio';
import Precio from './components/Precio';
import Editor from './components/Editor';
import InformativeTable from './components/InformativeTable';
import './App.css';

const App = () => {
  const location = useLocation();
  const [backgroundSource, setBackgroundSource] = useState(null); // Fuente del fondo de video
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad de contenido
  const [carouselImages, setCarouselImages] = useState([]); // Almacena las imágenes del carrusel

  // Función para cambiar el fondo
  const setBackground = (source) => {
    console.log("Cambio de fondo a:", source);  // Verificación
    setBackgroundSource(source); // Cambia el fondo al nuevo video
    localStorage.setItem('backgroundSource', source); // Guarda el fondo en el localStorage
  };

  // Cargar el fondo desde localStorage (si existe)
  useEffect(() => {
    const savedBackgroundSource = localStorage.getItem('backgroundSource');
    if (savedBackgroundSource) {
      setBackgroundSource(savedBackgroundSource);
    }
  }, []);

  // Control de la visibilidad de contenido
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Función para manejar el upload de imágenes en el carrusel
  const uploadImages = (event) => {
    const files = event.target.files;
    const newImages = [];
    
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }

    setCarouselImages(newImages);
  };

  return (
    <div className="App" style={{ backgroundColor: 'transparent', position: 'relative' }}>
      {/* Fondo de video */}
      {backgroundSource && (
        <div className="background-video">
          <video autoPlay muted loop style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
            <source src={backgroundSource} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      )}

      {/* Navegación */}
      <nav className="navbar">
        <Link to="/" className="tab">Inicio</Link>
        <Link to="/informacion" className="tab">Información General</Link>
        <Link to="/contacto" className="tab">Contacto</Link>
        <Link to="/servicio" className="tab">Servicio al Cliente</Link>
        <Link to="/precio" className="tab">Precio</Link>
        <Link to="/informative-table" className="tab">Tabla de Videos</Link>
      </nav>

      {/* Contenido principal */}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1500}
          classNames="slide"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/informacion" element={<Informacion setBackground={setBackground} />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicio" element={<Servicio />} />
            <Route path="/precio" element={<Precio />} />
            <Route path="/informative-table" element={<InformativeTable />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {/* Sección de Inicio (Carrusel y más) */}
      <div id="inicio" className="content active">
        <h2>Bienvenido a Electrónica Galaxia Cinco</h2>

        {/* Carrusel */}
        <div className="carousel-container">
          <div className="carousel-images" style={{ transform: `translateX(-${carouselImages.length > 0 ? 100 : 0}%)` }}>
            {carouselImages.map((src, index) => (
              <img key={index} src={src} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Subir imágenes al carrusel */}
        <input type="file" id="imageUpload" accept="image/*" multiple onChange={uploadImages} />
        <button onClick={() => document.getElementById('imageUpload').click()}>Subir Imágenes</button>
      </div>

      {/* Componente Editor */}
      <Editor setBackground={setBackground} />

      {/* Botón para alternar visibilidad */}
      <button onClick={toggleVisibility}>Toggle Visibility</button>

      {/* Contenido en transición */}
      <CSSTransition in={isVisible} timeout={1500} classNames="slide" unmountOnExit>
        <div className="content" style={{ zIndex: 1 }}>
          <h2>Contenido en transición</h2>
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;
