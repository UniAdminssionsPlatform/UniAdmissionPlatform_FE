import React, { useEffect, useState } from 'react';
import AddGoalAdmisisonFormComponent from './components/form/AddGoalAdmissionForm.component';
import { getAllMajor } from '../../../services/MajorService';
import { getAllMajorDepartment } from '../../../services/MajorDepartmentService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { useSelector } from 'react-redux';
import { getAllSubjectGroup } from '../../../services/SubjectGroupService';

const AddGoalAdmissionFormContainer = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const { selectedSchoolYear } = props;

  const [schoolYear, setSchoolYear] = useState('');
  const [listMajorDepartment, setListMajorDepartment] = useState([]);
  const [listMajor, setListMajor] = useState([]);
  const [listSubjectGroup, setListSubjectGroup] = useState([]);

  const [visibleSubjectGroup, setVisibleSubjectGroup] = useState(true);

  useEffect(() => {
    getYear(selectedSchoolYear);
    getMajorDepartments({
      'university-id': user.universityId,
      limit: 1000
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

  const getSubjectGroups = (data) => {
    getAllSubjectGroup(data).then((result) => {
      setListSubjectGroup(result.data.data.list);
      setVisibleSubjectGroup(false);
    });
  };

  const onChangeMajor = (value) => {
    console.log('onChangeMajor: ', value);
    getSubjectGroups();
  };

  const onChangeSubjectGroup = (value) => {
    console.log('onChangeSubjectGroup: ', value);
  };
  return (
    <>
      <AddGoalAdmisisonFormComponent
        listMajorDepartment={listMajorDepartment}
        listSubjectGroup={listSubjectGroup}
        schoolYear={schoolYear}
        visibleSubjectGroup={visibleSubjectGroup}
        onChangeMajor={onChangeMajor}
        onChangeSubjectGroup={onChangeSubjectGroup}
      />
    </>
  );
};
export default AddGoalAdmissionFormContainer;
