import { HighschoolDetail } from '../../../services/HighSchoolProfileService';
import { Spin } from 'antd';
import { UpdateHighschoolProfile } from '../../../services/EditHighschoolProfileService';
import { handleNotification } from '../../../notification/EditHighschoolProfileNotification';
import { useSelector } from 'react-redux';
import EditHighSchoolProfileComponent from './components/EditHighschoolProfile.component';
import React, { useEffect, useState } from 'react';

const UpdateHighSchoolProfileContainer = () => {
  const [value, setValue] = useState('');
  const [avatar, setImageUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [highschoolInformation, setHighschoolInformation] = useState('');
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
    values.description = value;
    values.profileImageUrl = avatar;
    values.thumbnailUrl = thumbnail;
    UpdateHighschoolProfile(values)
      .then((result) => {
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
    // console.log('values: ', values);
  };

  useEffect(() => {
    ProfileDetail();
  }, []);

  const ProfileDetail = () => {
    HighschoolDetail(user.highSchoolId).then((result) => {
      setHighschoolInformation(result.data.data);
      setValue(result.data.data.description);
      setImageUrl(result.data.data.profileImageUrl);
      setThumbnail(result.data.data.thumbnailUrl);
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
              <EditHighSchoolProfileComponent
                highschoolInformation={highschoolInformation}
                onFinish={onFinish}
                setValue={setValue}
                value={value}
                setImageUrl={setImageUrl}
                setThumbnail={setThumbnail}
                // avatar={avatar}
                avatar={avatar}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHighSchoolProfileContainer;
