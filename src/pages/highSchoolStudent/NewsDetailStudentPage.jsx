import { useLocation } from 'react-router-dom';
import SingleNewContainer from '../../features/public/singleNewFeature/SingleNew.container';
import React from 'react';

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
