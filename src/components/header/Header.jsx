import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <header className="header"> 
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Aman</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <a href="index.html" className="nav__link">
                    </a>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header