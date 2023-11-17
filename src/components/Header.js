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

  const [ pop, setPop ] = useState({
    register: false,
    session: false
  }) 

  const changePop = (key) => {
    setPop((state) => ({
      ...state,
      [key]: !state[key]
    }))
  }

  return(
    <>
      <PopRegister 
        pop={pop.register} 
        setPop={() => changePop('register')} 
      />

      <PopSession
        pop={pop.session}
        setPop={() => changePop('session')}
        onClick={() => {
          changePop('register')
          changePop('session')
        }}
      />

      <HeaderStyle>
        <SessionBtn onClick={() => changePop('session')} />

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
