import styled from 'styled-components'

// images
import Logo from '../assets/images/umss-logo.png'

const Header = () => {
  return(
    <HeaderStyle>
      <div className='logo'>
        <img src={Logo} alt='Logo UMSS'/>
      </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: #000;
  img{
    width: 80px;
    padding: 0.4em 0.8em 0em 1em ;
  }
`
