import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import ManageEventContainer from '../../../features/universityManager/manageEvent/ManageEvent.container';
import React from 'react';

const RegisteredEventPage = () => (
  <>
    <LayoutPageWithout subHeading='Các sự kiện đã đăng ký'>
      <ManageEventContainer />
    </LayoutPageWithout>
  </>
);
export default RegisteredEventPage;
