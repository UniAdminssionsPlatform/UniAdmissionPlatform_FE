import { EVENT_CHECK } from '../../../../constants/AppConst';
import { Input, Pagination, Space, Table, Tag } from 'antd';
import React from 'react';
import moment from 'moment';

const EventCheckComponent = (props) => {
  const { eventCheck, onChange } = props;
  const { Search } = Input;
  // eslint-disable-next-line no-console
  const columns = [
    {
      title: 'Tên Sự Kiện',
      render: (record) => <p>{record.event.name}</p>,
      width: '20%'
    },
    {
      title: 'Thời gian diễn ra',
      render: (record) => <p>{moment(record.slot.startDate).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Thời gian kết thúc',
      render: (record) => <p>{moment(record.slot.endDate).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Trạng thái',
      render: (record) => {
        if (record.status === EVENT_CHECK.Approved) return <Tag color='green'>Sự kiện đã chấp nhận</Tag>;
        if (record.status === EVENT_CHECK.PENDING) return <Tag color='cyan'>Sự kiện đang chờ duyệt</Tag>;
        if (record.status === EVENT_CHECK.REJECT) return <Tag color='purple'>Sự kiện đã từ chối</Tag>;
      },
      width: '20%'
    }
  ];
  return (
    <div>
      <Space>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} />
      </Space>
      <Space direction={'vertical'}>
        <Table columns={columns} dataSource={eventCheck?.list} pagination={false} style={{ width: '80vw' }} />
        <Pagination showSizeChanger onChange={onChange} total={eventCheck?.total} bordered={true} />
      </Space>
    </div>
  );
};
export default EventCheckComponent;
