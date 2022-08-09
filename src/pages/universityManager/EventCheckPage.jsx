import EventCheckContainer from '../../features/universityManager/eventCheck/eventCheck.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const EventCheckPage = () => (
  <>
    <Helmet>
      <title>Trang sự kiện</title>
    </Helmet>
    <EventCheckContainer />
  </>
);
export default EventCheckPage;
