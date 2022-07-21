import { GetListEventCheck } from '../../../services/EventCheckService';
import EventCheckComponent from './components/eventCheck.component';
import React, { useEffect, useState } from 'react';

const EventCheckContainer = () => {
  const [eventCheck, setEventCheck] = useState();
  const [dataSearch, setDataSearch] = useState({
    page: 1,
    limit: 10
  });

  //Paging
  const onChange = (page, limit) => {
    setDataSearch({
      ...dataSearch,
      page,
      limit
    });
  };

  //Get list event check
  useEffect(() => {
    getEventCheck({ page: dataSearch.page, limit: dataSearch.limit });
  }, [dataSearch]);

  const getEventCheck = (data) => {
    GetListEventCheck(data).then((result) => {
      setEventCheck(result.data.data.list);
    });
  };

  return (
    <>
      <EventCheckComponent eventCheck={eventCheck} onChange={onChange} />;
    </>
  );
};
export default EventCheckContainer;
