import React from 'react';
import styled from 'styled-components';

const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
  width: 15em;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5286EE;
  font-size: 1.75em;
  color: white; 


`;

function ButtomContact() {
  return (
    <ContactButton href="mailto:info@webspymes.es">
      Cuentanos tu proyecto y comenzamos
    </ContactButton>
  );
}

export default ButtomContact;
