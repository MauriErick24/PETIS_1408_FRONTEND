import React from "react";
import styled from "styled-components";
import HeaderTitle from "../components/HeaderTitle";
import Flex from "../components/Flex";
import Inputk from "../components/input/Inputk";
import Btn from "../components/Btn"
const Patrocinador = () => {
    return(
        <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='PATROCINADORES'/> 
            </Flex>

            <Inputk 
                    label='Nombre de evento:'
                    name='nombre_evento'
                    // value={values.nombre_evento}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    />
            <Flex flex-direction='column'>
                a
                aqui entran los patrocinadores 
                aligna
                aligna
                aligna
                align
                <button>A </button>
                <button>B </button>
                <button>C </button>
                <button>D </button>
                <button>E </button>
            </Flex> 
            <Flex justify-content='end'>
               <Btn>CREAR PATROCINADOR</Btn>
            </Flex>        
        </>
    )
}
export default Patrocinador;