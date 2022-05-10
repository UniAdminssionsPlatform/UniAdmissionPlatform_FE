import { createEvent } from '../../../services/event/CreateEvent/CreateEvent';
import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import { useSelector } from 'react-redux';
import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import React, { useEffect, useState } from 'react';

const CreateEventContainer = () => {
  const [listProvinces, setListProvinces] = useState();
  const [listDistricts, setListDistricts] = useState();

  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [isDisableProvince, setIsDisableProvince] = useState(true);
  const [isDisableDistrict, setIsDisableDistrict] = useState(true);
  const [isDisableAddress, setIsDisableAddress] = useState(true);
  const [isDisableMeetURL, setIsDisableMeetURL] = useState(true);

  const geAllProvince = () => {
    getListProvinces()
      .then((result) => {
        setListProvinces(result.data.data.list);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách tỉnh/thành');
      });
  };

  useEffect(() => {
    geAllProvince();
  }, []);

  const onChangeProvince = (value) => {
    setProvince(value);
    getListDistrictByProvince(value)
      .then((result) => {
        setListDistricts(result.data.data.list);
      })
      .catch((err) => {
        handleFailNotification('Lỗi Khi lấy danh sách quận');
      });
  };

  const onChangeDistrict = (value) => {
    setDistrict(value);
  };

  const onChangeType = (value) => {
    if (value === 1) {
      setIsDisableAddress(true);
      setIsDisableProvince(true);
      setIsDisableDistrict(true);
      setIsDisableMeetURL(false);
    } else {
      setIsDisableAddress(false);
      setIsDisableProvince(false);
      setIsDisableDistrict(false);
      setIsDisableMeetURL(true);
    }
  };

  const onChangeStartDate = (date, dateString) => {
    setStartDate(dateString);
  };
  const onChangeEndtDate = (date, dateString) => {
    setEndDate(dateString);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onFinish = (data) => {
    data.event.districtId = district;
    data.event.provinceId = province;
    console.log(data);
    createEvent(data)
      .then((result) => {
        handleSuccessNotification(result.msg);
      })
      .catch((error) => {
        handleFailNotification(error.msg);
      });
  };

  return (
    <>
      <CreateEventComponent
        onChangeType={onChangeType}
        onChangeStartDate={onChangeStartDate}
        onChangeEndtDate={onChangeEndtDate}
        onChangeProvince={onChangeProvince}
        onChangeDistrict={onChangeDistrict}
        onSearch={onSearch}
        isDisableProvince={isDisableProvince}
        isDisableDistrict={isDisableDistrict}
        isDisableAddress={isDisableAddress}
        isDisableMeetURL={isDisableMeetURL}
        listProvinces={listProvinces}
        listDistricts={listDistricts}
        onFinish={onFinish}
      />
    </>
  );
};

export default CreateEventContainer;
