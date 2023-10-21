import styled from 'styled-components'
import Flex from '../components/Flex'
import Evento from '../components/Evento'
import HeaderArticles from '../components/HeaderArticles'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../services/api'

const Home = () => {

  const navigate = useNavigate()

  const example = {
    type: 'TIPO DE EVENTO',
    name: 'NOMBRE DEL EVENTO',
    date: 'FECHA INICIO EVENTO'
  }

  const [cardData, setCardData] = useState([
    { 
      id: 1,
      nombre_evento:"evento 1",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
    { 
      id: 2,
      nombre_evento:"evento 2",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
    { 
      id: 3,
      nombre_evento:"evento 3",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
    { 
      id_card: 4,
      nombre_evento:"evento 4",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
    { 
      id: 5,
      nombre_evento:"evento 5",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
    { 
      id: 7,
      nombre_evento:"evento 6",
      inicio_inscripcion:"2023-10-04",
      tipoEvento:"Competencia"
    },
  ])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get('/api/evento');
  //       setCardData(response.data);
  //     } catch (error) {
  //       console.error('Error al obtener los datos:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const deleteCard=(cardId)=>{
      const nuevoArray = cardData.filter((elemento) => elemento.id !== cardId);
      setCardData(nuevoArray);
  }

  return(
    <>
      <HeaderArticles 
        title='EVENTOS'
        btnTitle='CREAR EVENTO'
        onClick={() => navigate('/creacion/evento')}
      />
      <Fondo>
        
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-between' gap='2em'>
          {cardData.map((evento) => (
            
            <Evento data={evento} onClick={() => deleteCard(evento.id)}/>
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
