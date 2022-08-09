import React from 'react';
import UpdateHighSchoolProfileContainer from '../../features/highSchoolManager/highschoolProfile/EditHighschoolProfile.container';
import { Helmet } from 'react-helmet';

const UpdateHighSchoolPage = () => (
  <>
    <Helmet>
      <title>Trang cập nhật thông tin</title>
    </Helmet>
    <UpdateHighSchoolProfileContainer />
  </>
);

export default UpdateHighSchoolPage;
