import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, detail}) {
  if(!detail){
    return (
        <Div>
            <Header />
      
            <div className='page'>
              {children}
            </div>
      
            <Footer />
          </Div>
      );
  }else{
    return (
        <Div2>
            <Header />
      
            <div className='page'>
              {children}
            </div>
      
            <Footer />
          </Div2>
      );
  }
}

export default Layout;

const Div = styled.div`
  width: 100%;
  margin: auto;
  background-color: #D1D0BC;
  
  .page{
    margin: auto;
    width: 1400px;
    padding: 1em 4em;
  }
`

const Div2 = styled.div`
  background-color: #D1D0BC;
`
