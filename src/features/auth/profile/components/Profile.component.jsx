import { Button, DatePicker, Form, Input, Select } from 'antd';
import { Helmet } from 'react-helmet';
import { address, email, firstname, idcard, lastname, phone } from '../../../../validate/RegisterForm.validate';

import Label from '../../../../components/commons/Label/Label.component';
import React from 'react';
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
    accountInformation
  } = props;
  const { Option } = Select;
  const dateFormat = 'DD/MM/YYYY';
  console.log(moment(accountInformation.dateOfBirth).format(dateFormat));
  function onSearch(val) {
    console.log('search:', val);
  }

  const account = {
    lastName: accountInformation.lastName,
    middleName: accountInformation.middleName,
    firstName: accountInformation.firstName,
    profileImageUrl: accountInformation.profileImageUrl,
    genderId: accountInformation.genderId,
    placeOfBirth: accountInformation.placeOfBirth,
    phoneNumber: accountInformation.phoneNumber,
    address: accountInformation.address,
    religion: accountInformation.religion,
    nationality: accountInformation.nationality,
    idCard: accountInformation.idCard,
    emailContact: accountInformation.emailContact,
    dateOfBirth: moment(accountInformation.dateOfBirth)
  };

  const field = [
    {
      name: ['lastName'],
      value: accountInformation.lastName
    },
    {
      name: ['middleName'],
      value: accountInformation.middleName
    },
    {
      name: ['firstName'],
      value: accountInformation.firstName
    },
    {
      name: ['profileImageUrl'],
      value: accountInformation.profileImageUrl
    },
    {
      name: ['genderId'],
      value: accountInformation.genderId
    },
    {
      name: ['placeOfBirth'],
      value: accountInformation.placeOfBirth
    },
    {
      name: ['phoneNumber'],
      value: accountInformation.phoneNumber
    },
    {
      name: ['address'],
      value: accountInformation.address
    },
    {
      name: ['religion'],
      value: accountInformation.religion
    },
    {
      name: ['nationality'],
      value: accountInformation.nationality
    },
    {
      name: ['idCard'],
      value: accountInformation.idCard
    },
    {
      name: ['emailContact'],
      value: accountInformation.emailContact
    },
    {
      name: ['dateOfBirth'],
      value: moment(accountInformation.dateOfBirth).format(dateFormat)
    }
  ];

  return (
    <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
      <Helmet>
        <title>Chỉnh sửa thông tin cá nhân</title>
      </Helmet>
      <Form className='grid md:grid-cols-2 gap-6' onFinish={onFinish} initialValues={account}>
        <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
          <label className='block'>
            <Label>Họ</Label>
            <Form.Item name='lastName' rules={lastname}>
              <Input placeholder='Nguyễn, Trần, Lê,...' type='text' className='mt-1' />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Tên đệm</Label>
            <Form.Item name='middleName'>
              <Input placeholder='Thị, Văn,...' type='text' className='mt-1' />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Tên</Label>
            <Form.Item name='firstName' rules={firstname}>
              <Input placeholder='Tín, Đạt, Hào,...' type='text' className='mt-1' />
            </Form.Item>
          </label>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>URL ảnh đại diện</Label>
            <Form.Item name='profileImageUrl'>
              <Input type='text' className='mt-1' />
            </Form.Item>
          </label>
        </div>

        <div className='grid md:grid-cols-3 '>
          <div className='mt-1'>
            <Label>Ngày sinh</Label>
            <Form.Item name='dateOfBirth'>
              <DatePicker format={dateFormat} onChange={handleDatePicker} placeholder='ngày tháng năm sinh' />
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
