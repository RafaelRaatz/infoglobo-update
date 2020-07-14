import React, { useState, useEffect } from "react";

import HomeLargeNews from "../../components/largeNews";

import api from "../../services/api";
import styled from "styled-components";

export const LargeNewsContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const GamesNewsBox = () => {
  const [gamesNews, setGamesNews] = useState([]);

  useEffect(() => {
    getGamesNews();
  }, []);

  const getGamesNews = async () => {
    const { data } = await api.get("/gamesNews");
    setGamesNews(data);
  };

  return (
    <LargeNewsContainer>
      {gamesNews.map((item) => {
        return (
          <HomeLargeNews
            img={require(`../../media/${item.image}`)}
            labelText={item.label}
            titleText={item.title}
            descriptionText={item.description}
          />
        );
      })}
    </LargeNewsContainer>
  );
};
