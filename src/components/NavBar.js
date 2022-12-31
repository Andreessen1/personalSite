import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/WorkHistory'>WorkHistory</Link>
        <Link className="link" to='/AboutMe'>AboutMe</Link>
        <Link className="link" to='/TicTacToe'>TicTacToe</Link>

      </nav>
     
    </header>
  )
}

export default NavBar;