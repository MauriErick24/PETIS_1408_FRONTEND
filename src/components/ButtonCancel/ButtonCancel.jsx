import {Component} from "react"
import "./ButtonCancel.css"
class ButtonCancel extends Component{
    render (){
        const {name,funcionOnClick} = this.props
           return(
               <div>
                   <button className="ButtonCancel" onClick={funcionOnClick}>{name}</button>
               </div>
           )
       
       }
   }
export default ButtonCancel 