import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpg';
import './header.css';
import NavMenu from './NavMenu';
const Header = () => {
    
    return(
        <header>
            <Link to={'/'}>
                <h1>Happy Tails <br />Retreat</h1>
          
            </Link>
            <NavMenu />
      </header>
    )
}

export default Header;