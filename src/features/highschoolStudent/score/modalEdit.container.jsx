import { getScore } from '../../../services/StudentScoreService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { getAllSubject } from '../../../services/SubjectService';
import { handleModifyNotification, handleNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import ModalEditComponent from './components/modal/modalEdit.component';
import React, { useEffect, useState } from 'react';

const ModalEditContainer = (props) => {
  const { visible, setVisible, selectedSchoolYear } = props;

  const [listSubject, setListSubject] = useState();
  const [listScore, setListScore] = useState();
  const [schoolYear, setSchoolYear] = useState('');
  const [schoolRecordId, setSchoolRecordId] = useState(0);

  const [isDisableScoreField, setIsDisableScoreField] = useState(true);

  const [loading, setLoading] = useState(true);

  const onChangeSubject = () => {
    setIsDisableScoreField(false);
  };

  const loadListSubject = () => {
    getAllSubject().then((result) => {
      setListSubject(result.data.data.list);
    });
  };

  useEffect(() => {
    loadListSubject();
    getYear(selectedSchoolYear);
    loadData(selectedSchoolYear);
  }, [selectedSchoolYear]);

  const getYear = (data) => {
    getSchoolYear(data).then((result) => {
      setSchoolYear(result.data.data.year);
    });
  };
  const loadData = (schoolYear) => {
    getScore(schoolYear)
      .then((result) => {
        setListScore(result.data.data.studentRecordItems);
        setSchoolRecordId(result.data.data.id);
        setLoading(false);
        if (result.data.data.studentRecordItems.length === 0) handleNotification('error', 'Học bạ hiện chưa có điểm');
        else handleNotification('success');
      })
      .catch((error) => {
        setListScore([]);
        setLoading(false);
        handleNotification('error', 'Năm học này chưa có học bạ');
      });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
  };

  class update {
    constructor(studentRecordItemId, score, subjectId) {
      this.studentRecordItemId = studentRecordItemId;
      this.subjectId = subjectId;
      this.score = score;
    }
  }

  const [updateList, setUpdateList] = useState([]);

  const handleEdit = (values) => {
    values.schoolRecordId = schoolRecordId;
    values.schoolYearId = selectedSchoolYear;

    console.log('diem hoc ba: ', values);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <ModalEditComponent
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
        listSubject={listSubject}
        listScore={listScore}
        isModalVisible={visible}
        schoolYear={schoolYear}
        onChangeSubject={onChangeSubject}
        isDisableScoreField={isDisableScoreField}
        loading={loading}
      />
    </>
  );
};
export default ModalEditContainer;
