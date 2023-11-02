import React from 'react';
import styled from 'styled-components';

const Flex = ({ children, className, ...props }) => {
  return <Div className={className} {...props}>{children}</Div>;
};

export default Flex;

const Div = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: ${(props) => props.top || '0'};
  margin-left: ${(props) => props.left || '0'};
  width: ${(props) => props.width || 'auto'};
  flex-wrap: ${(props) => props['flex-wrap'] || 'auto'};
  flex-direction: ${(props) => props['flex-direction'] || 'row'};;
  width: ${(props) => props['width'] || 'auto'};
  height: ${(props) => props['height'] || 'auto'};
  justify-content: ${(props) => props['justify-content'] || 'flex-start'};
  align-items: ${(props) => props['align-items'] || 'flex-start'};
  gap: ${(props) => props['gap'] || '0'};
  padding: ${(props) => props['padding'] || '0'};
  padding-bottom: ${(props) => props['padding-bottom'] || '0'};
  background: ${(props) => props.background || 'none'};
  border-radius: ${(props) => props['border-radius'] ? props['border-radius'] : ''};
  text-align: ${(props) => props['text-align'] ? props['text-align'] : ''};
  position: ${(props) => props.position ? props.position : ''};
`;


