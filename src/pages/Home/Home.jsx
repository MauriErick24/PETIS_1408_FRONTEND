import { Component } from "react";
import './Home.css'
import Card from "../../components/Card/Card";

const data =[
    {id:1, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:2, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:3, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:4, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:5, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:6, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:7, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:8, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:9, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},
    {id:10, tipo_evento:"competencia", nombre_evento:"algoritmos", fecha_inicio:"2023-01-10"},

]

class Home extends Component{
    render(){
        return(
            <div className="tabla-tarjetas">
                {data.map((card, id) => {
                    return(<Card key={id} 
                    tipo_evento={card.tipo_evento}
                    nombre_evento={card.nombre_evento}
                    fecha_inicio={card.fecha_inicio}/>)
                })} 
            </div>
        )
    }
}
export default Home;