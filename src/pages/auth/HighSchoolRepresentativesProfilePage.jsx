import HighSchoolRepresentatvesProfileContainer from '../../features/auth/profile/highSchoolRepresentatives/HighSchoolRepresentativesProfile.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const HighSchoolRepresentativesProfilePage = () => (
  <>
    <Helmet>
      <title>Trang quản lý hồ sơ</title>
    </Helmet>
    <HighSchoolRepresentatvesProfileContainer />
  </>
);

export default HighSchoolRepresentativesProfilePage;
