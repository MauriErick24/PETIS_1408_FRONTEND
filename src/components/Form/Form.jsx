import {Component} from 'react'
import './Form.css'
import axios from 'axios'
import Title from '../Title/Title'
// { 
//     "nombre_evento":"evento 2",
//     "inicio_inscripcion":"2023-10-04",
//     "fin_inscripcion":"2023-11-21",
//     "fin_evento":"2023-12-1",
//     "organizador":"jalasoft",
//     "imagen":"public/los",
//     "lugar":"coña coña",
//     "email":"pretencioso@gmail.com",
//     "descripcion":"este es un evento",
//     "hora":"09:00:00.0000000",
//     "telefono":"78327438",
//     "requisito":"traer malcriadas",
//     "premio":"un whisky",
//     "reglas":"no ser gay",
//     "detalle":"blba bla bla",
//     "afiche":"nose que es un afiche",
//     "contenido":"este es el contenido del evento",
//     "invitado":"shrek"
// }


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            nombre_evento: "",
            inicio_inscripcion:"",
            fin_inscripcion:"",
            fin_evento:"",
            organizador:"",
            imagen:"",
            lugar:"",
            email:"",
            descripcion:"",
            hora:"",
            telefono:"",
            requisito:"",
            premio:"",
            reglas:"",
            detalle:"",
            afiche:"",
            contenido:"",
            invitado:"",
        }




    }

    changeInput(field, value){
        switch(field){
            case "nombre_evento":{
                this.setState({nombre_evento:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
            case "inicio_inscripcion":{
                this.setState({inicio_inscripcion:value})
            }
            break;
        }
    }

    sendData=()=>{
       
    }

    render(){
        console.log(this.state)
        return(
            <div>
            <main className="main" >
                <section className="section titulo-etiqueta">
                
                    <Title title={"CREACION DE EVENTO"}/>
                    <form action="" className= "first-form" >
                        <div>
                            <div>
                                <table>
                                    <tr>
                                        <td >Nombre de evento:</td>
                                        <td><input className= "first-field-width"  type="text" id="event-name" name = "event-name"/><br/></td>
                                    </tr>
                                    <tr>
                                        <td >Tipo de evento :</td>
                                        <td>
                                            <select className= "first-field-width"  name=" optionlist " >
                                                <option>Competencia</option>
                                                <option>Taller</option>
                                                <option>Entrenamiento</option>
                                                <option>Reclutamiento</option>
                                                <option>Otro</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="date-position " >
                                <div>
                                    <label for="start" >Fecha inicial de Inscripción:</label><br/>
                                    <input type="date" id="start" name="trip-start" min="2018-01-01" max="2023-12-31" /><br/>
                                </div>
                                <div>
                                    <label for="start" >Fecha Final de Inscripción:</label><br/>
                                    <input type="date" id="start" name="trip-start" min="2018-01-01" max="2023-12-31" />
                                </div>
                            </div>
                            <div>
                                <label for="organizadores"  >Organizadores :</label>
                                <input type="text" className="first-field-width" id="organizadores" name="organizadores"/>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <td>Lugar</td>
                                        <td><input type="text" className="campo-lugar"/></td>
                                        <td>Hora</td>
                                        <td ><input className="campo-hora" type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
                                    </tr>
                                    <tr >
                                        <td >Email:</td>
                                        <td><input  type="text" className="formulario_input"  name="email" id="email" /></td>
                                        <td >Telefono:</td>
                                        <td><input type="tel" className="formulario_input" name="telefono" id="telefono" /></td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div className="container-dsc">
                                <div className= "box">
                                    <p>Descripción:</p>
                                    <textarea name="descripcion" rows="8" cols="65"></textarea>
                                </div>
                                <div className= "box">
                                <p>Requisitos :</p>
                                <textarea name="requisitos" rows="8" cols="65"></textarea>
                                </div>  
                            </div>
                            
                            
                        </div>
                    </form>

                </section>
                {/* <aside className="aside" className="titulo-etiqueta"> */}
                <aside className="aside">
                    <h3 >Imagen del evento</h3>
                    <div >
                        <img src='PETIS_1408_FRONTEND/src/components/Images/imgh.png' alt="imagen de afiche" />
                        <div>
                           
                            <button id='botonpersonal' >Agregar IMAGEN</button>
                            <small id='tagsmall'></small>
                        </div>
                    </div>
                    <div>
                        <h3>Elige tu tipo de participante</h3>
                        <div>
                            <label>
                                <input type="radio" name="individual" value="individual"/> Individual
                            </label><br/>
                            <label>
                                <input type="radio" name="Equipo" value="Equipo"/> Equipo
                            </label>
                            <h3>Numero de integrante de equipo :</h3>
                            <input type="number"/>
                        </div>
                    </div>
                </aside>
                
            </main>

            <div className="another-section titulo-etiqueta">
                <div>
                    <table>
                        <tr>
                            <td>Premios :</td>
                            <td>Reglas:</td>
                            <td>Detalle:</td>
                        </tr>
                        <tr>
                            <td><textarea name="premios" rows="8" cols="55"></textarea></td>
                            <td><textarea name="reglas" rows="8" cols="58"></textarea></td>
                            <td><textarea name="detalle" rows="8" cols="55"></textarea></td>
                        </tr>
                        <tr>
                            <td>Afiche</td>
                            <td>Contenido</td>
                            <td>Invitados Especiales</td>
                        </tr>
                        <tr>
                            <td >
                                <div>
                                    <img src="../Images/imgh.png" alt="imagen de afiche" />
                                    <div>
                                        
                                        <button id='botonpersonal'>Agregar IMAGEN</button>
                                        <small id='tagsmall'></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <textarea name="contenidos" rows="10" cols="58"></textarea>
                            </td>
                            <td>
                                <textarea name="invitados-especiales" rows="10" cols="55"></textarea>
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <div>
                <button>ACEPTAR</button>
                <button>CANCELAR</button>
            </div>
            </div>
        )
    }
}
export default Form;