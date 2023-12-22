import styled from 'styled-components'
import Flex from '../Flex'

const Inputd = ({ 
    label, 
    name, 
    type, 
    value, 
    column = false, 
    disabled = false,
    onChange,
    onBlur,
    inputWidth,
    error,
    onKeyDown
}) => {
  return (
    <>
      {
        column ?
          <Div flex-direction='column' width='100%' gap='0.5em'>
            {/* { label && <label htmlFor={name}>{ label }</label> } */}
            { label && (<label htmlFor={name}> {label.includes('*') ? (<>{label.replace('*', '')}<span>*</span></>):label} </label> )}
            <input 
              onChange={onChange} 
              onBlur={onBlur} 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              disabled={disabled} 
              style={{ width: inputWidth }}
              onKeyDown={onKeyDown}
            />
          </Div>
            :
          <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
            {/* { label && <label htmlFor={name}>{ label }</label> } */}
            { label && (<label htmlFor={name}> {label.includes('*') ? (<>{label.replace('*', '')}<span>*</span></>):label} </label> )}
            <input 
              value={value} 
              id={name} 
              name={name} 
              type={type ?? 'text'} 
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              style={{ width: inputWidth }}
              onKeyDown={onKeyDown}
            />
          </Div>
      }
    </>
  )
}

export default Inputd

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
  label span {
    color: red; 
}
`
