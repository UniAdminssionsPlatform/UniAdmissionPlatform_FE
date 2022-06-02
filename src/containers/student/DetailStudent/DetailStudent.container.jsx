import { getDetailStudent } from '../../../services/DetailStudentService';
import { handleNotification } from '../../../notification/DetailStudentNotification';
import DetailStudentComponent from '../../../components/student/DetailStudent/DetailStudent.component';
import React, { useEffect, useState } from 'react';

const DetailStudentContainer = (props) => {
  const { visible, setVisible, studentID } = props;

  const [student, setStudent] = useState('');

  const loadData = (id) => {
    getDetailStudent(id).then((result) => {
      setStudent(result.data.data);
      handleNotification('success');
    });
  };

  useEffect(() => {
    loadData(studentID);
  }, [studentID]);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <DetailStudentComponent
        student={student}
        visible={visible}
        setVisible={setVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};
export default DetailStudentContainer;
