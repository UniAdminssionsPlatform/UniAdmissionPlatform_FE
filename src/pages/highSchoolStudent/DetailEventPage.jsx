import { useLocation } from 'react-router-dom';
import DetailEventContainer from '../../features/highschoolStudent/event/DetailEvent.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const DetailEventForStudentPage = () => {
  const location = useLocation();
  const { eventId } = location.state;
  return (
    <>
      <Helmet>
        <title>Trang chi tiết sự kiện</title>
      </Helmet>
      <DetailEventContainer eventId={eventId} />
    </>
  );
};
export default DetailEventForStudentPage;
