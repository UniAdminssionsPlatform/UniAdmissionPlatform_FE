import { getHighSchoolByCode, getHighSchoolByManagerCode } from '../../../services/HighSchoolService';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../../components/form/RegisterForm/RegisterForm.component';

import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListProvinces } from '../../../services/ProvinceService';
import { getListWardByDistrictId } from '../../../services/WardService';
import { getUniversityByCode } from '../../../services/UniversityService';
import { handleNotification } from '../../../notification/RegisterNotification';
import {
  registerForSchoolManager,
  registerForStudent,
  registerForUniversityManager
} from '../../../services/UserServices';
import { getListNation } from '../../../services/NationalityService';
import { useDebouncedCallback } from 'use-debounce';

const RegisterFormContainer = (props) => {
  const { role } = props;

  const [code, setCode] = useState('');
  const [wardId, setWardId] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [placeofbirth, setPlaceofbirth] = useState('');
  const [religion, setReligion] = useState('');
  const [nation, setNation] = useState('');

  const [schoolName, setSchoolName] = useState();

  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [nationalities, setNationalities] = useState();
  const [isDisableDistrict, setIsDisableDistrict] = useState(true);
  const [wards, setWards] = useState();
  const [isDisableWard, setIsDisableWard] = useState(true);

  const [codeWithRole, setCodeWithRole] = useState();

  useEffect(() => {
    getAllProvinces();
    getAllNation();
    if (role === 'st') setCodeWithRole('highSchoolCode');

    if (role === 'hs') setCodeWithRole('highSchoolManagerCode');

    if (role === 'uni') setCodeWithRole('universityCode');
  }, []);

  const getAllNation = () => {
    getListNation().then((result) => {
      setNationalities(result.data.data.list);
    });
  };
  const getAllProvinces = () => {
    getListProvinces().then((result) => {
      setProvinces(result.data.data.list);
    });
  };

  function onChangeProvince(value) {
    getListDistrictByProvince(value).then((result) => {
      setDistricts(result.data.data.list);
      setIsDisableDistrict(false);
    });
  }
  function onChangeDistricts(value) {
    getListWardByDistrictId(value).then((result) => {
      setWards(result.data.data.list);
      setIsDisableWard(false);
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

  const onChangeReligion = (value) => {
    setReligion(value);
  };

  const onChangeNation = (value) => {
    setNation(value);
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
    values.dateOfBirth = dob;
    values.wardId = wardId;
    values.genderId = sex;
    values.religion = religion;
    values.nationality = nation;

    values.placeOfBirth = placeofbirth;

    if (role === 'st') {
      registerForStudent(values)
        .then((result) => {
          handleNotification('success', result.message);
        })
        .then((err) => {
          handleNotification('error', err);
        });
    }
    if (role === 'hs') {
      registerForSchoolManager(values)
        .then((result) => {
          handleNotification('success', result.message);
        })
        .then((err) => {
          handleNotification('error', err);
        });
    }

    if (role === 'uni') {
      registerForUniversityManager(values)
        .then((result) => {
          handleNotification('success', result.message);
        })
        .then((err) => {
          handleNotification('error', err);
        });
    }

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
        onChangePlaceOfBirth={onChangePlaceOfBirth}
        onChangeWard={onChangeWard}
        isDisableDistrict={isDisableDistrict}
        isDisableWard={isDisableWard}
        codeWithRole={codeWithRole}
        onChangeReligion={onChangeReligion}
        nation={nationalities}
        onChangeNation={onChangeNation}
      />
    </>
  );
};
export default RegisterFormContainer;
