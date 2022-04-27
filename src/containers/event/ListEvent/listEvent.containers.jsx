import ListEventComponent from '../../../components/event/ListEvent/listEvent.component';
import React, { useEffect, useState } from 'react';
import { ListEvent } from '../../../services/event/GetListEvent/GetListEvent';

const ListEventContainer = () => {
  const [listevent, setListEvent] = useState([]);

  useEffect(() => {
    getListEvent();
  }, []);

  const getListEvent = () => {
    ListEvent().then((result) => {
      setListEvent(result.data.data.list);
    });
  };
  return (
    <>
      <ListEventComponent listevent={listevent} />
    </>
  );
};

export default ListEventContainer;
