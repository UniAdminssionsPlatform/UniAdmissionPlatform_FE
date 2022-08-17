import { getProfileStudent } from '../../../../services/StudentProfileService';
import { handleNotification } from '../../../../notification/DetailStudentNotification';
import React, { useEffect, useState } from 'react';
import StudentProfileComponent from './components/students/StudentProfile.component';

const StudentProfileContainer = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const loadData = () => {
    getProfileStudent()
      .then((result) => {
        setData(result.data.data);
        handleNotification('success');
        setLoading(false);
      })
      .catch((error) => {
        handleNotification('error');
        setLoading(true);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <StudentProfileComponent student={data} loading={loading} />
    </>
  );
};
export default StudentProfileContainer;
