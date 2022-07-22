import { getAllMajorDepartment } from '../../../services/MajorDepartmentService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { useSelector } from 'react-redux';
import AddGoalAdmisisonModalComponent from './components/modal/AddGoalAdmissionModal.component';
import React, { useEffect, useState } from 'react';
import { getAllMajor } from '../../../services/MajorService';

const AddGoalAdmissionModalContainer = (props) => {
  const { isVisible, setVisible, selectedSchoolYear } = props;
  const { user } = useSelector((state) => state.authentication);

  const [schoolYear, setSchoolYear] = useState('');
  const [listMajorDepartment, setListMajorDepartment] = useState([]);
  const [listMajor, setListMajor] = useState([]);

  useEffect(() => {
    getYear(selectedSchoolYear);
    getMajorDepartments({
      'university-id': user.universityId,
      limit: 1000
    });
    getMajor({
      limit: 500
    });
  }, [selectedSchoolYear]);

  const handleOk = (data) => {
    setVisible(false);
  };
  const handleCancel = (data) => {
    setVisible(false);
  };

  const getYear = (data) => {
    getSchoolYear(data).then((result) => {
      setSchoolYear(result.data.data.year);
    });
  };

  const getMajorDepartments = (data) => {
    getAllMajorDepartment(data).then((result) => {
      setListMajorDepartment(result.data.data.list);
    });
  };

  const getMajor = (data) => {
    getAllMajor(data).then((result) => {
      setListMajor(result.data.data.list);
    });
  };

  return (
    <>
      <AddGoalAdmisisonModalComponent
        isVisible={isVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        schoolYear={schoolYear}
        listMajorDepartment={listMajorDepartment}
        listMajor={listMajor}
      />
    </>
  );
};
export default AddGoalAdmissionModalContainer;
