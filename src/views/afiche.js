import React, { useState } from 'react';
import '../assets/css/Afiche.css';
import imagen1 from '../assets/images/1.png';
import imagen2 from '../assets/images/2.png';
import imagen3 from '../assets/images/3.png';
import imagen4 from '../assets/images/4.png';
import imagen5 from '../assets/images/5.png';
import imagen6 from '../assets/images/6.png';
import { useEffect } from 'react';
import api from '../services/api'
import Flex from "../components/Flex";
import Btn from "../components/Btn";
import HeaderTitle from "../components/HeaderTitle";

const Afiche = () => {
  const [imagenes,setImagenes]=useState([

  ])
  const imagen = [
    { id: 1, ruta:imagen1, titulo: 'blue logo' },
    { id: 2, ruta:imagen2, titulo: 'Título 2' },
    { id: 3, ruta:imagen3, titulo: 'Título 3' },
    { id: 4, ruta:imagen4, titulo: 'Título 4' },
    { id: 5, ruta:imagen5, titulo: 'Título 5' },
    { id: 6, ruta:imagen6, titulo: 'Título 6' }
  ];

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await api.get('/api/afiches')
        setImagenes(response.data)    
        console.log(response.data)
      }catch(err){
        console.log("Error: ", err)
      }
    }
  fetchData();
  }, []);

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
      <HeaderTitle title='AGREGAR AFICHES'/>
      {/* <h1>Agregar Afiches</h1> */}
      {/* <h3>Evento : </h3> */}

      <div id="album">
        {/* Renderizar imágenes desde el arreglo */}
        {imagenes.map((imagen) => (
          <div className="afiche" key={imagen.id} onClick={() => seleccionarImagen(imagen)}>
            <img src={imagen.imagen} alt={`Imagen ${imagen.id}`} style={{ maxWidth: '80%', height: 'auto' }} />
            <p>{imagen.nombre}</p>
          </div>
        ))}
      </div>

      {/* <h1>Afiches Seleccionados</h1> */}
      <HeaderTitle title='AFICHES SELECCIONADOS:'/>
      <div>
        <ul id="titulos">
          {/* Renderizar imágenes seleccionadas */}
          {imagenesSeleccionadas.map((imagen, index) => (
            <li key={index}>
              {imagen.nombre}
              <a href="#" onClick={() => eliminarImagen(imagen)}>
                x
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Flex justify-content='center' top='2em' gap='1em'>
        <Btn type='submit'>GUARDAR</Btn>
      
      </Flex>
    </div>
  );
};

export default Afiche;
