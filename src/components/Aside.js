import React from "react";
import Flex from "./Flex";
import Btn from "./Btn";
import { Navigate, useNavigate } from "react-router-dom";

const  Aside = () => {
    const navigate = useNavigate();
    return(
        <>
            <Flex flex-direction='column' align-items='none' gap='1.5em'>
                <Btn onClick={()=> navigate("/crear/evento")}>EVENTO</Btn>
                <Btn onClick={()=> navigate("/crear/evento/organizador")} >ORGANIZADOR</Btn>
                <Btn onClick={()=> navigate("/crear/evento/patrocinadores")}>AUSPICIADORES</Btn>
                <Btn onClick={()=> navigate("/crear/evento/reglas")}>REGLAS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/premios")}>PREMIOS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/invitados")}>INVITADOS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/afiche")}>IMAGENES</Btn>     
            </Flex>
        </>
    )
}
export default Aside;