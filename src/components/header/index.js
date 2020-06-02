import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        {" "}
        <img src={require("../../media/logo.png")} alt="" />{" "}
      </Link>
    </Container>
  );
};

export default Header;
