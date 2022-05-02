import React, { useEffect, useState } from 'react';
import ListEventForUniversity from '../../../components/event/ListEvent/listEventForUniversity.component';

const ListEventForUniversityContainer = () => {
  const [eventforuniversity, setEventForUniversity] = useState([]);

  useEffect(() => {
    getEventForUniversity(1);
  }, []);

  const getEventForUniversity = (highschoolID) => {
    EventForUniversity(highschoolID).then((result) => {
      setEventForUniversity(result.data.data.list);
    });
  };

  return <ListEventForUniversity eventforuniversity={eventforuniversity} />;
};
export default ListEventForUniversityContainer;
