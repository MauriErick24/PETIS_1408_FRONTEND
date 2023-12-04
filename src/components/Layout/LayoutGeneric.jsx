import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Flex from "../Flex";

const LayoutGeneric = ({main, aside}) => {
    return(
        <Div>
            <Header/>
            <Flex gap='2em' margin='1em'>
                <Side>
                    Este es el aside
                </Side>
                <Main>
                    Este es el main
                </Main>
            </Flex>
            <Footer/>
        </Div>
    )
}

export default LayoutGeneric;

const Div = styled.div`
    background-color: #d1d0bc;
`

const Side = styled.div`
    background-color: #bdbb96;
    height: 85vh;
    width: 20%;
    border-radius: 30px;
    padding: 2em;
`
const Main = styled.div`
    background-color: #bdbb96;
    height: 85vh;
    width: 80%;
    border-radius: 30px;
    padding: 2em;
`