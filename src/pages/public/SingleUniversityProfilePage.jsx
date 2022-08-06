import { useParams } from 'react-router-dom';
import React from 'react';
import SingleUniversityProfileContainer from '../../features/public/SingleUniversityProfile/SingleUniversityProfile.container';
const SingleUniversityProfile = () => {
  const { universityId } = useParams();
  return <SingleUniversityProfileContainer universityId={universityId} />;
};
export default SingleUniversityProfile;
