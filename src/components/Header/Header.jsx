import { Component} from 'react';
import './Header.css'
import Logo from '../../images/escudo-01.png'

class Header extends Component {
    render(){
        return (
            <div className='header-container'>
                <div>
                    
                </div>
                <div>
                    <img id='img-header' src={Logo} alt="escudo UMSS"/>
                </div>
            </div>
        )
    }
}

export default Header