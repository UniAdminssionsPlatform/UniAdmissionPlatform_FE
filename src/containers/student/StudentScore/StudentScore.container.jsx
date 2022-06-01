import React, { useEffect, useState } from 'react';
import StudentScoreComponent from '../../../components/student/studentScore/StudentScore.component';
import { useSelector } from 'react-redux';

const StudentScoreContainer = () => {
  const [score, setScore] = useState();
  const { user } = useSelector((state) => state.authentication);
  return (
    <>
      <StudentScoreComponent />
    </>
  );
};
export default StudentScoreContainer;
