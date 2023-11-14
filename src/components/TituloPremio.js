import styled from 'styled-components'
import Flex from './Flex'

const HeaderTitle = ({ title }) => {
  return (
    <Div justify-content='center'>
      <h2>{title}</h2>
    </Div>
  )
}

export default HeaderTitle

const Div = styled(Flex)`
  h2{
    
    background-color: #000;
    color: white;
    font-size: 30px;
    padding: 0.5em 2.5em;
    font-weight: 400;
    
  }
`