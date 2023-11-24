import React from "react";
import Flex from "./Flex";
import styled from "styled-components";

const CascadeList = ({children}) => {
    return(
       <Div>
             <Flex flex-direction='column' align-items='flex-end' gap='0.5em'  border-radius='2em'> {/*jlz*/} 
                {children}
             </Flex>
       </Div>
    )
}

export default CascadeList

const Div = styled.div`
    border-radius=2em;
    backgound-color:#545454;
`