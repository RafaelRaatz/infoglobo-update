import React from "react";
import { Container, ImgFooter, TextFooter } from "./styles";

const Footer = () => {
  return (
    <Container>
      <ImgFooter>
        {" "}
        <img src={require("../../media/logo-footer.png")} alt="" />{" "}
      </ImgFooter>

      <TextFooter>
        {" "}
        COPYRIGHT &copy; 2017 <br />
        TODOS OS DIREITOS RESERVADOS
      </TextFooter>
    </Container>
  );
};

export default Footer;
