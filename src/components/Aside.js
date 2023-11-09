import React from "react";
import Flex from "./Flex";
import Btn from "./Btn";
import { Navigate, useNavigate } from "react-router-dom";
import Organizador from "../views/organizador";

const  Aside = ({children}) => {
    const navigate = useNavigate();
    return(
        <>
            <Flex flex-direction='column' align-items='none' gap='1.5em'>
                {children}
                {/* <Btn onClick={()=> navigate("/crear/evento")}>EVENTO</Btn>
                <Btn onClick={()=> {return(<Organizador/>)}} >ORGANIZADOR</Btn> */}
                {/* <Btn onClick={()=> navigate("/crear/evento/organizador")} >ORGANIZADOR</Btn>
                <Btn onClick={()=> navigate("/crear/evento/patrocinadores")}>PATROCINADOR</Btn>
                <Btn onClick={()=> navigate("/crear/evento/reglas")}>REGLAS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/premios")}>PREMIOS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/invitados")}>INVITADOS</Btn>
                <Btn onClick={()=> navigate("/crear/evento/afiche")}>AFICHE</Btn>      */}
            </Flex>
        </>
    )
}
export default Aside;