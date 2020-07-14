import React, { useState, useEffect } from "react";

import MediumNews from "../../components/mediumNews";

import api from "../../services/api";
import styled from "styled-components";

export const MediumNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const MediumNewsBox = () => {
  const [mediumNews, setMediumNews] = useState([]);

  useEffect(() => {
    getMediumNews();
  }, []);

  const getMediumNews = async () => {
    const { data } = await api.get("/mediumNews");
    setMediumNews(data);
  };

  return (
    <MediumNewsContainer>
      {mediumNews.map((item) => {
        return (
          <MediumNews
            img={require(`../../media/${item.image}`)}
            labelText={item.label}
            titleText={item.title}
            text={item.description}
          />
        );
      })}
    </MediumNewsContainer>
  );
};
