import { Button, DatePicker, Form, Input, Select } from 'antd';
import { city, distric, ward } from '../../../utils/getLocation';
import { getHighSchoolByCode, getHighSchoolByManagerCode } from '../../../services/HighSchoolService';
import { getUniversityByCode } from '../../../services/UniversityService';
import { handleNotification } from '../../../notification/LoginNotification';
import { useDebouncedCallback } from 'use-debounce';
import Label from '../../commons/Label/Label.component';
import React, { useState } from 'react';
import moment from 'moment';
import {
  phone,
  firstname,
  lastname,
  middlename,
  address,
  relogion,
  vcode,
  idcard
} from '../../../validate/RegisterForm.validate';

const RegisterForm = (props) => {
  const { role } = props;
  const { Option } = Select;
  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  const customWeekStartEndFormat = (value) =>
    `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value).endOf('week').format(weekFormat)}`;

  const [schoolName, setSchoolName] = useState('');
  const [code, setCode] = useState('');

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (role === 'st') {
        getHighSchoolByCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch((err) => {
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
      if (role === 'uni') {
        getUniversityByCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch((err) => {
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
      if (role === 'hs') {
        getHighSchoolByManagerCode(value)
          .then((result) => {
            setCode(result.data.data.id);
            setSchoolName(result.data.data.name);
          })
          .catch((err) => {
            setSchoolName(<font color='red'>Không tìm thấy !</font>);
          });
      }
    },
    // delay in ms
    1000
  );

  const [dob, setDob] = useState('');
  const handleDatePicker = (date, dateString) => {
    console.log(dateString);

    setDob(dateString);
  };
  const onFinish = (values) => {
    values.dob = dob;
    values.code = code;
    console.log('Success:', values);
    city();
    distric('Thành phố Hồ Chí Minh');
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

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
        <label className='block '>
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
                  <Select defaultValue='Male' style={{ width: 150 }}>
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
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {city().map((item) => (
                        <Option value={item}>{item}</Option>
                      ))}
                    </Select>
                  </div>
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
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
            <Form.Item name='provine'>
              <label className='block'>
                <Label>Quận/Huyện</Label>
                <div className='mt-1'>
                  <Select defaultValue='Male' style={{ width: 150 }}>
                    <Option value='Male'>Dak lak</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Other'>Male</Option>
                  </Select>
                </div>
              </label>
            </Form.Item>
            <Form.Item name='provine'>
              <label className='block'>
                <Label>Phường/Xã</Label>
                <div className='mt-1'>
                  <Select defaultValue='Male' style={{ width: 150 }}>
                    <Option value='Male'>Dak lak</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Other'>Male</Option>
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
            <Input type='text' className='mt-1' defaultValue='' onChange={(e) => debounced(e.target.value)} />
            {schoolName}
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
