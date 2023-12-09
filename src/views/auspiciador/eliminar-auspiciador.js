import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Modal from 'react-modal';
import styled from "styled-components";
import api from "../../services/api"
import Title from '../../components/Fonts/Title';
import modalEliminar from '../../components/Modals/modalEliminar';
import Flex from "../../components/Flex";

const endpoint = 'http://localhost:8000/api'
//Modal.setAppElement('#root');
const EliminarAuspiciador = () => {

      const [auspiciador, setAuspiciador] = useState([
        { id: 1, nombre: 'Auspiciador 1', correo: 'auspiciador1@example.com' },
        { id: 2, nombre: 'Juan 2', correo: 'auspiciador2@example.com' },
        { id: 3, nombre: 'Marcos 3', correo: 'auspiciador3@example.com' },

      ])
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');

      const openModal = () => {
      setModalIsOpen(true);
      };

     const closeModal = () => {
     setModalIsOpen(false);
    };


      useEffect(() => {
          getAllAuspiciador()
      },[])
    const getAllAuspiciador = async() =>{
      try{
    const response = await api.get('/api/auspiciadores')
    console.log(response.data) 
   setAuspiciador(response.data)
     console.log(response)
      }catch(error){
        console.log(error)
      }
    }
    const deleteAuspiciador  =async(id) =>{
     api.delete(`/api/auspiciadores/${id}`)
      getAllAuspiciador()
      closeModal()
    }
        const inputStyle = {
        backgroundColor: 'white',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'black',         // Color del texto
        fontSize:'25px',
        width:'75%',
        marginTop:'2em'

    };
  
    const Boton = {
        backgroundColor: 'black',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'white',         // Color del texto
        fontSize:'20px',
        margin: '0.4em'
        

    };
    const Boton2= {
        backgroundColor: '#D1741E',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'white',         // Color del texto
        fontSize:'20px',
        margin: '0.4em'
    };
    const customStyles = {
      content: {
        width: '23%', // Puedes ajustar el ancho según tus necesidades
        height: '25%', // Puedes ajustar la altura según tus necesidades
        margin: 'auto',
        borderRadius: '30px', // Centrar el modal
        backgroundColor: '#BFBA8A'
      },
    };
      //para filtrar busquedas
      const filteredAuspiciadores = auspiciador.filter((auspiciador) =>
      auspiciador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    return(
      
    <div >
      <div>
      <Flex justify-content='center' >
                <Title>ELIMINAR AUSPICIADOR</Title>
            </Flex>
                {/* Agregar un campo de búsqueda */}
                <Flex justify-content='center' >

                   <input
                type="text"
                placeholder="Buscar por nombre"
                style={inputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
                </Flex>
             


          </div>
         <div className="crud-container text-center">
            <table >
              
                <thead >
                    <tr style={{ textAlign: 'center' }}>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
              
                <tbody >
                {filteredAuspiciadores.map((auspiciador) => (    
                        //aqui va el otro .map
                               <tr key={auspiciador.id}>
                              <td>{auspiciador.id}</td>
                              <td>{auspiciador.nombre}</td> 
                              <td>{auspiciador.correo}</td> 
                              <td>
                                <Flex justify-content='center' gap='2em' align-items='center'>
                                   <button onClick={openModal} style={Boton2}>DELETE</button>
                                </Flex>

                                <Modal
                                  isOpen={modalIsOpen}
                                  onRequestClose={closeModal}
                                  contentLabel="Ejemplo Modal"
                                  style={customStyles}
                                  justify-content='center' gap='2em' align-items='center'
                                >
                                  <h2 >CONFIRMACIÓN</h2>
                                  <p >¿Está seguro de eliminar el Auspiciador?.</p>
                                  <div >
                                      <button style={Boton} onClick={ ()=>deleteAuspiciador (auspiciador.id)}>ACEPTAR</button>
                                        <button style={Boton2} onClick={closeModal}>CANCELAR</button>
                                  </div>
                                  
                                </Modal>
                                </td>
                            
                            
                           </tr>
                     
                   ))} 
                </tbody>
                
              </table> 
         </div>
           
               
       </div>

          
  

     
  )
}
export default EliminarAuspiciador;
const H2 = styled.h2`
text-align: center;
font-weight: 500;
margin-bottom: 0.6em;
margin-top: 0.1em;
display: block;
margin-left: auto;
margin-right: auto;
`
