import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/WorkHistory'>WorkHistory</Link>
        <Link className="link" to='/AboutMe'>AboutMe</Link>
        <Link className="link" to='/MagicEightBall'>Magic Eight Ball</Link>

      </nav>
     
    </header>
  )
}

export default NavBar;