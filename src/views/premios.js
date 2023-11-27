import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderTitle from '../components/TituloPremio'
import BorderContent from '../components/BorderContent'
import styled from "styled-components";
import Flex from "../components/Flex";
import Btn from "../components/Btn";
import api from '../services/api'


const Premios = ({idEvento}) => {

    const buttonStyle = {
        backgroundColor: '#000',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'white',         // Color del texto
        fontSize:'25px',

    };
    useEffect(() => {
      // Recupera los premios  almacenadas en localStorage al cargar la página
      //const storedRules2 = JSON.parse(localStorage.getItem('premio')) || [];
      //setRules(storedRules2);
    }, []);

    
    const [rules, setRules] = useState([]);
    const [label, setLabel] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const addRule = () => {
      if (label.trim() === '') {
        setErrorMessage('Por favor, ingrese una etiqueta válida.');
        return;
      }
  
      if (rules.includes(label)) {
        setErrorMessage('Este premio ya existe. Intente con uno diferente.');
        return;
      }
  
      const updatedRules = [...rules, label];
      setRules(updatedRules);
      setLabel('');
      setErrorMessage('');
    };
  
    const removeRule = (index) => {
      const updatedRules2 = [...rules];
      updatedRules2.splice(index, 1);
      setRules(updatedRules2);
    };
  


        const inputStyle = {
        backgroundColor: 'white',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'black',         // Color del texto
        fontSize:'25px',
        width:'75%'

    };
    const inputStyle2 = {
        backgroundColor: 'white',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '5px 20px',
        marginTop:'0.8em',    // Relleno interior
        color: 'black',         // Color del texto
        fontSize:'20px',
        width:'75%'

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
        fontSize:'15px',
        margin: '0.4em'
    };

    const sendData = async () => {
      try {
        const dataToSend = {
          idEvento: idEvento,
          premios: rules.map((rule, index) => ({ id: index + 1, nombre: rule }))
        };
    console.log(dataToSend)
        const response = await api.post('/api/premios', dataToSend);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    

    return(
      <>
          
  
    <div>
              <HeaderTitle title='PREMIOS'/>
              <H2>Escriba los premios que tendra su evento</H2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 className="ROW" style={{ marginRight: '10px' }}>AGREGAR PREMIO</h2>
              <button style={buttonStyle} className="agregar"onClick={addRule}>+</button>
              
              </div>

           <div>
              <div>
              <h1> </h1>
              <h1> </h1>
              </div>
          

           
      <input  style={inputStyle} className="Input"
        type="text"
        placeholder={'Ingrese los premios que desee'}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
    </div>
    <ul>
        {rules.map((rule, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '30px', padding: '5px 20px', marginTop: '0.8em', color: 'black' }}>
            <input
              label={`Regla ${index + 1}`}
              value={rule}
              style={{ backgroundColor: 'white', borderRadius: '30px', padding: '5px 20px', marginTop: '0.1em', color: 'black', width: '70%', fontSize: '25px' }}
            />
            <button style={Boton2} onClick={() => removeRule(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
    <Flex justify-content='center' top='2em' gap='1em'>
            <Btn type='submit' onClick={()=> sendData()}>GUARDAR</Btn>
            {/* <Btn color = 'second' onClick={()=> navigate('/gestionar-eventos') }>CANCELAR</Btn> */}
    </Flex>

      </>
  )
}
export default Premios;
const H2 = styled.h2`
  text-align: left;
  font-weight: 500;
  margin-bottom: 0.6em;
  margin-top: 2em
`