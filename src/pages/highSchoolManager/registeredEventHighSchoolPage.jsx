import React from 'react';
import RegisteredEventHighSchoolContainer from '../../features/highSchoolManager/manageEvent/registeredEvent/RegisteredEventHighSchool.container';
import { Helmet } from 'react-helmet';
const RegisteredEventHighSchoolPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý sự kiện đăng ký</title>
    </Helmet>
    <RegisteredEventHighSchoolContainer />
  </>
);
export default RegisteredEventHighSchoolPage;
