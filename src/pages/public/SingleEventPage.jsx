import { useParams } from 'react-router-dom';
import React from 'react';
import SingleEventContainer from '../../features/public/singleEventFeature/SingleEvent.container';
const SingleEventPage = () => {
  const { eventId } = useParams();
  return <SingleEventContainer eventId={eventId} />;
};
export default SingleEventPage;
