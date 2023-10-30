import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
const Card = ({data}) => {

    return(
        <>
            <Div>
                <Flex flex-display='column' padding-bottom='1em'>
                    <p id="titulo">{data.titulo}</p>
                </Flex> 
                <Flex flex-display='column'>
                    <p>{data.descripcion}</p>
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