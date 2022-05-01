import { Button, DatePicker, Form, Input, Select } from 'antd';
import {
  address,
  firstname,
  idcard,
  lastname,
  middlename,
  phone,
  relogion,
  vcode
} from '../../../validate/RegisterForm.validate';

import Label from '../../commons/Label/Label.component';
import React, { useState } from 'react';
import moment from 'moment';

const RegisterForm = (props) => {
  const {
    handleCode,
    schoolName,
    onFinish,
    handleDatePicker,
    provinces,
    onChangeProvince,
    districts,
    onChangeDistricts,
    wards,
    onChangeSex
  } = props;
  const { Option } = Select;
  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  const customWeekStartEndFormat = (value) =>
    `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value).endOf('week').format(weekFormat)}`;

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
      <Form className='grid md:grid-cols-2 gap-6' onFinish={onFinish}>
        <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
          <Form.Item name='firstname' rules={firstname}>
            <label className='block'>
              <Label>Họ</Label>
              <Input placeholder='Example Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='middlename' rules={middlename}>
            <label className='block'>
              <Label>Tên đệm</Label>
              <Input placeholder='Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='lastname' rules={lastname}>
            <label className='block'>
              <Label>Tên</Label>
              <Input placeholder='Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
        </div>

        <div className='grid md:grid-cols-3 '>
          <Form.Item name='dob'>
            <div>
              <Label>Ngày sinh</Label>
              <div className='mt-1'>
                <DatePicker
                  // defaultValue={moment('2015/01/01', dateFormat)}
                  // format={dateFormat}
                  onChange={handleDatePicker}
                />
              </div>
            </div>
          </Form.Item>

          <div>
            <Form.Item name='sex'>
              <Label>Giới tính</Label>
              <div className='mt-1'>
                <Select defaultValue='Male' style={{ width: 150 }} onChange={onChangeSex}>
                  <Option value='Male'>Nam</Option>
                  <Option value='Female'>Nữ</Option>
                  <Option value='Other'>Khác</Option>
                </Select>
              </div>
            </Form.Item>
          </div>

          <div>
            <Form.Item name='provine'>
              <label className='block'>
                <Label>nơi sinh</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Thành Phố Hồ Chí Minh..'
                    optionFilterProp='children'
                    onChange={onChangeProvince}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {provinces?.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                </div>
              </label>
            </Form.Item>
          </div>
        </div>

        <Form.Item name='phone' rules={phone}>
          <label className='block'>
            <Label>Số điện thoại</Label>
            <Input type='text' className='mt-1' />
          </label>
        </Form.Item>
        <label className='block '>
          <div className='grid md:grid-cols-3 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Form.Item name='address' rules={address}>
                <label className='block'>
                  <Label>Địa chỉ</Label>
                  <Input placeholder='Doe' type='text' className='mt-1' />
                </label>
              </Form.Item>
            </div>
            <Form.Item name='districs'>
              <label className='block'>
                <Label>Quận/Huyện</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Quận/huyện..'
                    optionFilterProp='children'
                    onChange={onChangeDistricts}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {districts?.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                </div>
              </label>
            </Form.Item>
            <Form.Item name='ward'>
              <label className='block'>
                <Label>Phường/Xã</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Phường/xã...'
                    optionFilterProp='children'
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {wards?.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                </div>
              </label>
            </Form.Item>
          </div>
        </label>
        <Form.Item name='religion' rules={relogion}>
          <label className='block'>
            <Label>Tôn giáo</Label>
            <Input placeholder='Doe' type='text' className='mt-1' />
          </label>
        </Form.Item>
        <Form.Item name='idcard' rules={idcard}>
          <label className='block'>
            <Label>CMND/CCCD</Label>
            <Input type='text' className='mt-1' />
          </label>
        </Form.Item>
        <Form.Item name='code' rules={vcode}>
          <label className='block'>
            <Label>Mã</Label>
            <Input type='text' className='mt-1' defaultValue='' onChange={(e) => handleCode(e.target.value)} />
            <font color='green'>{schoolName}</font>
          </label>
        </Form.Item>
        <Button className='md:col-span-2' htmlType='submit' type='primary' style={{ borderRadius: 10 }}>
          Update profile
        </Button>
      </Form>
    </div>
  );
};
export default RegisterForm;
