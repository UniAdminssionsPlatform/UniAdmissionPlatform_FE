import { GetGoalAdmisisonsNotification } from '../../../notification/GoalAdmisisonNotification';
import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { getGoalAdmission } from '../../../services/GoalAdmissionService';
import { useDebouncedCallback } from 'use-debounce';
import { useSelector } from 'react-redux';
import GoalAdmissionComponent from './components/GoalAdmission.component';
import React, { useEffect, useState } from 'react';
import TitlePageComponent from '../../../components/decorator/TitlePage.component';

const GoalAdmissionContainer = () => {
  const [listSchoolYear, setListSchoolYear] = useState([]);
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(6);
  const { user } = useSelector((state) => state.authentication);

  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const getSchoolYear = () => {
    getAllSchoolYear().then((result) => {
      setListSchoolYear(result.data.data.list);
      setLoading(false);
    });
  };

  const loadData = (value) => {
    getGoalAdmission(value)
      .then((result) => {
        if (result.data.data.universityProgramAdmissions.length === 0) {
          setData([]);
          GetGoalAdmisisonsNotification('success', 'Năm học này chưa có tiêu chí tuyển sinh');
        } else {
          setData(result.data.data.universityProgramAdmissions);
          GetGoalAdmisisonsNotification('success', 'Lấy tiêu chí tuyển sinh thành công');
        }
      })
      .catch((err) => {
        GetGoalAdmisisonsNotification('error');
      });
  };

  const onChangeYear = useDebouncedCallback((values) => {
    setSelectedSchoolYear(values);
    setLoading(true);
  }, 1000);

  useEffect(() => {
    getSchoolYear();
    loadData({
      university: user.universityId ? user.universityId : '',
      'school-year-id': selectedSchoolYear ? selectedSchoolYear : ''
    });
  }, [selectedSchoolYear, user.university_id]);
  return (
    <>
      <TitlePageComponent
        title={'Tiêu chí tuyển sinh'}
        subTitle={'Bạn có thể tìm kiếm tiêu chí tuyển sinh theo từng năm học.'}
      />
      <GoalAdmissionComponent
        listSchoolYear={listSchoolYear}
        selectedSchoolYear={selectedSchoolYear}
        data={data}
        onChangeYear={onChangeYear}
        loading={loading}
      />
    </>
  );
};
export default GoalAdmissionContainer;
