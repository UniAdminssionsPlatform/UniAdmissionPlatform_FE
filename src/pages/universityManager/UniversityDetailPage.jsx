import React from 'react';
import UniversityProfileContainer from '../../features/universityManager/universityProfile/UniversityProfile.container';
import { Helmet } from 'react-helmet';

const UniversityDetailPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý Profile</title>
    </Helmet>
    <UniversityProfileContainer />
  </>
);

export default UniversityDetailPage;
