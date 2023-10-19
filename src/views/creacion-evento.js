import styled from 'styled-components'
import Btn from '../components/Btn'
import Flex from '../components/Flex'
import Radio from '../components/input/Radio'
import BorderContent from '../components/BorderContent'
import HeaderTitle from '../components/HeaderTitle'

const CreacionEvento = () => {
  return (
    <>
      <HeaderTitle title='CREACION DE EVENTO'/>
      <BorderContent>
        <Content justify-content='center' width='100%' gap='10em'>
          <Flex flex-direction='column' gap='1.2em'>
            <Radio check={false} label='Organizador' font-size='1.625rem' />
            <Radio check={false} label='Descripción' font-size='1.625rem' />
            <Radio check={false} label='Requisitos' font-size='1.625rem' />
            <Radio check={false} label='Participantes' font-size='1.625rem' />
            <Radio check={false} label='Lugar' font-size='1.625rem' />
            <Radio check={false} label='E-mail' font-size='1.625rem' />
            <Radio check={false} label='Hora' font-size='1.625rem' />
          </Flex>

          <Flex flex-direction='column' gap='1.2em'>
            <Radio check={false} label='Detalles' font-size='1.625rem' />
            <Radio check={false} label='Afiche' font-size='1.625rem' />
            <Radio check={false} label='Premios' font-size='1.625rem' />
            <Radio check={false} label='Contenido' font-size='1.625rem' />
            <Radio check={false} label='Invitados especiales' font-size='1.625rem' />
            <Radio check={false} label='Reglas' font-size='1.625rem' />
            <Radio check={false} label='Telefono' font-size='1.625rem' />
          </Flex>
        </Content>
      </BorderContent>
      <Flex top='1em' justify-content='center' gap='10em'>
        <Btn>CREAR</Btn>
        <Btn color='second'>CANCELAR</Btn>
      </Flex>
    </>
  )
}

export default CreacionEvento

const Content = styled(Flex)`
  display: flex;
  justify-content: center;
  padding: 1em 3em;
`
