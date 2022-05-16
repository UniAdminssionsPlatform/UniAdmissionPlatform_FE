import { Form, Input, Upload, Button, message, Typography, Select, DatePicker } from 'antd';
import Label from '../../commons/Label/Label';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

const CreateEventComponent = (props) => {
  const { Title } = Typography;
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
  const dateFormat = 'YYYY/MM/DD';
  // const { onFinish } = props;
  const onFinish = (data) => {
    console.log(data);
  };
  return (
    <Form onFinish={onFinish}>
      <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Tên sự kiện *</Title>
            </Label>
            <Form.Item name={['event', 'eventName']}>
              <Input placeholder='Event Title' className='mt-1' />
            </Form.Item>
          </label>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Mô tả ngắn về sự kiện</Title>
            </Label>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>Mô tả</Label>
            <Form.Item name={['event', 'short_description']}>
              <Input.TextArea className='mt-1' rows={4} />
            </Form.Item>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Mô tả chi tiết
            </Label>
            <Form.Item name={['event', 'description']}>
              <Input.TextArea className='mt-1' rows={4} />
            </Form.Item>
            <p className='mt-1 text-sm text-neutral-500'>
              Được viết dưới dạng Markdown, bạn có thể thêm bất cứ nội dung gì vào đoạn văn.
            </p>
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
                <Form.Item name={['event', 'host_name']}>
                  <Input className='mt-1' rows={4} />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Số lượng học sinh
                </Label>
                <Form.Item name={['event', 'target_student']}>
                  <Input className='mt-1' rows={4} style={{ width: 300 }} />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Địa điểm tổ chức
                </Label>
                <Form.Item name={['event', 'address']}>
                  <Input className='mt-1' rows={4} style={{ width: 300 }} />
                </Form.Item>
              </div>
            </div>
            <div className='flex'>
              <div className='flex-1 w-32'>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Thời gian bắt đầu
                </Label>
                <Form.Item name={['event', 'startDate']}>
                  <DatePicker defaultValue={moment(moment(), dateFormat)} format={dateFormat} style={{ width: 250 }} />
                </Form.Item>
              </div>
              <div className='flex-1 w-32'>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Thời gian kết thúc
                </Label>
                <Form.Item name={['event', 'endDate']}>
                  <DatePicker defaultValue={moment(moment(), dateFormat)} format={dateFormat} style={{ width: 250 }} />
                </Form.Item>
              </div>
            </div>
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
          <div className='md:col-span-2'>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Tạo sự kiện
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CreateEventComponent;
