import React from "react";
import "../assets/css/Itemorg.css"

function Itemorg(props){
    return(
        <div>
            {/* <ul className='ul-cont'>
                <li>{props.nombre}</li>
                <li>{props.rep}</li>
                <li>{props.correo}</li>
                <li>{props.telef}</li>
                <li>
                <button class= "btn-x">x</button>
                </li>
            </ul> */}
            <table className="default">
                <tr>
                    <td className="one">{props.nombre}</td>
                    <td className="two">{props.rep}</td>
                    <td className="three">{props.correo}</td>
                    <td className="four">{props.telef}</td>
                    <td className="five"><button class= "btn-x">x</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Itemorg;