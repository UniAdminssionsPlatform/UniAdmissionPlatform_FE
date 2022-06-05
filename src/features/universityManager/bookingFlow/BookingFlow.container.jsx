import { PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
const BookingFlowContainer = () => {
  const history = useHistory();
  const { data } = useSelector((state) => state.selectedHighSchool);
  if (data === null || data === undefined) history.push(PATH_UNIVERSITY_MANAGER.REGIS_EVENT);

  return <></>;
};
export default BookingFlowContainer;
