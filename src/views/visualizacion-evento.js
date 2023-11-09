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
import BubbleContainer from '../components/BubbleContainer';
import BubbleIcon from '../components/BubbleIcon';

import Imagen from '../assets/images/example-img.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Visualizacionevento(){

    const navigate = useNavigate();

    const [showButtonEditar, setShowButtonEditar] = useState(false)
    const [showButtonCancelar, setShowButtonCancelar] = useState(false)
    
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

                  <Flex flex-direction='column' gap='0.1em'>
                    <P id='auspiciador'>AUSPICIADORES</P>
                    <BubbleContainer>
                        <BubbleIcon/>
                        <BubbleIcon/>
                        <BubbleIcon/>
                        <BubbleIcon/>
                        <BubbleIcon/>

                        
                    </BubbleContainer>
                  </Flex>

                  
                </Flex>
                
                  
            </Asided>

            <Flex flex-direction='column'>
                <Card title={"DESCRIPCION DE EVENTO"} data={data} editTextArea={edit}/>
                <Card title={"REQUISITOS DEL EVENTO"}data={data} editTextArea={edit}/>
                <Card title={"DETALLES"}data={data} editTextArea={edit}/>
                <Card title={"REGLAS"}data={data} editTextArea={edit}/>
                <Card title={"PREMIOS"}data={data} editTextArea={edit}/>
                
            </Flex>
            
            <Asided>
            <Flex flex-direction='column' justify-content='space-between'>
                    {showButtonEditar && <Btn margin-bottom='10px' onClick={() => navigate('/creacion/data')}>EDITAR</Btn>}
                    {showButtonCancelar && <Btn>CANCELAR</Btn>}   
                </Flex>
            </Asided>
        </Flex>
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

    &#auspiciador{
        margin-left:1.1em;
        font-size: 20px;
    }
`