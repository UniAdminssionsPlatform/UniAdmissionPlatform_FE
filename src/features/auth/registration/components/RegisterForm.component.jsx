import { Button, DatePicker, Form, Input, Select, Tooltip, Typography } from 'antd';
import {
  address,
  district,
  dob,
  email,
  firstname,
  lastname,
  nationality,
  phone,
  placeOfBirth,
  province,
  relogion,
  sex,
  vcode,
  ward
} from '../../../../validate/RegisterForm.validate';

import Label from '../../../../components/commons/Label/Label.component';
import React from 'react';

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
    onChangeWard,
    isDisableDistrict,
    isDisableWard,
    codeWithRole,
    onChangeReligion,
    nation,
    onChangeNation
  } = props;
  const { Option } = Select;

  function onSearch(val) {
    console.log('search:', val);
  }
  const { Text, Title } = Typography;
  return (
    <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
      <Form className='grid md:grid-cols-2 gap-6' onFinish={onFinish}>
        <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
          <Form.Item name='lastName' rules={lastname}>
            <label className='block'>
              <Label>
                Họ<Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Input placeholder='Nguyễn, Trần, Lê,...' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='middleName'>
            <label className='block'>
              <Label>Tên đệm</Label>
              <Input placeholder='Thị, Văn,...' type='text' className='mt-1' />
            </label>
          </Form.Item>
          <Form.Item name='firstName' rules={firstname}>
            <label className='block'>
              <Label>
                Tên <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Input placeholder='Tín, Đạt, Hào,...' type='text' className='mt-1' />
            </label>
          </Form.Item>
        </div>

        <div className='grid md:grid-cols-3 '>
          <div>
            <Label>
              Ngày sinh <Text style={{ color: 'red' }}>*</Text>
            </Label>
            <Form.Item name='dateOfBirth' rules={dob}>
              <DatePicker onChange={handleDatePicker} placeholder='ngày tháng năm sinh' />
            </Form.Item>
          </div>
          <div>
            <Label>
              Giới tính <Text style={{ color: 'red' }}>*</Text>
            </Label>
            <Form.Item name='genderId' hasFeedback rules={sex}>
              <Select placeholder='Giới tính' style={{ width: 150 }} onChange={onChangeSex}>
                <Option value={1}>Nam</Option>
                <Option value={2}>Nữ</Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <Label>
              Nơi sinh <Text style={{ color: 'red' }}>*</Text>
            </Label>
            <Form.Item name='placeOfBirth' rules={placeOfBirth}>
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
        </div>

        <label className='block '>
          <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Form.Item name='phoneNumber' rules={phone}>
                <label className='block'>
                  <Label>
                    Số điện thoại <Text style={{ color: 'red' }}>*</Text>
                  </Label>
                  <Input type='text' className='mt-1' placeholder={'Nhập thông tin số điện thoại'} />
                </label>
              </Form.Item>
            </div>
            <div className='mt-1'>
              <Form.Item name='emailContact' rules={email}>
                <label className='block'>
                  <Label>
                    Email <Text style={{ color: 'red' }}>*</Text>
                  </Label>
                  <Input type='text' className='mt-1' placeholder={'Nhập thông tin email'} />
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-1 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Form.Item name='address' rules={address}>
                <label className='block'>
                  <Label>
                    Địa chỉ <Text style={{ color: 'red' }}>*</Text>
                  </Label>
                  <Input placeholder='Ex: 123 bình Phú...' type='text' className='mt-1' />
                </label>
              </Form.Item>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <Label>
                Tôn giáo <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Form.Item name='religion' rules={relogion}>
                <Select placeholder='Tôn giáo' onChange={onChangeReligion}>
                  <Option value='Phật giáo'>Phật giáo</Option>
                  <Option value='Thiên Chúa Giáo'>Thiên chúa giáo</Option>
                  <Option value='không'>Không</Option>
                  <Option value='Khác'>Khác</Option>
                </Select>
              </Form.Item>
            </div>
            <div className='mt-1'>
              <Label>
                Quốc tịch <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Form.Item name='nationality' rules={nationality}>
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
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='grid md:grid-cols-3 gap-6 block md:col-span-2 '>
            <div>
              <Label>
                Tỉnh/thành phố <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Form.Item name={'provinces'} rules={province}>
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
              </Form.Item>
            </div>
            <div>
              <Label>
                Quận/Huyện <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Form.Item name={'districts'} rules={district}>
                <Select
                  showSearch
                  placeholder='Quận/huyện..'
                  optionFilterProp='children'
                  onChange={onChangeDistricts}
                  onSearch={onSearch}
                  disabled={isDisableDistrict}
                  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {districts?.map((item) => (
                    <Option value={item.id}>{item.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div>
              <Label>
                Phường/Xã <Text style={{ color: 'red' }}>*</Text>
              </Label>
              <Form.Item name='wardId' rules={ward}>
                <Select
                  showSearch
                  placeholder='Phường/xã...'
                  optionFilterProp='children'
                  onChange={onChangeWard}
                  onSearch={onSearch}
                  disabled={isDisableWard}
                  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {wards?.map((item) => (
                    <Option value={item.id}>{item.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>
        </label>
        <label className='block '>
          <div className='mt-1'>
            <div className='grid md:grid-cols-2 gap-6 block md:col-span-2 '>
              <Form.Item name='idCard'>
                <label className='block'>
                  <Label>CMND/CCCD</Label>
                  <Input type='text' />
                </label>
              </Form.Item>
              <Form.Item name={codeWithRole} rules={vcode}>
                <label className='block'>
                  <Label>
                    Mã xác thực <Text style={{ color: 'red' }}>*</Text>
                  </Label>
                  <Tooltip
                    trigger={['focus']}
                    placement='topLeft'
                    title='Mã xác thực dùng để xác định vai trò của bạn trong hệ thống và được nhận từ người đứng đầu tổ chức của bạn.'>
                    <Input type='text' onChange={(e) => handleCode(e.target.value)} placeholder={'Nhập mã xác nhận'} />
                  </Tooltip>
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
          Đăng Kí
        </Button>
      </Form>
    </div>
  );
};
export default RegisterForm;
