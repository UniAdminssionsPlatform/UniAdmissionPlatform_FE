import { Button, Divider, Modal, Tag, Typography } from 'antd';
import Avatar from '../../../../components/commons/Avatar/Avatar.component';
import MarkdownViewComponent from '../../../../components/MarkdownView/MarkdownView.component';
import NcImage from '../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { COLOR_ICON } from '../../../../constants/Color';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const UniversityProfileComponent = (props) => {
  const { universityDetail, followed, handleFollowButton, handleUnFollowButton, countStudent } = props;
  const { Text } = Typography;
  return (
    <div>
      <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden '>
          <NcImage
            containerClassName='absolute inset-0'
            src={universityDetail.thumbnailUrl}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='relative container -mt-20 lg:-mt-10'>
          <div className=' bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center'>
            <Avatar
              containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
              imgUrl={universityDetail.profileImageUrl}
              sizeClass='w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36'
              radius='rounded-full'
            />
            <div className='mt-10 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
              <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>{universityDetail.name}</h2>
              <span className='block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>
                {universityDetail.shortDescription}
              </span>
            </div>
            <div>
              <Divider type={'vertical'} />
              <div className='mt-10 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
                <Text>
                  <MailIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                  {universityDetail.email}
                </Text>
                <br />
                <Text>
                  <ContactPhoneIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                  {universityDetail.phoneNumber}
                </Text>
                <br />
                <Text>
                  <FmdGoodIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                  {universityDetail.address}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col my-10 '>
        <MarkdownViewComponent str={universityDetail.description} />
        {/*<div className='w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3'>*/}
        {/*  <Sidebar />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default UniversityProfileComponent;
