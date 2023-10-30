import styled from 'styled-components';
import visualizar from '../assets/css/visualizar.css'
import Asidei from '../components/Asidei'
import Asided from '../components/Asided'
import '../assets/css/Asided.css'
import '../assets/css/Asidei.css'


function Visualizacionevento(){
    return (
        <>
            <div className='titulo-visualizar'>
                <h2>NOMBRE DEL EVENTO</h2>
                <h2>TIPO DEL EVENTO</h2>
                
            </div>
            <div className='app-container'> 
                <Asidei />
                    <div className='content'>
                        Centro
                    </div>    
                <Asided />
            </div>
        </>
    )
}

export default Visualizacionevento

