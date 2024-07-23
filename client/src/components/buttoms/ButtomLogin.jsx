import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

function ButtonLogin({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      Iniciar Sesión
    </StyledButton>
  );
}

export default ButtonLogin;
