import NewsComponent from '../../components/news/News.component';
import React, { useEffect, useState } from 'react';
import { getNews } from '../../services/news/NewsService';

const NewsContainer = () => {
  const [news, setnews] = useState();

  useEffect(() => {
    getPageNews();
  }, []);

  const getPageNews = () => {
    getNews().then((result) => {
      setnews(result.data.data.list);
    });
  };
  return (
    <>
      <NewsComponent news={news} />
    </>
  );
};

export default NewsContainer;
