import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../components/Flex";
import Btn from "../components/Btn";
import Input from "../components/input/Input";
import Inputd from "../components/input/Inputd";
import HeaderTitle from "../components/HeaderTitle";

const P = styled.p``
const Modal = styled.div`
    width=100%;
`

const CrearActividades =() => {

    
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
  

    return(
        <>
                <Flex flex-direction='column' align-items='center' gap='1em'>
                    <HeaderTitle title='CREAR ACTIVIDADES'/>
                    { (
                     <Flex gap='2em' text-align='center' align-items='center'>
                        <Modal>
                          <Flex flex-direction='column' gap='1em' justify-content='center' align-items='center'>
                                
                                <h2>Agregar Tarea</h2>
                                <Flex gap='5%'>
                                    <P>Tarea: </P>
                                    <Input 
                                        type='text'
                                        name='tarea'
                                        //    label='Tarea:'
                                        value={taskInput} 
                                        onChange={(e) => setTaskInput(e.target.value)}
                                        // onBlur={handleBlur}
                                    />
                                </Flex>

                                <Flex gap='5%'>
                                    <P>Fecha de Inicio:</P>
                                    <Inputd
                                        name='fecha_inicio'
                                        type='date' 
                                        // label='Fecha de Inicio:'
                                        value={startDate} 
                                        onChange={(e) => setStartDate(e.target.value)}                           
                                    />
                                </Flex>

                                <Flex gap='5%' >
                                    <P>Fecha de Fin:</P>
                                        
                                    <Inputd
                                        name='fecha_fin'
                                        type='date' 
                                        //label='Fecha de Fin:'
                                        value={endDate} 
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </Flex>

                          </Flex>
                        </Modal>
                        <Btn onClick={addTask}>AGREGAR</Btn>
                     </Flex>
                    )}
                    <ul>
                        {tasks.map((task) => (
                        <li key={task.id}>           
                            <Flex text-align='center' align-items='center' gap='1em'>
                                <P>{task.task} </P> 
                                <P>{task.startDate} - {task.endDate}</P>
                                <Btn color='second' onClick={() => deleteTask(task.id)}>x</Btn>
                            </Flex>
                        </li>
                        ))}
                    </ul>
                </Flex>
        </>
    )
}

export default CrearActividades