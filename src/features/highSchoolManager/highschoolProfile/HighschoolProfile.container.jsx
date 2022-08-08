import { useSelector } from 'react-redux';
import React from 'react';
import SingleHighSchoolProfileContainer from '../../public/singleHighSchoolProfileFeature/SingleHighSchoolProfile.container';

const HighSchoolProfileContainer = () => {
  const { user } = useSelector((state) => state.authentication);
  return (
    <>
      <SingleHighSchoolProfileContainer highSchoolId={user.highSchoolId} />
    </>
  );
};
export default HighSchoolProfileContainer;
