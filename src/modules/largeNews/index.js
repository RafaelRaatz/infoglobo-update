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

const LargeNewsBox = () => {
  const [largeNews, setNews] = useState([]);

  useEffect(() => {
    getLargeNews();
  }, []);

  const getLargeNews = async () => {
    const { data } = await api.get("/largeNews");
    setNews(data);
  };

  return (
    <LargeNewsContainer>
      {largeNews.map((item) => {
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

export default LargeNewsBox;
