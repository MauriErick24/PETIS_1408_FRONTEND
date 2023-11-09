import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import { useState } from "react";
//import TextArea from "./input/TextArea";
const Card = ({data, editTextArea, title}) => {
    
    //  const [editTextArea, setEditTextArea] = useState(false);

    return(
        <>
            <Div>
                <Flex flex-display='column' padding-bottom='1em'>
                    <p id="titulo">{title}</p>
                </Flex> 
                <Flex flex-display='column'>
                    <p>{data.descripcion}</p>
                    {/* <TextArea disabled={editTextArea}>{data.descripcion}</TextArea> */}
                </Flex>    
            </Div>
        </>
    )
}

export default Card;

const Div = styled.div`
    border-bottom: solid 2px #000;
    width: 100%;
    padding: 1em;
    border-left: solid 2px #000;
    border-right: solid 2px #000;

    #titulo{
        font-size: 22px;
    }
`
// const TextArea = styled.textarea`
//     overflow: hidden;
//     height: auto;
//     width: 500px;
//     min-height: 130px;
//     min-width: 800px;
//     resize: none;

//     margin: 0;
//     padding: 10px;
//     border: none;
//     outline: none;
//     font-family: inherit;
//     font-size: 1rem; /* O el tamaño que prefieras */
//     line-height: 1.5; /* O el interlineado que prefieras */
//     resize: none;
//     overflow: hidden;
//     background-color: transparent; /* O el color que desees */
//     color: inherit;

//     &:focus {
//         border: solid 2px #000;
//       }

//       &:disabled {
//         /* Estilos cuando el textarea está deshabilitado */

//         opacity: 0.6; /* Ejemplo: reducir la opacidad */
//         /* Otros estilos deseados */
//       }
    
// `