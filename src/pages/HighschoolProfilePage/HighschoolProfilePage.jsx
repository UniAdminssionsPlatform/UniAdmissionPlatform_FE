import HighSchoolProfileContainer from '../../features/highSchoolManager/highschoolProfile/HighschoolProfile.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const HighSchoolProfilePage = () => (
  <>
    <Helmet>
      <title>Trang thông tin trường</title>
    </Helmet>
    <HighSchoolProfileContainer />
  </>
);

export default HighSchoolProfilePage;
