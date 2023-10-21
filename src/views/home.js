import styled from 'styled-components'
import Flex from '../components/Flex'
import Evento from '../components/Evento'
import HeaderArticles from '../components/HeaderArticles'

import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const example = {
    type: 'TIPO DE EVENTO',
    name: 'NOMBRE DEL EVENTO',
    date: 'FECHA INICIO EVENTO'
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
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
          <Evento data={example} onDelete={() => {}} />
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
