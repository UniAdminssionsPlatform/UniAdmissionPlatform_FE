import { Form, Input, Select, Typography } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import React, { useState } from 'react';
const SearchBarComponent = (props) => {
  const { Title } = Typography;

  const { setDataSearch, setLoading, dataSearch } = props;

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const debounced = useDebouncedCallback(
    // function
    () => {
      setLoading(true);
      setDataSearch({
        ...dataSearch,
        firstName,
        email,
        phone
      });
    },
    // delay in ms
    2000
  );
  return (
    <>
      <Form>
        <Form.Item name='firstName'>
          <Input
            placeholder='Tên người đại diện...'
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
      </Form>
    </>
  );
};
export default SearchBarComponent;
