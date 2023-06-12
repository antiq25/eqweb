import React, { useState } from 'react';
import './Animenu.css';

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="animenu" role="navigation" aria-label="Menu">
      <button className={`animenu__btn ${menuActive ? 'animenu__btn--active' : ''}`} type="button" onClick={toggleMenu}>
        <span className="animenu__btn__bar"></span>
        <span className="animenu__btn__bar"></span>
        <span className="animenu__btn__bar"></span>
      </button>

      <ul className={`animenu__nav ${menuActive ? 'animenu__nav--active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li>
          <a href="#" className="animenu__nav__hasDropdown" aria-haspopup="true">Archive</a>
          <ul className="animenu__nav__dropdown" aria-label="submenu" role="menu">
            <li><a href="/tournaments" role="menuitem">Sub Item 1</a></li>
            <li><a href="#" role="menuitem">Sub Item 2</a></li>
            <li><a href="#" role="menuitem">Sub Item 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="animenu__nav__hasDropdown" aria-haspopup="true">Categories</a>
          <ul className="animenu__nav__dropdown" aria-label="submenu" role="menu">
            <li><a href="#" role="menuitem">Sub Item 1</a></li>
            <li><a href="#" role="menuitem">Sub Item 2</a></li>
            <li><a href="#" role="menuitem">Sub Item 3</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;