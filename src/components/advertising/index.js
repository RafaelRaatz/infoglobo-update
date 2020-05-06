import React from 'react';
import './style.css';
import '../../global.css'

import advertising from '../../media/propaganda.png'


function Advertising() {
    return (

        <div class="advertising">

            <hr />

            <img class="advertise" src={advertising} alt="" />

            <hr />
        </div>



    );
}

export default Advertising;