import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Btn from '../Btn';

import Flex from '../Flex';
import Aside from '../Aside';

import { useState } from 'react';
import Organizador from '../../views/Organizadorn';
import CrearEvento from '../../views/crear-evento';
import Patrocinador from '../../views/patrocinador';



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
  height: 88%;
  background-color: #BDBB96;
  padding: 20px;
  border-radius: 15px;
`;

function Layout({updateButton}) {

  const location = useLocation();
  const { datos } = location.state;
  
  // const [updateButton, setUpdateButton] = useState(updateButton)

  const [showCrearEvento, setShowCrearEvento] = useState(true)
  const [showOrganizador, setShowOrganizador] = useState(false)

  console.log(datos);
 
  const [data, setData] = useState(
    { 
      nombre_evento:"evento prueba",
      inicio_inscripcion:"2023-10-04",
      fin_inscripcion:"2023-11-21",
      fin_evento:"2023-12-1",
      organizador:"jalasoft",
      imagen:"assests/images/umss-logo.png",
      lugar:"coña coña",
      email:"pretencioso@gmail.com",
      descripcion:"este es un evento",
      hora:"09:00:00.0000000",
      telefono:"78327438",
      requisito:"traer malcriadas",
      premio:[],
      reglas:"no ser gay",
      detalle:"blba bla bla",
      afiche:"nose que es un afiche",
      contenido:"este es el contenido del evento",
      invitado:"shrek",
      tipoEvento_id:4
}
)

  return (
    
    <Div>
      <Header/>
      <div className='page'>
        <Container>
          <Sidebar>
            <Aside>
              <Btn onClick={()=> {
              
                  setShowCrearEvento(true)
                  setShowOrganizador(false)        
              
              }} >EVENTO</Btn>

              <Btn onClick={()=> {

                setShowCrearEvento(false)
                setShowOrganizador(true)
              
              }} >ORGANIZADOR</Btn>
            </Aside>
          </Sidebar>
          <Content>
            {/* {main} */}
            
            {showCrearEvento && <CrearEvento />}
            {showOrganizador && <Organizador/>}
            {/* {showOrganizador && <Patrocinador/>} */}
            

          </Content>  
        </Container>
      <Flex justify-content='end' gap='1em'>
        {updateButton && <Btn>GUARDAR</Btn>}
        {!updateButton && <Btn onClick={()=>console.log(data)}>CREAR</Btn>}
       
        <Btn color='second' >CANCELAR</Btn>
      </Flex>
      </div>
      <Footer/>
    </Div>
  );
}

export default Layout;
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