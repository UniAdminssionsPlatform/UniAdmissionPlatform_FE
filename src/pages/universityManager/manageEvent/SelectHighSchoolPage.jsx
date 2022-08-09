import React from 'react';
import SelectHighSchoolContainer from '../../../features/universityManager/bookingFlow/selectHighSchool/SelectHighSchool.container';
import { Helmet } from 'react-helmet';

const SelectHighSchoolPage = () => (
  <div className='p-4'>
    <Helmet>
      <title>Trang chọn trường</title>
    </Helmet>
    <SelectHighSchoolContainer />
  </div>
);

export default SelectHighSchoolPage;
