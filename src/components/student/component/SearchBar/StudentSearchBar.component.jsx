import { Form, Input, Select, Typography } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
const SearchBarComponent = (props) => {
  const { Option } = Select;
  const { Title } = Typography;

  const { setDataSearch } = props;

  const { user } = useSelector((state) => state.authentication);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const debounced = useDebouncedCallback(
    // function
    () => {
      setDataSearch({
        firstName,
        email,
        phone,
        status,
        highschoolID: user.highSchoolId
      });
    },
    // delay in ms
    2000
  );
  const onChangeStatus = (value) => {
    setStatus(value);
    debounced();
  };
  return (
    <>
      <Title level={2}>Tìm kiếm</Title>
      <Form>
        <Form.Item name='firstName'>
          <Input
            placeholder='Tên học sinh...'
            type='text'
            onChange={(e) => {
              setFirstName(e.target.value);
              debounced();
            }}
          />
        </Form.Item>

        <Form.Item name='email'>
          <Input
            placeholder='Email...'
            type='text'
            onChange={(e) => {
              setEmail(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='phone_Number'>
          <Input
            placeholder='Số điện thoại...'
            type='text'
            onChange={(e) => {
              setPhone(e.target.value);
              debounced();
            }}
          />
        </Form.Item>

        <Form.Item name='status'>
          <Select placeholder='Trạng thái' onChange={onChangeStatus}>
            <Option value={2}>Đang hoạt động</Option>
            <Option value={3}>Đã khóa</Option>
            <Option value=''>Tất cả</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};
export default SearchBarComponent;
