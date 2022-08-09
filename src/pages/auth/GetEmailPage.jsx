import GetEmailContainer from '../../features/auth/resetPassword/GetEmail.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const GetEmailPage = () => (
  <>
    <Helmet>
      <title>Gửi mail</title>
    </Helmet>
    <GetEmailContainer />
  </>
);
export default GetEmailPage;
