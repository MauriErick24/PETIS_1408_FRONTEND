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

import Imagen from '../assets/images/example-img.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Visualizacionevento(){

    const navigate = useNavigate();
    
    const {id} = useParams();
    const [edit, setEdit] = useState(false);

    const data={
        id: id,
        titulo: "DESCRIPCION DEL EVENTO",
        descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
        inicioEvento: "17/01/2023",
        finEvento: "15/02/2023",
        inicioInscripcion: "20/01/2023",
        finInscripcion: "25/01/2023",
        email: "contacto@domain.com",
        telefono: 68745201,
    }

    const changeEdit = () => {
        console.log("boton editar")
        setEdit(!edit);
    }

    return (
        <>       
        <HeaderDetail nombreEvento={`NOMBRE ${id}`} tipoEvento="COMPETENCIA"/>
        <Flex justify-content='space-between'>
            <Asided>
                <Flex flex-direction='column'  text-align='center' gap='2em' align-items = 'center'>
                    <Img src={Imagen} width="95%"/>

                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Duracion del evento</P>
                    <P>{data.inicioEvento} - {data.finEvento}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Fecha de inscripciones</P>
                    <P>{data.inicioInscripcion} - {data.finInscripcion}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center'  gap='0.5em'>
                    <P>CONTACTOS DEL EVENTO</P>
                    <P>E-mail: {data.email}</P>
                    <P>Telefono: {data.telefono}</P>
                  </Flex>
                  
                </Flex>
                
                  
            </Asided>

            <Flex flex-direction='column'>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
                <Card data={data} editTextArea={edit}/>
            </Flex>
            
            <Asided>
            <Flex flex-direction='column' justify-content='space-between'>
                    <Btn margin-bottom='10px' onClick={() => navigate('/creacion/data')}>EDITAR</Btn>
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
const Img = styled.img`
    border-radius: 20px;
    // margin-left: 10%;
    
`

const P =styled.p`
    color: #000;
    font-size: 17px;
    font-weight: bold;
`