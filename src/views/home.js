import styled from 'styled-components'
import Flex from '../components/Flex'
import Evento from '../components/Evento'
import HeaderArticles from '../components/HeaderArticles'

const Home = () => {

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
      />
      <Fondo>
        
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-between' gap='2em'>
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
          <Evento data={example} />
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
