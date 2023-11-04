import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Btn from "./Btn";
import Image from '../assets/images/example-img.jpg'
const Itemgen=({children})=>{
return(
    <Div>
       <Flex justify-content='space-between'align-items='center' >
        {children}
        <Img src={Image}/>
        <Btn color='second'>X</Btn>
       </Flex>
    </Div>
    
)
}

export default Itemgen

const Div=styled.div`
background-color:#000;
color:#fff;
font-size:22px;
padding:1%;
border-radius:30px;
`
const Img=styled.img`
height:6%;
width:6%;
`