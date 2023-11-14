import React, { useState } from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
const CrearPatrocinador =({onClick}) =>{
    const [auspiciadorDatos, setAuspiciadorDatos] = useState(
        {
            nombreAuspiciador: '',
            empresaAuspiciador:'',
            emailAuspiciador: '',
            telefonoAuspiciador: '',
            direccionAuspiciador: '',
        }
    )

        
    const handleChange = (name, value) => {
        setAuspiciadorDatos((prevAuspiciadorDatos) => ({
        ...prevAuspiciadorDatos,
        [name]: value,
        }));
    };

    const sendData = () =>{
        console.log(auspiciadorDatos)
        onClick()
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
                            name='nombreAuspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Empresa u Organización:'
                            name='empresaAuspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='E-mail:'
                            name='emailAuspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Teléfono:'
                            name='telefonoAuspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Dirección'
                            name='direccionAuspiciador'
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