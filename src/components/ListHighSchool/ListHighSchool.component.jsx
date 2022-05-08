import LayoutPageWithout from '../commons/LayoutPage/LayoutPageWithout.component';
import SearchBarComponent from './component/SearchBar/SearchBar.component';
import { useDispatch } from 'react-redux';
import { setSelectedHighSchool } from '../../redux-flow/selectedHighSchool/selectedHighSchool-action';
import HighSchoolTableComponent from './component/HighSchoolTable.component';
import HighSchoolSmallInformationComponent from './component/HighSchoolSmallInformation.component';
import { Button, Space, Modal } from 'antd';
import { useState } from 'react';
import ScheduleContainer from '../../containers/schedule/Schedule.container';

const ListHighSchool = (props) => {
  const dispatch = useDispatch();
  const { listHighSchool, isClicked, setIsClicked } = props;
  const [selectedSchool, setSelectedSchool] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSelectedSchool = (school) => {
    setSelectedSchool(school);
    setIsClicked(true);
    dispatch(setSelectedHighSchool(school));
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
              <HighSchoolSmallInformationComponent />
              <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                <Button type='primary' onClick={() => setIsClicked(false)}>
                  Chọn một trường khác
                </Button>
                {/*<Button type='primary' danger onClick={() => setIsModalOpen(true)}>*/}
                {/*  Tạo Sự kiện*/}
                {/*</Button>*/}
              </Space>
            </div>
          ) : (
            <SearchBarComponent />
          )}
        </div>

        {isClicked ? (
          <ScheduleContainer selectedSchool={selectedSchool} />
        ) : (
          // <ScheduleComponent listSlot={listSlot} />
          <HighSchoolTableComponent listHighSchool={listHighSchool} handleSelectedSchool={handleSelectedSchool} />
        )}
      </div>
    </LayoutPageWithout>
  );
};

export default ListHighSchool;
