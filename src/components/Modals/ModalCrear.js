import React from "react";
import Flex from "../Flex";
import Inputk from "../input/Inputk";
import HeaderTitle from "../HeaderTitle";
import InputFilePreview from "../input/InputFilePreview";
import Btn from "../Btn";

const ModalLayout = () => {
    return(
        <Flex flex-direction='column' gap='1em' align-items='normal' justify-content='center'>
            
            <Flex justify-content='center' >
                <HeaderTitle title='CREACION DE EVENTO'/> 
            </Flex>

            <Flex flex-direction='column' gap='1em'>
                <Inputk 
                   label='Nombre de evento:'
                   name='nombre_evento'
                   justify_content='end'
                  // value={values.nombre_evento}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                 />
                 <Inputk 
                   label='Empresa u organizacion'
                   name='nombre_evento'
                   justify_content='end'
                  // value={values.nombre_evento}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                 />
                  <Inputk 
                   label='E-mail'
                   name='email'
                   justify_content='end'
                  // value={values.nombre_evento}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                 />
                  <Inputk 
                   label='Telefono'
                   name='telefono'
                   justify_content='end'
                  // value={values.nombre_evento}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                 />
                  <Inputk 
                   label='Direccion'
                   name='direccion'
                   justify_content='end'
                  // value={values.nombre_evento}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                 />
                 <Flex left='10%' width= '100%' align-items='center' margin=''>
                    <p>Logotipo patrocinador</p>
                    <InputFilePreview
                        name='file' 
                        buttonText='Seleccionar una imagen'
                        width='200px'
                        font-size='18px'
                    />
                 </Flex>
            </Flex>
        
            <Flex justify-content='center' gap='1%'>
                <Btn>ACEPTAR</Btn>
                <Btn color='second'>CANCELAR</Btn>
            </Flex>
        </Flex>
    )
}

export default ModalLayout;
