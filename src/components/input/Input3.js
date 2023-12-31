import styled from 'styled-components'
import Flex from '../Flex'

const Inputk = ({ 
    label, 
    width,
    name,
    placeholder, 
    type, 
    value, 
    column = false, 
    disabled = false,
    onChange,
    onBlur,
    error
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
              placeholder={name}
            />
          </Div>
            :
          <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
            {/* { label && <label htmlFor={name}>{ label }</label> } */}
            {label && (<label htmlFor={name}>{label}<span style={{ color: 'red' }}></span></label>)}
            <input 
              value={value} 
              id={name} 
              placeholder={name}
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
    width: 40%;
    border-radius: 20em;
    padding: 0.2em 2em;
    margin-top: 0.6em;
    
  }
  label{
    display: block;
    font-size: 1.125rem;
    white-space: nowrap;
  }
`
