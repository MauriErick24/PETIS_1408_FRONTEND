import React from "react";
import Patrocinador from "./patrocinador";
import { useState } from "react";
import CrearPatrocinador from "./crear-auspiciador";
const Auspiciador =() => {
    const [showAuspiciador,setshowAuspiciador]=useState(
       false
    )
    return ( 
        <>
        {
            showAuspiciador && (<Patrocinador/>)

        }
        {
            !showAuspiciador && (<CrearPatrocinador/>)

        }
        </>

    )
}

export default Auspiciador ;