import ListUniversityContainer from '../../features/highschoolStudent/followUniversity/listUniversity.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListUniversityPage = () => (
  <>
    <Helmet>
      <title>Danh sách các trường</title>
    </Helmet>
    <ListUniversityContainer />
  </>
);

export default ListUniversityPage;
