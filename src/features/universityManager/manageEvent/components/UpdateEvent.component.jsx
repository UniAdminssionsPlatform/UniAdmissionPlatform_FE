import { Button, Col, Drawer, Form, Image, Input, Row, Select, Space, Typography } from 'antd';
import MarkdownEditorComponent from '../../../../components/MarkdownEditor/MarkdownEditor.component';
import React from 'react';
import SingleImageUploadWithReviewContainer from '../../../../components/UploadImage/SingleUpload/SingImageUploadWithReview.container';
const UpdateEventComponent = (props) => {
  const { event, handleUpdate, setDescription, setImageUrl, description } = props;
  const { Text } = Typography;

  const eventUpdate = {
    name: event.name,
    hostName: event?.hostName,
    description: event?.description,
    shortDescription: event?.shortDescription,
    address: event?.address,
    thumbnailUrl: event?.thumbnailUrl
  };

  return (
    <>
      <Form layout='vertical' onFinish={handleUpdate} autoComplete='off'>
        <Row justify='space-between'>
          <Col span={12}>
            <Form.Item name='name' label={<Text strong>Tên sự kiện</Text>} initialValue={eventUpdate.name}>
              <Input placeholder='Nhập tên của sự kiện' />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name='hostName' label={<Text strong>Diễn giả</Text>} initialValue={eventUpdate.hostName}>
              <Input placeholder='Nhập tên diễn giả' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name='shortDescription'
          label={<Text strong>Phụ đề</Text>}
          initialValue={eventUpdate.shortDescription}>
          <Input.TextArea allowClear showCount />
        </Form.Item>
        <Form.Item name='address' label={<Text strong>Địa chỉ tổ chức</Text>} initialValue={eventUpdate.address}>
          <Input placeholder='Nhập địa chỉ tổ chức' />
        </Form.Item>
        <Row>
          <Col span={6}>
            <Form.Item
              name='thumbnailUrl'
              label={<Text strong>Ảnh đại diện bài viết</Text>}
              valuePropName='fileList'
              getValueFromEvent={eventUpdate.thumbnailUrl}
              noStyle>
              <SingleImageUploadWithReviewContainer setImageUrl={setImageUrl} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Image width={100} height={100} src={eventUpdate.thumbnailUrl} />
          </Col>
        </Row>
        <Space direction={'vertical'}>
          <MarkdownEditorComponent value={description} setValue={setDescription} />
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Cập nhật
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
export default UpdateEventComponent;
