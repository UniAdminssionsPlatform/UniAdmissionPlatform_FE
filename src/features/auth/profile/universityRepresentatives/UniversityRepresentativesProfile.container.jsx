import { getListNation } from '../../../../services/NationalityService';
import { getListProvinces } from '../../../../services/ProvinceService';
import { getUniversityRepresentatives } from '../../../../services/ManageProfileService';
import { handleNotification } from '../../../../notification/UpdateAccountNotification';
import { updateAccount } from '../../../../services/Accounts/Accounts.service';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UniversityRepresentativesProfileComponent from './component/UniversityRepresentativesProfile.component';
import moment from 'moment';

const UniversityRepresentativesProfileContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dob, setDob] = useState('');
  const [accountInformation, setAccountInformation] = useState('');
  const [provinces, setProvinces] = useState();
  const [nationalities, setNationalities] = useState();
  const [imgeUrl, setImageUrl] = useState();
  const { user } = useSelector((state) => state.authentication);
  const reload = () => {
    window.location.reload();
  };

  const onFinish = (values) => {
    values.dateOfBirth = dob;
    values.wardId = accountInformation.wardId;
    values.profileImageUrl = imgeUrl;
    updateAccount(values)
      .then((result) => {
        handleNotification('success');
        setTimeout(reload, 1000);
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  useEffect(() => {
    getAllProvinces();
    getAllNation();
    accountDetail(user.userId);
  }, [user.userId]);

  const accountDetail = (accountId) => {
    getUniversityRepresentatives().then((result) => {
      setAccountInformation(result.data.data);
      setDob(result.data.data.dateOfBirth);
      setIsLoading(false);
    });
  };

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

  const handleDatePicker = (date, dateString) => {
    const newDate = moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD[T]HH:mm:ss');
    setDob(newDate);
  };

  return (
    <>
      <div className={`nc-LayoutPage relative`} data-nc-id='LayoutPage'>
        <div className='container relative pt-10 pb-16 lg:pt-20 lg:pb-28'>
          {/* HEADER */}
          <header className='text-center max-w-2xl mx-auto'>
            <h1>Chỉnh Sửa Thông Tin Cá Nhân</h1>
          </header>

          {/* CONTENT */}
          <div className='p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 mt-10 lg:mt-20 lg:p-16 dark:bg-neutral-900'>
            <UniversityRepresentativesProfileComponent
              accountInformation={accountInformation}
              onFinish={onFinish}
              provinces={provinces}
              nation={nationalities}
              handleDatePicker={handleDatePicker}
              setImageUrl={setImageUrl}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityRepresentativesProfileContainer;
