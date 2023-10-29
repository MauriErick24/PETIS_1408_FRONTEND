import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderEventType = ({ types, onClick }) => {
  const [selectedTipoEvento, setSelectedTipoEvento] = useState('TODOS');

  const handleButtonClick = (nombreTipoEvento) => {
    setSelectedTipoEvento(nombreTipoEvento);
    onClick(nombreTipoEvento);
  };

  return (
    <Div>
      {types.map((elemento) => (
        <Button
          key={elemento.id}
          onClick={() => handleButtonClick(elemento.nombreTipo_evento)}
          isSelected={selectedTipoEvento === elemento.nombreTipo_evento}
        >
          {elemento.nombreTipo_evento}
        </Button>
      ))}
    </Div>
  );
};

export default HeaderEventType;

const Div = styled.div`
  display: flex;
  border-bottom: solid 0.2em #a6a6a6;
`;

const Button = styled.p`
  padding-right: 1.5em;
  font-size: larger;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isSelected ? "black" : "inherit")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  transition: color 0.3s ease, font-weight 0.3s ease;

  :active {
    font-weight: bold;
  }
`;
