import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, detail }) {
  return (
    <Container>
      <Header />

      <ContentContainer className={detail ? 'detail' : ''}>
        {children}
      </ContentContainer>

      <Footer />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #D1D0BC;
  padding: 1em 4em;

  &.detail {
    width: 1400px;
    margin: auto;
  }
`;