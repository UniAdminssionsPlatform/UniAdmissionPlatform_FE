import React from 'react';
import NewsDetailContainer from '../../containers/newsDetail/newsDetail.container';
import { useLocation } from 'react-router-dom';

const NewsDetailPage = () => {
  const location = useLocation();
  const { newsId } = location.state;
  return (
    <>
      <NewsDetailContainer newsId={newsId} />
    </>
  );
};

export default NewsDetailPage;
