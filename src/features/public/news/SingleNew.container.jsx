import { getNews } from '../../../services/NewsService';
import NewsComponent from '../../universityManager/news/components/CardNewsStyle1/News.component';
import React, { useEffect, useState } from 'react';

const SingleNewContainer = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    getPageNews();
  }, []);

  const getPageNews = () => {
    getNews().then((result) => {
      setNews(result.data.data.list);
    });
  };
  return (
    <>
      <NewsComponent news={news} />
    </>
  );
};

export default SingleNewContainer;
