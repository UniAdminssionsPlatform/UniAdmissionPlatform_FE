import CertificationContainer from '../../features/highschoolStudent/certificationManager/certification.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const CertificationPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý chứng chỉ</title>
    </Helmet>
    <CertificationContainer />
  </>
);

export default CertificationPage;
