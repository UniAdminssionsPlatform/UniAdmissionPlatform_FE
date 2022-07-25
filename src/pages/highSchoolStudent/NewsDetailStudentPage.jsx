import { useLocation } from 'react-router-dom';
import React from 'react';
import SingleNewContainer from '../../features/public/singleNewFeature/SingleNew.container';

const NewsDetailStudentPage = () => {
  const location = useLocation();
  const { newsId } = location.state;
  return (
    <>
      <SingleNewContainer newsId={newsId} />
    </>
  );
};

export default NewsDetailStudentPage;
