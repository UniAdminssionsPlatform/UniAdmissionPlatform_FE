import { useParams } from 'react-router-dom';
import React from 'react';
import SingleHighSchoolProfileContainer from '../../features/public/singleHighSchoolProfileFeature/SingleHighSchoolProfile.container';
const SingleHighSchoolProfilePage = () => {
  const { highSchoolId } = useParams();
  return <SingleHighSchoolProfileContainer highSchoolId={highSchoolId} />;
};
export default SingleHighSchoolProfilePage;
