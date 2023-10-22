import styled from 'styled-components'
import Flex from '../Flex'

const Select = ({ label, name }) => {
  return (
    <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
      {/* <label htmlFor={name}>{ label }</label> */}
      {label && (
        <label htmlFor={name}>
          {label.includes('*') ? (
            <>
              {label.replace('*', '')}
              <span className="asterisk">*</span>
            </>
          ) : label}
        </label>
      )}
      <select id={name} name={name}>
        <option>Competencia</option>
        <option>Taller</option>
        <option>Entrenamiento</option>
        <option>Reclutamiento</option>
      </select>
    </Div>
  )
}

export default Select

const Div = styled(Flex)`
  select{
    width: 100%;
    border-radius: 20em;
    padding: 0.2em 1em;
    border: none;
    outline: none;
    cursor: pointer;
  }
  label{
    display: block;
    font-size: 1.125rem;
    white-space: nowrap;
  }
  span.asterisk {
    color: red; /* Color rojo para el asterisco */
  }
`
