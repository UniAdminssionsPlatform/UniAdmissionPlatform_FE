import { getDetailEvent } from '../../../services/EventService';
import { handleNotification } from '../../../notification/LoginNotification';
import DetailEventComponent from '../../../components/event/DetailEvent/DetailEvent.component';
import React, { useEffect, useState } from 'react';

const DetailEventContainer = () => {
  const [event, setEvent] = useState('');

  useEffect(() => {
    getEvent(1);
  }, []);

  const getEvent = (eventID) => {
    getDetailEvent(eventID)
      .then((result) => {
        setEvent(result.data.data);
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };

  return <DetailEventComponent event={event} />;
};
export default DetailEventContainer;
