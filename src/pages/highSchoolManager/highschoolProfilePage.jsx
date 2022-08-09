import HighSchoolProfileContainer from '../../features/highSchoolManager/highschoolProfile/HighschoolProfile.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const HighschoolProfilePage = () => (
  <>
    <Helmet>
      <title>Trang hồ sơ trường cấp 3</title>
    </Helmet>
    <HighSchoolProfileContainer />
  </>
);

export default HighschoolProfilePage;
