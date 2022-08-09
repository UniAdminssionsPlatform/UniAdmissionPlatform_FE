import React from 'react';
import StudentProfileContainer from '../../features/auth/profile/StudentProfile.container';
import { Helmet } from 'react-helmet';

const StudentProfilePage = () => (
  <>
    <Helmet>
      <title>Trang hồ sơ học sinh</title>
    </Helmet>
    <StudentProfileContainer />
  </>
);
export default StudentProfilePage;
