import UniversityRepresentatvesProfileContainer from '../../features/auth/profile/universityRepresentatives/UniversityRepresentativesProfile.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const UniversityRepresentativesProfilePage = () => (
  <>
    <Helmet>
      <title>Trang quản lý hồ sơ</title>
    </Helmet>
    <UniversityRepresentatvesProfileContainer />
  </>
);

export default UniversityRepresentativesProfilePage;
