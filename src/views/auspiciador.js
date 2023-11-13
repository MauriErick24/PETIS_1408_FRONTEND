import React from "react";
import Patrocinador from "./patrocinador";
import { useState } from "react";
import CrearPatrocinador from "./crear-auspiciador";
const Auspiciador =() => {
    const [showAuspiciador,setShowAuspiciador]=useState(true)
    return ( 
        <>
        {
            showAuspiciador && (<Patrocinador onClick={() => setShowAuspiciador(false)}/>)

        }
        {
            !showAuspiciador && (<CrearPatrocinador onClick={() => setShowAuspiciador(true)}/>)

        }
        </>

    )
}

export default Auspiciador ;