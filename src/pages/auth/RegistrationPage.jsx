import React from 'react';
import RegisterContainer from '../../features/auth/registration/Registration.container';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => (
  <>
    <Helmet>
      <title>Trang đăng ký tài khoản</title>
    </Helmet>
    <RegisterContainer />
  </>
);
export default RegistrationPage;
