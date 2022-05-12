import { Button, Modal, Space } from 'antd';
import { setSelectedHighSchool } from '../../redux-flow/selectedHighSchool/selectedHighSchool-action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import HighSchoolSmallInformationComponent from './component/HighSchoolSmallInformation.component';
import HighSchoolTableComponent from './component/HighSchoolTable.component';
import LayoutPageWithout from '../commons/LayoutPage/LayoutPageWithout.component';
import ScheduleContainer from '../../containers/schedule/Schedule.container';
import SearchBarComponent from './component/SearchBar/SearchBar.component';
const ListHighSchool = (props) => {
  const dispatch = useDispatch();
  const { listHighSchool, isClicked, setIsClicked, setDataSearch, provinces, onChange, districts } = props;
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
                <Button type='primary' danger onClick={() => setIsModalOpen(true)}>
                  Tạo Sự kiện
                </Button>
              </Space>
            </div>
          ) : (
            <SearchBarComponent
              setDataSearch={setDataSearch}
              provinces={provinces}
              onChange={onChange}
              districts={districts}
            />
          )}
        </div>

        {isClicked ? (
          <ScheduleContainer selectedSchool={selectedSchool} />
        ) : (
          <HighSchoolTableComponent listHighSchool={listHighSchool} handleSelectedSchool={handleSelectedSchool} />
        )}
      </div>
    </LayoutPageWithout>
  );
};

export default ListHighSchool;
