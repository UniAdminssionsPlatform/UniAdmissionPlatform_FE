import { Skeleton } from 'antd';
import { getAccountInfor } from '../../../services/ManageProfileService';
import { getListNation } from '../../../services/NationalityService';
import { getListProvinces } from '../../../services/ProvinceService';
import { handleNotification } from '../../../notification/UpdateAccountNotification';
import { updateAccount } from '../../../services/Accounts/Accounts.service';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UpdaterForm from './components/Profile.component';

const ProfileContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dob, setDob] = useState('');
  const [accountInformation, setAccountInformation] = useState('');
  const [provinces, setProvinces] = useState();
  const [nationalities, setNationalities] = useState();
  const { user } = useSelector((state) => state.authentication);

  const onFinish = (values) => {
    values.dateOfBirth = dob;
    values.wardId = accountInformation.wardId;
    updateAccount(values)
      .then((result) => {
        handleNotification('success');
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
    getAccountInfor(accountId).then((result) => {
      setAccountInformation(result.data.data);
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
    setDob(dateString);
  };

  return (
    <>
      <div className={`nc-LayoutPage relative`} data-nc-id='LayoutPage'>
        <div className='container relative pt-10 pb-16 lg:pt-20 lg:pb-28'>
          {/* HEADER */}
          <header className='text-center max-w-2xl mx-auto'>
            <span className='block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200'>
              Chỉnh Sửa Thông Tin Cá Nhân
            </span>
          </header>

          {/* CONTENT */}
          <div className='p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 mt-10 lg:mt-20 lg:p-16 dark:bg-neutral-900'>
            {isLoading ? (
              <Skeleton />
            ) : (
              <UpdaterForm
                accountInformation={accountInformation}
                onFinish={onFinish}
                provinces={provinces}
                nation={nationalities}
                handleDatePicker={handleDatePicker}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
