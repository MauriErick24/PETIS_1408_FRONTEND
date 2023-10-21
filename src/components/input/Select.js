import styled from 'styled-components'
import Flex from '../Flex'

const Select = ({ label, name, options }) => {
  return (
    <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>
        {options.map((op) => (
          <option key={op.id} value={op.id}>
            {op.tipo_evento}
          </option>
        ))}
      </select>
    </Div>
  );
};


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
`
