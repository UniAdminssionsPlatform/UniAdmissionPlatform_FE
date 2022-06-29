import { Button, Divider, Modal, Skeleton, Space, Table } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import NcImage from '../../../../components/commons/NcImage/NcImage.component';
import React from 'react';

const TableAccountPending = (props) => {
  const { data, loading, handleOk } = props;
  const confirm = (value) => {
    Modal.confirm({
      title: 'Xác thực',
      icon: <ExclamationCircleOutlined />,
      content: `Phê duyệt cho ${value.lastName} ${value.middleName} ${value.firstName}`,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handleOk(value);
      },
      onCancel() {}
    });
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
              <a>
                {record.lastName} {record.middleName} {record.firstName}
              </a>
            </h2>
          </div>
        </div>
      )
    },
    {
      title: 'Email',
      render: (record) => <>{record.emailContact}</>
    },
    {
      title: 'Số điện thoại',
      render: (_, record) => <>{record.phoneNumber}</>
    },
    {
      title: 'Nơi sinh',
      render: (record) => <>{record.placeOfBirth}</>
    },
    {
      title: 'Thao tác',
      render: (record) => (
        <>
          <Space split={<Divider type='vertical' />}>
            <Button
              type='primary'
              size='small'
              onClick={() => {
                confirm(record);
              }}>
              Chấp nhận
            </Button>
            <Button type='primary' danger size='small'>
              Từ chối
            </Button>
          </Space>
        </>
      )
    }
  ];

  return (
    <>
      <div className='flex-grow'>
        <Skeleton paragraph={{ rows: 3 }} active loading={loading}>
          <div className='flex flex-col space-y-8'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
                <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                  <Table columns={columns} dataSource={data} pagination={false} />
                </div>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    </>
  );
};
export default TableAccountPending;
