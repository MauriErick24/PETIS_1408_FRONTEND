import React from "react";
import Flex from "./Flex";
import Btn from "./Btn";

const  Aside = () => {
    return(
        <>
            <Flex flex-direction='column' align-items='none' gap='1em'>
                <Btn>EVENTO</Btn>
                <Btn>ORGANIZADOR</Btn>
                <Btn>PATROCINADOR</Btn>
                <Btn>REGLAS</Btn>
                <Btn>PREMIOS</Btn>
                <Btn>INVITADOS</Btn>
                <Btn>AFICHE</Btn>     
            </Flex>
        </>
    )
}
export default Aside;