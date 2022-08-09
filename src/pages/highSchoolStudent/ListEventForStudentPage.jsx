import ListEventContainer from '../../features/highschoolStudent/event/ListEvent.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListEventForStudentPage = () => (
  <>
    <Helmet>
      <title>Trang danh sách event</title>
    </Helmet>
    <ListEventContainer />
  </>
);
export default ListEventForStudentPage;
