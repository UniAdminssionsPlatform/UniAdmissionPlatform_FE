import { useParams } from 'react-router-dom';
import React from 'react';
import SingleHighSchoolProfileContainer from '../../features/public/singleHighSchoolProfileFeature/SingleHighSchoolProfile.container';
import { Helmet } from 'react-helmet';
const SingleHighSchoolProfilePage = () => {
  const { highSchoolId } = useParams();
  return (
    <>
      <Helmet>
        <title>Trang hồ sơ trường</title>
      </Helmet>
      <SingleHighSchoolProfileContainer highSchoolId={highSchoolId} />
    </>
  );
};
export default SingleHighSchoolProfilePage;
