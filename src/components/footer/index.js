import React from "react";
import { Container, ImgFooter, TextFooter } from "./styles";

import logoFooter from "../../media/logo-footer.png";

const Footer = () => {
  return (
    <Container>
      <ImgFooter>
        {" "}
        <img src={logoFooter} alt="" />{" "}
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
