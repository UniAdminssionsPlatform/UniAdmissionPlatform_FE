import ListMajorContainer from '../../features/highschoolStudent/majorGroupManager/ListMajorGroup.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListMajorGroupPage = () => (
  <>
    <Helmet>
      <title>Nhóm ngành đào tạo</title>
    </Helmet>
    <ListMajorContainer />
  </>
);
export default ListMajorGroupPage;
