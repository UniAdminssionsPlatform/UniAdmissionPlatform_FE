import { useParams } from 'react-router-dom';
import React from 'react';
import SingleEventContainer from '../../features/public/singleEventFeature/SingleEvent.container';
import { Helmet } from 'react-helmet';
const SingleEventPage = () => {
  const { eventId } = useParams();
  return (
    <>
      <Helmet>
        <title>Trang chi tiết sự kiện</title>
      </Helmet>
      <SingleEventContainer eventId={eventId} />
    </>
  );
};
export default SingleEventPage;
