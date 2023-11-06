import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik'

// components
import Flex from '../Flex'

const InputField = ({ 
    label, 
    asterisk,
    name, 
    type, 
    value, 
    disabled = false,
    placeholder,
    error,
    style,
    ...props
}) => {
  return (
    <Div {...props}>
      { label && <label htmlFor={name}>{ label } {asterisk && <span>*</span>}</label> }
      <Flex flex-direction='column' gap='0.5em' width='100%'>
        <Field
          style={style}
          placeholder={placeholder ?? ''}
          value={value}
          id={name} 
          name={name} 
          type={type ?? 'text'}
          disabled={disabled} 
        />
        <ErrorMessage name={name} component={() => <p className='error-input'>{error}</p>}/>
      </Flex>
    </Div>
  )
}

export default InputField

const Div = styled(Flex)`
  width: 100%;
  ${
    (props) => props.column 
      ?
        `
          flex-direction:column;
          gap: 2px;
        `
      :
        `
          flex-direction:row;
          align-items: center;
          gap: 10px;
        `
  }

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
    span{
      color: #F40707;
    }
  }

  .error-input{
    color: red;
    font-size: 12px;
  }
`
