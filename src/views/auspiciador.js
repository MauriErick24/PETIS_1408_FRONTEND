import React from "react";
import Patrocinador from "./patrocinador";
import { useState } from "react";
import CrearPatrocinador from "./auspiciador/crear-auspiciador";

const Auspiciador =({idEvento}) => {
    const [showAuspiciador,setShowAuspiciador]=useState(true)
    return ( 
        <>
        {
            showAuspiciador && (<Patrocinador idEvento={idEvento}/>)

        }
        {/* {
            !showAuspiciador && (<CrearPatrocinador data={data} onClick={() => setShowAuspiciador(true)}/>)

        } */}
        </>

    )
}

export default Auspiciador ;