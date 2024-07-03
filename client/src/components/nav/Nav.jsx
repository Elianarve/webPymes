import logo from '../../assets/logo.png';
import '../nav/Nav.css';

const Nav = () => {
  return (
    <nav>
        <div className='logo-name'>
        <img className='logo-nav' src={logo} alt="logo" />
        <h3 className='name-logo'>WebPymes</h3>
        </div>
        <ul>
        <li>Inicio</li>
      </ul>
    </nav>
  )
}

export default Nav;