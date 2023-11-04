import React from "react";
import styled from "styled-components";
import HeaderTitle from "../components/HeaderTitle";
import Flex from "../components/Flex";
import Inputk from "../components/input/Inputk";
import Btn from "../components/Btn"
import SearchBar from "../components/Searchbar";
import Itemgen from "../components/Itemgen";

const Patrocinador = () => {
    const datos=[
        {
            nombrepatrocinador:'coca cola'
        },
          {
            nombrepatrocinador:'Lab Tech'
        },  {
            nombrepatrocinador:'UMSS'
        }
    ]
    return(
        <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='PATROCINADORES'/> 
              
            </Flex>
            <SearchBar label='Nombre del patrocinador :' />
            
                    
            <Flex  justify-content='center'flex-direction='column'gap='6px'align-items='center'>
                {datos.map((patrocinador)=>(
                    <Itemgen>
                        <p>{patrocinador.nombrepatrocinador}</p>
                    </Itemgen>
                ))}
            </Flex> 
            <Flex justify-content='end'>
               <Btn>CREAR PATROCINADOR</Btn>
            </Flex>        
        </>
    )
}
export default Patrocinador;

