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
import { useEffect } from 'react';
import axios from 'axios';

import api from '../services/api'

function Visualizacionevento(){

    const navigate = useNavigate();

    const [showButtonEditar, setShowButtonEditar] = useState(false)
    const [showButtonCancelar, setShowButtonCancelar] = useState(false)
    
    const {id} = useParams();
    const [edit, setEdit] = useState(false);
    const [evento,setEvento]=useState([]);
    const [auspiciadores,setAuspiciadores]= useState([]);
    const [data, setData] = useState({
        id: id,
        titulo: "DESCRIPCION DEL EVENTO",
        descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
        inicioEvento: "17/01/2023",
        finEvento: "15/02/2023",
        inicioInscripcion: "20/01/2023",
        finInscripcion: "25/01/2023",
        email: "contacto@domain.com",
        telefono: 68745201,
        imagen: 'https://es.community.intersystems.com/sites/default/files/inline/images/ai_welcome_wide_2.jpg',
        auspiciadores:[
            {
                nombreAuspiciador: 'ICPC',
                imagen: 'https://icpc.global/regionals/abouticpc/foundationlogo.png'
            },
            {
                nombreAuspiciador: 'UMSS',
                imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png/1280px-Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png'
            },
            {
                nombreAuspiciador: 'HACKER CUP',
                imagen: 'https://images-platform.99static.com/LWy50Ye4pyXRHqli3cODzyN-PlE=/500x500/top/smart/99designs-contests-attachments/6/6107/attachment_6107282'
            },
        ]
    })

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await api.get(`api/evento/1`)
                setAuspiciadores(response.data.auspiciadores);
                console.log(response.data.auspiciadores);
                setEvento(response.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    }, []) 

    return (
        <>       
        <HeaderDetail nombreEvento={`NOMBRE ${id}`} tipoEvento="COMPETENCIA"/>
        <Flex justify-content='space-between'>
            <Asided>
                <Flex flex-direction='column'  text-align='center' gap='2em' align-items = 'center'>
                    <Img src='http://127.0.0.1:8000/storage/auspiciadores/rUr2Lcq5JzFeFiTGSZWWqYAn4y5JrK0o6dcPwDjT.png' width="95%"/>

                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Duracion del evento</P>
                    <P>{evento.inicio_actividades} - {evento.fin_actividades}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Fecha de inscripciones</P>
                    <P>{evento.inicio_inscripcion} - {evento.fin_inscripcion}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center'  gap='0.5em'>
                    <P>CONTACTOS DEL EVENTO</P>
                    <P>E-mail: {evento.email}</P>
                    <P>Telefono: {evento.telefono}</P>
                  </Flex>

                  <Flex flex-direction='column' gap='0.1em'>
                    <P id='auspiciador'>AUSPICIADORES</P>
                    <BubbleContainer>
                        {auspiciadores.map((auspiciador) => ( 
                            <BubbleIcon iconName={auspiciador.nombre} imageUrl={data.imagen}/>
                         ))}
                    </BubbleContainer>
                  </Flex>
                  
                </Flex>
                
                  
            </Asided>

            <Flex flex-direction='column'>
                <Card title={"DESCRIPCION DE EVENTO"} data={evento} />
                <Card title={"REQUISITOS DEL EVENTO"} data={evento} />
                <Card title={"DETALLES"} data={evento} />
                <Card title={"REGLAS"} data={evento} />
                <Card title={"PREMIOS"} data={evento} />
                
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