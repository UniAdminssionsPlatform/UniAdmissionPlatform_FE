import { getHighSchoolByCode, getHighSchoolByManagerCode } from '../../../services/HighSchoolService';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../../components/form/RegisterForm/RegisterForm.component';

import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { getListWardByDistrictId } from '../../../services/WardService';
import { getUniversityByCode } from '../../../services/UniversityService';
import { handleNotification } from '../../../notification/LoginNotification';
import { useDebouncedCallback } from 'use-debounce';

const RegisterFormContainer = (props) => {
  const { role } = props;

  const [code, setCode] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');

  const [schoolName, setSchoolName] = useState('');

  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [wards, setWards] = useState();

  useEffect(() => {
    getAllProvinces();
  }, []);

  const getAllProvinces = () => {
    getListProvinces()
      .then((result) => {
        setProvinces(result.data.data.list);
      })
      .catch(() => {
        handleNotification('Lỗi Khi lấy tỉnh/thành phố');
      });
  };

  function onChangeProvince(value) {
    getListDistrictByProvince(value)
      .then((result) => {
        setDistricts(result.data.data.list);
      })
      .catch(() => {
        handleNotification('Lỗi Khi lấy quận/huyện');
      });
  }
  function onChangeDistricts(value) {
    setDistrictId(value);
    getListWardByDistrictId(value)
      .then((result) => {
        setWards(result.data.data.list);
      })
      .catch(() => {
        handleNotification('Lỗi Khi lấy phường/xã');
      });
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
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
      if (role === 'uni') {
        getUniversityByCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch(() => {
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
      if (role === 'hs') {
        getHighSchoolByManagerCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch(() => {
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
    },
    // delay in ms
    1000
  );

  const onFinish = (values) => {
    values.dob = dob;
    values.code = code;
    values.districs = districtId;
    values.sex = sex;
    console.log('Success:', values);
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
      />
    </>
  );
};
export default RegisterFormContainer;
