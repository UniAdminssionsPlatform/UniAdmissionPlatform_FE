import BookingFlowContainer from '../../../features/universityManager/bookingFlow/BookingFlow.container';
import React from 'react';
import { Helmet } from 'react-helmet';
const HighSchoolBookingPage = () => (
  <>
    <Helmet>
      <title>Trang đặt lịch</title>
    </Helmet>
    <BookingFlowContainer />
  </>
);
export default HighSchoolBookingPage;
