import ListEventForRegisterUniversityContainer from '../../features/universityManager/event/ListEventForRegisterUniversity.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListEventForRegisterUniversityPage = () => (
  <>
    <Helmet>
      <title>Trang danh sách sự kiện</title>
    </Helmet>
    <ListEventForRegisterUniversityContainer />
  </>
);

export default ListEventForRegisterUniversityPage;
