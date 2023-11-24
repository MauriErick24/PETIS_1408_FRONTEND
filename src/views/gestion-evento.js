import styled from 'styled-components';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CrearAuspiciador from '../views/crear-auspiciador'

import Btn from '../components/Btn';

import Flex from '../components/Flex';
import Aside from '../components/Aside';

import { useState } from 'react';

import EditarEvento from './editar-evento';
import EliminarEvento from './eliminar-evento';
import CascadeList from '../components/CascadeList';
import WarningPage from './warning-page';
import CrearActividades from './crear-actividades';
import Corganizador from './corganizador';//jledezma crear organizador 23/11/23

const GestionEvento = () => {
    const navigate = useNavigate();

    const [showCrear, setShowCrear] = useState(false)
    const [showEditar, setShowEditar] = useState(false)
    const [showEliminar, setShowEliminar] = useState(false)
    
    const [showCrearAuspiciador, setCrearAuspiciador] = useState(false)
    const [showCrearActividades, setCrearActividades] = useState(false)
    const [showCrearOrganizador, setCrearOrganizador] = useState(false) //jledzma crear organizador 23/11/23

    const [showCascade, setShowCascade] = useState(false)
    
    const handleClick = (editar, eliminar, crear) => {
        setShowEditar(editar);
        setShowEliminar(eliminar);
        setShowCrear(crear);
    }
    
    const [showButtons, setShowButtons] = useState({
        nuevoEventoButton: true,
        editarButton: true,
        eliminarButton: true,
        crearButton : true,
    })

    const handleCascade = (auspiciador, actividades, organizador) => {
      setCrearAuspiciador(auspiciador)
      setCrearActividades(actividades)
      setCrearOrganizador(organizador) //jledezma crear organizador 23/11/23
    }

    return (
     
        <Div>
          <Header/>
          <div className='page'>
            <Container>
              <Sidebar>
                <Aside>
               { showButtons.nuevoEventoButton && 
                <Btn onClick={()=>navigate('/crear/evento')}>NUEVO EVENTO</Btn>
               }
               { showButtons.editarButton && 
                <Btn onClick={()=> {
                    handleClick(true, false, false)
                    handleCascade(false, false)
                }
                }
                >EDITAR</Btn>
                }

                { showButtons.eliminarButton && 
                <Btn onClick={()=> {
                  handleClick(false, true, false)
                  handleCascade(false, false)
              }
                }>ELIMINAR</Btn>
                }
                

                { showButtons.crearButton &&

                  // <Btn onClick={()=> {
                    
                  //   setShowCascade(!showCascade)
                  // }
                  // }>CREAR</Btn>

                  <ButtonCascade onClick={()=>setShowCascade(!showCascade)}>
                      <p>CREAR</p>
                      { showCascade && (
                          <CascadeList>
                            <Option onClick={()=>{
                              handleCascade(true,false,false)
                              handleClick(false,false,false)
                              }}>AUSPICIADORES</Option>
                            <Option onClick={()=>{
                              handleCascade(false,true,false)
                              handleClick(false,false,false)
                              }}>ACTIVIDADES</Option>
                            <Option onClick={()=>{
                              handleCascade(false,false,true)
                              handleClick(false,false,false)
                              }}>ORGANIZADOR</Option>  
                          </CascadeList>
                        )  
                  }
                  </ButtonCascade>
                 
                }    

                </Aside>
              </Sidebar>
              <Content>
                {/* {main} */}
                {showEditar && (<EditarEvento showEditar={showEditar} />)}
                {showEliminar && (<EliminarEvento showEliminar={showEliminar} />)}
                {/* {showEliminar && (<WarningPage/>)} */}
                {showCrearAuspiciador && (<CrearAuspiciador/>)}
                {showCrearActividades && (<CrearActividades/>)}
                {showCrearOrganizador && (<Corganizador />)}

              </Content>  
            </Container>
          <Flex justify-content='end' gap='1em'>
            {/* {<Btn type='submit'>GUARDAR</Btn>}
            { <Btn>CREAR</Btn>} */}
           
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
  height: 655px;
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



