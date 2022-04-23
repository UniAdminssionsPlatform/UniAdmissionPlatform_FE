import { Form, Input, Select, Upload, Button } from 'antd';
import { eventtype, excerpt, hostname, province, title } from '../../../validate/CreateEvent.validate';
import ButtonPrimary from '../../field/ButtonPrimary/ButtonPrimary.component';
import Label from '../../commons/Label/Label';
import React from 'react';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) return e;
  return e && e.fileList;
};
const CreateEventComponent = (props) => {
  const { onFinish } = props;
  return (
    <Form onFinish={onFinish}>
      <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <label className='block md:col-span-2'>
            <Label>Tên Sự Kiện *</Label>
            <Form.Item name='title' rules={title}>
              <Input placeholder='Event Title' />
            </Form.Item>
            {/* <Input type='text' className='mt-1' /> */}
          </label>
          <label className='block md:col-span-2'>
            <Label>Mô Tả Ngắn Gọn *</Label>
            <Form.Item name='short_description' rules={excerpt}>
              <Input.TextArea placeholder='short description' />
            </Form.Item>
            {/* <Textarea className='mt-1' rows={4} /> */}
            <p className='mt-1 text-sm text-neutral-500'>Brief description for your event. URLs are hyperlinked.</p>
          </label>
          <label className='block'>
            <Label>Loại Sự Kiện *</Label>
            <Form.Item name='event_type' rules={eventtype}>
              <Select placeholder='-- select --'>
                <Select.Option value='type0'>-- select --</Select.Option>
                <Select.Option value='type1'>1</Select.Option>
              </Select>
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Tỉnh Thành *</Label>
            <Form.Item name='province' rules={province}>
              <Select placeholder='-- select --'>
                <Select.Option value='type00'>-- select --</Select.Option>
                <Select.Option value='type01'>1</Select.Option>
              </Select>
            </Form.Item>
          </label>
          <label className='block md:col-span-2'>
            <Label>Chi Tiết Sự Kiện</Label>
            <Form.Item rules={excerpt} name='description'>
              <Input.TextArea />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Thumbnail URL</Label>
            <Form.Item name='thumbnail' valuePropName='fileList' getValueFromEvent={normFile}>
              <Upload name='logo' action='/upload.do' listType='picture'>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Bên Tổ Chức *</Label>
            <Form.Item name='host_name' rules={hostname}>
              <Input placeholder='Name' />
            </Form.Item>
          </label>
          <div className='block md:col-span-2'>
            <Label>File</Label>
            <Form.Item>
              <Form.Item name='file' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
                <Upload.Dragger name='files' action='/upload.do'>
                  <p className='ant-upload-drag-icon'>
                    <InboxOutlined />
                  </p>
                  <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                  <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </div>
          <label className='block'>
            <Label>Đối Tượng Học Sinh</Label>
            <Form.Item name='target_student'>
              <Input placeholder='Target Student' />
            </Form.Item>
          </label>
          <label className='block'>
            <Label>Địa Chỉ</Label>
            <Form.Item name='address'>
              <Input placeholder='Address' />
            </Form.Item>
          </label>
          <label className='block md:col-span-2'>
            <Label> Meeting URL </Label>
            <Form.Item name='meeting_url'>
              <Input placeholder='Meeting URL' rules={title} />
            </Form.Item>
          </label>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default CreateEventComponent;
