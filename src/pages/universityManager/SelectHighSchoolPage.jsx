import React from 'react';
import SelectHighSchoolContainer from '../../features/universityManager/bookingFlow/selectHighSchool/SelectHighSchool.container';
import { Helmet } from 'react-helmet';

const SelectHighSchoolPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý sự kiện</title>
    </Helmet>
    <SelectHighSchoolContainer />
  </>
);

export default SelectHighSchoolPage;
