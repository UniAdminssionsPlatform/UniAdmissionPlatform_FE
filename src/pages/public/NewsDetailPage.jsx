import { useLocation } from 'react-router-dom';
import DetailNewContainer from '../../features/public/news/DetailNew.container';
import React from 'react';

const NewsDetailPage = () => {
  const location = useLocation();
  const { newsId } = location.state;
  return (
    <>
      <DetailNewContainer newsId={newsId} />
    </>
  );
};

export default NewsDetailPage;
