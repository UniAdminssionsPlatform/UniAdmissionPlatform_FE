import ChangePasswordContainer from '../../features/auth/changePassword/components/ChangePasswordComponent';
import React from 'react';
import { Helmet } from 'react-helmet';

const ChangePasswordPage = () => (
  <>
    <Helmet>
      <title>Thay đổi mật khẩu</title>
    </Helmet>
    <ChangePasswordContainer />
  </>
);

export default ChangePasswordPage;
