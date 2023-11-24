// libs
import styled from 'styled-components'
import { useAuth } from '../hook/useAuth'
import { FaRegUser, FaEllipsisVertical } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../env'

const SessionBtn = ({ onClick }) => {

  const navigate = useNavigate()
  const { token } = useAuth()
  const [ user, setUser ] = useState({})

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
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <UseIcon>
      <div className='icons'>
        {token && <FaEllipsisVertical onClick={() => navigate('/perfil')} className='icon-menu' />}
        {token ? <DivImg style={{backgroundImage: `url(${user?.imagen})`}}></DivImg> : <FaRegUser className='icon-user' />}
      </div>
      { !token && <p onClick={onClick}>INICIAR SESION</p>}
    </UseIcon>
  )
}

export default SessionBtn

const UseIcon = styled.div`
  padding: 0px 10px;
    margin-left: 10px;
    border: solid 2px #D1D0BC;
    cursor: pointer;

    p{
      font-size: 14px;
      color: white;
    }

    .icons{
      display: flex;
      justify-content: center;
      padding: 5px 0;

      .icon-menu,
      .icon-user{
        color: white;
        font-size: 30px;
      }
    }
`

const DivImg = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
`
