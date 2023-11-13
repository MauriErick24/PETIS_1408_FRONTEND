import styled from 'styled-components'

const BorderContent = ({children}) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export default BorderContent

const Div = styled.div`
  border: solid 0.2em #000;
  margin-top: 1em;
  border-radius: 2.2em;
  padding: 0.8em 1.5em;
`
