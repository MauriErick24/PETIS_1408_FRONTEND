import React from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
const crearPatrocinador =() =>{


    return (
        <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='AUSPICIADORES'/> 
              
            </Flex>
            <Flex justify-content="center" flex-direction="column">
                <Inputk 
                        label='Nombre de auspiciador:'
                        name='nombre_auspiciador'
                        // value={values.nombre_evento}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                <Inputk 
                        label='Empresa u Organización:'
                        name='nombre_auspiciador'
                        // value={values.nombre_evento}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                <Inputk 
                        label='E-mail:'
                        name='Email_auspiciador'
                        // value={values.nombre_evento}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                <Inputk 
                        label='Teléfono:'
                        name='telefono_auspiciador'
                        // value={values.nombre_evento}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                <Inputk 
                        label='Dirección'
                        name='direccion_auspiciador'
                        // value={values.nombre_evento}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />    
                
                <Flex flex-direction='column' gap='1.2em' width='20%'>
                  <h2 className='title-btn-file center'>Imagen de auspiciador</h2>
                  <InputFilePreview 
                    name='file' 
                    buttonText='Seleccionar una imagen'
                    width='200px'
                    font-size='18px'
                  />
                </Flex>  
                  
            </Flex>
                 <Flex justify-content='end'>
                    <Btn>CREAR AUSPICIADOR</Btn>
                 </Flex>
        </>
    )
}

export default crearPatrocinador