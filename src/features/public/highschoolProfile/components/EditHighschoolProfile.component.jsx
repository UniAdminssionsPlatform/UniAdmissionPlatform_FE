import { Button, Form, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import Label from '../../../../components/commons/Label/Label.component';
import React from 'react';
import { email, name, phone } from '../../../../validate/EditHighSchoolProfile.validate';

const UpdaterHighSchoolProfileComponent = (props) => {
  const { TextArea } = Input;
  const { onFinish, highschoolInformation } = props;
  const field = [
    {
      name: ['name'],
      value: highschoolInformation.name
    },
    {
      name: ['address'],
      value: highschoolInformation.address
    },
    {
      name: ['phoneNumber'],
      value: highschoolInformation.phoneNumber
    },
    {
      name: ['profileImageUrl'],
      value: highschoolInformation.profileImageUrl
    },
    {
      name: ['thumbnailUrl'],
      value: highschoolInformation.thumbnailUrl
    },
    {
      name: ['shortDescription'],
      value: highschoolInformation.shortDescription
    },
    {
      name: ['websiteUrl'],
      value: highschoolInformation.websiteUrl
    },
    {
      name: ['email'],
      value: highschoolInformation.email
    },
    {
      name: ['highSchoolCode'],
      value: highschoolInformation.highSchoolCode
    },
    {
      name: ['highSchoolManagerCode'],
      value: highschoolInformation.highSchoolManagerCode
    }
  ];

  return (
    <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
      <Form className='grid md:grid-cols-2 gap-6' onFinish={onFinish} fields={field}>
        <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
          <label className='block'>
            <Label>Tên *</Label>
            <Form.Item name='name' rules={name}>
              <Input
                placeholder='Trường THPT Chu Văn An,...'
                type='text'
                className='mt-1'
                suffix={
                  <Tooltip title='Bắt buộc nhập tên'>
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Địa chỉ</Label>
            <Form.Item name='address'>
              <Input placeholder='Tỉnh/Thành Phố, Phường/Xã, Quận/Huyện,...' type='text' className='mt-1' />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Số điện thoại</Label>
            <Form.Item name='phoneNumber' rules={phone}>
              <Input
                placeholder='039...'
                type='text'
                className='mt-1'
                prefix={<PhoneOutlined className='site-form-item-icon' />}
                suffix={
                  <Tooltip title='Số điện thoại bao gồm 10-11 số và không có dấu cách'>
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
          </label>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>URL ảnh đại diện</Label>
            <Form.Item name='profileImageUrl'>
              <TextArea rows={2} />
            </Form.Item>
          </label>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>URL ảnh bìa</Label>
            <Form.Item name='thumbnailUrl'>
              <TextArea rows={2} />
            </Form.Item>
          </label>
        </div>

        <div className='mt-1'>
          <label className='block'>
            <Label>Mô tả ngắn</Label>
            <Form.Item name='shortDescription'>
              <Input type='text' className='mt-1' />
            </Form.Item>
          </label>
        </div>
        <label className='block '>
          <div className='grid md:grid-cols-1 gap-6 block md:col-span-2 '>
            <div className='mt-1'>
              <label className='block'>
                <Label>Link Website của trường</Label>
                <Form.Item name='websiteUrl'>
                  <Input placeholder='c3chuvanan.edu.vn' type='text' className='mt-1' />
                </Form.Item>
              </label>
            </div>
          </div>
        </label>

        <label className='block '>
          <div className='mt-1'>
            <div className='grid md:grid-cols-3 gap-6 block md:col-span-2 '>
              <label className='block'>
                <Label>Email liên hệ</Label>
                <Form.Item name='email' rules={email}>
                  <Input
                    type='text'
                    className='mt-1'
                    placeholder='abc@gmail.com'
                    suffix={
                      <Tooltip title='Email phải đúng cú pháp. Ví dụ : abc@gmail.com'>
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </label>
              <label className='block'>
                <Label>Code học sinh</Label>
                <Form.Item name='highSchoolCode'>
                  <Input
                    type='text'
                    className='mt-1'
                    placeholder='abc@gmail.com'
                    suffix={
                      <Tooltip title='Mã code để học sinh nhập'>
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </label>
              <label className='block'>
                <Label>Code quản lí</Label>
                <Form.Item name='highSchoolManagerCode'>
                  <Input
                    type='text'
                    className='mt-1'
                    placeholder='abc@gmail.com'
                    suffix={
                      <Tooltip title='Mã code để quản lí trường cấp 3 nhập'>
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                    }
                  />
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
export default UpdaterHighSchoolProfileComponent;
