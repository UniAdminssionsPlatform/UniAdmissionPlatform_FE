import { Form, Input, Select, Typography } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBarComponent = (props) => {
  const { Option } = Select;
  const { Title } = Typography;
  const { setDataSearch } = props;
  const [name, setName] = useState('');
  const [hostname, setHostName] = useState('');
  const [eventtype, setEventType] = useState('');
  const [status, setStatus] = useState('');
  const { user } = useSelector((state) => state.authentication);
  const debounced = useDebouncedCallback(
    // function
    () => {
      setDataSearch({
        name,
        hostname,
        eventtype,
        status,
        universityID: user.id ? user.id : 1
      });
    },
    // delay in ms
    1000
  );

  function onChangeStatus(value) {
    console.log('status:', value);
    setStatus(value);
    debounced();
  }
  function onChangeType(value) {
    setEventType(value);
    debounced();
  }
  return (
    <>
      <Title level={2}>Tìm kiếm</Title>
      <Form>
        <Form.Item name='Tên'>
          <Input
            placeholder='Tên sự kiện...'
            type='text'
            onChange={(e) => {
              setName(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='MC'>
          <Input
            placeholder='MC..'
            type='text'
            onChange={(e) => {
              setHostName(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='type'>
          <Select placeholder='Loại Sự Kiện' onChange={onChangeType}>
            <Option value=''> Trống </Option>
            <Option value={1}>Online</Option>
            <Option value={2}>Tổ chức tại trường</Option>
            <Option value={3}>Tổ chức tại Đại Học</Option>
            <Option value={4}>Nơi khác</Option>
          </Select>
        </Form.Item>
        <Form.Item name='status'>
          <Select placeholder='Trạng thái' onChange={onChangeStatus}>
            <Option value=''> Trống </Option>
            <Option value={1}>Đã kích hoạt</Option>
            <Option value={0}>Đang bị đóng</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};
export default SearchBarComponent;
