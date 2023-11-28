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
import Alert from '../components/Alert';
import ErrorMessage from "../components/ErrorMessage";

const Afiche = (idEvento) => {
  const [imagenes,setImagenes]=useState([

  ])
  const [showAlert, setShowAlert] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)
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
          
        //console.log(response.data)
      }catch(err){
        console.log("Error: ", err)
        
      }
    }
  fetchData();
  }, []);

  const sendData =async()=>
  {
    let selectedAuspiciador = []
            let dataToSend = {}

            imagenesSeleccionadas.map((element) => (
                selectedAuspiciador.push(element.id)
            ))
    dataToSend={idEvento,selectedAuspiciador}
    try {
      console.log(dataToSend)
      const response=await api.post('/api/afiches',dataToSend)
      //console.log(dataToSend)
      setShowAlert(true) 
    } catch (error) {
      console.log(error)
      setShowAlertError(true)
    }
  }

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
    <>
     <Alert
               message="Los afiches seleccionados se han registrado correctamente"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />  

            <Alert
               message="Ha sucedido un error inesperado al registrar afiches"
               onAcept={()=>{setShowAlertError(false)}} 
               show={showAlertError}
            />          
   
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
        <Btn type='submit'onClick={()=>sendData()}>GUARDAR</Btn>
      
      </Flex>
    </div> </>
  );
};

export default Afiche;
