import { useEffect, useState } from 'react'

import Btn from '../components/Btn'
import Flex from '../components/Flex'
import PopRegisterEdit from '../components/popcontent/PopRegisterEdit'

import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Confirm from '../components/Confirm'
import Alert from '../components/Alert'

import { useAuth } from '../hook/useAuth'
import axios from 'axios'
import { api } from '../env'

const Perfil = () => {

  const navigate = useNavigate()
  const { token, logout } = useAuth()
  const [ user, setUser ] = useState({})

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

  useEffect(() => {
    getUser(token)
  }, [token])

  const getUser = async(token) => {
    try {
      const response = await axios.get(`${api}/showUser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data.usuario)
    } catch (error) {
      console.log(error)
    }
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
        user={user}
        pop={pop.register} 
        setPop={() => changePop('register')} 
      />
      <Flex gap='20px'>
        <Flex flex-direction='column' gap='40px'>
          <h2>CONFIGURAR</h2>

          <Flex flex-direction='column' gap='10px'>
            <Btn onClick={logout}>Cerrar sesion</Btn>
            <Btn>Equipos</Btn>
          </Flex>
        </Flex>

        <BorderContent flex-direction='column' gap='20px' top='70px'>
          <div className='item'>
            <label className='item-label'>nombre: </label>
            <span className='item-value'>{user?.nombres} {user?.apellidos}</span>
          </div>

          <div className='item'>
            <label className='item-label'>email: </label>
            <span className='item-value'>{user?.email}</span>
          </div>

          <div className='item'>
            <label className='item-label'>Telefono: </label>
            <span className='item-value'>{user?.telefono}</span>
          </div>

          <div className='item'>
            <label className='item-label'>Fecha de nacimiento: </label>
            <span className='item-value'>{user?.fecha_nacimiento}</span>
          </div>

          <Flex width='100%' justify-content='space-between' top='10px'>
            <Btn type='button' onClick={() => changePop('register')}>EDITAR</Btn>
            <Btn type='button' onClick={() => changePop('eliminar')}>BORRAR LA CUENTA</Btn>
          </Flex>
        </BorderContent>

        <Flex>
          <Imagen flex-direction='column' align-items='center' gap='10px'>
            <div
              className='img'
              style={{
                backgroundImage: `url(${user?.imagen})`
              }}
            ></div>
            <span>{user?.email}</span>
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
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 100px;
  }
`
