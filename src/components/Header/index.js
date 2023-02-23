import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <ul className="nav-Item">
      <li className="li">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="li">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
