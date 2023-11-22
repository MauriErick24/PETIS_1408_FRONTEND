import React, { useState } from 'react';
import '../assets/css/Afiche.css';
import imagen1 from '../assets/images/1.png';
import imagen2 from '../assets/images/2.png';
import imagen3 from '../assets/images/3.png';
import imagen4 from '../assets/images/4.png';
import imagen5 from '../assets/images/5.png';
import imagen6 from '../assets/images/6.png';

const Afiche = () => {
  const imagenes = [
    { id: 1, ruta:imagen1, titulo: 'blue logo' },
    { id: 2, ruta:imagen2, titulo: 'Título 2' },
    { id: 3, ruta:imagen3, titulo: 'Título 3' },
    { id: 4, ruta:imagen4, titulo: 'Título 4' },
    { id: 5, ruta:imagen5, titulo: 'Título 5' },
    { id: 6, ruta:imagen6, titulo: 'Título 6' }
  ];

  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);

  const seleccionarImagen = (imagen) => {
    if (!imagenesSeleccionadas.some((img) => img.id === imagen.id)) {
        setImagenesSeleccionadas([...imagenesSeleccionadas, imagen]);
      }
    
  };

  const eliminarImagen = (imagen) => {
    const nuevasImagenes = imagenesSeleccionadas.filter((img) => img !== imagen);
    setImagenesSeleccionadas(nuevasImagenes);
  };

  return (
    <div>
      <h1>Agregar Afiches</h1>
      <h3>Evento : </h3>

      <div id="album">
        {/* Renderizar imágenes desde el arreglo */}
        {imagenes.map((imagen) => (
          <div className="afiche" key={imagen.id} onClick={() => seleccionarImagen(imagen)}>
            <img src={imagen.ruta} alt={`Imagen ${imagen.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{imagen.titulo}</p>
          </div>
        ))}
      </div>

      <h1>Afiches Seleccionados</h1>
      <div>
        <ul id="titulos">
          {/* Renderizar imágenes seleccionadas */}
          {imagenesSeleccionadas.map((imagen, index) => (
            <li key={index}>
              {imagen.titulo}
              <a href="#" onClick={() => eliminarImagen(imagen)}>
                x
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Afiche;
