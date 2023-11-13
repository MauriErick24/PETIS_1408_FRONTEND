import { useState } from 'react'
import styled from 'styled-components'
import Btn from '../components/Btn'
import Flex from '../components/Flex'
import Radio from '../components/input/Radio'
import BorderContent from '../components/BorderContent'
import HeaderTitle from '../components/HeaderTitle'

import { useNavigate } from 'react-router-dom'

const CreacionEvento = () => {

  const navigate = useNavigate()

  const [ options, setOptions ] = useState({
    organizador: false,
    descripcion: false,
    requisitos: false,
    participantes: false,
    lugar: false,
    email: false,
    hora: false,
    detalles: false,
    afiche: false,
    premios: false,
    contenido: false,
    invitados: false,
    reglas: false,
    telefono: false
  })

  const handleCheck = (e) => {
    const { name } = e.target
    setOptions((state) => ({
      ...state,
      [name]: !options[name]
    }))
  }

  return (
    <>
      <HeaderTitle title='CREACION DE EVENTO'/>
      <BorderContent>
        <H2>Seleccione los campos que requiere su evento</H2>
        <Content justify-content='center' width='100%' gap='10em'>
          <Flex flex-direction='column' gap='1.2em'>
            <Radio
              name='organizador'
              onChange={handleCheck}
              check={options.organizador}
              label='Organizador' 
              font-size='1.625rem'
            />
            <Radio
              name='descripcion'
              onChange={handleCheck}
              check={options.descripcion}
              label='Descripción'
              font-size='1.625rem'
            />
            <Radio
              name='requisitos'
              onChange={handleCheck}
              check={options.requisitos}
              label='Requisitos' 
              font-size='1.625rem' 
            />
            <Radio
              name='participantes'
              onChange={handleCheck}
              check={options.participantes}
              label='Participantes' 
              font-size='1.625rem' 
            />
            <Radio
              name='lugar'
              onChange={handleCheck}
              check={options.lugar} 
              label='Lugar' 
              font-size='1.625rem' 
            />
            <Radio
              name='email'
              onChange={handleCheck}
              check={options.email} 
              label='E-mail' 
              font-size='1.625rem' 
            />
            <Radio
              name='hora'
              onChange={handleCheck}
              check={options.hora} 
              label='Hora' 
              font-size='1.625rem' 
            
            />
          </Flex>

          <Flex flex-direction='column' gap='1.2em'>
            <Radio
              name='detalles'
              onChange={handleCheck}
              check={options.detalles} 
              label='Detalles' 
              font-size='1.625rem'
            />
            <Radio
              name='afiche'
              onChange={handleCheck}
              check={options.afiche} 
              label='Afiche' 
              font-size='1.625rem' 
            />
            <Radio
              name='premios'
              onChange={handleCheck}
              check={options.premios} 
              label='Premios' 
              font-size='1.625rem' 
            />
            <Radio
              name='contenido'
              onChange={handleCheck}
              check={options.contenido} 
              label='Contenido' 
              font-size='1.625rem' 
            />
            <Radio
              name='invitados'
              onChange={handleCheck}
              check={options.invitados} 
              label='Invitados especiales' 
              font-size='1.625rem' 
            />
            <Radio
              name='reglas'
              onChange={handleCheck}
              check={options.reglas} 
              label='Reglas' 
              font-size='1.625rem'
            />
            <Radio
              name='telefono'
              onChange={handleCheck}
              check={options.telefono} 
              label='Telefono' 
              font-size='1.625rem' 
            />
          </Flex>
        </Content>
      </BorderContent>
      <Flex top='1em' justify-content='center' gap='10em'>
        <Btn onClick={() => navigate('/creacion/data', { state: {options} })} >CREAR</Btn>
        <Btn onClick={() => navigate('/')} color='second'>CANCELAR</Btn>
      </Flex>
    </>
  )
}

export default CreacionEvento

const Content = styled(Flex)`
  display: flex;
  justify-content: space-evenly;
  padding: 1em 3em 3.2em 1em;
`

const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  margin-bottom: 0.6em;
`

