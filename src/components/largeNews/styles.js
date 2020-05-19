import styled from "styled-components";

export const Article = styled.article`
  margin-right: 70px;
  position: relative;
`;

export const Thumb = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.58);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 99%;
`;

export const Description = styled.div`
  position: absolute;
  bottom: 20px;
  z-index: 10;
  padding: 0 20px;
`;

export const Label = styled.span`
  text-transform: uppercase;
  color: blue;
  font-weight: bold;
  font-size: 0.6em;
`;

export const Title = styled.p`
  font-size: 1.1em;
  margin-bottom: 7px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 0.9em;
  line-height: 17px;
  color: #fff;
`;
