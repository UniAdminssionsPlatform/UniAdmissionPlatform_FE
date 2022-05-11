import React from 'react';
import { Typography, Button, Select, Space, DatePicker, Radio } from 'antd';
import moment from 'moment';

const LeftBarComponent = () => {
  const { Title, Text } = Typography;
  const { Option } = Select;
  const handleChange = () => {};
  const onChangeRage = (data) => {
      console.log(data)
    console.log(moment(data[1]._d, 'YYYY/MM/DD').format('M'));
  };
  const { RangePicker } = DatePicker;
  return (
    <>
      <Title level={2}>Quản Lý Slot</Title>
      <Text strong> Thêm mới slot </Text>
      <Space direction='vertical'>
        <RangePicker onChange={onChangeRage} />
        <div>
          <Text type='secondary'> Thời điểm diễn ra </Text>
          <Select defaultValue='1' style={{ width: 120 }} onChange={handleChange}>
            <Option value='1'>Buổi Sáng</Option>
            <Option value='2'>Buổi Chiều</Option>
            <Option value='3'>Cả ngày</Option>
          </Select>
        </div>
        <Button type='primary' danger>
          Tạo mới slot đăng ký
        </Button>
      </Space>
    </>
  );
};
export default LeftBarComponent;
