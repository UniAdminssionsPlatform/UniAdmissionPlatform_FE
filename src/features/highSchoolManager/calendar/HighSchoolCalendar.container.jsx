import React, { useEffect } from 'react';
import HighSchoolCalendarComponent from './component/HighSchoolCalendar.component';
import { useDispatch } from 'react-redux';
import { fetchEventCheckHighSchool } from '../../../redux-flow/highSchoolManageEventCheck/listEventCheckHighSchool-slice';
const HighSchoolCalendarContainer = () => {
  const dispatch = useDispatch();
  const getListEventCheck = () => {
    dispatch(fetchEventCheckHighSchool({}));
  };
  useEffect(() => getListEventCheck(), []);
  return <HighSchoolCalendarComponent />;
};
export default HighSchoolCalendarContainer;
