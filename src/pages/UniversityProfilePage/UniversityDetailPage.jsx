import React from 'react';
import UniversityProfileContainer from '../../features/universityManager/universityProfile/UniversityProfile.container';
import { Helmet } from 'react-helmet';

const UniversityDetailPage = () => (
  <>
    <Helmet>
      <title>Trang cập nhật thông tin</title>
    </Helmet>
    <UniversityProfileContainer />
  </>
);

export default UniversityDetailPage;
