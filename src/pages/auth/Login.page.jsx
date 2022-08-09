import LoginContainer from '../../features/auth/login/Login.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = () => (
  <div>
    <Helmet>
      <title>Trang đăng nhập</title>
    </Helmet>
    <LoginContainer />
  </div>
);
export default LoginPage;
