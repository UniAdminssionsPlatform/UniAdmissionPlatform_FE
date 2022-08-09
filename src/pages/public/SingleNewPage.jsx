import { useParams } from 'react-router-dom';
import React from 'react';
import SingleNewContainer from '../../features/public/singleNewFeature/SingleNew.container';
import { Helmet } from 'react-helmet';
const SingleNewPage = () => {
  const { newId } = useParams();
  return (
    <>
      <Helmet>
        <title>Trang tin tức</title>
      </Helmet>
      <SingleNewContainer newId={newId} />
    </>
  );
};
export default SingleNewPage;
