import { Button, Form, Input, Select, Typography } from 'antd';
import React from 'react';

const SearchBarComponent = (props) => {
  const { Option } = Select;
  const { Title } = Typography;
  const { setDataSearch, dataSearch, isRegistered } = props;
  const handleOnFinish = (data) => {
    data.eventType = data.eventType ? data.eventType : dataSearch.eventType;
    data.hostname = data.hostname ? data.hostname : '';
    data.limit = data.limit ? data.limit : dataSearch.limit;
    data.name = data.name ? data.name : '';
    data.page = data.page ? data.page : dataSearch.page;
    data.status = isRegistered ? 2 : data.status ? data.status : dataSearch.status;
    data.universityID = dataSearch.universityID;
    setDataSearch(data);
  };
  return (
    <>
      <Title level={2}>Tìm kiếm</Title>
      <Form onFinish={handleOnFinish}>
        <Form.Item name='name'>
          <Input placeholder='Tên sự kiện...' type='text' defaultValue='' />
        </Form.Item>
        <Form.Item name='hostname'>
          <Input placeholder='MC..' type='text' defaultValue={''} />
        </Form.Item>
        <Form.Item name='eventType'>
          <Select defaultValue={2} placeholder='Loại Sự Kiện'>
            <Option value={1}>Online</Option>
            <Option value={2}>Tổ chức tại trường</Option>
            <Option value={3}>Tổ chức tại Đại Học</Option>
            <Option value={4}>Nơi khác</Option>
          </Select>
        </Form.Item>
        {!isRegistered ? (
          <Form.Item name='status'>
            <Select defaultValue={1} placeholder='Trạng thái'>
              <Option value={1}>Đã kích hoạt</Option>
              <Option value={0}>Đang bị đóng</Option>
            </Select>
          </Form.Item>
        ) : null}
        <Form.Item>
          <Button type={'primary'} htmlType='submit'>
            Tìm kiếm
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SearchBarComponent;
