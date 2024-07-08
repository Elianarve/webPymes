import logo from '../../assets/logo.png';
import '../nav/Nav.css';

const Nav = () => {
  return (
    <nav>
        <img className='logo-nav' src={logo} alt="logo" />
        <ul>
        <li>Servicios</li>
        <li>Proyectos</li>
        <li>Nuestro Equipo</li>
        <li>Contacta con nosotros</li>
      </ul>
    </nav>
  )
}

export default Nav;