// Importa la biblioteca styled-components
import styled, { keyframes } from 'styled-components';

// Define la animación de rotación para el spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define el componente de spinner utilizando styled-components
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

// Usa el componente de spinner en tu aplicación
const MiComponenteConSpinner = () => {
  return (
    <div>
      <h1>Cargando...</h1>
      <Spinner />
    </div>
  );
};

export default MiComponenteConSpinner;
