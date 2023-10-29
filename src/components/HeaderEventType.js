import styled from "styled-components";
import { Link } from "react-router-dom";

// const types = [
//     {id: 1, nombreTipo_evento: "COMPETENCIA"},
//     {id: 2, nombreTipo_evento: "TALLERES"},
//     {id: 3, nombreTipo_evento: "RECLUTAMIENTO"},
//     {id: 4, nombreTipo_evento: "ENTRENAMIENTO"},
//     {id: 5, nombreTipo_evento: "OTROS"},
// ];

const HeaderEventType = ({types, onClick}) => {
   return (
    <Div>
        {types.map((elemento) => (
            <Button onClick={()=>{
                onClick(elemento.nombreTipo_evento); 
                // console.log(elemento)
            }}>
                {elemento.nombreTipo_evento}
            </Button>    
        ))}
    </Div>
   );
};

export default HeaderEventType;

const Div = styled.div`
    display: flex;
    border-bottom: solid 0.2em #a6a6a6;
`;

const Button = styled.p`
    padding-right: 1.5em;
    font-size: larger;
    cursor: pointer;
    text-decoration: none; 
    color: inherit; 
`;
