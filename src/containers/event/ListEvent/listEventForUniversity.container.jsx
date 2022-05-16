import React, { useEffect, useState } from 'react';
import ListEventForUniversityForm from '../../../components/event/ListEvent/listEventForUniversityForm.component';
import { EventForUniversity } from '../../../services/event/GetListEvent/GetListEventForUniversity';
import { useSelector } from 'react-redux';

const ListEventForUniversityContainer = () => {
  const [eventforuniversity, setEventForUniversity] = useState();
  const { user } = useSelector((state) => state.authentication);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    eventtype: '',
    status: '',
    universityID: user.id ? user.id : 1
  });

  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch]);

  const getEventForUniversity = (data) => {
    EventForUniversity(data).then((result) => {
      console.log('data: ', data);
      setEventForUniversity(result.data.data.list);
    });
  };

  return <ListEventForUniversityForm eventforuniversity={eventforuniversity} setDataSearch={setDataSearch} />;
};
export default ListEventForUniversityContainer;
