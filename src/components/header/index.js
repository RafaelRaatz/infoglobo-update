import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        {" "}
        <img src={logo} alt="" />{" "}
      </Link>
    </Container>
  );
};

export default Header;
