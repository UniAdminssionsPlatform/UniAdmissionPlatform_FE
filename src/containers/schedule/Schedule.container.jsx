import React, { useEffect, useState } from 'react';
import ScheduleEventComponent from '../../components/schedule/ScheduleEvent.component';
import { getListSlotBySchoolId } from '../../services/AdminUniversitySlotServices';
import { handleFailNotification, handleSuccessNotification } from '../../notification/CreateEventNotification';
import { Modal, Button, Space } from 'antd';
import CreateEventContainer from '../../containers/event/CreateEvent/CreateEvent.container';
import ListEventForUniversityContainer from '../event/ListEvent/listEventForUniversity.container';

const ScheduleContainer = (props) => {
  const { selectedSchool } = props;
  const [listSlot, setListSlot] = useState();
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [isNewEvent, setIsNewEvent] = useState();
  const [triggerLoadEvent, setTriggerLoadEvent] = useState(false);
  useEffect(() => {
    getListSlot(selectedSchool?.id);
  }, [selectedSchool]);
  const getListSlot = (id) => {
    if (id) {
      getListSlotBySchoolId(id)
        .then((res) => {
          handleSuccessNotification('Danh sách các slot trống');
          setListSlot(res.data.data.list);
        })
        .catch((err) => {
          handleFailNotification('Lỗi khi lấy danh sách');
        });
    }
  };
  const getListEventByHighSchoolId = (id) => {};
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
        title='Đăng ký event'
        visible={isModalOpen}
        onOk={handleClickOkModal}
        onCancel={handleCancelModal}
        width={'1000px'}>
        {isButtonShow ? (
          <Space>
            <ListEventForUniversityContainer />
          </Space>
        ) : null}
        {!isButtonShow ? isNewEvent ? <CreateEventContainer /> : null : null}
      </Modal>
      <ScheduleEventComponent
        listSlot={listSlot}
        setIsModalOpen={setIsModalOpen}
        setTriggerLoadEvent={setTriggerLoadEvent}
      />
    </>
  );
};
export default ScheduleContainer;
