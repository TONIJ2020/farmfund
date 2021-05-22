import React from 'react';

import '../Styles/NavBar.css';
import NavToggler from './NavToggler';
import logo from './logo.svg';

function NavBar() {
    return (
        <div className="main-navigation-div">
            <a href="/" className="navigation-bar-logo-li"><img src={logo} alt="logo" className="navigation-bar-logo"/></a>
            <NavToggler /> 
        </div>
    );
}

export default NavBar;
