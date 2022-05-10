import ListEvent from '../../../components/event/ListEvent/listEventWaiting.component';
import { EventWaiting } from '../../../services/event/GetListEvent/GetListEventWaiting';
import React, { useEffect, useState } from 'react';
import { handleNotification } from '../../../notification/ListEventNotification';

const ListEventWaitingContainer = () => {
  const [listEvent, setListEvent] = useState();

  const [dataSearch, setDataSearch] = useState();

  useEffect(() => {
    getListEvent(dataSearch);
  }, [dataSearch]);

  const getListEvent = (data) => {
    EventWaiting(data)
      .then((result) => {
        setListEvent(result.data.data.list);
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  return (
    <>
      <ListEvent listEvent={listEvent} />
    </>
  );
};

export default ListEventWaitingContainer;
