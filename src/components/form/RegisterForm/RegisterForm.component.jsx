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
    onChangeSex,
    onChangePlaceOfBirth,
    onChangeWard
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
          <Form.Item name='first_name' rules={firstname}>
            <label className='block'>
              <Label>Họ</Label>
              <Input placeholder='Example Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='middle_name' rules={middlename}>
            <label className='block'>
              <Label>Tên đệm</Label>
              <Input placeholder='Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='last_name' rules={lastname}>
            <label className='block'>
              <Label>Tên</Label>
              <Input placeholder='Doe' type='text' className='mt-1' />
            </label>
          </Form.Item>
        </div>

        <div className='grid md:grid-cols-3 '>
          <Form.Item name='date_of_birth'>
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
            <Form.Item name='gender_id'>
              <Label>Giới tính</Label>
              <div className='mt-1'>
                <Select defaultValue={1} style={{ width: 150 }} onChange={onChangeSex}>
                  <Option value={1}>Nam</Option>
                  <Option value={2}>Nữ</Option>
                  {/* <Option value='Other'>Khác</Option> */}
                </Select>
              </div>
            </Form.Item>
          </div>

          <div>
            <Form.Item name='place_of_birth'>
              <label className='block'>
                <Label>nơi sinh</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Thành Phố Hồ Chí Minh..'
                    optionFilterProp='children'
                    onChange={onChangePlaceOfBirth}
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

        <div className='mt-1'>
          <Form.Item name='phone_number' rules={phone}>
            <label className='block'>
              <Label>Số điện thoại</Label>
              <Input type='text' className='mt-1' />
            </label>
          </Form.Item>
        </div>
        <label className='block '>
          <div className='grid md:grid-cols-1 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Form.Item name='address' rules={address}>
                <label className='block'>
                  <Label>Địa chỉ</Label>
                  <Input placeholder='Doe' type='text' className='mt-1' />
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Form.Item name='religion' rules={relogion}>
                <label className='block'>
                  <Label>Tôn giáo</Label>
                  <Input placeholder='Doe' type='text' className='mt-1' />
                </label>
              </Form.Item>
            </div>
            <div className='mt-1'>
              <Form.Item name='nationality'>
                <label className='block'>
                  <Label>Quốc tịch</Label>
                  <Input placeholder='Doe' type='text' className='mt-1' />
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-3 gap-6 block md:col-span-2 '>
            <Form.Item>
              <label className='block'>
                <Label>Tỉnh/thành phố</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Tỉnh/thành phố'
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

            <Form.Item>
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

            <Form.Item name='ward_id'>
              <label className='block'>
                <Label>Phường/Xã</Label>
                <div className='mt-1'>
                  <Select
                    showSearch
                    placeholder='Phường/xã...'
                    optionFilterProp='children'
                    onChange={onChangeWard}
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
        <label className='block '>
          <div className='mt-1'>
            <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
              <Form.Item name='id_card' rules={idcard}>
                <label className='block'>
                  <Label>CMND/CCCD</Label>
                  <Input type='text' />
                </label>
              </Form.Item>
              <Form.Item name='high_school_code' rules={vcode}>
                <label className='block'>
                  <Label>Mã</Label>
                  <Input type='text' onChange={(e) => handleCode(e.target.value)} />

                  {schoolName !== '' ? (
                    <font color='green'>{schoolName}</font>
                  ) : (
                    <font color='red'>Không tìm thấy !</font>
                  )}
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
        <Button className='md:col-span-2' htmlType='submit' type='primary' style={{ borderRadius: 10 }}>
          Update profile
        </Button>
      </Form>
    </div>
  );
};
export default RegisterForm;
