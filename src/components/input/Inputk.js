import styled from 'styled-components'
import Flex from '../Flex'

const Inputk = ({ 
    label, 
    name, 
    type, 
    value, 
    column = false, 
    disabled = false,
    onChange,
    onBlur,
    error,
    justify_content,
}) => {
  return (
    <>
      {
        column ?
          <Div flex-direction='column' width='100%' gap='0.5em'>
            {/* { label && <label htmlFor={name}>{ label }</label> } */}
            {label && (<label htmlFor={name}>{label}<span style={{ color: 'red' }}>*</span></label>)}
            <input 
              onChange={onChange} 
              onBlur={onBlur} 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              disabled={disabled} 
            />
          </Div>
            :
          <Div justify-content={justify_content} align-items='center' width='100%' gap='2em'>
            {/* { label && <label htmlFor={name}>{ label }</label> } */}
            {label && (<label htmlFor={name}>{label}<span style={{ color: 'red' }}>*</span></label>)}
            <input 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Div>
      }
    </>
  )
}

export default Inputk

const Div = styled(Flex)`

  input{
    width: 72%;
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
