// libs
import styled from 'styled-components'
import { FaRegUser, FaEllipsisVertical } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const SessionBtn = ({ onClick }) => {

  const navigate = useNavigate()

  return(
    <UseIcon>
      <div className='icons'>
        <FaEllipsisVertical onClick={() => navigate('/perfil')} className='icon-menu' />
        <FaRegUser className='icon-user' />
      </div>
      <p onClick={onClick}>INICIAR SESION</p>
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
      padding: 5px 0;

      .icon-menu,
      .icon-user{
        color: white;
        font-size: 30px;
      }
    }
`
