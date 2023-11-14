import styled from 'styled-components'
import Flex from '../Flex'

const Input4 = ({
        
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
        </>

    );
}

export default Input4


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