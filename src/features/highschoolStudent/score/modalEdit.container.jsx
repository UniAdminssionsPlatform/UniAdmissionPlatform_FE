import { addScore, getBaseScore } from '../../../services/StudentScoreService';
import { getAllSchoolYear } from '../../../services/SchoolYearService';
import { getAllSubject } from '../../../services/SubjectService';
import { handleAddNotification } from '../../../notification/StudentScoreNotification';
import { useDebouncedCallback } from 'use-debounce';
import ModalEditComponent from './components/modal/modalEdit.component';
import React, { useEffect, useState } from 'react';

const ModalEditContainer = (props) => {
  const { visible, setVisible } = props;

  const [schoolYear, setSchoolYear] = useState();
  const [selectedSchoolYear, setSelectedSchoolYear] = useState(6);

  const [listSubject, setListSubject] = useState();

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

  const loadListSubject = () => {
    getAllSubject().then((result) => {
      setListSubject(result.data.data.list);
    });
  };

  useEffect(() => {
    getSchoolyear();
    loadListSubject();
  }, []);

  const getSchoolyear = () => {
    getAllSchoolYear().then((result) => {
      setSchoolYear(result.data.data.list);
      setLoading(false);
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setVisible(false);
  };
  const subjectList = ['Toán', 'Lý', 'Anh', 'Sinh', 'Sử', 'Địa', 'Hóa', 'Văn', 'GDCD'];

  const handleEdit = (values) => {
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
        isModalVisible={visible}
        schoolYear={schoolYear}
        onChangeSchoolYear={onChangeSchoolYear}
        loading={loading}
      />
    </>
  );
};
export default ModalEditContainer;
