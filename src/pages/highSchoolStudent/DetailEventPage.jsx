import React from 'react';
import DetailEventContainer from '../../features/highschoolStudent/event/DetailEvent.container';
import { useLocation } from 'react-router-dom';

const DetailEventForStudentPage = () => {
  const location = useLocation();
  const { eventId } = location.state;
  return (
    <>
      <DetailEventContainer eventId={eventId} />
    </>
  );
};
export default DetailEventForStudentPage;
