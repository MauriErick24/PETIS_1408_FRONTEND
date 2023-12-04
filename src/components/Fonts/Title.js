import React from "react";
import styled from "styled-components";

const Title = ({children}) => {
    return(
        <StyledTitle>{children}</StyledTitle>
    )
}

export default Title

const StyledTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 0.5em;
`