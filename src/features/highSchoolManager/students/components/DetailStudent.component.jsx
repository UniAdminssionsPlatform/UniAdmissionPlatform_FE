import { Card, Modal } from 'antd';
import Avatar from '../../../../components/commons/Avatar/Avatar.component';
import HeadBackgroundCommon from '../../../../components/commons/HeadBackgroundCommon/HeadBackgroundCommon.component';
import React from 'react';
import moment from 'moment';

const DetailStudentComponent = (props) => {
  const { visible, handleOk, handleCancel, student } = props;

  return (
    <>
      <Modal visible={visible} title='Thông tin chi tiết' onOk={handleOk} onCancel={handleCancel}>
        <HeadBackgroundCommon className='h-24 2xl:h-28' />
        <div className='container'>
          <header className='max-w-xl mx-auto -mt-10 flex flex-col items-center justify-center text-center lg:-mt-14'>
            <Avatar
              containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
              imgUrl={student.profileImageUrl}
              sizeClass='w-20 h-20 text-lg lg:w-28 lg:h-28 lg:text-xl'
              radius='rounded-2xl'
            />
            <h2 className='block align-middle mt-4 font-semibold text-2xl text-neutral-900 lg:text-2xl dark:text-neutral-100'>
              {student.lastName} {student.middleName} {student.firstName}
            </h2>
            <span className='mt-2 block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>
              {student.genderId === 1 ? <p>Nam</p> : <p>Nữ</p>}
            </span>
          </header>
        </div>
        <div className='py-10 '>
          <main>
            <Card style={{ borderRadius: 10, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
              <p>Địa chỉ: {student.address}</p>
              <p>Email: {student.emailContact}</p>
              <p>Số điện thoại: {student.phoneNumber}</p>
            </Card>
            <Card style={{ borderRadius: 10, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginTop: 20 }}>
              <p>Ngày sinh: {moment(student.dateOfBirth).format('DD-MM-YYYY')}</p>
              <p>Nơi sinh: {student.placeOfBirth}</p>
              <p>CMND/CCCD: {student.idCard}</p>
              <p>Tôn giáo: {student.religion}</p>
              <p>Quốc tịch: {student.nationality}</p>
              <p>
                Trạng thái:{' '}
                {student.status === 2 ? (
                  <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                    Đang hoạt động
                  </span>
                ) : (
                  <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-teal-900 lg:text-sm'>
                    Đã khóa
                  </span>
                )}
              </p>
            </Card>
          </main>
        </div>
      </Modal>
    </>
  );
};
export default DetailStudentComponent;
