import PublicEventContainer from '../../features/universityManager/publicEvent/publicEvent.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const PublicEventPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý sự kiện</title>
    </Helmet>
    <PublicEventContainer />
  </>
);

export default PublicEventPage;
