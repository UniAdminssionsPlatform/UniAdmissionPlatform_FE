import React from 'react';
import UniversityProfileToFollowContainer from '../../features/highschoolStudent/listUniversity/UniversityProfileToFollow.container';
import { useLocation } from 'react-router-dom';

const UniversityDetailToFollowPage = () => {
  const location = useLocation();
  const { universityID } = location.state;
  return (
    <>
      <UniversityProfileToFollowContainer universityID={universityID} />
    </>
  );
};

export default UniversityDetailToFollowPage;
