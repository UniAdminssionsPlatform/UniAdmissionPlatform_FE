import NewManagementContainer from '../../../features/universityManager/news/NewManagement.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ManageNewPage = () => (
  <>
    <Helmet>
      <title>Trang tin tức</title>
    </Helmet>
    <NewManagementContainer />
  </>
);
export default ManageNewPage;
