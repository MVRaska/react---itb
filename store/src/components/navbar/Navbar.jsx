import './navbarStyle.css';
import logo from '../../icons/logo2.png';
import cart from '../../icons/cart.png';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    return <div className='navbar'>
        <img src={logo} alt='logo' onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
        <div>
            <Link to='/products' style={{textDecoration: 'none'}}>ALL PRODUCTS</Link>
            <Link to='/cart'><img src={cart} alt='cart' /></Link>
            {<span className='numberOfItems'>1</span>}
        </div>
    </div>
}

export default Navbar;