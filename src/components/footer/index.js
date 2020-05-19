import React from "react";
import { FooterStyle, ImgFooter, TextFooter } from "./styles";

import logoFooter from "../../media/logo-footer.png";

const Footer = () => {
  return (
    <FooterStyle>
      <ImgFooter>
        {" "}
        <img src={logoFooter} alt="" />{" "}
      </ImgFooter>

      <TextFooter>
        {" "}
        COPYRIGHT &copy; 2017 <br />
        TODOS OS DIREITOS RESERVADOS
      </TextFooter>
    </FooterStyle>
  );
};

export default Footer;
