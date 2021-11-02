import React from 'react';
import './Header.scss';
import {ReactComponent as Logo}from '../../assets/4.1 crown.svg'
import {Link} from "react-router-dom";
import {auth} from "../../Firebase/Firebase.utils";

const Header = ({currenUser}) => {
    return (
        <div className="header">
               <Link className="logo-container" to="/">
                  <Logo className="logo"></Logo>
               </Link>
              <div className="options">
                  <Link className="option" to="/shop"> Shop</Link>
                  <Link className="option" to="/shop">Contact</Link>
                  {
                      currenUser?<div className="option" onClick={()=>auth.signOut()}>Sign Out</div>:
                          <Link className="option" to='/SignAndSignup'>Sign in</Link>


                  }
              </div>

        </div>
    );
};

export default Header;