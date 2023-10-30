import styled from 'styled-components';
import visualizar from '../assets/css/visualizar.css'
import Asidei from '../components/Asidei'
import Asided from '../components/Asided'
//import '../assets/css/Asided.css'
//import '../assets/css/Asidei.css'
import Flex from '../components/Flex'
import HeaderDetail from '../components/HeaderDetail';
import Card from '../components/Card';
import Btn from '../components/Btn';

import Img from '../assets/images/example-img.jpg';

function Visualizacionevento(){

    const data={
        titulo: "DESCRIPCION DEL EVENTO",
        descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
    }


    return (
        <>       
        <HeaderDetail nombreEvento="NOMBRE" tipoEvento="COMPETENCIA"/>
        <Flex justify-content='space-between'>
            <Asided>
                <img src={Img} width="95%"/>
            </Asided>
            <Flex flex-direction='column'>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
            </Flex>
            
            <Asided>
            <Flex flex-direction='column' justify-content='space-between'>
                    <Btn margin-bottom='10px'>EDITAR</Btn>
                    <Btn>CANCELAR</Btn>   
                </Flex>
            </Asided>
        </Flex>


            {/* <div className='titulo-visualizar'>
                <h2>NOMBRE DEL EVENTO</h2>
                <h2>TIPO DEL EVENTO</h2>          
            </div> */}
            
            {/* <div className='app-container'> 
                    <div className='content'>
                        Centro
                    </div>            
                   <Asided/>
            </div> */}
        </>
    )
}

export default Visualizacionevento

const Div = styled.div`
    .p{
        width:max-content;
    }
`