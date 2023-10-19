import styled from 'styled-components'
import Btn from '../components/Btn'
import Flex from '../components/Flex'
import BorderContent from '../components/BorderContent'
import HeaderTitle from '../components/HeaderTitle'
import Input from '../components/input/Input'
import Select from '../components/input/Select'
import TextArea from '../components/input/TextArea'
import FileInput from '../components/input/InputFile'
import Radio from '../components/input/Radio'
import Img from '../assets/images/example-img.jpg'

const CreacionEvento = () => {
  return (
    <>
      <HeaderTitle title='CREACION DE EVENTO'/>
      <BorderContent>
        <Content justify-content='space-between' width='100%' gap='1em'>
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

            <Flex justify-content='space-between' width='100%' gap='1em'>
              <Flex width='300px'>
                <TextArea label='Descripción:' />
              </Flex>
              
              <Flex width='300px'>
                <TextArea label='Requisitos:' />
              </Flex>
            </Flex>
          </Flex>

          <Flex flex-direction='column' gap='1.2em'>
            <h2 className='title-btn-file'>Imagen del evento</h2>
            <Flex padding='0.2em 1em'>
              <img className='img' src={Img} alt='Imagen' />
            </Flex>
            <Flex justify-content='center' width='100%'>
              <FileInput
                name='file'
                buttonText='Selecciona una imagen' 
                onChange={() => console.log('info')}
              />
            </Flex>

            <Flex top='1em' flex-direction='column' width='100%'>
              <h2 className='title-btn-file'>Elige tu tipo de participantes*</h2>
              <Flex flex-direction='column' top='1em' gap='0.5em'>
                <Radio label='Individual' />
                <Radio label='Equipo' />
              </Flex>
            </Flex>

            <Flex top='1em' flex-direction='column' width='100%'>
              <h2 className='title2-btn-file'>Numero de integrantes por equipo</h2>
              <Flex top='0.1em' width='100px'>
                <Input type='number' />
              </Flex>
            </Flex>
          </Flex>
        </Content>

        <Flex gap='1em'>
          <TextArea label='Premios:' />
          <TextArea label='Reglas:' />
          <TextArea label='Detalles:' />
        </Flex>

        <Flex gap='1em' top='1em'>
          <Flex flex-direction='column' align-items='center' width='100%' gap='0.5em'>
            <p>Afiche:</p>
            <ImgLabel className='img-label' src={Img} alt='Imagen' />
            <FileInput
              name='file'
              buttonText='Selecciona una imagen' 
              onChange={() => console.log('info')}
            />
          </Flex>
          <TextArea label='Reglas:' />
          <TextArea label='Detalles:' />
        </Flex>
      </BorderContent>
      <Flex top='1em' justify-content='center' gap='10em'>
        <Btn>CREAR</Btn>
        <Btn color='second'>CANCELAR</Btn>
      </Flex>
    </>
  )
}

export default CreacionEvento

const ImgLabel = styled.img`
  width: 150px;
  max-width: 100%;
`

const Content = styled(Flex)`
  display: flex;
  justify-content: center;
  /* padding: 1em 3em; */

  .img{
    width: 100%;
    max-width: 300px;
  }

  .img-label{
    width: 100%;
    max-width: 100px;
  }

  .title-btn-file{
    width: 100%;
    font-weight: 400;
    font-size: 1.125rem;
    text-align: center;
  }

  .title2-btn-file{
    width: 100%;
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
  }
`
