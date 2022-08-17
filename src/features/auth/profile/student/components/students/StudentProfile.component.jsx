import { Button, Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { PATH_HIGH_SCHOOL_STUDENT } from '../../../../../../constants/Paths/Path';
import Avatar from '../../../../../../components/commons/Avatar/Avatar.component';
import LayoutPage from '../../../../../../components/commons/LayoutPage/LayoutPageWithout.component';
import NcImage from '../../../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
import moment from 'moment';

const StudentProfileComponent = (props) => {
  const { student, loading } = props;
  return (
    <div className='nc-PageAuthor' data-nc-id='PageAuthor'>
      <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
        <Skeleton active loading={loading}>
          <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden '>
            <NcImage
              containerClassName='absolute inset-0'
              src='https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/image%2F48f1aea6-a1b1-4102-8b60-10b4e716ae607%2F27%2F2022%207%3A52%3A18%20AM.jpg?alt=media'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='relative container -mt-20 lg:-mt-48'>
            <div className='bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center'>
              <Avatar
                containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
                imgUrl={student?.profileImageUrl}
                sizeClass='w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36'
                radius='rounded-full'
              />
              <div className='mt-5 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
                <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>
                  {student?.lastName} {student?.middleName} {student?.firstName}
                </h2>
                <span className='block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>
                  <Link
                    to={{
                      pathname: PATH_HIGH_SCHOOL_STUDENT.UPDATE_PROFILE
                    }}>
                    <Button style={{ borderRadius: 5, height: 35 }}>Chỉnh sửa thông tin</Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>

      {/* BODY */}
      <LayoutPage subHeading='' headingEmoji='🔑' heading=''>
        <div className='flex flex-col space-y-2 xl:space-y-0 xl:flex-row'>
          <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
            <Card style={{ borderRadius: 20 }}>
              <Skeleton active loading={loading}>
                <h2>Thông Tin Liên Lạc</h2>
                <hr></hr>
                <div style={{ marginTop: 10 }}>
                  <p>🗺 Địa chỉ: {student?.address}</p>
                  <p>💌 Email: {student?.emailContact}</p>
                  <p>☎ Số điện thoại: {student?.phoneNumber}</p>
                </div>
              </Skeleton>
            </Card>
          </div>

          <div className='flex-grow'>
            <Card style={{ borderRadius: 20 }}>
              <Skeleton active loading={loading}>
                <h2>Thông Tin Chi Tiết</h2>
                <hr></hr>
                <div style={{ marginTop: 10 }}>
                  <p>Ngày sinh: {moment(student?.dateOfBirth).format('DD-MM-YYYY')}</p>
                  <p>Nơi sinh: {student?.placeOfBirth}</p>
                  <p>CMND/CCCD: {student?.idCard}</p>
                  <p>Tôn giáo: {student?.religion}</p>
                  <p>Quốc tịch: {student?.nationality}</p>
                </div>
              </Skeleton>
            </Card>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default StudentProfileComponent;
