import React from 'react';
import './style.css';
import logo from '../../media/logo.png'
import '../../global.css'


function Header() {
    return (

        <header>

            <div className="container">
                <img src={logo} alt="" />

            </div>
        </header>

    );
}

export default Header;