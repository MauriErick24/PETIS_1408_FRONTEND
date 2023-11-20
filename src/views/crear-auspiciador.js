import React, { useState } from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
import { async } from "q";
import api from '../services/api'
const CrearPatrocinador =({onClick}) =>{
    const [auspiciadorDatos, setAuspiciadorDatos] = useState(
        {
            nombre: '',
            empresa:'',
            email: '',
            telefono: '',
            direccion: '',
        }
    )

        
    const handleChange = (name, value) => {
        setAuspiciadorDatos((prevAuspiciadorDatos) => ({
        ...prevAuspiciadorDatos,
        [name]: value,
        }));
    };

    const sendData = async() =>{
        try{
            const response = await api.post('/api/auspiciadores', auspiciadorDatos);
             console.log("Post")
           }catch(err){
             console.log("Error: ", err)
           }
    }

    return (
        <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='AUSPICIADOR'/> 
              
            </Flex>

            {/* <Flex flex-direction='column' justify_content='center' > */}
                <Flex  flex-direction="column">
                    <Inputk 
                            label='Nombre de auspiciador:'
                            name='nombre'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Empresa u Organización:'
                            name='empresa'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='E-mail:'
                            name='email'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Teléfono:'
                            name='telefono'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Dirección'
                            name='direccion'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />                     
                </Flex>
                <Flex flex-direction='row' flex-start='center' justify-content='center' gap='1.2em' align-items='center' margin='2em' margin-bottom='2em'>
                    <h2 className='title-btn-file center'>Imagen de auspiciador</h2>
                    <InputFilePreview 
                        name='file' 
                        buttonText='Selecciona una imagen'
                        width='200px'
                        widthDiv='auto'
                        font-size='18px'
                    />
                </Flex>  
            {/* </Flex> */}

                 <Flex justify-content='end' gap='1em'>
                    <Btn onClick={sendData}>CREAR AUSPICIADOR</Btn>
                    <Btn color='second' onClick={onClick}>VOLVER</Btn>
                 </Flex>
        </>
    )
}

export default CrearPatrocinador