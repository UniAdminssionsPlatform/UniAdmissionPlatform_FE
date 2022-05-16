import { Button, DatePicker, Form, Input, Select, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { des, hostname, name, shortdes, targetstudent } from '../../../validate/CreateEvent.validate';
import Label from '../../commons/Label/Label';
import React, { useState } from 'react';
import moment from 'moment';

const DetailEventFormComponent = (props) => {
  const { event, province, district } = props;

  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;

  const [isDisabledField, setIsDisabledField] = useState(true);

  const field = [
    {
      name: ['name'],
      value: event.name
    },
    {
      name: ['shortDescription'],
      value: event.shortDescription
    },
    {
      name: ['hostName'],
      value: event.hostName
    },
    {
      name: ['targetStudent'],
      value: event.targetStudent
    },
    {
      name: ['description'],
      value: event.description
    },
    {
      name: ['eventTypeId'],
      value: event.eventTypeId
    },
    {
      name: ['meetingUrl'],
      value: event.meetingUrl
    },
    {
      name: ['address'],
      value: `${event.address}, ${district}, ${province}`
    }
  ];

  const handleEdit = () => {
    setIsDisabledField(false);
  };

  const uploadFile = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') console.log(info.file, info.fileList);
      if (info.file.status === 'done') message.success(`${info.file.name} file uploaded successfully`);
      else if (info.file.status === 'error') message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Form fields={field}>
      <Button onClick={handleEdit}>Sửa</Button>
      <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Tên sự kiện *</Title>
            </Label>
            <Form.Item name='name'>
              <Input className='mt-1' rows={4} disabled={isDisabledField} />
            </Form.Item>
          </label>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Mô tả ngắn về sự kiện</Title>
            </Label>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>Mô tả</Label>
            <Form.Item name='shortDescription'>
              <TextArea className='mt-1' rows={4} cols={150} disabled={isDisabledField} />
            </Form.Item>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Mô tả chi tiết
            </Label>
            <Form.Item name='description'>
              <TextArea className='mt-1' rows={4} cols={150} disabled={isDisabledField} />
            </Form.Item>
          </label>

          <label className='block md:col-span-2'>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              <Title level={5}>Thông tin sự kiện</Title>
            </Label>
            <div className='grid gap-8 grid-cols-3'>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Diễn giả
                </Label>
                <Form.Item name='hostName'>
                  <Input className='mt-1' rows={4} disabled={isDisabledField} />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Số lượng học sinh
                </Label>
                <Form.Item name='targetStudent'>
                  <Input type='text' className='mt-1' rows={4} style={{ width: 250 }} disabled={isDisabledField} />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Loại sự kiện
                </Label>
                <Form.Item name='eventTypeId'>
                  <Select placeholder='Loại sự kiện' disabled={isDisabledField}>
                    <Option value={1}>Online</Option>
                    <Option value={2}>Offline tại trường THPT</Option>
                    <Option value={3}>Offline tại trường Đại học</Option>
                    <Option value={4}>Offline tại địa điểm khác</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className='flex'>
              <div className='flex-1 w-32'>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Thời gian bắt đầu
                </Label>
                <Form.Item name='startTime'>
                  <Input
                    type='text'
                    className='mt-1'
                    rows={4}
                    style={{ width: 250 }}
                    disabled={true}
                    defaultValue='Chưa chọn'
                  />
                </Form.Item>
              </div>
              <div className='flex-1 w-32'>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Thời gian kết thúc
                </Label>
                <Form.Item name='endTime'>
                  <Input
                    type='text'
                    className='mt-1'
                    rows={4}
                    style={{ width: 250 }}
                    defaultValue='Chưa chọn'
                    disabled={true}
                  />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Meet URL
                </Label>
                <Form.Item name='meetingUrl'>
                  <Input className='mt-1' rows={4} disabled={isDisabledField} style={{ width: 300 }} />
                </Form.Item>
              </div>
            </div>
            <label className='block md:col-span-2'>
              <Label>
                <Title level={5}>Địa điểm tổ chức</Title>
              </Label>
              <Form.Item name='address'>
                <Input className='mt-1' rows={4} disabled={isDisabledField} />
              </Form.Item>
            </label>
          </label>
          <div className='block md:col-span-2'>
            <Label>Hình ảnh trang bìa</Label>

            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-neutral-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'>
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
                <div className='flex flex-col sm:flex-row text-sm text-neutral-6000'>
                  <label
                    htmlFor='file-upload'
                    className='relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500'>
                    <span>Tải ảnh lên</span>
                    <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                  </label>
                  <p className='pl-1'>kéo thả ảnh vào đây</p>
                </div>
                <p className='text-xs text-neutral-500'>PNG, JPG, GIF up to 2MB</p>
              </div>
            </div>
          </div>
          <label className='block md:col-span-2'>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Bổ sung thành phần file{' '}
            </Label>
            <div>
              <Upload {...uploadFile}>
                <Button icon={<UploadOutlined />}>Tải thành phần file bổ sung</Button>
              </Upload>
            </div>
          </label>
        </div>
      </div>
    </Form>
  );
};

export default DetailEventFormComponent;
