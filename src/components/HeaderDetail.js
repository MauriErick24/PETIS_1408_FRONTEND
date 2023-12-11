import styled from "styled-components";
import React from "react";
import Flex from "./Flex";

const HeaderDetail = ({nombreEvento, tipoEvento}) => {
    return(
        <>
          <Div>
            <Flex  background='black' padding-bottom='5px' border-radius='20px' justify-content='space-between'>
                <P>{nombreEvento}</P>
                <P>{tipoEvento}</P>
            </Flex>
          </Div>  
        </>
    )
}
export default HeaderDetail


const P = styled.p`
    color:#d1d0bc;
    height: 30px; 
    padding-top: 6px;
    padding-left: 35%;
    padding-bottom: 10px;
    font-size: 22px;
    
`

const Div = styled.div`
    padding:10px;
`