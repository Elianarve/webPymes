import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

function ButtonRegister({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      Registrarse
    </StyledButton>
  );
}

export default ButtonRegister;
