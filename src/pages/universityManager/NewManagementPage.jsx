import NewManagementContainer from '../../features/universityManager/news/NewManagement.container';
import React from 'react';
import { Helmet } from 'react-helmet';
const NewManagementPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý tin tức</title>
    </Helmet>
    <NewManagementContainer />
  </>
);
export default NewManagementPage;
