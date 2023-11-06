// libs
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'

const Pop = ({ children, setState, state, ...props }) => {
  return (
    state && (
      <Content>
        <Card {...props}>
          <div className='close'>
            <GrClose className='icon' onClick={() => setState(!state)} />
          </div>
          {children}
        </Card>
      </Content>
    )
  )
}

export default Pop


const Content = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, .86);
  z-index: 3;
`

const Card = styled.div`
  background-color: #EFEDD6;
  width: ${(props) => props.width || 'auto'};
  padding: 10px 30px;

  .close{
    display: flex;
    justify-content: flex-end;
    .icon{
      cursor: pointer;
      font-size: 20px;
    }
  }
`
