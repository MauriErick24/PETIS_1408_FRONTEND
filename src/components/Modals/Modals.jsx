import {Component} from "react";
import ButtonOk from '../ButtonOk/ButtonOk'
import ButtonCancel from '../ButtonCancel/ButtonCancel'
import "./Modals.css"
class Modal extends Component{


    cerrar = () => {
        this.props.cerrar()
    }
    sendData = () => {
        this.props.aceptar()
    }

    render(){
       const {visibleCancelar,informacionModal}=this.props
        return(
            <div id="container-modal">
                <div id="subcontainer-modal">
                    <div id="container-textmodal">
                        <p>{informacionModal}</p>
                    </div>
                    <div id="container-buttonsmodal">
                        <ButtonOk name={"ACEPTAR"} 
                            funcionOnClick={this.sendData}/>
                       {visibleCancelar &&  (
                        <ButtonCancel name={"CANCELAR"}
                            funcionOnClick={this.cerrar}/>)}
                    </div>
                </div>
            </div>
        )
    }

}
export default Modal;