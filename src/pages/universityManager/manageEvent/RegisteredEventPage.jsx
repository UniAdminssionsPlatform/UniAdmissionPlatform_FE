import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import ListEventRegisteredContainer from '../../../features/universityManager/manageEvent/ListEventRegistered.container';
import React from 'react';

const RegisteredEventPage = () => (
  <>
    <LayoutPageWithout subHeading='Các sự kiện đã đăng ký'>
      <ListEventRegisteredContainer />
    </LayoutPageWithout>
  </>
);
export default RegisteredEventPage;
