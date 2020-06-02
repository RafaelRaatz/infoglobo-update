import React from "react";
import { Container, Advertise } from "./styles";

const Advertising = () => {
  return (
    <Container>
      <Advertise>
        {" "}
        <img src={require("../../media/propaganda.png")} alt="" />{" "}
      </Advertise>
    </Container>
  );
};

export default Advertising;
