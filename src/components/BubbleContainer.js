import React from "react";
import styled from "styled-components";
import Flex from "./Flex";

const BubbleContainer = ({children}) => {
    return(
        <Div>
            <Flex >
                {children}
            </Flex>
        </Div>
    )
}

export default BubbleContainer;

const Div = styled.div`
    border: solid 4px #000;
    border-radius: 51px;
    background-color:#bfba8a;
    height: 70px;
    width: 320px;
`
