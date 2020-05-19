import React from "react";
import { Container, Advertise } from "./styles";

import advertisingThumb from "../../media/propaganda.png";

const Advertising = () => {
  return (
    <Container>
      <Advertise>
        {" "}
        <img src={advertisingThumb} alt="" />{" "}
      </Advertise>
    </Container>
  );
};

export default Advertising;
