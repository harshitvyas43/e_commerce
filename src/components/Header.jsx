import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'
const Header = () => {
  return (
      <nav className="navbar">
        <div className="brand-title">
          <Link to='/'> ANSHIKA <span className="sub">CREATION</span> </Link>
        </div>
        <Link className="toggle-btn" onClick={() => {
          document.getElementsByClassName('navbar-links')[0].classList.toggle('active')
        }}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>
        <div className="navbar-links">
            <ul>
              <li><Link to='/product'>SHOP</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
              <li><Link to='/login'>LOGIN</Link></li>
              <li><Link to='/cart'> <ShoppingCartOutlinedIcon/></Link></li>
            </ul>
        </div>


      </nav>
  )
}

export default Header