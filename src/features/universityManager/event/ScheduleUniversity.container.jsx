import { Drawer, Modal, Space } from 'antd';
import { getListSlotBySchoolId } from '../../../services/AdminUniversitySlotServices';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import CreateEventContainer from './CreateEvent.container';
import ListEventForRegisterUniversityContainer from './ListEventForRegisterUniversity.container';
import React, { useEffect, useState } from 'react';
import ScheduleUniversityComponent from '../../../components/schedule/ScheduleUniversity.component';
import UniversityDrawerComponent from './components/University.drawer.component';

const ScheduleUniversityContainer = (props) => {
  const { selectedSchool } = props;
  const [listSlot, setListSlot] = useState();
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [isNewEvent, setIsNewEvent] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
            <ListEventForRegisterUniversityContainer />
          </Space>
        ) : null}
        {!isButtonShow ? isNewEvent ? <CreateEventContainer /> : null : null}
      </Modal>
      <UniversityDrawerComponent
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        selectedSchool={selectedSchool}
      />
      <ScheduleUniversityComponent listSlot={listSlot} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default ScheduleUniversityContainer;
