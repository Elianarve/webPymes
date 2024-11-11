import React, { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, loginUser, getUser, logoutUser } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUserAuth(user);
      } catch (error) {
        console.error('No se pudo obtener el usuario:', error.message);
      }
    };

    fetchUser();
  }, []);

  const onRegister = async ({ name, email, password }) => {
    try {
      const user = await registerUser(name, email, password);
      setUserAuth(user);
      // Redirigir o manejar el estado después del registro exitoso
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
    }
  };

  const onLogin = async ({ email, password }) => {
    try {
      const user = await loginUser(email, password);
      setUserAuth(user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  const onLogout = () => {
    logoutUser();
    setUserAuth(null);
  };

  return (
    <UserContext.Provider value={{ userAuth, onRegister, onLogin, onLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
