import ListEventForHighSchoolContainer from '../../features/universityManager/event/listEventForHighSchool.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListEventForHighSchoolPage = () => (
  <>
    <Helmet>
      <title>Trang danh sách sự kiện</title>
    </Helmet>
    <ListEventForHighSchoolContainer />
  </>
);

export default ListEventForHighSchoolPage;
