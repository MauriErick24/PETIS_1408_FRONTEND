import { Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className='footer-container'>
                <div id='container-empresa'>
                    <p id='nombre-empresa'>PRIME SOFT SOLUTIONS</p>
                    <p id='copyright'>All copyright reserved PSS</p>
                </div>
                <div id='contacto'>
                    <p>contactanos</p>   
                </div>
                
            </div>
        )
    }
}

export default Footer