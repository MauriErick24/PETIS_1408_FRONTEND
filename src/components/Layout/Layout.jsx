import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  margin: 1%;
`;

const Sidebar = styled.div`
  width: 20%;
  height: auto;
  background-color: #BDBB96;
  padding: 20px;
  border-right:12px;
  border-radius:15px;
`;

const Content = styled.div`
  
  width: 78%;
  height: 88%;
  background-color: #BDBB96;
  padding: 20px;
  border-radius: 15px;
`;

function Layout({sidebar, main}) {
  return (
    
    <Div>
      <Header/>
      <div className='page'>
        <Container>
          <Sidebar>
            {sidebar}
          </Sidebar>
          <Content>
            {main}
          </Content>  
        </Container>
      </div>
      <Footer/>
    </Div>
  );
}

export default Layout;
const Div = styled.div`
  width: 100%;
  // margin: auto;
  background-color: #D1D0BC;
  
  .page{
    margin: auto;
    width: 100%; 
    padding: 1em 4em;
  }
`