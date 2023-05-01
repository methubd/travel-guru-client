import { Link } from 'react-router-dom';
import siteLogo from '../../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <img src={siteLogo} alt="" />
                <input type="text" placeholder='Search your Destination' />
                <Link className='menu-item' to='#'>News</Link>
                <Link className='menu-item' to='#'>Destination</Link>
                <Link className='menu-item' to='#'>Blog</Link>
                <Link className='menu-item' to='#'>Contact</Link>
                <Link className='btn-login menu-item' to='/login'>Login</Link>
            </div>

        </div>
    );
};

export default Navbar;