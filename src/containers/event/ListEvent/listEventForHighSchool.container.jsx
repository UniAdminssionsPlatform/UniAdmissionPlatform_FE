import { EventForHighschool } from '../../../services/GetListEventForHighschool';
import ListEventForHighschoolComponent from '../../../components/event/ListEvent/listEventForHighschool.component';
import React, { useEffect, useState } from 'react';

const ListEventForHighSchoolContainer = () => {
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
export default ListEventForHighSchoolContainer;
