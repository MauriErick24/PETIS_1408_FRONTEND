import styled from 'styled-components'

const colores = {
  first: '#000',
  second: '#D1741E'
}

const Btn = ({ onClick, children, type, ...props }) => {
  return <BtnStyled {...props} type={type} onClick={onClick}>{children}</BtnStyled>
}

export default Btn

const BtnStyled = styled.button`
  border: none;
  font-size: 1.5rem;
  padding: 0.4em 1em;
  border-radius: 2em;
  background-color: ${(props) => props.color ? colores[props.color] : '#000'};
  color: white;
  cursor: pointer;
`
