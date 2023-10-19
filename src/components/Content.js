// libs
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

// component
import Header from './Header'
import Footer from './Footer'

const ContentCustom = () => {
  return(
    <Div>
      <Header />

      <div className='page'>
        <Outlet />
      </div>

      <Footer />
    </Div>
  )
}

export default ContentCustom

const Div = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: auto;
  background-color: #D1D0BC;
  
  .page{
    padding: 1em 4em;
  }
`
