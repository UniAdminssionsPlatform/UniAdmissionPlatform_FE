import UniversityCalendarContainer from '../../features/universityManager/calendar/UniversityCalendar.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const CalendarPage = () => (
  <>
    <Helmet>
      <title>Trang lịch sự kiện</title>
    </Helmet>
    <UniversityCalendarContainer />
  </>
);
export default CalendarPage;
