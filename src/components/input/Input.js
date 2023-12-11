import styled from 'styled-components'
import Flex from '../Flex'

const Input = ({ 
    label, 
    asterisk,
    name, 
    type, 
    value, 
    column = false, 
    disabled = false,
    onChange,
    onBlur,
    placeholder,
    error
}) => {
  return (
    <>
      {
        column ?
          <Div flex-direction='column' width='100%' gap='0.5em'>
            { label && asterisk && <label htmlFor={name}>{ label }</label> }
            <input 
              onChange={onChange} 
              onBlur={onBlur} 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              placeholder={placeholder}
              disabled={disabled} 
            />
          </Div>
            :
          <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
            { label && <label htmlFor={name}>{ label }</label> }
            <input 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              placeholder={placeholder}
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Div>
      }
    </>
  )
}

export default Input

const Div = styled(Flex)`
  input{
    width: 100%;
    border-radius: 20em;
    padding: 0.2em 1em;
    border: none;
    outline: none;
  }
  label{
    display: block;
    font-size: 1.125rem;
    white-space: nowrap;
  }
`
