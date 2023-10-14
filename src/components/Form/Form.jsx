import {Component} from 'react'
import './Form.css'
import axios from 'axios'
import Title from '../Title/Title'
import ButtonOk from '../ButtonOk/ButtonOk'
import ButtonCancel from '../ButtonCancel/ButtonCancel'

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

    changeInput = (e) => {
       this.setState({[e.target.name]: e.target.value})
    }

    sendData= async(e)=>{
       e.preventDefault();

       try{
            const response = await axios.post('http://', this.state)
            console.log('Respuesta del servidor ', response.data)
       }catch(err){
        console.log(err)
       }
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
                                        <td><input 
                                            className= "first-field-width"  
                                            type="text" 
                                            id="event-name" 
                                            name = "nombre_evento"
                                            onChange={this.changeInput}/><br/></td>
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
                                    <input type="date" id="start" name="inicio_inscripcion" min="2018-01-01" max="2023-12-31" 
                                        onChange={this.changeInput}/><br/>
                                </div>
                                <div>
                                    <label for="start" >Fecha Final de Inscripción:</label><br/>
                                    <input type="date" id="start" name="fin_inscripcion" min="2018-01-01" max="2023-12-31" 
                                        onChange={this.changeInput}/>
                                </div>
                            </div>
                            <div>
                                <label for="organizadores"  >Organizadores :</label>
                                <input type="text" className="first-field-width" id="organizadores" name="organizador"
                                    onChange={this.changeInput}/>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <td>Lugar</td>
                                        <td><input type="text" className="lugar"/></td>
                                        <td>Hora</td>
                                        <td ><input className="hora" type="time" id="appt" name="appt" min="09:00" max="18:00" required
                                            onChange={this.changeInput}/></td>
                                    </tr>
                                    <tr >
                                        <td >Email:</td>
                                        <td><input  type="text" className="formulario_input"  name="email" id="email" 
                                            onChange={this.changeInput} /></td>
                                        <td >Telefono:</td>
                                        <td><input type="tel" className="formulario_input" name="telefono" id="telefono" 
                                            onChange={this.changeInput}/></td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div className="container-dsc">
                                <div className= "box">
                                    <p>Descripción:</p>
                                    <textarea name="descripcion" rows="8" cols="65"
                                        onChange={this.changeInput}></textarea>
                                </div>
                                <div className= "box">
                                <p>Requisitos :</p>
                                <textarea name="requisitos" rows="8" cols="65"
                                    onChange={this.changeInput}></textarea>
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
                           
                            <ButtonOk name={"Agregar imagen"}/>
                            <small id='tagsmall'></small>
                        </div>
                    </div>
                    <div>
                        <h3>Elige tu tipo de participante</h3>
                        <div>
                            <label>
                                <input type="radio" name="individual" value="individual"
                                    onChange={this.changeInput}/> Individual
                            </label><br/>
                            <label>
                                <input type="radio" name="Equipo" value="Equipo"
                                    onChange={this.changeInput}/> Equipo
                            </label>
                            <h3>Numero de integrante de equipo :</h3>
                            <input type="number"
                                onChange={this.changeInput}/>
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
                            <td><textarea name="premio" rows="8" cols="55" onChange={this.changeInput}></textarea></td>
                            <td><textarea name="reglas" rows="8" cols="58" onChange={this.changeInput}></textarea></td>
                            <td><textarea name="detalle" rows="8" cols="55" onChange={this.changeInput}></textarea></td>
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
                                        
                                        <ButtonOk name={"Agregar imagen"}/>
                                        <small id='tagsmall'></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <textarea name="contenido" rows="10" cols="58" onChange={this.changeInput}></textarea>
                            </td>
                            <td>
                                <textarea name="invitado" rows="10" cols="55" onChange={this.changeInput}></textarea>
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <div id='action-'> 
                <ButtonOk name={"ACEPTAR"} funcionOnClick={this.sendData}/>
                <ButtonCancel name={"CANCELAR"}/>
            </div>
            </div>
        )
    }
}
export default Form;