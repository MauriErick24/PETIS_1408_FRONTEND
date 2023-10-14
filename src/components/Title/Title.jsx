import {Component} from 'react'
import './Title.css'

//! posible arraste de estilos !!!!!!! 

class Title extends Component{
    render(){
        const {title} = this.props
        return(
            <div id="title-style">
                <p>{title}</p>
            </div>
        )
    }    
}

export default Title