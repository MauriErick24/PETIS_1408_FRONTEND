import styled from 'styled-components'
import Flex from '../components/Flex'
import Evento from '../components/Evento'
import HeaderArticles from '../components/HeaderArticles'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

import Alert from '../components/Alert'

const Home = () => {

  const navigate = useNavigate()
  const [ showAcept, setAceptShow ] = useState(false)

  const example = {
    type: 'TIPO DE EVENTO',
    name: 'NOMBRE DEL EVENTO',
    date: 'FECHA INICIO EVENTO'
  }

  const [cards, setCards] = useState([
    
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
        btnTitle='GESTIONAR EVENTOS'
        onClick={() => navigate('/gestionar-eventos', {state: {datos: null}})}
      />
      <Fondo>
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-evenly' gap='1em'>
          {cards.map((evento) => (
            <Evento data={evento} onDelete={() => deleteEvento(evento.id)} showAlert={setAceptShow} />
          ))}

        </Flex>

        <Alert
        show={showAcept}
        onAcept={() => {
          setAceptShow(!showAcept)
        }}
        message='EVENTO ELIMINADO CORRECTAMENTE'
      />
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
