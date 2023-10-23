import styled from 'styled-components'
import Flex from '../Flex'

import { useEffect, useState } from 'react'
import api from '../../services/api'

const Select = ({ label, name, onClick }) => {

  const [tipoEvento, setTipoEvento] = useState([
    {id: 1, tipo_evento: "Competencia"},
    {id: 2, tipo_evento: "Taller"},
    {id: 3, tipo_evento: "Reclutamiento"},
    {id: 4, tipo_evento: "Otro"},
  ])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await api.get('/api/tipoEvento');
        setTipoEvento(response.data);
      }catch(err){
        console.log("Error: ", err)
      }
   };
   fetchData();
  }, []);
  

  return (
    <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
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
        
        {tipoEvento.map((evento) => (
          <option key={evento.id} value={evento.id}>
            {evento.nombreTipo_evento}
          </option>
        ))}
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
