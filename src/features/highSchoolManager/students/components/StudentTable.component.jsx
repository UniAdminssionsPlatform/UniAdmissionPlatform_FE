import { Button, Empty, Skeleton, Table, Tag, Tooltip } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import DetailStudentContainer from './DetailStudent.container';
import NcImage from '../../../../components/commons/NcImage/NcImage.component';
import React, { useState } from 'react';

const TableStudentComponent = (props) => {
  const { listStudent, loading, confirm } = props;
  const [visible, setVisible] = useState(false);

  const [studentID, setStudentID] = useState('');

  const handleVisible = (id) => {
    setStudentID(id);
    setVisible(true);
  };

  const columns = [
    {
      title: 'Họ và tên',
      render: (_, record) => (
        <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
          <NcImage
            containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
            src={record.profileImageUrl}
          />
          <div className='ml-4 flex-grow'>
            <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
              <a onClick={() => handleVisible(record.id)}>
                {record.lastName} {record.middleName} {record.firstName}
              </a>
            </h2>
          </div>
        </div>
      )
    },
    {
      title: 'Email',
      dataIndex: 'emailContact'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status === 2 ? (
            <Tag color='green' key={status}>
              Đang hoạt động
            </Tag>
          ) : (
            <Tag color='volcano' key={status}>
              Đã khóa
            </Tag>
          )}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          {record.status === 2 && (
            <Tooltip title='Khóa'>
              <Button
                onClick={() => {
                  confirm(record);
                }}
                icon={<LockOutlined style={{ color: 'red' }} />}
              />
            </Tooltip>
          )}
          {record.status === 3 && (
            <Tooltip title='Mở Khóa'>
              <Button
                onClick={() => {
                  confirm(record);
                }}
                icon={<UnlockOutlined style={{ color: 'green' }} />}
              />
            </Tooltip>
          )}
        </>
      )
    }
  ];

  return (
    <>
      <div className='flex-grow'>
        <Skeleton avatar paragraph={{ rows: 3 }} active loading={loading}>
          <div className='flex flex-col space-y-8'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
                <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                  <Table columns={columns} dataSource={listStudent} />
                </div>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
      <DetailStudentContainer visible={visible} studentID={studentID} setVisible={setVisible} />
    </>
  );
};
export default TableStudentComponent;
