import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
height: 80vh;
justify-content: space-between;
`;

const Sidebar = styled.div`
    width: 20%;
    height: 88%;
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

function Layout({ sidebarContent, content }) {
  return (
    <Container>
    	<Sidebar>
        		{sidebarContent}
      	</Sidebar>
      	<Content>
        		{content}
      	</Content>
    </Container>
  );
}

export default Layout;
