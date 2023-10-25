import styled from 'styled-components'

const ErrorMessage = ({ children }) => {
  return(
    <Error>{ children }</Error>
  )
}

export default ErrorMessage

const Error = styled.p`
  color: #EA3D18;
  font-size: 1em;
  padding: 0.2em;
`
