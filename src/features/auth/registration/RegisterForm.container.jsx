import { PATH } from '../../../constants/Paths/Path';
import { getHighSchoolByCode, getHighSchoolByManagerCode } from '../../../services/HighSchoolService';
import { getListDistrictByProvince } from '../../../services/DistrictService';
import { getListNation } from '../../../services/NationalityService';
import { getListProvinces } from '../../../services/ProvinceService';
import { getListWardByDistrictId } from '../../../services/WardService';
import { getUniversityByCode } from '../../../services/UniversityService';
import { handleNotification } from '../../../notification/RegisterNotification';
import {
  registerForSchoolManager,
  registerForStudent,
  registerForUniversityManager
} from '../../../services/UserServices';
import { useDebouncedCallback } from 'use-debounce';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm.component';

const RegisterFormContainer = (props) => {
  const { role } = props;
  const [wardId, setWardId] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
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
  const history = useHistory();

  console.log('role: ', role);

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
    setPlaceOfBirth(value);
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

  const handleCode = useDebouncedCallback((value) => {
    if (role === 'st') {
      getHighSchoolByCode(value)
        .then((result) => {
          setSchoolName(result.data.data.name);
        })
        .catch(() => {
          setSchoolName('');
        });
    } else if (role === 'uni') {
      getUniversityByCode(value)
        .then((result) => {
          setSchoolName(result.data.data.name);
        })
        .catch(() => {
          setSchoolName('');
        });
    } else if (role === 'hs') {
      getHighSchoolByManagerCode(value)
        .then((result) => {
          setSchoolName(result.data.data.name);
        })
        .catch(() => {
          setSchoolName('');
        });
    }
  }, 1000);

  const onFinish = (values) => {
    values.dateOfBirth = dob;
    values.wardId = wardId;
    values.genderId = sex;
    values.religion = religion;
    values.nationality = nation;
    values.placeOfBirth = placeOfBirth;

    if (role === 'st') {
      registerForStudent(values)
        .then((result) => {
          handleNotification('success', result.message);
          history.push(PATH.INDEX);
        })
        .catch((err) => {
          handleNotification('error', err);
        });
    } else if (role === 'hs') {
      registerForSchoolManager(values)
        .then((result) => {
          handleNotification('success', result.message);
          history.push(PATH.ACCOUNT_WAITING_APPROVE);
        })
        .catch((err) => {
          handleNotification('error', err);
        });
    } else if (role === 'uni') {
      registerForUniversityManager(values)
        .then((result) => {
          handleNotification('success', result.message);
          history.push(PATH.ACCOUNT_WAITING_APPROVE);
        })
        .catch((err) => {
          handleNotification('error', err);
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
