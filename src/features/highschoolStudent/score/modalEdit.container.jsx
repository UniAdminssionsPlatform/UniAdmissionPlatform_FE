import { addScore, getScore, modifyScore } from '../../../services/StudentScoreService';
import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { getAllSubjectGroup } from '../../../services/SubjectGroupService';
import { handleModifyNotification, handleNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import ModalEditComponent from './components/modal/modalEdit.component';
import React, { useEffect, useState } from 'react';

const ModalEditContainer = (props) => {
  const { visible, setVisible } = props;

  const [subjectGroup, setSubjectGroup] = useState();
  const [schoolYear, setSchoolYear] = useState();
  const [selectedSubjectGroup, setSelectedSubjectGroup] = useState(1);
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(1);

  const [loading, setLoading] = useState(true);

  const [subject1, setSubject1] = useState({
    id: 0,
    subjectId: 0,
    schoolRecordId: 0,
    subjectName: '',
    score: 0
  });
  const [subject2, setSubject2] = useState({
    id: 0,
    subjectId: 0,
    schoolRecordId: 0,
    subjectName: '',
    score: 0
  });
  const [subject3, setSubject3] = useState({
    id: 0,
    subjectId: 0,
    schoolRecordId: 0,
    subjectName: '',
    score: 0
  });

  const loadData = (subjectGroup, schoolYear) => {
    getScore(subjectGroup, schoolYear)
      .then((result) => {
        const editData = result.data.studentRecordItems;
        setSubject1({
          id: editData[0].id,
          subjectId: editData[0].subject.id,
          subjectName: editData[0].subject.name,
          schoolRecordId: result.data.id,
          score: editData[0].score
        });
        setSubject2({
          id: editData[1].id,
          subjectId: editData[1].subject.id,
          subjectName: editData[1].subject.name,
          schoolRecordId: result.data.id,
          score: editData[1].score
        });
        setSubject3({
          id: editData[2].id,
          subjectId: editData[2].subject.id,
          subjectName: editData[2].subject.name,
          schoolRecordId: result.data.id,
          score: editData[2].score
        });
        handleNotification('success');
        setLoading(false);
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  const onChangeSubjectGroup = useDebouncedCallback((values) => {
    setLoading(true);
    setSelectedSubjectGroup(values);
  }, 1000);

  const onChangeSchoolYear = useDebouncedCallback(
    // function
    (values) => {
      setLoading(true);
      setSelectedSchoolYear(values);
    },
    // delay in ms
    1000
  );

  useEffect(() => {
    getSubjectGroup();
    getSchoolyear();
    loadData(selectedSubjectGroup, selectedSchoolYear);
  }, [selectedSubjectGroup, selectedSchoolYear]);

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

  const editScore = (data) => {
    modifyScore(data)
      .then((result) => {
        handleModifyNotification('success');
      })
      .catch((err) => {
        handleModifyNotification('error');
      });
  };

  const add = (data) => {
    addScore(data)
      .then((result) => {
        handleModifyNotification('success');
      })
      .catch((err) => {
        handleModifyNotification('error');
      });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
  };

  const handleEdit = (values) => {
    subject1.score = values.subject1;
    subject2.score = values.subject2;
    subject3.score = values.subject3;
    if (subject1.id === 0) add(subject1);
    else editScore(subject1);
    if (subject1.id === 0) add(subject1);
    else editScore(subject1);

    if (subject2.id === 0) add(subject2);
    else editScore(subject2);

    if (subject3.id === 0) add(subject3);
    else editScore(subject3);

    loadData(selectedSubjectGroup, selectedSchoolYear);
  };

  const handleCancel = () => {
    window.location.reload();
    setVisible(false);
  };

  return (
    <>
      <ModalEditComponent
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
        isModalVisible={visible}
        subjectGroup={subjectGroup}
        schoolYear={schoolYear}
        onChangeSubjectGroup={onChangeSubjectGroup}
        onChangeSchoolYear={onChangeSchoolYear}
        subject1={subject1}
        subject2={subject2}
        subject3={subject3}
        loading={loading}
      />
    </>
  );
};
export default ModalEditContainer;
