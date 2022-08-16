import { getListEventCheckService } from '../../../services/AdminUniversityService/AdminUniversityEventService';
import { useSelector } from 'react-redux';
import UniversityCalendarComponent from './UniversityCalendar.component';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Layout } from 'antd';

const UniversityCalendarContainer = () => {
  const [listSlot, setListSlot] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState();
  const [triggerUpdate, setTriggerUpdate] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const parseListEvent = (data) => {
    const listEvent = [];
    data.map((event) => {
      listEvent.push({
        startDate: event.slot.startDate,
        endDate: event.slot.endDate,
        infor: event
      });
    });
    return listEvent;
  };
  const getListEventByStartDateToEndDate = () => {
    const payload = {
      status: '',
      page: '1',
      limit: '1000'
    };
    getListEventCheckService(payload)
      .then((res) => {
        setListSlot(res.data.data.list);
        setIsLoading(false);
        console.log(res.data.data.list);
      })
      .catch((err) => {
        setListSlot(false);
      });
  };
  const handleChangeSelection = (select) => {
    if (select === '1') {
      const endDateSelected = moment().add(30, 'days');
      setSelectedDate({ startDateSelect: moment(), endDateSelect: endDateSelected });
    }
    if (select === '2') {
      const startSelected = moment().add(-30, 'days');
      setSelectedDate({ startDateSelect: startSelected, endDateSelect: moment() });
    }
    setTriggerUpdate(true);
    getListEventByStartDateToEndDate();
  };
  useEffect(() => getListEventByStartDateToEndDate(), [triggerUpdate]);
  return (
    <Layout>
      <UniversityCalendarComponent
        listSlot={!isLoading ? parseListEvent(listSlot) : null}
        handleChangeSelection={handleChangeSelection}
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default UniversityCalendarContainer;
