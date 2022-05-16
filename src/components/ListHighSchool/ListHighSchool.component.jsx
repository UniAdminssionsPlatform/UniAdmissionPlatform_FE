import SearchBarComponent from './component/SearchBar/SearchBar.component';
import { useDispatch } from 'react-redux';
import HighSchoolTableComponent from './component/HighSchoolTable.component';
import HighSchoolSmallInformationComponent from './component/HighSchoolSmallInfomation.component';
import { Button, Space } from 'antd';
import ScheduleContainer from '../../containers/schedule/Schedule.container';
import { useState } from 'react';
import { setSelectedHighSchool } from '../../redux-flow/selectedHighSchool/selectedHighSchool-action';
const ListHighSchool = (props) => {
  const dispatch = useDispatch();
  const { listHighSchool, isClicked, setIsClicked, setDataSearch, provinces, onChange, districts, isDisableDistrict } =
    props;
  const [currentHighSchoolSelected, setCurrentHighSchoolSelected] = useState();
  const handleSelectedSchool = (HighSchool) => {
    setCurrentHighSchoolSelected(HighSchool);
    setIsClicked(true);
    dispatch(setSelectedHighSchool(HighSchool));
  };

  return (
    <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
      <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
        {isClicked ? (
          <div>
            <HighSchoolSmallInformationComponent />
            <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
              <Button type='primary' onClick={() => setIsClicked(false)}>
                Chọn một trường khác
              </Button>
            </Space>
          </div>
        ) : (
          <SearchBarComponent
            setDataSearch={setDataSearch}
            provinces={provinces}
            onChange={onChange}
            districts={districts}
            isDisableDistrict={isDisableDistrict}
          />
        )}
      </div>

      {isClicked ? (
        <ScheduleContainer selectedSchool={currentHighSchoolSelected} />
      ) : (
        <HighSchoolTableComponent listHighSchool={listHighSchool} handleSelectedSchool={handleSelectedSchool} />
      )}
    </div>
  );
};

export default ListHighSchool;
