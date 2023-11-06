import styled from 'styled-components'
import Btn from '../components/Btn'

const Alert = ({ message, onAcept, ...props }) => {
  return (
    <Content {...props}>
      <div className='content-message'>
        {message && <p className='message'>{message}</p>}
        <div className='btn-content'>
          <Btn onClick={onAcept}>Aceptar</Btn>
        </div>
      </div>
    </Content>
  )
}

export default Alert

const Content = styled.div`
  display: ${(props) => props.show ? 'flex' : 'none'};
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0, 0.86);
  justify-content: center;
  align-items: center;

  .content-message{
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 2em;
    align-items: center;
    gap: 1em;
    background-color: #D1D0BC;
    z-index: 3;
    border-radius: 0.5em;
    border: solid 0.1em #000;

    .message{
      text-align: center;
      max-width: 400px;
      font-size: 1.625em;
    }

    .btn-content{
      display: flex;
      gap: 1em;
    }
  }
`
