import React, { useEffect, useState } from 'react';
import ListEventForHighschoolComponent from '../../../components/event/ListEvent/listEventForHighschool.component';
import { EventForHighschool } from '../../../services/event/GetListEvent/GetListEventForHighschool';

const ListEventForHighschoolContainer = () => {
  const [eventforhighschool, setEventForHighschool] = useState([]);

  useEffect(() => {
    getEventForHighschool(1);
  }, []);

  const getEventForHighschool = (highschoolID) => {
    EventForHighschool(highschoolID).then((result) => {
      setEventForHighschool(result.data.data.list);
    });
  };

  return <ListEventForHighschoolComponent eventforhighschool={eventforhighschool} />;
};
export default ListEventForHighschoolContainer;
