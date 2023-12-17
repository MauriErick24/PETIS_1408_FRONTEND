import styled from 'styled-components';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';


import Header from '../components/Header';
import Footer from '../components/Footer';
import CrearAuspiciador from './auspiciador/crear-auspiciador'

import Btn from '../components/Btn';

import Flex from '../components/Flex';
import Aside from '../components/Aside';

import { useState } from 'react';

import EditarEvento from './evento/editar-evento';
import EliminarEvento from './evento/eliminar-evento';
import CascadeList from '../components/CascadeList';
import WarningPage from './warning-page';
import CrearActividades from './actividades/crear-actividades';
import Corganizador from './organizador/crear-organizador';//jledezma crear organizador 23/11/23
import landing from '../assets/images/img-umss.jpg'; //jledezma landing 24/11/23
import { Children } from 'react';

const GestionEvento = ({view, children}) => {

    const navigate = useNavigate();

    const [showCrear, setShowCrear] = useState(false)
    const [showEditar, setShowEditar] = useState(false)
    const [showEliminar, setShowEliminar] = useState(false)

    const [showCrearCascade, setShowCrearCascade] = useState(false)
    const [showAgregarCascade, setShowAgregarCascade] = useState(false)
    const [showEditarCascade, setShowEditarCascade] = useState(false)
    const [showEliminarCascade, setShowEliminarCascade] = useState(false)
    
    const [showImg,setShowImg] = useState(true) //jledzma landing 24/11/23
    
    const [showCrearAuspiciador, setCrearAuspiciador] = useState(false)
    const [showCrearActividades, setCrearActividades] = useState(false)
    const [showCrearOrganizador, setCrearOrganizador] = useState(false) //jledzma crear organizador 23/11/23

    const [showCascade, setShowCascade] = useState(false)

    const [permisos, setPermisos] = useState({
      crear: {
        evento: true,
        auspiciador: true, 
        organizador: true,
      },
      agregar:{
        auspiciador: true,
        organizador:true,
        afiche: true,
        premios: true,
        actividades: true,
        comunicado: true,
      },
      editar:{
        evento: true,
        auspiciador: true,
        //organizador: false,
        //afiche: false,
        //premios: false,
        //actividades: false, 
        //comunicado: false,
      },
      eliminar:{
          evento: true,
          auspiciador: true,
         // organizador: false,
          afiche: true,
          premios: true,
          //actividades: false, 
          //comunicado: false,
      }
    })
    
    const handleClick = (editar, eliminar, crear,landing) => {
        setShowImg(landing);
        setShowEditar(editar);
        setShowEliminar(eliminar);
        setShowCrear(crear);
    }
    
    const [showButtons, setShowButtons] = useState({
        landing: true,      
        nuevoEventoButton: true,
        editarButton: true,
        eliminarButton: true,
        crearButton : true,
    })

    const handleCascade = (crear, agregar ,editar, eliminar) => {
      setShowCrearCascade(crear)
      setShowAgregarCascade(agregar)
      setShowEditarCascade(editar)
      setShowEliminarCascade(eliminar)
    }

    return (
     
        <Div>
          <Header/>
          <div className='page'>
            <Container>
              <Sidebar>
                <Aside>
                <ButtonCascade onClick={() =>handleCascade(true, false, false, false)}>
                      <p>CREAR</p>
                      { showCrearCascade && (<CascadeList cascade='crear' view={permisos.crear}/>)}
                  </ButtonCascade>

                  <ButtonCascade onClick={() => handleCascade(false, true, false, false)}>
                      <p>AGREGAR</p>
                      { showAgregarCascade && (<CascadeList cascade='agregar' view={permisos.agregar}/>)}
                  </ButtonCascade>

                  <ButtonCascade onClick={() => handleCascade(false, false, true, false)}>
                      <p>EDITAR</p>
                      { showEditarCascade && (<CascadeList cascade='editar' view={permisos.editar}/>)}
                  </ButtonCascade>

                  <ButtonCascade onClick={() =>handleCascade(false, false, false, true)}>
                      <p>ELIMINAR</p>
                      { showEliminarCascade && (<CascadeList cascade='eliminar' view={permisos.eliminar}/>)}
                  </ButtonCascade>
                </Aside>
              </Sidebar>
              <Content>
                
                {/* {main} */}
                {/* {showImg && (
                  <img src={landing} alt="landing" width="100%" height="100%"/>
                )} */}
                {/* {showEditar && (<EditarEvento showEditar={showEditar} />)}
                {showEliminar && (<EliminarEvento showEliminar={showEliminar} />)}
                {/* {showEliminar && (<WarningPage/>)} */}
                {/* {showCrearAuspiciador && (<CrearAuspiciador/>)}
                {showCrearActividades && (<CrearActividades/>)}
                {showCrearOrganizador && (<Corganizador />)}  */}

                {children ? children : (<Img src={landing} alt="landing" />)}

              </Content>  
            </Container>
          <Flex justify-content='end' gap='1em'>
            <Btn color='second' onClick={()=>navigate('/')}>ATRAS</Btn> 
          </Flex>
          </div>
          <Footer/>
        </Div>
      );
    }
    
    export default GestionEvento;
    const Option = styled.button`
      width: 70%;
      
      margin-right: 1em;
      border-radius: 2em;
      background-color:#545444;
      margin-bottom: 0.5em;
      &:hover,
      &:focus{
        background-color: #6b6a64;  
      }
    `

    const Div = styled.div`
      width: 100%;
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
  height: auto;
  justify-content: space-between;
  margin: 1%;
`;

const Sidebar = styled.div`
  width: 20%;
  height: auto;
  background-color: #BDBB96;
  padding: 20px;
  border-right:12px;
  border-radius:15px;
`;

const Content = styled.div`
  
  width: 78%;
  height: 100%;
  background-color: #BDBB96;
  padding: 20px;
  border-radius: 15px;
`;

const ButtonCascade = styled.div`
     background-color: #000; 
     border-radius: 2em;
      align-items: right;
     &:hover {
      //background-color: #6b6a64;
      cursor:pointer;
    }
     p{
      color:#fff;
      font-size: 22px;
      padding: 0.4em 1em; 
     }
`
const Img = styled.img`
  width: 135vh;
  height: 70vh;
`


