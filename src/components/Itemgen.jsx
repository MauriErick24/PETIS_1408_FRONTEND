import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Btn from "./Btn";
import Image from '../assets/images/example-img.jpg'
const Itemgen=({children, showImage})=>{
return(
    <Div>
       <Flex justify-content='space-around'align-items='center' gap='5px' padding='5px'>
        {children}
        {showImage && <Img src={Image}/>}
        <Btn color='second'>x</Btn>
       </Flex>
    </Div>
    
)
}

export default Itemgen

const Div=styled.div`
background-color:#000;
color:#fff;
font-size:22px;
padding:1px;
border-radius:30px;
`
const Img=styled.img`
height:6%;
width:6%;
`