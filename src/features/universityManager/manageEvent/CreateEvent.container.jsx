import { createEvent } from '../../../services/CreateEvent';
import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { handleFailNotification, handleSuccessNotification } from '../../../notification/CreateEventNotification';
import CreateEventComponent from './components/CreateEvent.component';
import React, { useEffect, useState } from 'react';

const CreateEventContainer = (props) => {
  const { event, handleChangeActiveKey } = props;
  const [listProvinces, setListProvinces] = useState();
  const [listDistricts, setListDistricts] = useState();
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [describe, setDescribe] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
    console.log(event);
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

  const onChangeStartDate = (date, dateString) => {
    setStartDate(dateString);
  };
  const onChangeEndDate = (date, dateString) => {
    setEndDate(dateString);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onFinish = (data) => {
    data.event.name = data.event.name ? data.event.name : '';
    data.event.districtId = district;
    data.event.provinceId = province;
    data.event.description = describe;
    data.event.shortDescription = data.shortDescription;
    data.event.thumbnailUrl = imageUrl;
    data.event.eventTypeId = data.event.eventTypeId ? data.event.eventTypeId : 2;
    data.event.districtId = 1;
    createEvent(data)
      .then((result) => {
        handleSuccessNotification(result.msg);
        handleChangeActiveKey('1');
      })
      .catch((error) => {
        handleFailNotification(error.msg);
      });
  };

  return (
    <>
      <CreateEventComponent
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
        onChangeProvince={onChangeProvince}
        onChangeDistrict={onChangeDistrict}
        onSearch={onSearch}
        listProvinces={listProvinces}
        listDistricts={listDistricts}
        onFinish={onFinish}
        event={event}
        describe={describe}
        setDescribe={setDescribe}
        setImageUrl={setImageUrl}
      />
    </>
  );
};

export default CreateEventContainer;
