import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Btn from '../Btn';

import Flex from '../Flex';
import Aside from '../Aside';

import { useState } from 'react';
import Organizador from '../../views/Organizadorn';
import CrearEvento from '../../views/crear-evento';
import Auspiciador from '../../views/auspiciador';
import Reglas from '../../views/reglas';
import Premios from '../../views/premios';
import Requisitos from '../../views/requisitos'
import CrearActividades from '../../views/crear-actividades';
import Afiche from '../../views/afiche'



function Layout({updateButton,  main}) {

  // const navigate = useNavigate();
  const location = useLocation();
  const { datos } = location.state || {};
  
  // const [updateButton, setUpdateButton] = useState(updateButton)

  const [isEventCreated, setIsEventCreated] = useState(false)

  const [showCrearEvento, setShowCrearEvento] = useState(true)
  const [showOrganizador, setShowOrganizador] = useState(false)
  const [showAuspiciador, setShowAuspiciador] = useState(false)
  const [showReglas, setShowReglas] = useState(false)
  const [showPremios, setShowPremios] = useState(false)
  const [showRequisitos, setShowRequisitos] = useState(false)
  const [showActividades, setShowActividades] = useState(false)
  const [showAfiche, setShowAfiche] = useState(false)

  // console.log(datos);

  const [idEventoCreado, setIdEventoCreado] = useState(null)
 
  const [data, setData] = useState(
    {    
    nombre_evento:"eveentos 153",
    inicio_inscripcion:"2021-01-10",
    fin_inscripcion:"2024-11-21",
    inicio_actividades:"2024-11-21",
    fin_actividades:"2022-11-20",
    inicio_premiacion:"2024-12-1",
    fin_evento:"2023-12-1",
    imagen:"assests/images/umss-logo.png",
    lugar:"coña coña",
    email:"pretencioso@gmail.com",
    descripcion:"este es un evento",
    hora_inicio_inscripcion:"09:00:00.0000000",
    hora_fin_inscripcion:"09:00:00.0000000",
    hora_inicio_actividades:"09:00:00.0000000",
    hora_fin_actividades:"09:00:00.0000000",
    telefono:"78327438",
    reglas:"no ser gay",
    detalle:"blba bla bla",
    contenido:"este es el contenido del evento",
    invitado:"shrek",
    estado_evento:"EN VIVO",
    organizadores:[
      { nombre: "Carrera de Informatica", author: "F. Scott Fitzgerald", year: 1925, publisher: "Charles Scribner's Sons", origin: "EE. UU." },
      { nombre: "MEMI", author: "Harper Lee", year: 1960, publisher: "J. B. Lippincott & Co.", origin: "EE. UU." },
      { nombre: "JALA SOFT", author: "George Orwell", year: 1949, publisher: "Secker & Warburg", origin: "Reino Unido" },
      { nombre:"UMSA - Informatica",author: "Jorge Ledezma", year:1980, publisher:"Diamond", origin: 'bosnia'},
      { nombre:"Univ. Gabriel Rene Moreno",author:"cervantes", year: 1965, publisher: "pinguin", origin: 'Spain'},
     
    ],
    auspiciadores:[
      // { nombre:"Embajada suiza",author:"nemilville", year: 1985,publisher:'Dolmen', origin:'USA'},
      // { nombre:"Fundacion Bankia",author:"Cesar Ldzm", year: 1945, publisher:"majos", origin:'Peru'},
      // { nombre:"Cuadros&CIA", author: "maarisabel", year:1965, publisher:"Trico", origin:'Spain'},
      // { nombre:"Alcaldia de CB", author:'Nicolas cano', year:1965, publisher:'Friends', origin:'UK'},
    ]
}
)

    const formik = useFormik({
      initialValues: data,
      onSubmit: (values) => {
        // Lógica de envío del formulario
        console.log(values);
      },
      validate: (values) => {
        // Lógica de validación del formulario
        const errors = {};

        // Validaciones personalizadas

        return errors;
      },
    });


const handleActualizarEvento = (nuevosDatos) => {
  setData({ ...data, ...nuevosDatos });
};

    const handleButtonClick = (evento, organizador, auspiciador, reglas, premios, requisitos,actividades, afiche) => {
      setShowCrearEvento(evento);
      setShowOrganizador(organizador);
      setShowAuspiciador(auspiciador);
      setShowReglas(reglas);
      setShowPremios(premios);
      setShowRequisitos(requisitos);
      setShowActividades(actividades);
      setShowAfiche(afiche);
    };

  return (
     
    <Div>
      <Header/>
      <div className='page'>
        <Container>
          <Sidebar>
            <Aside>

            <Btn onClick={() => handleButtonClick(true, false, false, false, false,false,  false)}>
              EVENTO
            </Btn>

            {/* { isEventCreated && */}
          { true &&
           ( 
          <>
              {/* <Btn onClick={() => handleButtonClick(false, true, false , false, false, false, false)}>
              ORGANIZADOR
            </Btn> */}
            
            <Btn onClick={() => handleButtonClick(false, false, true, false, false, false, false)}>
              AUSPICIADOR
            </Btn>

            <Btn onClick={() => handleButtonClick(false, false, false, false, false, false, false, true)}>
              AFICHE
            </Btn>

            {/* <Btn onClick={() => handleButtonClick(false, false, false, true, false,false,  false)}>
              REGLAS
            </Btn> */}

            <Btn onClick={() => handleButtonClick(false, false, false, false, true, false, false)}>
              PREMIOS
            </Btn> 

            {/* <Btn onClick={() => handleButtonClick(false, false, false, false, false,false,  true)}>
              REQUISITOS
            </Btn> */}

            <Btn onClick={() => handleButtonClick(false, false, false, false, false,false, true)}>
              ACTIVIDADES
            </Btn>  
          </>  
          )
          }
            </Aside>
          </Sidebar>
          <Content>
            {/* {main} */}
            
            {showCrearEvento && <CrearEvento eventCreated={setIsEventCreated} idEvento={setIdEventoCreado}/>}
            {showOrganizador && <Organizador data={data.organizadores} formik={formik}/>}
            {showAuspiciador && <Auspiciador idEvento={idEventoCreado}/>} 
            {showReglas && <Reglas data={data} onUpdateEvento={handleActualizarEvento}/>} 
            {showPremios && <Premios data={data} onUpdateEvento={handleActualizarEvento}/>} 
            {showRequisitos && <Requisitos data={data} onUpdateEvento={handleActualizarEvento}/>} 
            {showActividades && <CrearActividades/>}
            {showAfiche && <Afiche/>}
            

          </Content>  
        </Container>
      <Flex justify-content='end' gap='1em'>
        {/* {updateButton && <Btn type='submit'>GUARDAR</Btn>}
        {!updateButton && <Btn onClick={()=>console.log(data)}>CREAR</Btn>}
       
        <Btn color='second' >CANCELAR</Btn>  */}
        {/* <Btn onClick={() => navigate('/eventos')} color='second'>CANCELAR</Btn>  */}
      </Flex>
      </div>
      <Footer/>
    </Div>
  );
}

export default Layout;

const Div = styled.div`
  //width: 100%;
  min-height: 100vh;
  // margin: auto;
  background-color: #D1D0BC;
  
  .page{
    margin: auto;
    width: 100%; 
    padding: 1em 4em;
   
  }
`
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  margin: 1%;
  gap:2em;
`;

const Sidebar = styled.div`
  min-width: 20%;
  height: auto;
  background-color: #BDBB96;
  padding: 20px;
  border-right:12px;
  border-radius:15px;
`;

const Content = styled.div`
  min-width: 80%;
  //height: 83vh;
  min-height: fit-content;
  background-color: #BDBB96;
  padding: 20px;
  border-radius: 15px;
`;
