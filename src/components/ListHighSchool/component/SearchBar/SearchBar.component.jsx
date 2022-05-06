import { Form, Input, Select, Typography } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import React, { useState } from 'react';
const SearchBarComponent = (props) => {
  const { Option } = Select;
  const { Title } = Typography;

  const { setDataSearch, provinces, onChange, districts, isDisableDistrict } = props;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState('');

  const debounced = useDebouncedCallback(
    // function
    () => {
      setDataSearch({
        name,
        address,
        email,
        phone,
        status,
        district
      });
    },
    // delay in ms
    1000
  );

  function onSearch(val) {
    console.log('search:', val);
  }

  function onChangeDistrict(value) {
    console.log('changeDistrict:', value);
    setDistrict(value);
    debounced();
  }
  function onChangeStatus(value) {
    console.log('status:', value);
    setStatus(value);
    debounced();
  }
  return (
    <>
      <Title level={2}>Tìm kiếm</Title>
      <Form>
        <Form.Item name='name'>
          <Input
            placeholder='Tên trường...'
            type='text'
            onChange={(e) => {
              setName(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='address'>
          <Input
            placeholder='Địa chỉ..'
            type='text'
            onChange={(e) => {
              setAddress(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='email'>
          <Input
            placeholder='email...'
            type='text'
            onChange={(e) => {
              setEmail(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='phone_Number'>
          <Input
            placeholder='số điện thoại...'
            type='text'
            onChange={(e) => {
              setPhone(e.target.value);
              debounced();
            }}
          />
        </Form.Item>
        <Form.Item name='provine'>
          <Select
            showSearch
            placeholder='Tỉnh/Thành phố'
            optionFilterProp='children'
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.indexOf(input) >= 0}>
            {provinces?.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name='districts'>
          <Select
            showSearch
            placeholder='Quận/Huyện'
            optionFilterProp='children'
            onChange={onChangeDistrict}
            onSearch={onSearch}
            disabled={isDisableDistrict}
            filterOption={(input, option) => option.children.indexOf(input) >= 0}>
            {districts?.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name='status'>
          <Select placeholder='Trạng thái' onChange={onChangeStatus}>
            <Option value={1}>Đã kích hoạt</Option>
            <Option value={0}>Đang bị đóng</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};
export default SearchBarComponent;
