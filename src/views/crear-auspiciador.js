import React from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
const crearPatrocinador =({onClick}) =>{


    return (
        <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='AUSPICIADOR'/> 
              
            </Flex>

            {/* <Flex flex-direction='column' justify_content='center' > */}
                <Flex  flex-direction="column">
                    <Inputk 
                            label='Nombre de auspiciador:'
                            name='nombre_auspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Empresa u Organización:'
                            name='nombre_auspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='E-mail:'
                            name='Email_auspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Teléfono:'
                            name='telefono_auspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                        />
                    <Inputk 
                            label='Dirección'
                            name='direccion_auspiciador'
                            justify_content='end'
                            // value={values.nombre_evento}
                            // onChange={handleChange}
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
                    <Btn>CREAR AUSPICIADOR</Btn>
                    <Btn color='second' onClick={onClick}>VOLVER</Btn>
                 </Flex>
        </>
    )
}

export default crearPatrocinador