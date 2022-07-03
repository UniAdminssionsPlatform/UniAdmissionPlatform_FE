import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { getScore } from '../../../services/StudentScoreService';
import { handleNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import React, { useEffect, useState } from 'react';
import StudentScoreComponent from './components/StudentScore.component';

const StudentScoreContainer = () => {
  const [schoolYear, setSchoolYear] = useState();
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(6);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(true);
  const [data, setData] = useState();
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableEditButton, setDisableEditButton] = useState(false);

  const onChangeSchoolYear = useDebouncedCallback((values) => {
    setSelectedSchoolYear(values);
    setLoading(true);
  }, 1000);

  useEffect(() => {
    loadData(selectedSchoolYear);
    getSchoolYear();
  }, [selectedSchoolYear]);

  const loadData = (schoolYear) => {
    getScore(schoolYear)
      .then((result) => {
        setData(result.data.data.studentRecordItems);
        setLoading(false);
        setDisableEditButton(false);
        setDisableAddButton(true);
        if (result.data.data.studentRecordItems.length === 0) handleNotification('error', 'Học bạ hiện chưa có điểm');
        else handleNotification('success');
      })
      .catch((error) => {
        setData([]);
        setLoading(false);
        handleNotification('error', 'Năm học này chưa có học bạ');
        setDisableAddButton(false);
        setDisableEditButton(true);
      });
  };

  const getSchoolYear = () => {
    getAllSchoolYear().then((result) => {
      setSchoolYear(result.data.data.list);
      setSearchLoading(false);
    });
  };

  return (
    <>
      <StudentScoreComponent
        schoolYear={schoolYear}
        onChangeSchoolYear={onChangeSchoolYear}
        selectedSchoolYear={selectedSchoolYear}
        loading={loading}
        setLoading={setLoading}
        searchLoading={searchLoading}
        setSearchLoading={setSearchLoading}
        data={data}
        disableAddButton={disableAddButton}
        disableEditButton={disableEditButton}
      />
    </>
  );
};
export default StudentScoreContainer;
