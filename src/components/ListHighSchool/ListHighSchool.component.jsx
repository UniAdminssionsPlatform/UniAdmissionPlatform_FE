import LayoutPageWithout from '../commons/LayoutPage/LayoutPageWithout.component';
import SearchBarComponent from './component/SearchBar/SearchBar.component';
import { useDispatch } from 'react-redux';
import { SetSelectedEvent } from '../../redux-flow/selectedHighSchool/selectedHighSchool-action';
import HighSchoolTableComponent from './component/HighSchoolTable.component';
import ScheduleComponent from '../schedule/Schedule.component';
import HighSchoolSmallInfomationComponent from './component/HighSchoolSmallInfomation.component';
import { Button, Space, Modal } from 'antd';
import { useState } from 'react';
import CreateEventComponent from '../event/CreateEvent/CreateEvent.component';
const ListHighSchool = (props) => {
  const dispatch = useDispatch();
  const { listHighSchool, isClicked, setIsClicked } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSelectedEvent = (event) => {
    setIsClicked(true);
    dispatch(SetSelectedEvent(event));
  };
  const handleClickOkModal = () => {
    setIsModalOpen(false);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  return (
    <LayoutPageWithout
      LayoutPage
      subHeading='Danh sách các trường cấp 3 có thể tổ chức sự kiện tuyển sinh'
      headingEmoji='⚙'
      heading='Dash board'>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          {isClicked ? (
            <div>
              <HighSchoolSmallInfomationComponent />
              <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                <Button type='primary' onClick={() => setIsClicked(false)}>
                  Chọn một trường khác
                </Button>
                <Button type='primary' danger onClick={() => setIsModalOpen(true)}>
                  Tạo Sự kiện
                </Button>
                <Modal
                  title='Tạo sự kiện tuyển sinh'
                  visible={isModalOpen}
                  onOk={handleClickOkModal}
                  onCancel={handleCancelModal}
                  width={'1000px'}>
                  <CreateEventComponent />
                </Modal>
              </Space>
            </div>
          ) : (
            <SearchBarComponent />
          )}
        </div>

        {isClicked ? (
          <ScheduleComponent />
        ) : (
          <HighSchoolTableComponent listHighSchool={listHighSchool} handleSelectedEvent={handleSelectedEvent} />
        )}
      </div>
    </LayoutPageWithout>
  );
};

export default ListHighSchool;
