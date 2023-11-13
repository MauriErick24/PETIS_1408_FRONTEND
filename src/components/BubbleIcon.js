import React from "react";
import styled from "styled-components";

const BubbleIcon = ({ iconName, imageUrl }) => {
  return (
    <Div title={iconName}>
      <img src={imageUrl} alt={iconName} />
    </Div>
  );
};

export default BubbleIcon;

const Div = styled.div`
  width: 57px;
  height: 57px;
  background-color: #FFF;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  //padding: 7%;
  margin: 1%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover::after {
    content: attr(title);
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`;
