import ModalEditComponent from '../../../../components/student/studentScore/component/modal/modalEdit.component';
import React, { useEffect, useState } from 'react';

const ModalEditContainer = (props) => {
  const { visible, setVisible } = props;
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
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
        isModalVisible={visible}
      />
    </>
  );
};
export default ModalEditContainer;
