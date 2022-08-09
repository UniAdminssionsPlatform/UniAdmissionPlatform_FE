import { useLocation } from 'react-router-dom';
import React from 'react';
import UniversityProfileToFollowContainer from '../../features/highschoolStudent/listUniversity/UniversityProfileToFollow.container';
import { Helmet } from 'react-helmet';

const UniversityDetailToFollowPage = () => {
  const location = useLocation();
  const { universityID } = location.state;
  return (
    <>
      <Helmet>
        <title>Trang thông tin trường</title>
      </Helmet>
      <UniversityProfileToFollowContainer universityID={universityID} />
    </>
  );
};

export default UniversityDetailToFollowPage;
