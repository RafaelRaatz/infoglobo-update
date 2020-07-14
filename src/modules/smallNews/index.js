import React, { useState, useEffect } from "react";

import SmallNews from "../../components/smallNews";

import api from "../../services/api";
import styled from "styled-components";

export const SmallNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SmallNewsBox = () => {
  const [smallNews, setSmallNews] = useState([]);

  useEffect(() => {
    getSmallNews();
  }, []);

  const getSmallNews = async () => {
    const { data } = await api.get("/smallNews");
    setSmallNews(data);
  };

  return (
    <SmallNewsContainer>
      {smallNews.map((item) => {
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
