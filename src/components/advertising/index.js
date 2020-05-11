import React from 'react';
import './style.css';
import '../../global.css'

import advertising from '../../media/propaganda.png'


function Advertising() {
    return (

        <div className="advertising">

            <hr />

            <img className="advertise" src={advertising} alt="" />

            <hr />
        </div>



    );
}

export default Advertising;