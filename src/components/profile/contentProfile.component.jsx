import { Button, DatePicker, Form, Input, Select } from 'antd';
import { address, firstname, idcard, lastname, phone, email } from '../../validate//RegisterForm.validate';

import Label from '../commons/Label/Label.component';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const UpdaterForm = (props) => {
  const {
    onFinish,
    handleDatePicker,
    provinces,
    onChangeSex,
    onChangePlaceOfBirth,
    onChangeReligion,
    nation,
    onChangeNation,
    accountinfor,
    onChangeProvince,
    onChangeDistricts,
    isDisableDistrict,
    districts,
    onChangeWard,
    isDisableWard,
    wards
  } = props;

  // console.log('contentacc: ', accountinfor);

  const field = [
    {
      name: ['lastName'],
      value: accountinfor.lastName
    },
    {
      name: ['middleName'],
      value: accountinfor.middleName
    },
    {
      name: ['firstName'],
      value: accountinfor.firstName
    },
    {
      name: ['profileImageUrl'],
      value: accountinfor.profileImageUrl
    },
    // {
    //   name: ['dateOfBirth'],
    //   value: moment(accountinfor.dateOfBirth).format('YYYY/MM/DD')
    // },
    {
      name: ['genderId'],
      value: accountinfor.genderId
    },
    {
      name: ['placeOfBirth'],
      value: accountinfor.placeOfBirth
    },
    {
      name: ['phoneNumber'],
      value: accountinfor.phoneNumber
    },
    {
      name: ['address'],
      value: accountinfor.address
    },
    {
      name: ['religion'],
      value: accountinfor.religion
    },
    {
      name: ['nationality'],
      value: accountinfor.nationality
    },
    {
      name: ['idCard'],
      value: accountinfor.idCard
    },
    {
      name: ['emailContact'],
      value: accountinfor.emailContact
    }
  ];
  // console.log('field: ', field);

  // const [isDataValue, setIsDataValue] = useState(accountinfor.lastName);
  // const [isMiddleName, setIsMiddleName] = useState(accountinfor.middleName);
  // const [isFirstName, setIsFirstName] = useState(accountinfor.firstName);
  // const [isAvatar, setIsAvatar] = useState(accountinfor.profileImageUrl);

  // const handleDataValue = (text) => {
  //   setIsDataValue(text);
  // };

  // const handleMiddleName = (text) => {
  //   setIsMiddleName(text);
  // };

  // const handleFirstName = (text) => {
  //   setIsFirstName(text);
  // };
  // const handleAvatar = (text) => {
  //   setIsAvatar(text);
  // };

  const { Option } = Select;
  const dateFormat = 'DD/MM/YYYY';
  console.log(moment(accountinfor.dateOfBirth).format(dateFormat));
  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
      <Form className='grid md:grid-cols-2 gap-6' onFinish={onFinish} fields={field}>
        <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
          <label className='block'>
            <Label>Họ</Label>
            <Form.Item name='lastName' rules={lastname}>
              <Input
                placeholder='Nguyễn, Trần, Lê,...'
                type='text'
                className='mt-1'
                // value={isDataValue}
                // onChange={(e) => handleDataValue(e.target.value)}
              />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Tên đệm</Label>
            <Form.Item name='middleName'>
              <Input
                placeholder='Thị, Văn,...'
                type='text'
                className='mt-1'
                // value={isMiddleName}
                // onChange={(e) => handleMiddleName(e.target.value)}
              />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Tên</Label>
            <Form.Item name='firstName' rules={firstname}>
              <Input
                placeholder='Tín, Đạt, Hào,...'
                type='text'
                className='mt-1'
                // value={isFirstName}
                // onChange={(e) => handleFirstName(e.target.value)}
              />
            </Form.Item>
          </label>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>URL ảnh đại diện</Label>
            <Form.Item name='profileImageUrl'>
              <Input
                type='text'
                className='mt-1'
                // value={isAvatar}
                // onChange={(e) => handleAvatar(e.target.value)}
              />
            </Form.Item>
          </label>
        </div>

        <div className='grid md:grid-cols-3 '>
          <div className='mt-1'>
            <Label>Ngày sinh</Label>
            <Form.Item name='dateOfBirth'>
              <div>
                <DatePicker
                  defaultValue={moment(moment(accountinfor.dateOfBirth).format(dateFormat), dateFormat)}
                  format={dateFormat}
                  onChange={handleDatePicker}
                  placeholder='ngày tháng năm sinh'
                />
              </div>
            </Form.Item>
          </div>

          <div>
            <Label>Giới tính</Label>
            <div className='mt-1'>
              <Form.Item name='genderId' hasFeedback>
                <Select placeholder='Giới tính' style={{ width: 150 }} onChange={onChangeSex}>
                  <Option value={1}>Nam</Option>
                  <Option value={2}>Nữ</Option>
                  {/* <Option value='Other'>Khác</Option> */}
                </Select>
              </Form.Item>
            </div>
          </div>

          <div>
            <label className='block'>
              <Label>Nơi sinh</Label>
              <div className='mt-1'>
                <Form.Item name='placeOfBirth'>
                  <Select
                    showSearch
                    placeholder='Thành Phố Hồ Chí Minh..'
                    optionFilterProp='children'
                    onChange={onChangePlaceOfBirth}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {provinces?.map((item) => (
                      <Option value={item.name}>{item.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </label>
          </div>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>Số điện thoại</Label>
            <Form.Item name='phoneNumber' rules={phone}>
              <Input type='text' className='mt-1' />
            </Form.Item>
          </label>
        </div>
        <label className='block '>
          <div className='grid md:grid-cols-1 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <label className='block'>
                <Label>Địa chỉ</Label>
                <Form.Item name='address' rules={address}>
                  <Input placeholder='Doe' type='text' className='mt-1' />
                </Form.Item>
              </label>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <label className='block'>
                <Label>Tôn giáo</Label>
                <Form.Item name='religion'>
                  <Select placeholder='Tôn giáo' onChange={onChangeReligion}>
                    <Option value='Phật giáo'>Phật giáo</Option>
                    <Option value='Thiên Chúa Giáo'>Thiên chúa giáo</Option>
                    <Option value='không'>Không</Option>
                    <Option value='Khác'>Khác</Option>
                  </Select>
                </Form.Item>
              </label>
            </div>
            <div className='mt-1'>
              <label className='block'>
                <Label>Quốc tịch</Label>
                <Form.Item name='nationality'>
                  <Select
                    showSearch
                    placeholder='Quốc tịch'
                    optionFilterProp='children'
                    onChange={onChangeNation}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {nation?.map((item) => (
                      <Option value={item.name}>{item.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </label>
            </div>
          </div>
        </label>

        <label className='block '>
          <div className='mt-1'>
            <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
              <label className='block'>
                <Label>CMND/CCCD</Label>
                <Form.Item name='idCard' rules={idcard}>
                  <Input type='text' />
                </Form.Item>
              </label>
              <label className='block'>
                <Label>Email liên hệ</Label>
                <Form.Item name='emailContact' rules={email}>
                  <Input type='text' className='mt-1' placeholder='abc@gmail.com' />
                </Form.Item>
              </label>
              {/* <Form.Item name={codeWithRole} rules={vcode}>
                <label className='block'>
                  <Label>Mã</Label>
                  <Input type='text' onChange={(e) => handleCode(e.target.value)} />

                  {schoolName !== '' ? (
                    <font color='green'>{schoolName}</font>
                  ) : (
                    <font color='red'>Không tìm thấy !</font>
                  )}
                </label>
              </Form.Item> */}
            </div>
          </div>
        </label>
        <Button className='md:col-span-2' htmlType='submit' type='primary' style={{ borderRadius: 10 }}>
          Cập Nhật
        </Button>
      </Form>
    </div>
  );
};
export default UpdaterForm;
