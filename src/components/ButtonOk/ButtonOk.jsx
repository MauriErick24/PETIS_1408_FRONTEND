import {Component} from "react"
import "./ButtonOk.css"
class ButtonOk extends Component{
    render (){
     const {name,funcionOnClick} = this.props
        return(
            <div>
                <button className="ButtonOk" onClick={funcionOnClick}>{name}</button>
            </div>
        )
    
    }
}
export default ButtonOk 

