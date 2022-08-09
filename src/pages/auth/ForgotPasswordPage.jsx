import React from 'react';
import ResetPasswordContainer from '../../features/auth/resetPassword/ResetPassword.container';
import { Helmet } from 'react-helmet';

const ForgetPasswordPage = () => (
  <>
    <Helmet>
      <title>Quên mật khẩu</title>
    </Helmet>
    <ResetPasswordContainer />
  </>
);
export default ForgetPasswordPage;
