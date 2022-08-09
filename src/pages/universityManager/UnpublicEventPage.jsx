import React from 'react';
import UnPublicEventContainer from '../../features/universityManager/publicEvent/unpublicEvent.container';
import { Helmet } from 'react-helmet';

const UnPublicEventPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý sự kiện</title>
    </Helmet>
    <UnPublicEventContainer />
  </>
);

export default UnPublicEventPage;
