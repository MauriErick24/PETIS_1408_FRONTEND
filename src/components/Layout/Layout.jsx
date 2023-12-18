import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Btn from '../Btn';

import Flex from '../Flex';
import Aside from '../Aside';

import { useEffect, useState } from 'react';
import Organizador from '../../views/Organizadorn';
import CrearEvento from '../../views/evento/crear-evento';
import Auspiciador from '../../views/auspiciador';
import Reglas from '../../views/reglas';
import Premios from '../../views/premio/crear-premios';
import Requisitos from '../../views/requisitos'
import CrearActividades from '../../views/actividades/crear-actividades';
import Afiche from '../../views/afiche/agregar-afiche'
import { useNavigate } from 'react-router-dom';

import Spinner from "../Spinner"

import api from '../../services/api'


function Layout({updateEvento,  main}) {


  const navigate = useNavigate();
  // const location = useLocation();
  // const { datos } = location.state || {};
  const {id} = useParams()

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

  const [loading, setLoading] = useState(true);

  // console.log(datos);

  const [idEventoCreado, setIdEventoCreado] = useState(null)
 
  const [data2, setData2] = useState(
    {    
    // nombre_evento:"eveentos 153",
    // imagen:"assests/images/umss-logo.png",
    // lugar:"coña coña",
    // email:"pretencioso@gmail.com",
    // tipoEvento_id: 1,
    // inicio_inscripcion:"2021-01-10",
    // fin_inscripcion:"2024-11-21",
    // inicio_actividades:"2024-11-21",
    // fin_actividades:"2022-11-20",
    // inicio_premiacion:"2024-12-1",
    // fin_evento:"2023-12-1",
    // descripcion:"este es un evento",
    // hora_inicio_inscripcion:"15:30",
    // hora_fin_inscripcion:"15:30",
    // hora_inicio_actividades:"15:30",
    // hora_fin_actividades:"15:30",
    // nombre_evento:"eveentos 153",
    // imagen:"assests/images/umss-logo.png",
    // lugar:"coña coña",
    // email:"pretencioso@gmail.com",
    // tipoEvento_id: 1,
    // inicio_inscripcion:"2021-01-10",
    // fin_inscripcion:"2024-11-21",
    // inicio_actividades:"2024-11-21",
    // fin_actividades:"2022-11-20",
    // inicio_premiacion:"2024-12-1",
    // fin_evento:"2023-12-1",
    // descripcion:"este es un evento",
    // hora_inicio_inscripcion:"15:30",
    // hora_fin_inscripcion:"15:30",
    // hora_inicio_actividades:"15:30",
    // hora_fin_actividades:"15:30",

    // telefono:"78327438",
    // reglas:"no ser gay",
    // detalle:"blba bla bla",
    // contenido:"este es el contenido del evento",
    // invitado:"shrek",
    // estado_evento:"EN VIVO",
    organizadores:[
      // { nombre: "Carrera de Informatica", author: "F. Scott Fitzgerald", year: 1925, publisher: "Charles Scribner's Sons", origin: "EE. UU." },
      // { nombre: "MEMI", author: "Harper Lee", year: 1960, publisher: "J. B. Lippincott & Co.", origin: "EE. UU." },
      // { nombre: "JALA SOFT", author: "George Orwell", year: 1949, publisher: "Secker & Warburg", origin: "Reino Unido" },
      // { nombre:"UMSA - Informatica",author: "Jorge Ledezma", year:1980, publisher:"Diamond", origin: 'bosnia'},
      // { nombre:"Univ. Gabriel Rene Moreno",author:"cervantes", year: 1965, publisher: "pinguin", origin: 'Spain'},
     
     ],
    // auspiciadores:[
    //   // { nombre:"Embajada suiza",author:"nemilville", year: 1985,publisher:'Dolmen', origin:'USA'},
    //   // { nombre:"Fundacion Bankia",author:"Cesar Ldzm", year: 1945, publisher:"majos", origin:'Peru'},
    //   // { nombre:"Cuadros&CIA", author: "maarisabel", year:1965, publisher:"Trico", origin:'Spain'},
    //   // { nombre:"Alcaldia de CB", author:'Nicolas cano', year:1965, publisher:'Friends', origin:'UK'},
    // ]
}
)

const [data, setData] = useState()


  useEffect(()=>{
    const fetchData = async () => {
      console.log(id)
      try {
          
        console.log("este es el id ", id)
        const response = await api.get(`/api/evento/${id}`)
       // console.log(response.data)
        setData(response.data)
        //console.log("DATOS ",data);
        console.log(response.data);
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchData();
  },[])
    

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

      <div className='page'>
        {loading ? 
        (<Spinner/>)
            :
        ( 
          
          <Container>
            {console.log("Datos dentro del container ",data)}
          <Content>
            {/* {main} */}
            

            {showCrearEvento && 
              <>
                {!updateEvento ? 
                (<CrearEvento data={data} eventCreated={setIsEventCreated} idEvento={setIdEventoCreado} tituloEvento={'INFORMACION DEL EVENTO'}/>) 
                :
                (<CrearEvento eventCreated={setIsEventCreated} idEvento={setIdEventoCreado} tituloEvento={'CREAR EVENTO'}/>)  
              }
              </>
            }
            

          </Content>  
        </Container>
        )
        }
      <Flex justify-content='end' gap='1em'>
           

        {/* {updateButton && <Btn type='submit'>GUARDAR</Btn>}
        {!updateButton && <Btn onClick={()=>console.log(data)}>CREAR</Btn>}
       
        <Btn color='second' >CANCELAR</Btn>  */}
        {/* <Btn onClick={() => navigate('/eventos')} color='second'>CANCELAR</Btn>  */}
      </Flex>
      </div>
    </Div>
  );
}

export default Layout;

const Div = styled.div`

`
const Container = styled.div`
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
  heigth: auto;
`;
