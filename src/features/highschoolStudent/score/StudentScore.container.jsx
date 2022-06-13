import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { getAllSubjectGroup } from '../../../services/SubjectGroupService';
import { useDebouncedCallback } from 'use-debounce';
import React, { useEffect, useState } from 'react';
import StudentScoreComponent from './components/StudentScore.component';

const StudentScoreContainer = () => {
  const [subjectGroup, setSubjectGroup] = useState();
  const [schoolYear, setSchoolYear] = useState();
  const [selectedSubjectGroup, setSelectedSubjectGroup] = useState(1);
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(6);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(true);

  const onChangeSubjectGroup = useDebouncedCallback((values) => {
    setSelectedSubjectGroup(values);
    setLoading(true);
  }, 2000);

  const onChangeSchoolYear = useDebouncedCallback((values) => {
    setSelectedSchoolYear(values);
    setLoading(true);
  }, 2000);

  useEffect(() => {
    getSubjectGroup();
    getSchoolYear();
  }, []);

  const getSchoolYear = () => {
    getAllSchoolYear().then((result) => {
      setSchoolYear(result.data.data.list);
      setSearchLoading(false);
    });
  };

  const getSubjectGroup = () => {
    getAllSubjectGroup().then((result) => {
      setSubjectGroup(result.data.data.list);
      setSearchLoading(false);
    });
  };

  return (
    <>
      <StudentScoreComponent
        subjectGroup={subjectGroup}
        schoolYear={schoolYear}
        onChangeSubjectGroup={onChangeSubjectGroup}
        onChangeSchoolYear={onChangeSchoolYear}
        selectedSubjectGroup={selectedSubjectGroup}
        selectedSchoolYear={selectedSchoolYear}
        loading={loading}
        setLoading={setLoading}
        searchLoading={searchLoading}
        setSearchLoading={setSearchLoading}
      />
    </>
  );
};
export default StudentScoreContainer;
