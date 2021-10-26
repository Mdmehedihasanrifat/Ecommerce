import React from 'react';
import './Header.scss';
import {ReactComponent as Logo}from '../../assets/4.1 crown.svg'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
               <Link className="logo-container" to="/">
                  <Logo className="logo"></Logo>
               </Link>
              <div className="options">
                  <Link className="option" to="/shop"> Shop</Link>
                  <Link className="option" to="/shop">Contact</Link>
              </div>

        </div>
    );
};

export default Header;