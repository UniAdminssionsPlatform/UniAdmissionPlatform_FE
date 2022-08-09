import React from 'react';
import HighSchoolCalendarContainer from '../../features/highSchoolManager/calendar/HighSchoolCalendar.container';
import { Helmet } from 'react-helmet';
const HighSchoolCalendarPage = () => {
  return (
    <>
      <Helmet>
        <title>Lịch sự kiện</title>
      </Helmet>
      <HighSchoolCalendarContainer />
    </>
  );
};
export default HighSchoolCalendarPage;
