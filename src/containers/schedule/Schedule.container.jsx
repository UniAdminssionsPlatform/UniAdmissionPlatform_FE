import React, { useEffect, useState } from 'react';
import ScheduleComponent from '../../components/schedule/Schedule.component';
import { getListSlotBySchoolId } from '../../services/AdminUniversitySlotServices';
import { handleFailNotification, handleSuccessNotification } from '../../notification/CreateEventNotification';
import { Modal, Button, Space } from 'antd';
import CreateEventContainer from '../../containers/event/CreateEvent/CreateEvent.container';

const ScheduleContainer = (props) => {
  const { selectedSchool } = props;
  const [listSlot, setListSlot] = useState();
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [isNewEvent, setIsNewEvent] = useState();
  useEffect(() => {
    getListSlot(selectedSchool?.id);
  }, [selectedSchool]);
  const getListSlot = (id) => {
    if (id) {
      getListSlotBySchoolId(id)
        .then((res) => {
          handleSuccessNotification('Danh sách các slot trống');
          console.log(res.data.data.list);
          setListSlot(res.data.data.list);
        })
        .catch((err) => {
          handleFailNotification('Lỗi khi lấy danh sách');
        });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickOkModal = () => {
    setIsModalOpen(false);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  const handleClickButton = (choice) => {
    setIsButtonShow(false);
    choice === 1 ? setIsNewEvent(true) : setIsNewEvent(false);
  };
  return (
    <>
      <Modal
        title='Tạo sự kiện tuyển sinh'
        visible={isModalOpen}
        onOk={handleClickOkModal}
        onCancel={handleCancelModal}
        width={'1000px'}>
        {isButtonShow ? (
          <Space>
            <Button type='primary' onClick={() => handleClickButton(1)} danger>
              Tạo mới một event
            </Button>
            <Button type='primary' onClick={() => handleClickButton(0)}>
              Đặt lịch bằng event đã tạo
            </Button>
          </Space>
        ) : null}
        {!isButtonShow ? isNewEvent ? <CreateEventContainer /> : null : null}
      </Modal>
      <ScheduleComponent listSlot={listSlot} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
export default ScheduleContainer;
