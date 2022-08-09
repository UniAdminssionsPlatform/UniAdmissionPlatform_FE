import PolicyContainer from '../../features/public/policy/Policy.container';
import React from 'react';
import { Helmet } from 'react-helmet';
const PolicyPage = () => (
  <>
    <Helmet>
      <title>Trang điều khoản</title>
    </Helmet>
    <PolicyContainer />
  </>
);
export default PolicyPage;
