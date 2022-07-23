import { Button, Col, Drawer, Form, Image, Input, Row, Select, Space, Typography } from 'antd';
import React from 'react';
import { newShortDescriptionValidate, newTagValidate, newTitleValidate } from '../../../../validate/CreateNew.validate';
import MarkdownEditorComponent from '../../../../components/MarkdownEditor/MarkdownEditor.component';
import ArticleIcon from '@mui/icons-material/Article';
import SingleImageUploadWithReviewContainer from '../../../../components/UploadImage/SingleUpload/SingImageUploadWithReview.container';

const CreateNewComponent = (props) => {
  const {
    visibleDrawer,
    setVisibleDrawer,
    listTag,
    setNewDescription,
    newDescription,
    setThumbnailUrl,
    handleCreateNew,
    initValueForm,
    isUpdate,
    handleUpdateNew
  } = props;
  console.log(initValueForm);
  const { Option } = Select;
  const { Text, Title } = Typography;
  const onClose = () => {
    setVisibleDrawer(false);
  };
  const [form] = Form.useForm();
  const onFinishFailed = (data) => {
    console.log(data);
  };
  const dataSelect = [];
  listTag?.map((tag) => dataSelect.push(<Option key={tag.id}>{tag.name}</Option>));
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Drawer
        title={
          isUpdate ? (
            <Title level={3}>
              Cập nhật bài viết <ArticleIcon />
            </Title>
          ) : (
            <Title level={3}>
              Tạo bài viết <ArticleIcon />
            </Title>
          )
        }
        placement={'right'}
        closable={false}
        onClose={onClose}
        visible={visibleDrawer}
        key={'right'}
        size={'large'}>
        <Form
          form={form}
          layout='vertical'
          onFinish={isUpdate ? handleUpdateNew : handleCreateNew}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          fields={initValueForm}>
          <Row justify='space-between'>
            <Col span={12}>
              <Form.Item name='title' label={<Text strong>Đề mục</Text>} rules={newTitleValidate}>
                <Input placeholder='Nhập tên của bài viết' />
              </Form.Item>
            </Col>
            <Col span={11.5}>
              <Form.Item name='tagId' label={<Text strong>Nhãn bài viết</Text>} rules={newTagValidate}>
                <Select mode='multiple' showArrow style={{ width: '20rem' }} placeholder={'Nhập thẻ bài viết'}>
                  {dataSelect}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='shortDescription'
            label={<Text strong>Phụ đề</Text>}
            rules={newShortDescriptionValidate}
            placeholder={'Nhập phụ đề của bài viết'}>
            <Input.TextArea allowClear showCount />
          </Form.Item>
          <Row>
            <Col span={6}>
              <Form.Item
                name='wallpaper'
                label={<Text strong>Ảnh đại diện bài viết</Text>}
                valuePropName='fileList'
                getValueFromEvent={normFile}
                noStyle>
                <SingleImageUploadWithReviewContainer setImageUrl={setThumbnailUrl} />
              </Form.Item>
            </Col>
            <Col span={6}>{isUpdate ? <Image width={100} height={100} src={initValueForm[3]?.value} /> : null}</Col>
          </Row>
          <Space direction={'vertical'}>
            <MarkdownEditorComponent value={newDescription} setValue={setNewDescription} />
            <Form.Item>
              {isUpdate ? (
                <Button type='primary' htmlType='submit'>
                  Cập nhật
                </Button>
              ) : (
                <Button type='primary' htmlType='submit'>
                  Tạo mới
                </Button>
              )}
            </Form.Item>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};
export default CreateNewComponent;
