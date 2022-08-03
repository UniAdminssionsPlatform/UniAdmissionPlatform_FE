import { Button, DatePicker, Divider, Form, Input, Select, Typography } from 'antd';
import {
  requireEventPlace,
  requireHostName,
  requireName,
  requireCity,
  requireDescription,
  requireDistrict,
  requireStartTime,
  requireEndTime
} from '../../../../validate/CreateEvent.validate';
import Label from '../../../../components/commons/Label/Label';
import MarkdownEditorComponent from '../../../../components/MarkdownEditor/MarkdownEditor.component';
import React, { useState } from 'react';
import SingleUploadWithPreviewContainer from '../../../../components/UploadImage/SingleUpload/SingleUploadWithPreview.container';
const CreateEventComponent = (props) => {
  const {
    setImageUrl,
    onChangeStartDate,
    onChangeEndDate,
    onChangeProvince,
    onChangeDistrict,
    onSearch,
    listProvinces,
    listDistricts,
    onFinish,
    describe,
    setDescribe
  } = props;
  const [eventType, setEventType] = useState(2);
  const { TextArea } = Input;
  const { Option } = Select;
  const { Title } = Typography;
  const onChangeType = (type) => {
    setEventType(type);
  };
  return (
    <Form onFinish={onFinish}>
      <div className='rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='block 1'>
            <label className='block md:col-span-2'>
              <Label>
                <Title level={5}>Tên sự kiện *</Title>
              </Label>
              <Form.Item name={['event', 'name']} rules={requireName}>
                <Input placeholder='Nhập tên sự kiện' className='mt-1' />
              </Form.Item>
            </label>
            <label className='block md:col-span-2'>
              <div className='grid gap-8 grid-cols-3'>
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Diễn giả*
                  </Label>
                  <Form.Item name={['event', 'hostName']} rules={requireHostName}>
                    <Input className='mt-1' rows={4} placeholder={'Nhập tên diễn giả sự kiện'} />
                  </Form.Item>
                </div>
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Loại sự kiện*
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
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Hình ảnh trang bìa
                  </Label>
                  <SingleUploadWithPreviewContainer setImageUrl={setImageUrl} />
                </div>
              </div>
              <Divider dashed />
              {/*//Meeting URL*/}
              {eventType === 1 ? (
                <div>
                  <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                    Trang Web Meeting*
                  </Label>
                  <Form.Item name={['event', 'meetingUrl']} rules={eventType === 1 ? requireHostName : null}>
                    <Input className='mt-1' rows={4} />
                  </Form.Item>
                </div>
              ) : null}
              {eventType !== 2 || eventType === undefined ? <div className='grid gap-8 grid-cols-3'></div> : null}
              {eventType !== 2 && eventType !== 1 ? (
                <div className='grid gap-8 grid-cols-3'>
                  <div>
                    <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                      Địa điểm tổ chức*
                    </Label>
                    <Form.Item
                      name={['event', 'address']}
                      rules={eventType === 3 || eventType === 4 ? requireEventPlace : null}>
                      <Input className='mt-1' rows={4} placeholder={'Nhập địa điểm tổ chức'} />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name={['event', 'provinceId']}
                    rules={eventType === 3 || eventType === 4 ? requireCity : null}>
                    <label className='block'>
                      <Label>Tỉnh/thành phố*</Label>
                      <Select
                        showSearch
                        placeholder='Tỉnh/Thành phố'
                        optionFilterProp='children'
                        onChange={onChangeProvince}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {listProvinces?.map((item) => (
                          <Option value={item.id}>{item.name}</Option>
                        ))}
                      </Select>
                    </label>
                  </Form.Item>
                  <Form.Item
                    name={['event', 'districtId']}
                    rules={eventType === 3 || eventType === 4 ? requireDistrict : null}>
                    <label className='block'>
                      <Label>Quận/Huyện*</Label>
                      <Select
                        showSearch
                        placeholder='Quận/Huyện'
                        optionFilterProp='children'
                        onChange={onChangeDistrict}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {listDistricts?.map((item) => (
                          <Option value={item.id}>{item.name}</Option>
                        ))}
                      </Select>
                    </label>
                  </Form.Item>
                </div>
              ) : null}
            </label>
            <div className='grid gap-8 grid-cols-3'>
              <div>
                <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                  Bổ sung thành phần file
                </Label>
                <SingleUploadWithPreviewContainer />
              </div>
              {eventType !== 2 ? (
                <>
                  <div>
                    <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                      Thời gian bắt đầu*
                    </Label>
                    <Form.Item
                      name={['event', 'startTime']}
                      rules={eventType === 1 || eventType === 3 || eventType === 4 ? requireStartTime : null}>
                      <DatePicker
                        onChange={onChangeStartDate}
                        placeholder={'Nhập thời gian bắt đầu'}
                        style={{ width: '12.5vw' }}
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
                      Thời gian kết thúc*
                    </Label>
                    <Form.Item
                      name={['event', 'endTime']}
                      rules={eventType === 1 || eventType === 3 || eventType === 4 ? requireEndTime : null}>
                      <DatePicker
                        onChange={onChangeEndDate}
                        placeholder={'Nhập thời gian kết thúc'}
                        style={{ width: '12.5vw' }}
                      />
                    </Form.Item>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className='block 2'>
            <label className='block md:col-span-2'>
              <Label className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>Mô tả</Label>
              <Form.Item rules={requireDescription} name={'shortDescription'}>
                <TextArea rows={4} placeholder={'Nhập mô tả sự kiện'} />
              </Form.Item>
              <br />
              <div className='md:col-span-2'>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Tạo sự kiện
                  </Button>
                </Form.Item>
              </div>
            </label>
          </div>
        </div>
        <Divider>Nội dung bài viết</Divider>
        <MarkdownEditorComponent value={describe} setValue={setDescribe} />
        <p className='mt-1 text-sm text-neutral-500'>
          Được viết dưới dạng Markdown, bạn có thể thêm bất cứ nội dung gì vào đoạn văn.
        </p>
      </div>
    </Form>
  );
};

export default CreateEventComponent;
