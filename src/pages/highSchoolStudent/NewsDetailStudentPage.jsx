import { useLocation } from 'react-router-dom';
import React from 'react';
import SingleNewContainer from '../../features/public/singleNewFeature/SingleNew.container';
import { Helmet } from 'react-helmet';

const NewsDetailStudentPage = () => {
  const location = useLocation();
  const { newsId } = location.state;
  return (
    <>
      <Helmet>
        <title>Trang thông tin</title>
      </Helmet>
      <SingleNewContainer newsId={newsId} />
    </>
  );
};

export default NewsDetailStudentPage;
