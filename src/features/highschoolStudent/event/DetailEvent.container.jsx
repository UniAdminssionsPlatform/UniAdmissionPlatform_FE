import { getDetailEvent } from '../../../services/EventService';
import { handleNotification } from '../../../notification/DetailEventNotification';
import DetailEventComponent from './components/detailEvent/DetailEvent.component';
import React, { useEffect, useState } from 'react';

const DetailEventContainer = (props) => {
  const { eventId } = props;
  const [event, setEvent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvent(eventId);
  }, [eventId]);

  const getEvent = (eventID) => {
    getDetailEvent(eventID)
      .then((result) => {
        setEvent(result.data.data);
        setLoading(false);
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };

  return <DetailEventComponent event={event} loading={loading} />;
};
export default DetailEventContainer;
