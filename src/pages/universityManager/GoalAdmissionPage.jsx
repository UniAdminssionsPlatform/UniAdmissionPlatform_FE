import GoalAdmissionContainer from '../../features/universityManager/goalAdmission/GoalAdmission.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const GoalAdmissionPage = () => (
  <>
    <Helmet>
      <title>Trang tiêu chí tuyển sinh</title>
    </Helmet>
    <GoalAdmissionContainer />
  </>
);
export default GoalAdmissionPage;
