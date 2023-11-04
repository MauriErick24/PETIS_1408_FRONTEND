import React from "react";
import "../assets/css/Itemorg.css"

function Itemorg(props){
    return(
        <div>
            <ul className='ul-cont'>
                <li>{props.nombre}</li>
                <li>{props.rep}</li>
                <li>{props.correo}</li>
                <li>{props.telef}</li>
                <li>
                <button class= "btn-x">x</button>
                </li>
            </ul>
        </div>
    );
}

export default Itemorg;