import ListUniversityToFollowContainer from '../../features/highschoolStudent/listUniversity/listUniversityToFollow.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListUniversityToFollowPage = () => (
  <>
    <Helmet>
      <title>Danh sách các trường</title>
    </Helmet>
    <ListUniversityToFollowContainer />
  </>
);

export default ListUniversityToFollowPage;
