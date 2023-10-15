import { Component } from "react";
import './Card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            tipo_evento: this.props.tipo_evento,
            nombre_evento: this.props.nombre_evento,
            fecha_inicio: this.props.fecha_inicio,
        }
    }
    render(){
        return(
            <div class="card">
               <div id="header-card">
                    <button class="close-button">X</button>
                    <h2 class="estilo-nombre-fecha">{this.state.tipo_evento}</h2>
               </div>
                <img id='img-card' src="https://eventos.urjc.es/_files/_event/_53966/_header_img/_72371.jpg" alt="evento-curso"/>
                <p class="estilo-nombre-fecha">{this.state.nombre_evento}</p>
                <p class="estilo-nombre-fecha">{this.state.fecha_inicio}</p>
            </div>
        )
    }
}
export default Card