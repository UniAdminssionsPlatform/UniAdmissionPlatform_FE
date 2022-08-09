import ListEventContainer from '../../features/universityManager/event/listEvent.containers';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListEventPage = () => (
  <>
    <Helmet>
      <title>Trang danh sách sự kiện</title>
    </Helmet>
    <ListEventContainer />
  </>
);

export default ListEventPage;
