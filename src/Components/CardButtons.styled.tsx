import styled from "styled-components";

export const CardButtons = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  border-radius: 5px;
  padding: 7px 30px;
  cursor: pointer;
  background-color: #fff;
  
  margin-right: 10px;
  border: 2px solid #4E71FE;
  color: #4E71FE;
  
  &:last-child {
    margin-right: 0;
  }
  
  &.primary-button {
    color: #fff;
    background-color: #4E71FE;
    padding: 7px 17px;
  }
  
`;

