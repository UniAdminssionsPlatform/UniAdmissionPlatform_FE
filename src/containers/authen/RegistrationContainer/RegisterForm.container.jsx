import { getHighSchoolByCode, getHighSchoolByManagerCode } from '../../../services/HighSchoolService';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../../components/form/RegisterForm/RegisterForm.component';

import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { getListWardByDistrictId } from '../../../services/WardService';
import { getUniversityByCode } from '../../../services/UniversityService';
import { handleNotification } from '../../../notification/RegisterNotification';
import { registerForStudent } from '../../../services/UserServices';
import { useDebouncedCallback } from 'use-debounce';

const RegisterFormContainer = (props) => {
  const { role } = props;

  const [code, setCode] = useState('');
  const [wardId, setWardId] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [placeofbirth, setPlaceofbirth] = useState('');

  const [schoolName, setSchoolName] = useState();

  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [wards, setWards] = useState();

  useEffect(() => {
    getAllProvinces();
  }, []);

  const getAllProvinces = () => {
    getListProvinces().then((result) => {
      setProvinces(result.data.data.list);
    });
  };

  function onChangeProvince(value) {
    getListDistrictByProvince(value).then((result) => {
      setDistricts(result.data.data.list);
    });
  }
  function onChangeDistricts(value) {
    getListWardByDistrictId(value).then((result) => {
      setWards(result.data.data.list);
    });
  }
  function onChangeWard(value) {
    setWardId(value);
  }
  function onChangePlaceOfBirth(value) {
    setPlaceofbirth(value);
  }

  const onChangeSex = (value) => {
    setSex(value);
  };

  const handleDatePicker = (date, dateString) => {
    setDob(dateString);
  };

  const handleCode = useDebouncedCallback(
    // function
    (value) => {
      if (role === 'st') {
        getHighSchoolByCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch(() => {
            setSchoolName('');
          });
      }
      if (role === 'uni') {
        getUniversityByCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch(() => {
            setSchoolName('');
          });
      }
      if (role === 'hs') {
        getHighSchoolByManagerCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch(() => {
            setSchoolName('');
          });
      }
    },
    // delay in ms
    1000
  );

  const onFinish = (values) => {
    values.date_of_birth = dob;
    values.high_school_code = code;
    values.ward_id = wardId;
    values.gender_id = sex;
    values.place_of_birth = placeofbirth;
    console.log('Success:', values);
    if (role === 'st') {
      registerForStudent(values)
        .then((result) => {
          console.log('Success:', result);
        })
        .then((err) => {
          handleNotification('error');
        });
    }
  };

  return (
    <>
      <RegisterForm
        role={role}
        schoolName={schoolName}
        onFinish={onFinish}
        handleDatePicker={handleDatePicker}
        handleCode={handleCode}
        provinces={provinces}
        onChangeProvince={onChangeProvince}
        districts={districts}
        onChangeDistricts={onChangeDistricts}
        wards={wards}
        onChangeSex={onChangeSex}
        onChangePlaceOfBirth={onChangePlaceOfBirth}
        onChangeWard={onChangeWard}
      />
    </>
  );
};
export default RegisterFormContainer;
