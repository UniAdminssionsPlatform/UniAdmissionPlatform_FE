import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListHighSchool } from '../../../services/HighSchoolServices';
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
  const { isSelected, highSchool } = useSelector((state) => state.selectedHighSchool);
  const [isClicked, setIsClicked] = useState(isSelected ? isSelected : false);

  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        setProvinces(result.data.data.list);
      })
      .catch((err) => {
        handleSuccessNotification('Lỗi Khi lấy danh sách tỉnh/thành');
      });
  };
  useEffect(() => {
    getListHSchool(dataSearch);
    geAllProvince();
  }, [dataSearch, isClicked]);
  const getListHSchool = (data) => {
    getListHighSchool(data)
      .then((res) => {
        setlistHighSchool(res.data.data.list);
        handleSuccessNotification('Danh sách các trường cấp 3');
      })
      .catch((err) => {
        handleFailNotification('Lỗi khi lấy danh sách');
      });
  };
  useEffect(() => {
    getListHSchool(dataSearch);
  }, [dataSearch, isClicked]);

  function onChangeProvince(value) {
    getListDistrictByProvince(value)
      .then((result) => {
        setDistricts(result.data.data.list);
      })
      .catch((err) => {
        handleSuccessNotification('Lỗi Khi lấy danh sách quận');
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
      {/*<CreateEventComponent onFinish={onFinish} />*/}
    </>
  );
};

export default CreateEventContainer;
