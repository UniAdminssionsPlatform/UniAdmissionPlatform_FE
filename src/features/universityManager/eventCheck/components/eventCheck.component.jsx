import { EVENT } from '../../../../constants/AppConst';
import { Input, Pagination, Space, Table, Tag, Typography } from 'antd';
import React from 'react';

const EventCheckComponent = (props) => {
  const { eventCheck, onChange } = props;
  const { Search } = Input;
  // eslint-disable-next-line no-console
  const columns = [
    {
      title: 'Tên Sự Kiện',
      render: (record) => <p>{record.event.name}</p>,
      width: '10%'
    },
    {
      title: 'Trạng thái',
      render: (record) => {
        if (record.event.status === EVENT.INIT) return <Tag color='green'>Sự kiện được khởi tạo</Tag>;
        if (record.event.status === EVENT.ON_GOING) return <Tag color='#2db7f5'>Sự kiện sắp diễn ra</Tag>;
        if (record.event.status === EVENT.DONE) return <Tag color='#87d068'>Sự kiện đã kết thúc</Tag>;
        if (record.event.status === EVENT.CANCEL) return <Tag color='#108ee9'>Sự kiện bị hủy</Tag>;
      },
      width: '20%'
    }
  ];
  const { Title, Text } = Typography;

  return (
    <div>
      <Space>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} />
      </Space>
      <Space direction={'vertical'}>
        <Table columns={columns} dataSource={eventCheck} pagination={false} style={{ width: '80vw' }} />
        <Pagination showSizeChanger onChange={onChange} total={eventCheck?.total} bordered={true} />
      </Space>
    </div>
  );
};
export default EventCheckComponent;
