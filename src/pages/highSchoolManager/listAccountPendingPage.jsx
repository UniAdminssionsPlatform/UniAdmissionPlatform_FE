import AccountPendingContainer from '../../features/highSchoolManager/accounts/AccountPending.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const HighSchoolListAccountPendingPage = () => (
  <>
    <Helmet>
      <title>Trang xét duyệt tài khoản</title>
    </Helmet>
    <AccountPendingContainer />
  </>
);
export default HighSchoolListAccountPendingPage;
