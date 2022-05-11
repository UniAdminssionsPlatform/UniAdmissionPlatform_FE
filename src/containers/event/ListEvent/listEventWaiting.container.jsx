import { EventWaiting } from '../../../services/event/GetListEvent/GetListEventWaiting';
import { handleNotification } from '../../../notification/ListEventNotification';
import { useDebouncedCallback } from 'use-debounce';
import CreateEventContainer from '../CreateEvent/CreateEvent.container';
import ListEvent from '../../../components/event/ListEvent/listEventWaiting.component';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ListEventWaitingContainer = () => {
  const { user } = useSelector((state) => state.authentication);

  const [listEvent, setListEvent] = useState();

  const [event, setEvent] = useState();
  const [isClick, setIsClick] = useState(false);

  const [dataSearch, setDataSearch] = useState({
    name: '',
    type: '',
    universityID: user.id ? user.id : 1
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

  const handleSelectedEvent = (event) => {
    setEvent(event);
    setIsClick(true);
  };

  return (
    <>
      {isClick === false ? (
        <ListEvent
          listEvent={listEvent}
          setSearchName={setSearchName}
          debounced={debounced}
          onChangeType={onChangeType}
          handleSelectedEvent={handleSelectedEvent}
        />
      ) : (
        <CreateEventContainer event={event} />
      )}
    </>
  );
};

export default ListEventWaitingContainer;
