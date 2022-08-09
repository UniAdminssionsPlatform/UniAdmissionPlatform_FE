import DetailEventContainer from '../../features/universityManager/event/DetailEvent.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const DetailEventPage = () => (
  <>
    <Helmet>
      <title>Trang sự kiện</title>
    </Helmet>
    <DetailEventContainer />
  </>
);

export default DetailEventPage;
