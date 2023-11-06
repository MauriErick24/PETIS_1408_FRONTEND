// libs
import { useState } from 'react'
import styled from 'styled-components'

// images
import Logo from '../assets/images/umss-logo.png'

// components
import SessionBtn from './SessionBtn'
import PopSession from './popcontent/PopSession'
import PopRegister from './popcontent/PopRegister'


const Header = () => {

  const [ popSession, setPopSession ] = useState(false)
  const [ popRegister, setPopRegister ] = useState(false)

  return(
    <>
      <PopRegister pop={popRegister} setPop={setPopRegister} />
      <PopSession
        pop={popSession}
        setPop={setPopSession}
        onClick={() => {
          setPopRegister(!popRegister)
          setPopSession(!popSession)
        }}
      />
      <HeaderStyle>
        <SessionBtn onClick={() => setPopSession(!popSession)} />

        <div className='logo'>
          <img src={Logo} alt='Logo UMSS'/>
        </div>
      </HeaderStyle>
    </>
  )
}

export default Header

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  img{
    width: 80px;
    padding: 0.4em 0.8em 0em 1em;
  }
`
