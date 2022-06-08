import { Button, DatePicker, Form, Input, Select, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { des, hostname, name, shortdes, targetstudent } from '../../../../validate/CreateEvent.validate';
import Label from '../../../../components/commons/Label/Label';
import MarkdownEditorComponent from '../../../../components/MarkdownEditor/MarkdownEditor.component';
import React, { useState } from 'react';
import SingleUploadWithPreviewContainer from '../../../../components/UploadImage/SingleUpload/SingleUploadWithPreview.container';

const CreateEventComponent = (props) => {
  const {
    onChangeStartDate,
    onChangeEndDate,
    onChangeProvince,
    onChangeDistrict,
    onSearch,
    listProvinces,
    listDistricts,
    onFinish,
    describe,
    setDescribe,
    shortDescribe,
    setShortDescribe
  } = props;
  const [eventType, setEventType] = useState(2);
  const { Option } = Select;
  const { Title } = Typography;
  const dateFormat = 'YYYY/MM/DD';
  const onChangeType = (type) => {
    setEventType(type);
  };
  return (
    <Form onFinish={onFinish}>
      <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Tên sự kiện *</Title>
            </Label>
            <Form.Item name={['event', 'name']} rules={name}>
              <Input placeholder='Event Title' className='mt-1' />
            </Form.Item>
          </label>
          <label className='block md:col-span-2'>
            <Label>
              <Title level={5}>Mô tả ngắn về sự kiện</Title>
            </Label>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>Mô tả</Label>
            <MarkdownEditorComponent value={shortDescribe} setValue={setShortDescribe} />
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Mô tả chi tiết
            </Label>
            <MarkdownEditorComponent value={describe} setValue={setDescribe} />
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
                <Form.Item name={['event', 'hostName']} rules={hostname}>
                  <Input className='mt-1' rows={4} />
                </Form.Item>
              </div>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Loại sự kiện
                </Label>
                <Form.Item name={['event', 'eventTypeId']}>
                  <Select defaultValue={2} placeholder='Loại sự kiện' onChange={onChangeType}>
                    <Option value={1}>Online</Option>
                    <Option value={2}>Offline tại trường THPT</Option>
                    <Option value={3}>Offline tại trường Đại học</Option>
                    <Option value={4}>Offline tại địa điểm khác</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            {eventType !== 2 || eventType === undefined ? (
              <div className='grid gap-8 grid-cols-3'>
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Thời gian bắt đầu
                  </Label>
                  <Form.Item name={['event', 'startTime']}>
                    <DatePicker onChange={onChangeStartDate} />
                  </Form.Item>
                </div>
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Thời gian kết thúc
                  </Label>
                  <Form.Item name={['event', 'endTime']}>
                    <DatePicker onChange={onChangeEndDate} />
                  </Form.Item>
                </div>
                <div>
                  <div>
                    <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                      Trang Web Meeting
                    </Label>
                    <Form.Item name={['event', 'meetingUrl']}>
                      <Input className='mt-1' rows={4} style={{ width: 300 }} />
                    </Form.Item>
                  </div>
                </div>
              </div>
            ) : null}

            <div className='grid gap-8 grid-cols-3'>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Địa điểm tổ chức
                </Label>
                <Form.Item name={['event', 'address']}>
                  <Input className='mt-1' rows={4} style={{ width: 430 }} />
                </Form.Item>
              </div>
              <Form.Item name={['event', 'provinceId']}>
                <label className='block'>
                  <Label>Tỉnh/thành phố</Label>
                  <Select
                    showSearch
                    placeholder='Tỉnh/Thành phố'
                    optionFilterProp='children'
                    onChange={onChangeProvince}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {listProvinces?.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                </label>
              </Form.Item>
              <Form.Item name={['event', 'districtId']}>
                <label className='block'>
                  <Label>Quận/Huyện</Label>
                  <Select
                    showSearch
                    placeholder='Quận/Huyện'
                    optionFilterProp='children'
                    onChange={onChangeDistrict}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {listDistricts?.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                </label>
              </Form.Item>
            </div>
          </label>
          <div className='block md:col-span-2'>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Hình ảnh trang bìa
            </Label>
            <SingleUploadWithPreviewContainer />
          </div>
          <label className='block md:col-span-2'>
            <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Bổ sung thành phần file{' '}
            </Label>
            <div>
              <SingleUploadWithPreviewContainer />
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
