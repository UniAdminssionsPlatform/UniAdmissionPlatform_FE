import { getAllSubject } from '../../../services/SubjectService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { getScore, modifyScore } from '../../../services/StudentScoreService';
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

  class updateScoreObj {
    constructor(id, score) {
      this.id = id;
      this.score = score;
    }
  }

  const [update, setUpdate] = useState([]);

  const reload = () => {
    window.location.reload();
    setVisible(false);
  };

  const updateScoreAPI = (data) => {
    modifyScore(data)
      .then((result) => {
        handleModifyNotification('success', result.data.msg);
        setTimeout(reload, 2000);
      })
      .catch((error) => {
        handleModifyNotification('error', error.response.data.msg);
      });
  };

  // edit existing score in school record
  const handleEditTab1 = (values) => {
    //convert object to array
    const scoreArray = Object.entries(values.scoreList);
    scoreArray.forEach(([id, score]) => {
      setUpdate(update.push(new updateScoreObj(id, score)));
    });
    //set value for 'updateList' in recordItems
    const recordItem = {
      updateList: update
    };
    values.schoolRecordId = schoolRecordId;
    values.schoolYearId = selectedSchoolYear;
    values.recordItems = recordItem;

    setLoading(true);
    updateScoreAPI(values);
  };

  // add more score to school record
  const handleEditTab2 = (values) => {
    // set value for 'newList' in recordItems
    const recordItem = {
      newList: values.newList
    };

    values.schoolRecordId = schoolRecordId;
    values.schoolYearId = selectedSchoolYear;
    values.recordItems = recordItem;

    setLoading(true);
    updateScoreAPI(values);
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
        handleEditTab1={handleEditTab1}
        handleEditTab2={handleEditTab2}
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
