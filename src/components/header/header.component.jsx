import React from 'react';
import './header.style.scss';

const Header = () => {
  return (<header>
    <nav>
       <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
       </div>
       <div className="logo">
          LOGO
       </div>
       <div className="menu">
          <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Contact</a></li>
          </ul>
       </div>
    </nav>
 </header>)
}

export default Header;