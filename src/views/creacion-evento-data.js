import styled from 'styled-components'
import Btn from '../components/Btn'
import Flex from '../components/Flex'
import BorderContent from '../components/BorderContent'
import HeaderTitle from '../components/HeaderTitle'
import Input from '../components/input/Input'
import Select from '../components/input/Select'

const CreacionEvento = () => {
  return (
    <>
      <HeaderTitle title='CREACION DE EVENTO'/>
      <BorderContent>
        <Content justify-content='center' width='100%' gap='10em'>
          <Flex flex-direction='column' gap='1.2em' width='100%'>
            <Input label='Nombre de evento: *' />
            <Select label='Tipo de evento : *' />
            <Flex justify-content='space-evenly' width='100%' gap='1em'>
              <Flex>
                <Input type='date' label='Fecha Inicial de inscripción*' column />
              </Flex>
              
              <Flex>
                <Input type='date' label='Fecha final de inscripción*' column />
              </Flex>
            </Flex>

            <Input label='Organizador(es):' />

            <Flex justify-content='space-between' width='100%' gap='1em'>
              <Flex flex-direction='column' gap='1em'>
                <Input label='Lugar: ' />
                <Input label='E-mail: ' />
              </Flex>
              
              <Flex flex-direction='column' gap='1em'>
                <Input label='Hora: ' type='time' />
                <Input label='Telefono: ' />
              </Flex>
            </Flex>
          </Flex>

          <Flex flex-direction='column' gap='1.2em'>
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
