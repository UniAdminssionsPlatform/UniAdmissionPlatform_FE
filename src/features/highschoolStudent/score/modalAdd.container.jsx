import { addScore, getBaseScore } from '../../../services/StudentScoreService';
import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { handleAddNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import ModalAddComponent from './components/modal/modalAdd.component';
import React, { useEffect, useState } from 'react';

const ModalAddContainer = (props) => {
  const { visible, setVisible } = props;

  const [schoolYear, setSchoolYear] = useState();
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(6);
  const [baseScore, setBaseScore] = useState();

  const [loading, setLoading] = useState(true);

  const onChangeSchoolYear = useDebouncedCallback(
    // function
    (values) => {
      setLoading(true);
      setSelectedSchoolYear(values);
    },
    // delay in ms
    1000
  );

  const loadData = () => {
    getBaseScore().then((result) => {
      setBaseScore(result.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSchoolyear();
    loadData();
  }, []);

  const getSchoolyear = () => {
    getAllSchoolYear().then((result) => {
      setSchoolYear(result.data.data.list);
      setLoading(false);
    });
  };

  const add = (data) => {
    addScore(data)
      .then((result) => {
        handleAddNotification('success');
        setVisible(false);
      })
      .catch((err) => {
        handleAddNotification('error');
      });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
  };
  class recordItems {
    constructor(score, subjectId) {
      this.subjectId = subjectId;
      this.score = score;
    }
  }

  class score {
    constructor(score, name) {
      this.name = name;
      this.score = score;
    }
  }
  const [recordItemList, setRecordItemList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const subjectList = ['Toán', 'Lý', 'Anh', 'Sinh', 'Sử', 'Địa', 'Hóa', 'Văn', 'GDCD'];

  const handleEdit = (values) => {
    setScoreList(scoreList.push(new score(values.Toán, subjectList[0])));
    setScoreList(scoreList.push(new score(values.Lý, subjectList[1])));
    setScoreList(scoreList.push(new score(values.Anh, subjectList[2])));
    setScoreList(scoreList.push(new score(values.Sinh, subjectList[3])));
    setScoreList(scoreList.push(new score(values.Sử, subjectList[4])));
    setScoreList(scoreList.push(new score(values.Địa, subjectList[5])));
    setScoreList(scoreList.push(new score(values.Hóa, subjectList[6])));
    setScoreList(scoreList.push(new score(values.Văn, subjectList[7])));
    setScoreList(scoreList.push(new score(values.GDCD, subjectList[8])));

    for (let i = 0; i < baseScore.length; i++) {
      for (let j = 0; j < scoreList.length; j++) {
        if (baseScore?.[i].name === scoreList?.[j].name)
          setRecordItemList(recordItemList.push(new recordItems(scoreList?.[j].score, baseScore?.[i].id)));
      }
    }

    values.name = 'Học bạ';
    values.schoolYearId = selectedSchoolYear;
    values.recordItems = recordItemList;

    add(values);

    console.log('diem hoc ba: ', values);
  };

  const handleCancel = () => {
    setVisible(false);
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
        onChangeSchoolYear={onChangeSchoolYear}
        loading={loading}
        baseScore={baseScore}
      />
    </>
  );
};
export default ModalAddContainer;
