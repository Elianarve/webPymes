
import '../nav/Nav.css';
import ButtomRegister from '../buttoms/ButtomRegister';
import ButtomLogin from '../buttoms/ButtomLogin';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img className='logo-nav' src={logo} alt="logo" />
      <ul>
        <li><Link to="/servicios">Servicios</Link></li>
        <li>Proyectos</li>
        <li>Nuestro Equipo</li>
        <li>Contacta con nosotros</li>
        <li><ButtomRegister /></li>
        <li><ButtomLogin /></li>
      </ul>
      
    </nav>
  )
}

export default Nav;