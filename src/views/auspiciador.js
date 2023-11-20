import React from "react";
import Patrocinador from "./patrocinador";
import { useState } from "react";
import CrearPatrocinador from "./crear-auspiciador";
const Auspiciador =({data}) => {
    const [showAuspiciador,setShowAuspiciador]=useState(true)
    return ( 
        <>
        {
            showAuspiciador && (<Patrocinador data={data} onClick={() => setShowAuspiciador(false)}/>)

        }
        {/* {
            !showAuspiciador && (<CrearPatrocinador data={data} onClick={() => setShowAuspiciador(true)}/>)

        } */}
        </>

    )
}

export default Auspiciador ;