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
import Input from '../components/input/Input';
import Inputd from '../components/input/Inputd';

import Imagen from '../assets/images/example-img.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import api from '../services/api'

function Visualizacionevento(){

    const navigate = useNavigate();

    const [showButtonEditar, setShowButtonEditar] = useState(true)
    const [showButtonCancelar, setShowButtonCancelar] = useState(false)
    const [taskButton, setTaskButton] = useState(true)
    
    
    const {id} = useParams();
    const [edit, setEdit] = useState(false);

    const [auspiciadores,setAuspiciador]=useState({});
    const [data, setData] = useState({
        // id: 2,
        // nombre_evento: "eveentos 110",
        // inicio_inscripcion: "2023-10-04",
        // fin_inscripcion: "2023-11-21",
        // inicio_actividades: "2023-11-21",
        // fin_actividades: "2023-12-01",
        // inicio_premiacion: "2023-12-01",
        // fin_evento: "2023-12-01",
        // imagen: 'https://es.community.intersystems.com/sites/default/files/inline/images/ai_welcome_wide_2.jpg',
        // lugar: "coña coña",
        // email: "pretencioso@gmail.com",
        // descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
        // hora_inicio_inscripcion: "09:00:00",
        // hora_fin_inscripcion: "09:00:00",
        // hora_inicio_actividades: "09:00:00",
        // hora_fin_actividades: "09:00:00",
        // telefono: 78327438,
        // reglas: "no ser gay",
        // detalle: "blba bla bla",
        // afiche: "nose que es un afiche",
        // contenido: "este es el contenido del evento",
        // invitado: "shrek",
        // tipoEvento_id: 4,
        // tipo_evento: {
        //     id: 4,
        //     nombreTipo_evento: "Reclutamiento"
        // },
        // premios: [],
        auspiciadores:[
                    {
                        nombre: 'ICPC',
                        imagen: 'https://icpc.global/regionals/abouticpc/foundationlogo.png'
                    },
                    {
                        nombre: 'UMSS',
                        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png/1280px-Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png'
                    },
                    {
                        nombre: 'HACKER CUP',
                        imagen: 'https://images-platform.99static.com/LWy50Ye4pyXRHqli3cODzyN-PlE=/500x500/top/smart/99designs-contests-attachments/6/6107/attachment_6107282'
                    },
                ]
    })




    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setTaskInput('');
      setStartDate('');
      setEndDate('');
    };
  
    const addTask = () => {
      if (taskInput.trim() === '') {
        alert('Por favor, ingrese una tarea.');
        return;
      }
  
      if (startDate > endDate) {
        alert('La fecha de inicio debe ser anterior o igual a la fecha de fin.');
        return;
      }
  
      const newTask = {
        id: new Date().getTime(), // Agregamos un ID único para cada tarea
        task: taskInput,
        startDate,
        endDate,
      };
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
      closeModal();
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  


    // const [data, setData] = useState({
    //     id: id,
    //     titulo: "DESCRIPCION DEL EVENTO",
    //     descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
    //     inicioEvento: "17/01/2023",
    //     finEvento: "15/02/2023",
    //     inicioInscripcion: "20/01/2023",
    //     finInscripcion: "25/01/2023",
    //     email: "contacto@domain.com",
    //     telefono: 68745201,
    //     imagen: 'https://es.community.intersystems.com/sites/default/files/inline/images/ai_welcome_wide_2.jpg',
    //     auspiciadores:[
    //         {
    //             nombreAuspiciador: 'ICPC',
    //             imagen: 'https://icpc.global/regionals/abouticpc/foundationlogo.png'
    //         },
    //         {
    //             nombreAuspiciador: 'UMSS',
    //             imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png/1280px-Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png'
    //         },
    //         {
    //             nombreAuspiciador: 'HACKER CUP',
    //             imagen: 'https://images-platform.99static.com/LWy50Ye4pyXRHqli3cODzyN-PlE=/500x500/top/smart/99designs-contests-attachments/6/6107/attachment_6107282'
    //         },
    //     ]
    // })

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await api.get(`/api/evento/${id}`)
                setData(response.data); 
                setAuspiciador(response.data.auspiciadores);
                console.log(response.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    }, []) 

    return (
        <>       
        <HeaderDetail nombreEvento={`${data.nombre_evento} ${data.id}`} tipoEvento="COMPETENCIA"/>
        <Flex justify-content='space-between'>
            <Asided>
                <Flex flex-direction='column'  text-align='center' gap='2em' align-items = 'center'>
                    <Img src={data.imagen} width="95%"/>

                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Duracion del evento</P>
                    <P>{data.inicio_actividades} - {data.fin_actividades}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                    <P>Fecha de inscripciones</P>
                    <P>{data.inicio_inscripcion} - {data.fin_inscripcion}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center'  gap='0.5em'>
                    <P>CONTACTOS DEL EVENTO</P>
                    <P>E-mail: {data.email}</P>
                    <P>Telefono: {data.telefono}</P>
                  </Flex>

                  <Flex flex-direction='column' gap='0.1em'>
                    <P id='auspiciador'>AUSPICIADORES</P>
                    <BubbleContainer>
                        {data.auspiciadores.map((auspiciador) => (
                            <BubbleIcon iconName={auspiciador.nombre} imageUrl={auspiciador.logo}/>
                        ))}
                    </BubbleContainer>
                  </Flex>
                
                </Flex>
                
                  
            </Asided>

            <Flex flex-direction='column'>
                <Card title={"DESCRIPCION DE EVENTO"} data={data.descripcion} />
                {/* <Card title={"REQUISITOS DEL EVENTO"} data={data.requisitos} /> */}
                <Card title={"DETALLES"} data={data.detalle} />
                {/* <Card title={"REGLAS"} data={data.reglas} /> */}
                {/* <Card title={"PREMIOS"} data={data.premios} /> */}
                
            </Flex>
            
            <Asided>
                <Flex flex-direction='column' justify-content='space-between'>
                    {showButtonEditar && <Btn margin-bottom='10px' onClick={() => navigate(`/editar/evento/${id}`, {state: {datos: data}})}>EDITAR</Btn>}
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
const Modal = styled.div`
    position: fixed;
    width:fit-content;
    height:fit-content;
    left: 35%;
    top: 35%;
    background-color: #bfba8a ;
    padding: 2%;
    border-radius:10%;
    border: solid 2px #000;
`