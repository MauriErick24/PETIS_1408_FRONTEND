import React from "react";
import Flex from "./Flex";
import styled from "styled-components";

const CascadeList = ({children}) => {
    return(
        <Flex flex-direction='column' gap='0.1em'>
            {children}
        </Flex>
    )
}

export default CascadeList