import { useLocation } from 'react-router-dom';
import DetailEventContainer from '../../features/highschoolStudent/event/DetailEvent.container';
import React from 'react';

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
