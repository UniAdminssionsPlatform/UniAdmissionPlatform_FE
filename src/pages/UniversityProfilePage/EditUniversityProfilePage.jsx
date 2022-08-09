import React from 'react';
import UpdateUniversityProfileContainer from '../../features/universityManager/universityProfile/EditUniversityProfile.container';
import { Helmet } from 'react-helmet';

const UpdateUniversityProfilePage = () => (
  <>
    <Helmet>
      <title>Trang cập nhật thông tin </title>
    </Helmet>
    <UpdateUniversityProfileContainer />
  </>
);

export default UpdateUniversityProfilePage;
