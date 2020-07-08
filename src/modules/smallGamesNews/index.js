import React, { useState, useEffect } from "react";

import SmallNews from "../../components/smallNews";

import api from "../../services/api";
import styled from "styled-components";

export const SmallNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SmallGamesNewsBox = () => {
  const [smallGamesNews, setSmallGamesNews] = useState([]);

  useEffect(() => {
    getSmallGamesNews();
  }, []);

  const getSmallGamesNews = async () => {
    const { data } = await api.get("/smallGamesNews");
    setSmallGamesNews(data);
  };

  return (
    <SmallNewsContainer>
      {smallGamesNews.map((item) => {
        return (
          <SmallNews
            img={require(`../../media/${item.image}`)}
            labelText={item.label}
            titleText={item.title}
            description={item.description}
          />
        );
      })}
    </SmallNewsContainer>
  );
};

export default SmallGamesNewsBox;
