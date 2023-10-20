import styled from 'styled-components'
import Flex from '../Flex'

const TextArea = ({ label, name, disabled }) => {
  return (
    <Div flex-direction='column' width='100%' gap='0.5em'>
      <label htmlFor={name}>{ label }</label>
      <textarea id={name} name={name} disabled={disabled}></textarea>
    </Div>
  )
}

export default TextArea

const Div = styled(Flex)`
  textarea{
    width: 100%;
    height: 100px;
    border-radius: 0.5em;
    padding: 1em;
    border: none;
    outline: none;
  }
  label{
    display: block;
    font-size: 1.125rem;
    white-space: nowrap;
  }
`
