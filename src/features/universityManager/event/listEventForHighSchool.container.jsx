import { EventForHighschool } from '../../../services/GetListEventForHighschool';
import ListEventForHighschoolComponent from './components/ListEvent/listEventForHighschool.component';
import React, { useEffect, useState } from 'react';

const ListEventForHighSchoolContainer = () => {
  const [listEvent, setListEvent] = useState([]);

  useEffect(() => {
    getListEvent(1);
  }, []);

  const getListEvent = (id) => {
    EventForHighschool(id).then((result) => {
      setListEvent(result.data.data.list);
    });
  };

  return <ListEventForHighschoolComponent eventforhighschool={listEvent} />;
};
export default ListEventForHighSchoolContainer;
