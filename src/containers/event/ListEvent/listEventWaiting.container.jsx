import { EventWaiting } from '../../../services/event/GetListEvent/GetListEventWaiting';
import { handleNotification } from '../../../notification/ListEventNotification';
import { useDebouncedCallback } from 'use-debounce';
import ListEvent from '../../../components/event/ListEvent/listEventWaiting.component';
import React, { useEffect, useState } from 'react';

const ListEventWaitingContainer = () => {
  const [listEvent, setListEvent] = useState();

  const [dataSearch, setDataSearch] = useState({
    name: '',
    type: ''
  });

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

  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState();

  const onChangeType = (value) => {
    setSearchType(value);
    debounced();
  };

  const debounced = useDebouncedCallback(
    // function
    () => {
      setDataSearch({
        name: searchName,
        type: searchType
      });
    },
    // delay in ms
    2000
  );

  return (
    <>
      <ListEvent
        listEvent={listEvent}
        setSearchName={setSearchName}
        debounced={debounced}
        onChangeType={onChangeType}
      />
    </>
  );
};

export default ListEventWaitingContainer;
