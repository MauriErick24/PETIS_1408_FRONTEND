import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderTitle from '../components/TituloPremio'
import BorderContent from '../components/BorderContent'
import styled from "styled-components";

const Premios = () => {
    const buttonStyle = {
        backgroundColor: '#000',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'white',         // Color del texto
        fontSize:'25px',

    };
    useEffect(() => {
      // Recupera los premios  almacenadas en localStorage al cargar la página
      const storedRules2 = JSON.parse(localStorage.getItem('premio')) || [];
      setRules(storedRules2);
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
        setErrorMessage('Este premio  ya existe. Intente con una diferente.');
        return;
      }
      const updatedRules = [...rules, label];
      setRules(updatedRules);
      setLabel('');
      setErrorMessage('');

      // Almacena las reglas actualizadas en localStorage
      localStorage.setItem('premio', JSON.stringify(updatedRules));
    };
  
    const removeRule = (index) => {
      const updatedRules2 = [...rules];
      updatedRules2.splice(index, 1);
      setRules(updatedRules2);
      localStorage.setItem('premio', JSON.stringify(updatedRules2));
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

    return(
        <>
            Vista premios
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