import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Flex from "../../components/Flex";
import Btn from "../../components/Btn";
import Input from "../../components/input/Input";
import Inputd from "../../components/input/Inputd";
import HeaderTitle from "../../components/HeaderTitle";
import Alert from '../../components/Alert';
import ErrorMessage from "../../components/ErrorMessage";

import api from '../../services/api'
import Title from "../../components/Fonts/Title";


const CrearActividades =({idEvento}) => {


    
    const [showAlert, setShowAlert] = useState(false)
    const [showAlertError, setShowAlertError] = useState(false)
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
        //id: new Date().getTime(), // Agregamos un ID único para cada tarea
        task: taskInput,
        fecha_inicio: startDate,
        fecha_fin:endDate,
      };
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
      closeModal();
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  

    useEffect(()=>{
      console.log(idEvento)
      if(idEvento){
        const fetchData = async () => {
          try {
            console.log(idEvento)
            const response = await api.get(`/api/actividades/${idEvento}`)
            setTasks(response.data)
          } catch (error) {
            console.log(error)
            setTasks([])
          }
        }
        fetchData();
      }
    },[])

    const sendData = async() =>  {
      if(tasks.length != 0){
        
        try {
          const response = await api.post('/api/actividades', tasks)
          console.log(response.data)
          setShowAlert(true) 
        } catch (error) {
          console.log(error)
          setShowAlertError(true)
        }
      }else{
        setShowAlertError(true)
        
      }
    }


    return(
        <>   
        <Alert
               message="Las actividades creadas se han registrado correctamente"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />  

              <Alert
               message="Las actividades creadas se han registrado correctamente"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />

            <Alert
               message="Ha sucedido un error inesperado al registrar tus actividades"
               onAcept={()=>{setShowAlertError(false)}} 
               show={showAlertError}
            />          
         <div>
                <Flex flex-direction='column' align-items='center' gap='1em'>
                  <Title>ACTIVIDADES</Title>
                      </Flex>
                    { (
                      
                     <div width = '80%' >                       
                           
                            <div style={{display: 'flex', alignItems: 'center', width:'70%',flexDirection:'column', marginLeft:'10%'}}>
                              <Input 
                                 type='text'
                                 name='tarea'
                                 width='50%'
                            //    label='Tarea:'
                                  value={taskInput} 
                                  placeholder='Introduzca la actividad'
                                  onChange={(e) => setTaskInput(e.target.value)}
                               // onBlur={handleBlur}
                               />
                            </div>
                                   
                                

                                   <div style={{display: 'flex', alignItems: 'center',width:'50%',justifycontent: 'space-between', marginLeft:'10%'}}>
                                    <p>Fecha de Inicio:</p>
                                      <Inputd
                                        name='fecha_inicio'
                                        type='date' 
                                        width='25%'
                                        marginRight= '5%'
                                        // label='Fecha de Inicio:'
                                        value={startDate} 
                                        onChange={(e) => setStartDate(e.target.value)}                           
                                    />
                                      <p>Fecha de Fin:</p>
                                    <Inputd
                                        name='fecha_fin'
                                        type='date' 
                                        width='25%'
                                        marginRight= '5%'
                                        //label='Fecha de Fin:'
                                        value={endDate} 
                                        onChange={(e) => setEndDate(e.target.value)}
                                        
                                    />
                                     <div style={{display: 'flex' ,marginTop:'0.1em',marginLeft: '10%' }}>
                                      < Btn onClick={addTask} >AGREGAR</Btn>
                                      </div>

                                      <div style={{display: 'flex' ,marginTop:'0.1em',marginLeft: '50%' }}>
                                      < Btn onClick={setIsModalOpen(false)} >CANCELAR</Btn>
                                      </div>

                                      
                                   </div> 
                                  
                               
                                  
                        
                                </div> 
                     
                    )}
                    <ul style={{display: 'flex', alignItems: 'center', flexDirection:'column'}} >
                        {(tasks.map((task) => (
                        <li key={task.id} style={{backgroundColor: 'white',  // Color de fondo rojo
                           // Bordes redondeados
                        padding: '5px 20px',
                        marginTop:'git 0.8em',
                        border: '3px solid black',    // Relleno interior
                        color: 'black', width:'70%' 
                        ,
                        }}>           
                            
                                <p  >{task.task} </p> 
                                <p >{task.fecha_inicio} - {task.fecha_fin}</p>
                              
                
                                <Btn color='second' onClick={() => deleteTask(task.id)}>x</Btn>
                            
                        </li>
                        )))}
                    </ul>
                    </div>
                    < Btn type='submit'onClick={()=>sendData()}  style={{marginTop:'25px' }}>ACEPTAR</Btn>  
                    
        </>//< Btn type='submit'onClick={()=>console.log(tasks)}  style={{marginTop:'25px' }}>ACEPTAR</Btn>
    )
}

export default CrearActividades