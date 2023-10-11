import { Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className='footer-container'>
                <div id='nombre-empresa'>
                    <p id="empresa">PRIME SOFT SOLUTIONS</p>
                    <p id="copyright">All copyright reserved PSS</p>
                </div>
                <div id='contacto'>
                    <a>Contactanos</a>   
                </div>
                
            </div>
        )
    }
}

export default Footer