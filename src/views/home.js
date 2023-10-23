import styled from 'styled-components'
import Flex from '../components/Flex'
import Evento from '../components/Evento'
import HeaderArticles from '../components/HeaderArticles'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Home = () => {

  const navigate = useNavigate()

  const example = {
    type: 'TIPO DE EVENTO',
    name: 'NOMBRE DEL EVENTO',
    date: 'FECHA INICIO EVENTO'
  }

  const [cards, setCards] = useState([
    {
      id:1,
      nombre_evento:"evento 3",
        inicio_inscripcion:"2023-10-04",
        fin_inscripcion:"2023-11-21",
        fin_evento:"2023-12-1",
        organizador:"jalasoft",
        imagen:"public/los",
        lugar:"coña coña",
        email:"pretencioso@gmail.com",
        descripcion:"este es un evento",
        hora:"09:00:00.0000000",
        telefono:"78327438",
        requisito:"traer malcriadas",
        premio:"un whisky",
        reglas:"no ser gay",
        detalle:"blba bla bla",
        afiche:"nose que es un afiche",
        contenido:"este es el contenido del evento",
        invitado:"shrek",
        tipoEvento_id:2
    }
  ])
  
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await api.get('/api/evento')
        setCards(response.data)
      }catch(err){
        console.log("Error: ", err)
      }
    }
  fetchData();
  }, []);

  const deleteEvento = async(idEvento) => {
    try{
      await api.delete(`/api/evento/${idEvento}`);
      setCards(cards.filter(evento => evento.id !== idEvento))
    }catch(err){
      console.log("Error: ", err)
    }
  }

  return(
    <>
      <HeaderArticles 
        title='EVENTOS'
        btnTitle='CREAR EVENTO'
        onClick={() => navigate('/creacion/evento')}
      />
      <Fondo>
        
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-evenly' gap='1em'>
          {cards.map((evento) => (
            <Evento data={evento} onDelete={() => deleteEvento(evento.id)} />
          ))}

        </Flex>
      </Fondo>
    </>
  )
}

export default Home

const Fondo = styled.div`
  background-color: #99956E;
  padding: 2em 1em;
  border: solid 0.2em #000;
`
