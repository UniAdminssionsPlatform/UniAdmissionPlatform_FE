import { useLocation } from 'react-router-dom';
import React from 'react';
import UniversityProfileToFollowContainer from '../../features/highschoolStudent/listUniversity/UniversityProfileToFollow.container';

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
