import React, { useState } from 'react';
import { Typography, Button, Select, Space, DatePicker, Radio } from 'antd';
import moment from 'moment';
import { enumerateDaysBetweenDates, parseCorrectDateBaseSlot } from '../../../utils/dateUtil';

const LeftBarComponent = (props) => {
  const { setListAddingSlot, isButtonCreateSlotClicked, setIsButtonCreateSlotClicked } = props;
  const { Title, Text } = Typography;
  const [slot, setSlot] = useState(1);
  const [arraySlot, setArraySlot] = useState([]);
  const { Option } = Select;
  const handleChange = (data) => {
    setSlot(data);
  };

  const onChangeRage = (dates, dateStrings) => {
    setIsButtonCreateSlotClicked(true);
    setArraySlot(enumerateDaysBetweenDates(dateStrings[0], dateStrings[1]));
  };
  const { RangePicker } = DatePicker;
  const handleClickButton = () => {
    console.log(parseCorrectDateBaseSlot(arraySlot, slot));
    setListAddingSlot(parseCorrectDateBaseSlot(arraySlot, slot));
  };
  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }
  return (
    <>
      <Title level={2}>Quản Lý Slot</Title>
      <Text strong> Thêm mới slot </Text>
      <Space direction='vertical'>
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')]
          }}
          disabledDate={disabledDate}
          onChange={onChangeRage}
        />
        <div>
          <Text type='secondary'> Thời điểm diễn ra </Text>
          <Select defaultValue='1' style={{ width: 120 }} onChange={handleChange}>
            <Option value={1}>Buổi Sáng</Option>
            <Option value={2}>Buổi Chiều</Option>
            <Option value={3}>Cả ngày</Option>
          </Select>
        </div>
        <Button type='primary' danger onClick={handleClickButton} disabled={!isButtonCreateSlotClicked}>
          Tạo mới slot đăng ký
        </Button>
      </Space>
    </>
  );
};
export default LeftBarComponent;