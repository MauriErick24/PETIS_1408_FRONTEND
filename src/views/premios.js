import React, { useState } from "react";
import HeaderTitle from '../components/TituloPremio'
import BorderContent from '../components/BorderContent'
import styled from "styled-components";
import Inputd from '../components/input/Inputd'
import Inputk from '../components/input/Inputk'
import Input3 from '../components/input/Input3'
import botonRedondo from '../components/input/botonRedondo'
import Flex from '../components/Flex'

const Premios = () => {
    const buttonStyle = {
        backgroundColor: '#000',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'white',         // Color del texto
        fontSize:'25px',

    };
    const [rules, setRules] = useState([]);
    const [label, setLabel] = useState('');
  
    const addRule = () => {
      if (label.trim() !== '') {
        setRules([...rules, label]);
        setLabel('');
      }
    };
  
    const removeRule = (index) => {
      const updatedRules = [...rules];
      updatedRules.splice(index, 1);
      setRules(updatedRules);
    };
    const inputStyle = {
        backgroundColor: 'white',  // Color de fondo rojo
        borderRadius: '30px',    // Bordes redondeados
        padding: '10px 20px',    // Relleno interior
        color: 'black',         // Color del texto
        fontSize:'20px',
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
            
           
    
      <div>
                <HeaderTitle title='PREMIOS'/>
                <h1>Escriba los premios que tendra su evento</h1>
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
        
      </div>
              <ul >
                
                     {rules.map((rule, index) => (
                        
                    <li  style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  // Color de fondo rojo
                    borderRadius: '30px',    // Bordes redondeados
                    padding: '5px 20px',
                    marginTop:'0.8em',    // Relleno interior
                    color: 'black'}} key={index}>
                     <input label={`Regla ${index + 1}`} value={rule}style={{backgroundColor: 'white',  // Color de fondo rojo
                    borderRadius: '30px',    // Bordes redondeados
                    padding: '5px 20px',
                    marginTop:'0.8em',    // Relleno interior
                    color: 'black', width:'70%'}}></input>  
                    
                    <button style={Boton2} onClick={() => removeRule(index)}>X</button>
                  </li>
                 ))}
             </ul>
      </div>
        </>
    )

}
export default Premios;
