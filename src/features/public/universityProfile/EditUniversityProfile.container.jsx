import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { handleNotification } from '../../../notification/EditUniversityProfileNotification';
import UpdateUniversityProfileComponent from './components/EditUniversityProfile.component';
import { UpdateUniversityProfile } from '../../../services/EditUniversityProfileService';
import { UniversityDetail } from '../../../services/UniversityDetail';

const UpdateUniversityProfileContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [universityInformation, setUniversityInformation] = useState('');
  const { user } = useSelector((state) => state.authentication);
  const stylespin = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px'
  };

  const onFinish = (values) => {
    UpdateUniversityProfile(values)
      .then((result) => {
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  useEffect(() => {
    ProfileDetail();
  }, []);

  const ProfileDetail = () => {
    UniversityDetail(user.universityId).then((result) => {
      setUniversityInformation(result.data.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className={`nc-LayoutPage relative`} data-nc-id='LayoutPage'>
        <div className='container relative pt-10 pb-16 lg:pt-20 lg:pb-28'>
          {/* HEADER */}
          <header className='text-center max-w-2xl mx-auto'>
            <span className='block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200'>
              Chỉnh Sửa Thông Tin Trường
            </span>
          </header>

          {/* CONTENT */}
          <div className='p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 mt-10 lg:mt-20 lg:p-16 dark:bg-neutral-900'>
            {isLoading ? (
              <div style={stylespin}>
                <Spin tip='Đang tải...'></Spin>
              </div>
            ) : (
              <UpdateUniversityProfileComponent universityInformation={universityInformation} onFinish={onFinish} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUniversityProfileContainer;
