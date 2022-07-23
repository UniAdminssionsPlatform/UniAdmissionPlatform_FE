import { getListEventFromDateToDateApi } from '../../../services/AdminUniversityService/AdminUniversityEventService';
import { useSelector } from 'react-redux';
import CalendarComponent from './Calendar.component';
import Layout from '../../../components/Layout';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CalendarContainer = () => {
  const [listSlot, setListSlot] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState();
  const [triggerUpdate, setTriggerUpdate] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const getListEventByStartDateToEndDate = () => {
    getListEventFromDateToDateApi({
      universityID: user?.universityId,
      fromDate: '',
      // selectedDate?.startDateSelect !== undefined ? selectedDate.startDateSelect.format('L') : moment().format('L'),
      toDate: ''
      // selectedDate?.endDateSelect !== undefined
      //   ? selectedDate.endDateSelect.format('L')
      //   : moment().add(30, 'days').format('L')
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
      <CalendarComponent listSlot={listSlot} handleChangeSelection={handleChangeSelection} isLoading={isLoading} />
    </Layout>
  );
};
export default CalendarContainer;
