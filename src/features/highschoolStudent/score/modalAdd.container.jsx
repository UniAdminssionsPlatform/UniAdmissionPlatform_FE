import { addScore, getBaseScore } from '../../../services/StudentScoreService';
import { getSchoolYear } from '../../../services/SchoolYearService';
import { handleAddNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import ModalAddComponent from './components/modal/modalAdd.component';
import React, { useEffect, useState } from 'react';

const ModalAddContainer = (props) => {
  const { visible, setVisible, selectedSchoolYear } = props;

  const [baseScore, setBaseScore] = useState();
  const [schoolYear, setSchoolYear] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
    getYear(selectedSchoolYear);
  }, [selectedSchoolYear]);

  const reload = () => {
    window.location.reload();
    setVisible(false);
  };

  const add = (values) => {
    addScore(values)
      .then((result) => {
        handleAddNotification('success');
        setTimeout(reload, 2000);
      })
      .catch((err) => {
        handleAddNotification('error', err.response.data.msg);
      });
  };

  const loadData = () => {
    getBaseScore().then((result) => {
      setBaseScore(result.data.data);
      setLoading(false);
    });
  };

  const getYear = (data) => {
    getSchoolYear(data).then((result) => {
      setSchoolYear(result.data.data.year);
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  class recordItems {
    constructor(score, subjectId) {
      this.subjectId = subjectId;
      this.score = score;
    }
  }
  const [recordItemList, setRecordItemList] = useState([]);

  const handleEdit = (values) => {
    const scoreArray = Object.entries(values.scoreList);
    scoreArray.forEach(([id, score]) => {
      setRecordItemList(recordItemList.push(new recordItems(score, id)));
    });

    values.name = `Học bạ năm ${schoolYear}`;
    values.schoolYearId = selectedSchoolYear;
    values.recordItems = recordItemList;

    setLoading(true);
    add(values);
  };

  return (
    <>
      <ModalAddComponent
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
        isModalVisible={visible}
        schoolYear={schoolYear}
        loading={loading}
        baseScore={baseScore}
      />
    </>
  );
};
export default ModalAddContainer;
