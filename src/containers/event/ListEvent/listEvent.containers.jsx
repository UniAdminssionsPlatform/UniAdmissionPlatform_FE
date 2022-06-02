import { ListEvent } from '../../../services/event/GetListEvent/GetListEvent';
import { handleNotification } from '../../../notification/ListEventNotification';
import React, { useEffect, useState } from 'react';

const ListEventContainer = () => {
  const [listEvent, setListEvent] = useState([]);

  useEffect(() => {
    getListEvent();
  }, []);

  const getListEvent = () => {
    ListEvent()
      .then((result) => {
        setListEvent(result.data.data.list);
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };
  return (
    <>
      <ListEvent listevent={listEvent} />
    </>
  );
};

export default ListEventContainer;
