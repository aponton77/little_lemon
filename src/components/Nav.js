<<<<<<< HEAD
import React from 'react'
import logo from '../images/Logo .svg'

const Nav = () => {
  return (
    <nav>
        <a href='/'>
        <img src={logo} alt='logo'/>
        </a>
        {/* mobile navbar */}
        <div>
            <div className='bar'></div>
=======
import React, { useState } from 'react'
import logo from '../images/Logo .svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href='/' className='logo'>
        <img src={logo} alt='logo'/>
        </a>
        {/* mobile navbar */}
        <div className="menu-icon" onClick={toggleMenu}>
>>>>>>> 6b0ea67 (commit 2)
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        {/* nav items */}
<<<<<<< HEAD
        <ul>
=======
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
>>>>>>> 6b0ea67 (commit 2)
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Menu</a>
            </li>
            <li>
                <a href='/'>Reservations</a>
            </li>
            <li>
                <a href='/'>Order Online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
    </nav>
  );
};

export default Nav;