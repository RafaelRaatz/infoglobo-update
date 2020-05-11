import React from 'react';
import './style.css';
import '../../global.css'

import logoFooter from '../../media/logo-footer.png'

const Footer = () => {
    return (

        <div id="footer">

            <img className="img-footer" src={logoFooter} alt="" />

            <p className="text-footer"> COPYRIGHT &copy; 2017 <br />
        TODOS OS DIREITOS RESERVADOS
    </p>

        </div>

    );
}

export default Footer;