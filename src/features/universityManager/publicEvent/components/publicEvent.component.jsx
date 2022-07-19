import { Button, Image, Input, Modal, Pagination, Space, Table, Tag } from 'antd';
import { CheckOutlined, ExclamationCircleOutlined, StarOutlined } from '@ant-design/icons';
import { EVENT, EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../../../../constants/AppConst';
import { refactorData } from '../../../../utils/common';
import React from 'react';

const PublicEventComponent = (props) => {
  const { event134, onChange, handleChangeEventName, handlePublicButton, handleChangeEventHost } = props;
  const { Search } = Input;
  const stylePaging = {
    paddingTop: 20,
    paddingBottom: 20
  };

  const confirm = (value) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Xác nhận công khai sự kiện ${value.name}`,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handlePublicButton(value);
      },
      onCancel() {}
    });
  };

  const columns = [
    {
      title: 'Tên Sự Kiện',
      dataIndex: 'name',
      key: 'name',
      width: '10%'
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address',
      width: '10%'
    },
    {
      title: 'Loại sự kiện',
      dataIndex: 'eventTypeId',
      render: (type) => {
        if (type === EVENT_ONLINE) return <Tag color='#f50'>Sự kiện onlne</Tag>;
        if (type === EVENT_HS) return <Tag color='#2db7f5'>Sự kiện tổ chức tại trường cấp 3</Tag>;
        if (type === EVENT_UNI) return <Tag color='#87d068'>Sự kiện tổ chức tại trường đại học</Tag>;
        if (type === EVENT_ORG) return <Tag color='#108ee9'>Sự kiện tổ chức tại doanh nghiệp</Tag>;
      },
      width: '10%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (type) => {
        if (type === EVENT.INIT) return <Tag color='green'>Sự kiện được khởi tạo</Tag>;
        if (type === EVENT.ON_GOING) return <Tag color='#2db7f5'>Sự kiện sắp diễn ra</Tag>;
        if (type === EVENT.DONE) return <Tag color='#87d068'>Sự kiện đã kết thúc</Tag>;
        if (type === EVENT.CANCEL) return <Tag color='#108ee9'>Sự kiện bị hủy</Tag>;
      },
      width: '20%'
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startTime'
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endTime'
    },
    {
      title: 'Thao Tác',
      render: (text, record, index) => (
        <>
          {record?.isApprove === true ? (
            <Button
              style={{ background: 'green', color: 'white' }}
              onClick={() => {
                confirm(record);
              }}>
              <CheckOutlined />
              Công Khai Sự Kiện
            </Button>
          ) : (
            <Tag color='red'> Sự kiện chưa đủ điều kiện để công khai</Tag>
          )}
        </>
      )
    }
  ];
  return (
    <div class='flex flex-row'>
      <div class='basis-1/4 pl-5 pr-10'>
        <h2 class='ant-typography pb-10'>Tìm Kiếm</h2>
        <span class='ant-typography'>
          <strong>Tên Sự Kiện</strong>
        </span>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} onSearch={handleChangeEventName} />
        <span className='ant-typography'>
          <strong>Tên Diễn Giả</strong>
        </span>
        <Search placeholder='Nhập tên diễn giả' style={{ width: 300 }} onSearch={handleChangeEventHost} />
      </div>
      <div class='flex-initial '>
        <h2 className='ant-typography pb-10'>Danh Sách</h2>
        <Table columns={columns} dataSource={refactorData(event134?.list)} pagination={false} />
        <div style={stylePaging}>
          <Pagination showSizeChanger onChange={onChange} total={event134?.total} />
        </div>
      </div>
    </div>
  );
};
export default PublicEventComponent;
