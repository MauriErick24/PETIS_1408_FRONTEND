import { useState } from 'react'

import Btn from '../components/Btn'
import Flex from '../components/Flex'
import PopRegisterEdit from '../components/popcontent/PopRegisterEdit'

import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Confirm from '../components/Confirm'
import Alert from '../components/Alert'

const Perfil = () => {

  const navigate = useNavigate()
  const [ pop, setPop ] = useState({
    register: false,
    eliminar: false,
    eliminarExito: false
  })

  const changePop = (key) => {
    setPop((state) => ({
      ...state,
      [key]: !state[key]
    }))
  }

  return (
    <>
      <Alert
        message='Usuario borrado exitosamente ¡'
        show={pop.eliminarExito}
        onAcept={() => {
          changePop('eliminarExito')
        }}
      />
      <Confirm
        show={pop.eliminar}
        message='Esta seguro de Borrar la cuenta. Esta acción es permanente.'
        onAcept={() => {
          changePop('eliminar')
          changePop('eliminarExito')
        }}
        onClose={() => {
          changePop('eliminar')
        }}
      />
      <PopRegisterEdit
        pop={pop.register} 
        setPop={() => changePop('register')} 
      />
      <Flex gap='20px'>
        <Flex flex-direction='column' gap='40px'>
          <h2>CONFIGURAR</h2>

          <Flex flex-direction='column' gap='10px'>
            <Btn>Cuenta</Btn>
            <Btn>Equipos</Btn>
          </Flex>
        </Flex>

        <BorderContent flex-direction='column' gap='20px' top='70px'>
          <div className='item'>
            <label className='item-label'>nombre: </label>
            <span className='item-value'>JORGE LEDEZMA ZEBALLOS</span>
          </div>

          <div className='item'>
            <label className='item-label'>email: </label>
            <span className='item-value'>jledezmaze@yahoo.com</span>
          </div>

          <div className='item'>
            <label className='item-label'>Telefono: </label>
            <span className='item-value'>591 72285963</span>
          </div>

          <div className='item'>
            <label className='item-label'>Fecha de Alta: </label>
            <span className='item-value'>05/05/2023</span>
          </div>

          <Flex width='100%' justify-content='space-between' top='10px'>
            <Btn type='button' onClick={() => changePop('register')}>EDITAR</Btn>
            <Btn type='button' onClick={() => changePop('eliminar')}>BORRAR LA CUENTA</Btn>
          </Flex>
        </BorderContent>

        <Flex>
          <Imagen flex-direction='column' align-items='center' gap='10px'>
            <div className='img'></div>
            <span>nombre de usuario</span>
          </Imagen>
          <IoClose size={40} onClick={() => navigate(-1)} style={{cursor: 'pointer'}} />
        </Flex>
      </Flex>
    </>
  )
}

export default Perfil

const BorderContent = styled(Flex)`
  border: solid 3px black;
  padding: 20px;
  width: 800px;

  .item{
    .item-label,
    .item-value{
      font-size: 28px;
    }

    .item-value{
      font-weight: 600;
    }
  }
  
`

const Imagen = styled(Flex)`
  border: solid 3px black;
  padding: 20px;

  .img{
    background-image: url('https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 100px;
  }
`
