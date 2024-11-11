import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const LayoutPrivate = () => {
  const { userAuth } = useUserContext();

  return (
    <>
      {userAuth ? (
        <>
          <Nav />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default LayoutPrivate;
