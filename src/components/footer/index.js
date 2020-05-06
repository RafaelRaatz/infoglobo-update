import React from 'react';
import './style.css';
import '../../global.css'

import logoFooter from '../../media/logo-footer.png'

function Footer() {
    return (

        <div id="footer">

            <img class="img-footer" src={logoFooter} alt="" />

            <p class="text-footer"> COPYRIGHT &copy; 2017 <br />
        TODOS OS DIREITOS RESERVADOS
    </p>

        </div>

    );
}

export default Footer;