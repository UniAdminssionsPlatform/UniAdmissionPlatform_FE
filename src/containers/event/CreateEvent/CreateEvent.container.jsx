import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import React, { useEffect, useState } from 'react';
import ListHighSchool from '../../../components/ListHighSchool/ListHighSchool.component';
import { people } from './Data/FakeData';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import { useSelector } from 'react-redux';
import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { getListHighSchool } from '../../../services/HighSchoolService';

const CreateEventContainer = () => {
  // SEARCH HIGH SCHOOL
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
  const { isSelected, highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);

  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        setProvinces(result.data.data.list);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách tỉnh/thành');
      });
  };
  useEffect(() => {
    getListHSchool(dataSearch);
    geAllProvince();
  }, [dataSearch, isClicked]);
  const getListHSchool = (data) => {
    getListHighSchool(data)
      .then((res) => {
        console.log('list: ', res.data.data.list);
        setlistHighSchool(res.data.data.list);
        handleSuccessNotification('Danh sách các trường cấp 3');
      })
      .catch((err) => {
        handleFailNotification('Lỗi khi lấy danh sách');
      });
  };

  function onChangeProvince(value) {
    getListDistrictByProvince(value)
      .then((result) => {
        setDistricts(result.data.data.list);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách quận');
      });
  }

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
      {/* <CreateEventComponent  /> */}
    </>
  );
};

export default CreateEventContainer;
