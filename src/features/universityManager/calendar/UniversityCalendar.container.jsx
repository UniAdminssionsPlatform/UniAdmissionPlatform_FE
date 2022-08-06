import { getListEventFromDateToDateApi } from '../../../services/AdminUniversityService/AdminUniversityEventService';
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
  const getListEventByStartDateToEndDate = () => {
    getListEventFromDateToDateApi({
      universityID: user?.universityId,
      fromDate: '',
      toDate: ''
    })
      .then((res) => {
        setListSlot(res.data.data);
        setIsLoading(false);
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
        listSlot={listSlot}
        handleChangeSelection={handleChangeSelection}
        isLoading={isLoading}
      />
    </Layout>
  );
};
export default UniversityCalendarContainer;
