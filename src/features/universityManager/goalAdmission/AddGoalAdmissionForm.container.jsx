import React, { useEffect, useState } from 'react';
import AddGoalAdmisisonFormComponent from './components/form/AddGoalAdmissionForm.component';
import { getAllMajor } from '../../../services/MajorService';
import { getAllMajorDepartment } from '../../../services/MajorDepartmentService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { useSelector } from 'react-redux';

const AddGoalAdmissionFormContainer = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const { selectedSchoolYear } = props;

  const [schoolYear, setSchoolYear] = useState('');
  const [listMajorDepartment, setListMajorDepartment] = useState([]);
  const [listMajor, setListMajor] = useState([]);

  useEffect(() => {
    getYear(selectedSchoolYear);
    getMajor({
      limit: 500
    });
  }, [selectedSchoolYear]);

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

  const onChangeMajor = (value) => {
    getMajorDepartments({
      'university-id': user.universityId,
      'major-parent-id': 190,
      limit: 1000
    });
  };
  return (
    <>
      <AddGoalAdmisisonFormComponent
        listMajor={listMajor}
        listMajorDepartment={listMajorDepartment}
        schoolYear={schoolYear}
        onChangeMajor={onChangeMajor}
      />
    </>
  );
};
export default AddGoalAdmissionFormContainer;
