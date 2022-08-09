import SlotContainer from '../../features/highSchoolManager/slot/Slot.container';
import { Helmet } from 'react-helmet';
import React from 'react';

const SlotManagerPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý slot đăng ký</title>
    </Helmet>
    <SlotContainer />
  </>
);
export default SlotManagerPage;
