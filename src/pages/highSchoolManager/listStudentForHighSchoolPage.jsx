import ListStudentForHighSchoolContainer from '../../features/highSchoolManager/students/ListStudentForHighSchoolContainer';
import React from 'react';
import { Helmet } from 'react-helmet';

const ListStudentForHighSchoolPage = () => (
  <>
    <Helmet>
      <title>Trang quản lý học sinh</title>
    </Helmet>
    <ListStudentForHighSchoolContainer />
  </>
);
export default ListStudentForHighSchoolPage;
