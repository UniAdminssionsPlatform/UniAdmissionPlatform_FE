import React, { useEffect, useState } from 'react';
import Avatar from '../../../../components/commons/Avatar/Avatar.component';
import MarkdownViewComponent from '../../../../components/MarkdownView/MarkdownView.component';
import ShowImageComponent from '../../../../commons/ShowImage.component';
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button, Divider, notification, Typography } from 'antd';
import { COLOR_ICON } from '../../../../constants/Color';
import { CountStudentFollowService, FollowUniversityService } from '../../../../services/FollowUniversityService';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const SingleUniversityProfileComponent = (props) => {
  const { Text, Title } = Typography;
  const { universityProfile } = props;
  const [isFollowed, setIsFollowed] = useState(universityProfile.isFollow);
  const [countStudent, setCountStudent] = useState();
  const handleFollowUniversity = () => {
    setIsFollowed(true);
    FollowUniversityService(universityProfile.id)
      .then((res) => {
        notification.success({
          message: 'Theo dõi Trường đại học thành công!',
          description: `Bạn đã theo dõi thành công trường đại học này!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Theo dõi trường đại học thất bại',
          description: `Lỗi ${err.response.data.msg}`
        });
      });
  };
  const handleUnFollowUniversity = () => {
    setIsFollowed(false);
    FollowUniversityService(universityProfile.id)
      .then((res) => {
        notification.success({
          message: 'Theo dõi Trường đại học thành công!',
          description: `Bạn đã theo dõi thành công trường đại học này!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Theo dõi trường đại học thất bại',
          description: `Lỗi ${err.response.data.msg}`
        });
      });
  };
  const handleCountFollow = () => {
    CountStudentFollowService(universityProfile.id).then((res) => {
      setCountStudent(res.data.data);
    });
  };
  useEffect(() => handleCountFollow(), []);
  return (
    <div>
      <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden '>
          <ShowImageComponent
            containerClassName='absolute inset-0'
            src={universityProfile.thumbnailUrl}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='relative container -mt-20 lg:-mt-10'>
          <div className=' bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center'>
            <Avatar
              containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
              imgUrl={universityProfile.profileImageUrl}
              sizeClass='w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36'
              radius='rounded-full'
            />
            <div className='mt-10 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
              <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>{universityProfile.name}</h2>
              <span className='block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>
                {universityProfile.shortDescription}
              </span>
            </div>
            <Divider type={'vertical'} />
            <div className='mt-10 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
              <Text>
                <MailIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                {universityProfile.email}
              </Text>
              <br />
              <Text>
                <ContactPhoneIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                {universityProfile.phoneNumber}
              </Text>
              <br />
              <Text>
                <FmdGoodIcon style={{ color: COLOR_ICON }} /> <Divider type={'vertical'} />
                {universityProfile.address}
              </Text>
              <br />
              {universityProfile.isFollow !== true || !isFollowed ? (
                <Button type={'primary'} shape={'round'} size={'large'} onClick={handleFollowUniversity}>
                  Theo dõi
                </Button>
              ) : (
                <Button type={'primary'} shape={'round'} size={'large'} onClick={handleUnFollowUniversity}>
                  Hủy theo dõi
                </Button>
              )}
              <Divider type={'vertical'} />
              <Text type='secondary'>
                Hiện đang có{' '}
                <Text strong style={{ color: COLOR_ICON }}>
                  {countStudent}
                </Text>{' '}
                người theo dõi
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col my-10 '>
        <MarkdownViewComponent str={universityProfile.description} />
      </div>
    </div>
  );
};
export default SingleUniversityProfileComponent;
