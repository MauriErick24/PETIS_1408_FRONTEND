import React from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn'
import Flex from './Flex';

const Asided =({children}) =>{
  return (
    <Aside className="sidebar">
     {children}
    </Aside>
  );
}

export default Asided;

const Aside = styled.aside`

    width: 55%;
    background-color: none; 
    color: #fff; 
    padding: 20px;
    height: 100%; 
    justified-content:right;


  
  h2 {
    font-size: 1.5rem;
    color: #000;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
   li {
    margin-bottom: 10px;
  }
  
   a {
    text-decoration: none;
    color: #000;
  }
  
`