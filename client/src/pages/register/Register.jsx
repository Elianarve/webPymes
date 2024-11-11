import React from 'react';
import RegisterForm from './RegisterForm';
import { useUserContext } from '../../context/UserContext';
const Register = () => {
  const { onRegister } = useUserContext();

  return <RegisterForm onRegister={onRegister} />;
};

export default Register;