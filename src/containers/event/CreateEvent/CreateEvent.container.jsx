import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListHighSchool } from '../../../services/HighSchoolService';
import { getListProvinces } from '../../../services/ProvinceService';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import { people } from './Data/FakeData';
import { useSelector } from 'react-redux';
import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import ListHighSchool from '../../../components/ListHighSchool/ListHighSchool.component';
import React, { useEffect, useState } from 'react';

const CreateEventContainer = () => {
  const [listHighSchool, setlistHighSchool] = useState();
  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [dataSearch, setDataSeacrch] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    status: '',
    district: ''
  });
  const getListHSchool = (data) => {
    getListHighSchool(data)
      .then((res) => {
        console.log('highschool: ', res.data.data.list);
        setlistHighSchool(res.data.data.list);
        handleSuccessNotification('Danh sách các trường cấp 3');
      })
      .catch((err) => {
        handleFailNotification('Lỗi khi lấy danh sách');
      });
  };
  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        console.log('province: ', result.data.data.list);
        setProvinces(result.data.data.list);
      })
      .catch((err) => {
        handleSuccessNotification('Lỗi Khi lấy danh sách tỉnh/thành');
      });
  };
  function onChangeProvince(value) {
    console.log('selected: ', value);
    getListDistrictByProvince(value)
      .then((result) => {
        console.log('district: ', result.data.data.list);
        setDistricts(result.data.data.list);
      })
      .catch((err) => {
        handleSuccessNotification('Lỗi Khi lấy danh sách quận');
      });
  }

  const { isSelected } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);
  useEffect(() => {
    getListHSchool(dataSearch);
    geAllProvince();
  }, [dataSearch, isClicked]);
  return (
    <>
      <ListHighSchool
        people={people}
        provinces={provinces}
        districts={districts}
        listHighSchool={listHighSchool}
        onChange={onChangeProvince}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setDataSearch={setDataSeacrch}
      />
      {/*<CreateEventComponent onFinish={onFinish} />*/}
    </>
  );
};

export default CreateEventContainer;
