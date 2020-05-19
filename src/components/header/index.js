import React from "react";
import logo from "../../media/logo.png";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
};

export default Header;
