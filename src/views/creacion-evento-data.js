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

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFilePreview from '../components/input/InputFilePreview'
import Alert from '../components/Alert'
import Confirm from '../components/Confirm'

const CreacionEvento = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { options } = location.state

  const [ showp, setShowp ] = useState(false)

  const [ show, setShow ] = useState({
    alert1: false,
    confirm1: false,
    alert2: false,
    confirm2: false
  })

  return (
    <>
      {/* <Alert
        show={show.alert1}
        onAcept={() => {
          setShow((state) => ({...state, alert1: !show.alert1}))
        }}
        message='Evento creado correctamente'
      />

      <Confirm
        message='¿Esta seguro de crear este evento?'
        show={show.confirm1}
        onClose={() => setShow((state) => ({...state, confirm1: !show.confirm1}))}
        onAcept={() => {
          setShow((state) => ({...state, confirm1: !show.confirm1}))
          setShow((state) => ({...state, alert1: !show.alert1}))
        }}
      /> */}


      {/* cancelar */}
      <Alert
        show={show.alert2}
        onAcept={() => {
          setShow((state) => ({...state, alert2: !show.alert2}))
        }}
        message='Evento creado correctamente'
      />

      <Confirm
        title='¿Desea salir?'
        message='No se guardaran los cambios'
        show={show.confirm2}
        onClose={() => setShow((state) => ({...state, confirm2: !show.confirm2}))}
        onAcept={() => {
          setShow((state) => ({...state, confirm2: !show.confirm2}))
          setShow((state) => ({...state, alert2: !show.alert2}))
          navigate('/creacion/evento')
        }}
      />

      <HeaderTitle title='CREACION DE EVENTO'/>
      <BorderContent>
        <Content justify-content='space-between' width='100%' gap='1em'>
          <Flex flex-direction='column' gap='1.2em' width='80%'>
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

            <Input label='Organizador(es):' disabled={!options.organizador} />

            <Flex justify-content='space-between' width='100%' gap='1em'>
              <Flex flex-direction='column' gap='1em'>
                <Input label='Lugar: ' disabled={!options.lugar} />
                <Input label='E-mail: ' disabled={!options.email} />
              </Flex>
              
              <Flex flex-direction='column' gap='1em'>
                <Input label='Hora: ' type='time' disabled={!options.hora} />
                <Input label='Telefono: ' disabled={!options.telefono} />
              </Flex>
            </Flex>

            <Flex justify-content='space-between' width='100%' gap='1em'>
              <Flex width='300px'>
                <TextArea label='Descripción:' disabled={!options.descripcion} />
              </Flex>
              
              <Flex width='300px'>
                <TextArea label='Requisitos:' disabled={!options.requisitos} />
              </Flex>
            </Flex>
          </Flex>

          <Flex flex-direction='column' gap='1.2em' width='20%'>
            <h2 className='title-btn-file center'>Imagen del evento</h2>
            <InputFilePreview 
              name='file' 
              buttonText='Seleccionar una imagen'
              width='200px'
              font-size='1.2em'
            />

            <Flex padding='0 1em' top='0.5em' flex-direction='column' width='100%'>
              <h2 className='title-btn-file'>Elige tu tipo de participantes*</h2>
              <Flex flex-direction='column' top='1em' gap='0.5em'>
                <Radio check={!showp} name='participantes' label='Individual' onChange={() => setShowp(!showp)} />
                <Radio check={showp} name='participantes' label='Equipo' onChange={() => setShowp(!showp)} />
              </Flex>
            </Flex>

            {
              showp && (
                <Flex padding='0 1em' top='0.2em' flex-direction='column' width='100%'>
                  <h2 className='title2-btn-file'>Numero de integrantes por equipo</h2>
                  <Flex top='0.1em' width='100px'>
                    <Input type='number' />
                  </Flex>
                </Flex>
              )
            }
          </Flex>
        </Content>

        <Flex gap='1em' top='1em'>
          <TextArea label='Premios:' disabled={!options.premios} />
          <TextArea label='Reglas:' disabled={!options.reglas} />
          <TextArea label='Detalles:' disabled={!options.detalles} />
        </Flex>

        <Flex gap='1em' top='1em'>
          {
            options.afiche && (
              <Flex flex-direction='column' align-items='center' width='100%' gap='0.5em'>
                <p>Afiche:</p>
                <InputFilePreview
                  name='file2' 
                  buttonText='Seleccionar una imagen'
                  width='200px'
                  font-size='1.2em'
                />
              </Flex>
            )
          }
          <TextArea label='Contenido:' disabled={!options.contenido} />
          <TextArea label='Invitados Especiales:' disabled={!options.invitados} />
        </Flex>
      </BorderContent>
      <Flex top='1em' justify-content='center' gap='10em'>
        <Btn onClick={() => setShow((state) => ({...state, confirm1: !show.confirm1}))}>ACEPTAR</Btn>
        <Btn onClick={() => setShow((state) => ({...state, confirm2: !show.confirm2}))} color='second'>CANCELAR</Btn>
      </Flex>
    </>
  )
}

export default CreacionEvento

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
  }

  .title2-btn-file{
    width: 100%;
    font-weight: 300;
    font-size: 1rem;
  }

  .center{
    text-align: center;
  }
`
