import { useParams } from 'react-router-dom';
import SingleEventContainer from '../../features/public/singleEventFeature/SingleEvent.container';
import React from 'react';
const SingleEventPage = () => {
  const { eventId } = useParams();
  return <SingleEventContainer eventId={eventId} />;
};
export default SingleEventPage;
