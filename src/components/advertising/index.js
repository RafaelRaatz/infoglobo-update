import React from 'react';
import { AdvertisingStyle, AdvertiseStyle } from "./styles"

import advertisingThumb from '../../media/propaganda.png'


const Advertising = () => {
    return (

        <AdvertisingStyle>

            <AdvertiseStyle> <img src={advertisingThumb} alt="" /> </AdvertiseStyle>

        </AdvertisingStyle>

    );
}

export default Advertising;