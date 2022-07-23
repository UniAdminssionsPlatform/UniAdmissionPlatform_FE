import { useParams } from 'react-router-dom';
import EventPublishContainer from '../../features/public/event/EventPublish.container';
import React from 'react';
const EventPage = () => {
  const { eventId } = useParams();
  return <EventPublishContainer eventId={eventId} />;
};
export default EventPage;
