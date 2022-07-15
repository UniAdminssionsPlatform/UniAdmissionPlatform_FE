import { Button, Table, Image, Input, Pagination, Modal } from 'antd';
import React from 'react';
import { ExclamationCircleOutlined, StarOutlined } from '@ant-design/icons';

const ListUniversityComponent = (props) => {
  const { universities, onChange, handleChangeEventName, handleFollowButton } = props;
  const { Search } = Input;
  const stylePaging = {
    paddingTop: 20,
    paddingBottom: 20
  };

  const confirm = (value) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Xác nhận theo dõi trường ${value.name}`,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handleFollowButton(value);
      },
      onCancel() {}
    });
  };

  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'profileImageUrl',
      key: 'name',
      width: '10%',
      render: (_, { profileImageUrl }) => <Image src={profileImageUrl} preview={false} />
    },
    {
      title: 'Tên Trường',
      dataIndex: 'name',
      key: 'name',
      width: '30%'
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Thao Tác',
      render: (record) => (
        <>
          <Button
            style={{ background: 'green', color: 'white' }}
            onClick={() => {
              confirm(record);
            }}>
            <StarOutlined />
            Theo Dõi
          </Button>
        </>
      )
    }
  ];
  return (
    <div class='flex flex-row'>
      <div class='basis-1/4 pl-5 pr-10'>
        <h2 class='ant-typography pb-10'>Tìm Kiếm</h2>
        <span class='ant-typography'>
          <strong>Tên Trường</strong>
        </span>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} onSearch={handleChangeEventName} />
      </div>
      <div class='flex-initial '>
        <h2 className='ant-typography pb-10'>Danh Sách</h2>
        <Table columns={columns} dataSource={universities?.list} pagination={false} />
        <div style={stylePaging}>
          <Pagination showSizeChanger onChange={onChange} total={universities?.total} />
        </div>
      </div>
    </div>
  );
};

export default ListUniversityComponent;
