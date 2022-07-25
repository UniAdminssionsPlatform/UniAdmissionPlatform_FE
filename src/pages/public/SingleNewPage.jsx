import { useParams } from 'react-router-dom';
import React from 'react';
import SingleNewContainer from '../../features/public/singleNewFeature/SingleNew.container';
const SingleNewPage = () => {
  const { newId } = useParams();
  return <SingleNewContainer newId={newId} />;
};
export default SingleNewPage;
