import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import LayoutPrivate from '../layout/LayoutPrivate';
import Register from '../pages/register/Register';
import RegisterForm from '../pages/register/RegisterForm';
import Login from '../pages/login/LoginForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    children: [
      {
        path: 'register', 
        element: <Register />,
      },
      {
        path: 'registerform',
        element: <RegisterForm />,
      },
      {
        path: 'login', 
        element: <Login />,
      },
    ],
  },
  {
    path: '/home',
    element: <LayoutPrivate />,
    children: [
      
    ],
  },
]);

export default router;
