import styled from 'styled-components'
import Btn from '../components/Btn'

const Alert = ({ message, onAcept, ...props }) => {
  return (
    <Content {...props}>
      {message && <p className='message'>{message}</p>}
      <div className='btn-content'>
        <Btn onClick={onAcept}>Aceptar</Btn>
      </div>
    </Content>
  )
}

export default Alert

const Content = styled.div`
  width: 500px;
  display: ${(props) => props.show ? 'flex' : 'none'};
  flex-direction: column;
  padding: 2em;
  align-items: center;
  gap: 1em;
  background-color: #D1D0BC;
  z-index: 3;
  border-radius: 0.5em;
  border: solid 0.1em #000;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .message{
    text-align: center;
    max-width: 400px;
    font-size: 1.625em;
  }

  .btn-content{
    display: flex;
    gap: 1em;
  }
`
