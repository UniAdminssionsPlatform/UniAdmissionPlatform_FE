import React from 'react';
import StudentScoreContainer from '../../features/highschoolStudent/score/StudentScore.container';
import { Helmet } from 'react-helmet';

const StudentScorePage = () => (
  <>
    <Helmet>
      <title>Trang quản lý điểm</title>
    </Helmet>
    <StudentScoreContainer />
  </>
);
export default StudentScorePage;
