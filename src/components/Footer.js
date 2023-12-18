import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <Div>
      <div className='content-copy'>
        <h3>PRIME SOFT SOLUTIONS</h3>
        <p>All copyright reserved PSS</p>
      </div>

      <nav>
        <Link className='link' to='' >Contactanos</Link>
      </nav>
    </Div>
  )
}

export default Footer

const Div = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #D1D0BC;
  padding:1em;

  .content-copy{
    h3{
      font-size: 0.7rem;
    }

    p{
      font-size: 0.5rem;
      margin-top: 1em;
    }
  }

  .link{
    text-decoration: none;
    color: #D1D0BC;
    font-size: 0.6875;
  }
`
