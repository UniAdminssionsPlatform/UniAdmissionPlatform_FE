import ProfileContainer from '../../features/auth/profile/student/Profile.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ManageProfilePage = () => (
  <>
    <Helmet>
      <title>Trang quản lý profile</title>
    </Helmet>
    <ProfileContainer />
  </>
);

export default ManageProfilePage;
