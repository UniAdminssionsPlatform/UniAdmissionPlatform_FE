import React, { useState, useEffect } from 'react';
import StudentProfileComponent from './components/students/StudentProfile.component';

const StudentProfileContainer = () => {
  const [data, setData] = useState();
  return (
    <>
      <StudentProfileComponent />
    </>
  );
};
export default StudentProfileContainer;
