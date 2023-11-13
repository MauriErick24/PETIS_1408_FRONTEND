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
    padding: 0.3em 0.8em;
    font-weight: 400;
  }
`
