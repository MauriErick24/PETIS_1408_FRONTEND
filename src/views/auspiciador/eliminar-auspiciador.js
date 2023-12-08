import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Modal from 'react-modal';
import styled from "styled-components";

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
    //const response = await axios.get(`${endpoint}/products`)
   // setAuspiciador(response.data)
    //  console.log(response)
    }
    const deleteAuspiciador  =async(id) =>{
    //  axios.delete(`${endpoint}/product/${id}`)
      getAllAuspiciador()
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
        width: '25%', // Puedes ajustar el ancho según tus necesidades
        height: '20%', // Puedes ajustar la altura según tus necesidades
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
          <H2>ELIMINAR AUSPICIADOR</H2>
                {/* Agregar un campo de búsqueda */}
              <input
                type="text"
                placeholder="Buscar por nombre"
                style={inputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />


          </div>
         
            <table style={{ alignItems: 'center', justifyContent: 'center',  // Color de fondo rojo
             
                  // Bordes redondeados
                    padding: '10px 10px',
                    marginTop:'3em',    // Relleno interior
                    color: 'black',
                    width:'100%',
                    borderCollapse: 'collapse'}}>
              
                <thead >
                    <tr style={{ textAlign: 'center' }}>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
              
                <tbody style={{ alignItems: 'center', justifyContent: 'center'}}>
                {filteredAuspiciadores.map((auspiciador) => (    
                        //aqui va el otro .map
                               <tr key={auspiciador.id}>
                              <td>{auspiciador.id}</td>
                              <td>{auspiciador.nombre}</td> 
                              <td>{auspiciador.correo}</td> 
                              <td>
                                <button onClick={openModal} style={Boton2}>DELETE</button>
                                <Modal
                                  isOpen={modalIsOpen}
                                  onRequestClose={closeModal}
                                  contentLabel="Ejemplo Modal"
                                  style={customStyles}
                                >
                                  <h2>CONFIRMACIÓN</h2>
                                  <p style={{marginTop:'1em'}}>¿Está seguro de eliminar el Auspiciador?.</p>
                                  <div style={{marginTop:'0.5em'}}>
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

