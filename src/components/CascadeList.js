import React from "react";
import Flex from "./Flex";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const CascadeList = ({cascade, view, children}) => {
    const navigate = useNavigate()

    return(
       <Div>
             <Flex flex-direction='column' align-items='flex-end' gap='0.5em'  border-radius='2em'>
                            {(cascade == 'agregar') ? 
                              ("")
                              :
                              (
                                <Option onClick={()=>{
                                  navigate(`/${cascade}/evento`)
                                  //   handleCascade(true,false,false,false)
                                  //   handleClick(false,false,false)
                                }}>EVENTO</Option>
                                
                              )}
                            <Option onClick={()=>{
                                navigate(`/${cascade}/auspiciador`)
                            //   handleCascade(false,false,true)
                            //   handleClick(false,false,false)
                              }}>AUSPICIADOR</Option> 

                             <Option onClick={()=>{
                                navigate(`/${cascade}/organizador`)
                            //   handleCascade(false,false,true)
                            //   handleClick(false,false,false)
                              }}>ORGANIZADOR</Option> 

                            {cascade == 'crear' ? 
                              ('')
                              :
                              (
                                <>
                                  <Option onClick={()=>{
                                     navigate(`/${cascade}/afiche`)
                                  //   handleCascade(false,false,true)
                                  //   handleClick(false,false,false)
                                    }}>AFICHE</Option>  

                                    <Option onClick={()=>{
                                       navigate(`/${cascade}/premios`)
                                  //   handleCascade(false,false,true)
                                  //   handleClick(false,false,false)
                                    }}>PREMIOS</Option> 

                                    <Option onClick={()=>{
                                       navigate(`/${cascade}/actividades`)
                                  //   handleCascade(false,false,true)
                                  //   handleClick(false,false,false)
                                    }}>ACTIVIDADES</Option>

                                    <Option onClick={()=>{
                                       navigate(`/${cascade}/comunicados`)
                                  //   handleCascade(false,false,true)
                                  //   handleClick(false,false,false)
                                    }}>COMUNICADO</Option>
                                </>
                              )  
                            }
             </Flex>
       </Div>
    )
}

export default CascadeList
const Option = styled.button`
      width: 70%;
      
      margin-right: 1em;
      border-radius: 2em;
      background-color:#545444;
      margin-bottom: 0.5em;
      &:hover,
      &:focus{
        background-color: #6b6a64;  
      }
    `

const Div = styled.div`
    border-radius=2em;
    backgound-color:#545454;
`