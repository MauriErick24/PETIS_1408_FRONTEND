import { Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className='footer-container'>
                <div id='nombre-empresa'>
                    <p>PRIME SOFT SOLUTIONS</p>
                    <p>All copyright reserved PSS</p>
                </div>
                <div id='contacto'>
                    <a>Contactanos</a>   
                </div>
                
            </div>
        )
    }
}

export default Footer