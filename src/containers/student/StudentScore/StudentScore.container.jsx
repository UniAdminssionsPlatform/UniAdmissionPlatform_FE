import { getAllSubjectGroup } from '../../../services/SubjectGroupService';
import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { useDebouncedCallback } from 'use-debounce';
import React, { useEffect, useState } from 'react';
import StudentScoreComponent from '../../../components/student/studentScore/StudentScore.component';

const StudentScoreContainer = () => {
  const [subjectGroup, setSubjectGroup] = useState();
  const [schoolYear, setSchoolYear] = useState();
  const [selectedSubjectGroup, setSelectedSubjectGroup] = useState(1);
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(1);
  const [loading, setLoading] = useState(true);

  const onChangeSubjectGroup = useDebouncedCallback(
    // function
    (values) => {
      setSelectedSubjectGroup(values);
      setLoading(true);
    },
    // delay in ms
    2000
  );

  const onChangeSchoolyear = useDebouncedCallback(
    // function
    (values) => {
      setSelectedSchoolYear(values);
      setLoading(true);
    },
    // delay in ms
    2000
  );

  useEffect(() => {
    getSubjectGroup();
    getSchoolyear();
  }, []);

  const getSchoolyear = () => {
    getAllSchoolYear().then((result) => {
      setSchoolYear(result.data.data.list);
    });
  };

  const getSubjectGroup = () => {
    getAllSubjectGroup().then((result) => {
      setSubjectGroup(result.data.data.list);
    });
  };

  return (
    <>
      <StudentScoreComponent
        subjectGroup={subjectGroup}
        schoolYear={schoolYear}
        onChangeSubjectGroup={onChangeSubjectGroup}
        onChangeSchoolyear={onChangeSchoolyear}
        selectedSubjectGroup={selectedSubjectGroup}
        selectedSchoolYear={selectedSchoolYear}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};
export default StudentScoreContainer;
