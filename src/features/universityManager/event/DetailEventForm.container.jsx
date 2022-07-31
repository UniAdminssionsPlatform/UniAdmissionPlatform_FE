import { getDetailEventByEventIdService } from '../../../services/EventService';
import { getDistrictById } from '../../../services/DistrictService';
import { getProvinceById } from '../../../services/ProvinceService';
import { handleNotification } from '../../../notification/DetailEventNotification';
import DetailEventFormComponent from './components/DetailEvent/DetailEventForm.component';
import React, { useEffect, useState } from 'react';

const DetailEventFormContainer = (props) => {
  const { eventID } = props;
  const [event, setEvent] = useState('');
  const [province, setprovince] = useState('');
  const [district, setDistrict] = useState('');

  useEffect(() => {
    getEvent(eventID);
  }, []);

  const getProvince = (id) => {
    getProvinceById(id).then((result) => {
      setprovince(result.data.data.name);
    });
  };

  const getDistrict = (id) => {
    getDistrictById(id).then((result) => {
      setDistrict(result.data.data.name);
    });
  };

  const getEvent = (id) => {
    getDetailEventByEventIdService(id)
      .then((result) => {
        setEvent(result.data.data);
        getProvince(result.data.data.provinceId);
        getDistrict(result.data.data.districtId);
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };

  return <DetailEventFormComponent event={event} province={province} district={district} />;
};
export default DetailEventFormContainer;
