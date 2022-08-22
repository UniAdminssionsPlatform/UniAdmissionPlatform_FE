import { Pagination, Skeleton, Switch, Table, Tag, Tooltip } from 'antd';
import DetailStudentContainer from './DetailStudent.container';
import NcImage from '../../../../components/commons/NcImage/NcImage.component';
import React, { useState } from 'react';

const TableStudentComponent = (props) => {
  const { listStudent, loading, confirm, onChangePage, total } = props;
  const [visible, setVisible] = useState(false);

  console.log('total in component: ', total);

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
      title: 'Thao tác',
      render: (_, record) => (
        <>
          <Tooltip title={record.status === 2 ? 'Khóa' : 'Mở khóa'}>
            <Switch
              defaultChecked={record.status === 2 ? true : false}
              onChange={() => {
                confirm(record);
              }}
            />
          </Tooltip>
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
                  <Table columns={columns} dataSource={listStudent} pagination={false} />
                </div>
                <Pagination onChange={onChangePage} total={total} pageSize={5} />
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
      {visible === true ? (
        <DetailStudentContainer visible={visible} studentID={studentID} setVisible={setVisible} />
      ) : (
        ''
      )}
    </>
  );
};
export default TableStudentComponent;
