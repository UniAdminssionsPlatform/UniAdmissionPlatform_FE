import AccountPendingContainer from '../../features/universityManager/accounts/AccountPending.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const UniversityListAccountPendingPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý tài khoản</title>
    </Helmet>
    <AccountPendingContainer />
  </>
);
export default UniversityListAccountPendingPage;
