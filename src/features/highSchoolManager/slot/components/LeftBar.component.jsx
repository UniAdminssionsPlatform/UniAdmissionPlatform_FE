import { Button, Checkbox, Collapse, DatePicker, Divider, Form, Radio, Select, Space, Typography } from 'antd';
import { SLOT_IS_CLOSE, SLOT_IS_FULL, SLOT_IS_OPEN } from '../../../../constants/AppConst';
import { enumerateDaysBetweenDates, parseCorrectDateBaseSlot } from '../../../../utils/dateUtil';
import React, { useState } from 'react';
import moment from 'moment';

const LeftBarComponent = (props) => {
  const { setListAddingSlot, isButtonCreateSlotClicked, setIsButtonCreateSlotClicked, setDataSearch } = props;
  const { Text } = Typography;
  const [slot, setSlot] = useState(1);
  const [arraySlot, setArraySlot] = useState([]);
  const { Option } = Select;
  const handleChange = (data) => {
    setSlot(data);
  };

  const { Panel } = Collapse;
  const onChangeRage = (dates, dateStrings) => {
    setIsButtonCreateSlotClicked(true);
    setArraySlot(enumerateDaysBetweenDates(dateStrings[0], dateStrings[1]));
  };
  const { RangePicker } = DatePicker;
  const handleClickButton = () => {
    setListAddingSlot(parseCorrectDateBaseSlot(arraySlot, slot));
  };

  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }
  const onChangeCollapse = () => {};
  const onFinish = (data) => {
    setDataSearch({
      startDate: data?.datePicker ? moment(data?.datePicker[0]._d).format('L') : null,
      endDate: data?.datePicker ? moment(data?.datePicker[1]._d).format('L') : null,
      status: data.status
    });
  };
  return (
    <>
      <Collapse defaultActiveKey={['1']} onChange={onChangeCollapse}>
        <Panel header='Tìm kiếm slot' key='1'>
          <Form name='searchSlot' onFinish={onFinish} layout='vertical'>
            <Form.Item name='datePicker' label='Ngày khởi tạo'>
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')]
                }}
                disabledDate={disabledDate}
              />
            </Form.Item>
            <Form.Item name='status' label='Trạng thái Slot'>
              <Space>
                <Radio.Group>
                  <Radio.Button value={SLOT_IS_FULL}>Đã đầy</Radio.Button>
                  <Radio.Button value={SLOT_IS_OPEN}>Còn trống</Radio.Button>
                  <Radio.Button value={SLOT_IS_CLOSE}>Đã đóng</Radio.Button>
                  <Radio.Button value={''}>Tất cả</Radio.Button>
                </Radio.Group>
              </Space>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Duyệt
              </Button>
            </Form.Item>
          </Form>
        </Panel>
        <Panel header='Thêm mới slot' key='2'>
          <Space direction='vertical'>
            <RangePicker
              ranges={{
                Today: [moment(), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')]
              }}
              disabledDate={disabledDate}
              onChange={onChangeRage}
              onPanelChange={() => {
                setIsButtonCreateSlotClicked(true);
              }}
              onOk={() => {
                setIsButtonCreateSlotClicked(true);
              }}
            />
            <div>
              <Text type='secondary'> Thời điểm diễn ra </Text>
              <Select defaultValue={1} style={{ width: 120 }} onChange={handleChange}>
                <Option value={1}>Buổi Sáng</Option>
                <Option value={2}>Buổi Chiều</Option>
                <Option value={3}>Cả ngày</Option>
              </Select>
            </div>
            <Button type='primary' danger onClick={handleClickButton} disabled={!isButtonCreateSlotClicked}>
              Tạo mới slot đăng ký
            </Button>
          </Space>
        </Panel>
      </Collapse>
    </>
  );
};
export default LeftBarComponent;
