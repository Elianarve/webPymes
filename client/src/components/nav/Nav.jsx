
import '../nav/Nav.css';
import ButtomRegister from '../buttoms/ButtomRegister';
import ButtomLogin from '../buttoms/ButtomLogin';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <Link to="/">
      <img className='logo-nav' src={logo} alt="logo" /></Link>
      <ul>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/news">Noticias</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/team">Nuestro Equipo</Link></li>
        
        <li><ButtomRegister /></li>
        <li><ButtomLogin /></li>
      </ul>
      
    </nav>
  )
}

export default Nav;