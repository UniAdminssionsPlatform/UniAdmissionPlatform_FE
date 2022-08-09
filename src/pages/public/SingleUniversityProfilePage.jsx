import { useParams } from 'react-router-dom';
import React from 'react';
import SingleUniversityProfileContainer from '../../features/public/singleUniversityProfileFeature/SingleUniversityProfile.container';
import { Helmet } from 'react-helmet';
const SingleUniversityProfile = () => {
  const { universityId } = useParams();
  return (
    <>
      <Helmet>
        <title>Trang hồ sơ đại học</title>
      </Helmet>
      <SingleUniversityProfileContainer universityId={universityId} />
    </>
  );
};
export default SingleUniversityProfile;
