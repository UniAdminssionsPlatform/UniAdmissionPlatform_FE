import { Button, Divider, Image, Layout, Pagination, Space, Switch, Table, Tag, Typography } from 'antd';
import { EditOutlined } from '@mui/icons-material';
import CreateNewComponent from './CreateNew.compomnent';
import ListTagComponent from '../../../../components/ListTag.component';
import React, { useState } from 'react';
import SearchNewComponent from './SearchNew.component';
import TitlePageComponent from '../../../../components/decorator/TitlePage.component';
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from 'moment';
const NewManagementComponent = (props) => {
  const { Text, title } = Typography;
  const {
    data,
    listTag,
    visibleDrawer,
    handleCreateNews,
    setVisibleDrawer,
    newDescription,
    setNewDescription,
    setThumbnailUrl,
    handleCreateNew,
    setPayload,
    payload,
    isLoading,
    changeStatusNew,
    initValueForm,
    handleUpdateANew,
    isUpdate,
    handleUpdateNew,
    handlePaging
  } = props;
  console.log(props);
  const layoutTable = [
    {
      title: 'Đề mục sự kiện',
      dataIndex: 'title',
      key: 'title',
      render: (data) => <Text strong>{data}</Text>,
      width: '13%'
    },
    {
      title: 'Hình nền sự kiện',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (data) => <Image width={50} src={data} />,
      width: '5%'
    },
    {
      title: 'Thẻ bài viết',
      dataIndex: 'tagList',
      key: 'tagList',
      render: (key, record) => <ListTagComponent listData={record?.tagList} />,
      width: '5%'
    },
    {
      title: 'Mô tả',
      dataIndex: 'shortDescription',
      key: 'shortDescription',
      render: (data) => <Text>{data}</Text>,
      width: '15%'
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createDate',
      key: 'createDate',
      render: (data) => <Text strong>{moment(data).format('LLL')}</Text>,
      width: '8%'
    },
    {
      title: 'Trạng thái công khai',
      dataIndex: 'isPublish',
      key: 'isPublish',
      render: (data, record) => {
        if (data === true) {
          return (
            <>
              <Space>
                <Switch defaultChecked onClick={() => changeStatusNew(false, record.id)} />
                <Divider type={'vertical'} />
                <Text strong style={{ color: 'green' }}>
                  Công khai
                </Text>
              </Space>
            </>
          );
        }
        if (data !== true)
          return (
            <Space>
              <Switch onClick={() => changeStatusNew(true, record.id)} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Chưa công khai</Text>
            </Space>
          );
      },
      width: '7%'
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: 'key',
      render: (index, record) => (
        <Space direction={'horizontal'} style={{ marginLeft: '1rem' }}>
          <VisibilityIcon />
          <EditOutlined onClick={() => handleUpdateANew(record)} style={{ cursor: 'pointer' }} />
        </Space>
      ),
      width: '3%'
    },
    {
      title: '',
      dataIndex: '',
      key: 'createDate',
      render: (data) => '',
      width: '0.5%'
    },
  ];

  return (
    <Layout>
      <TitlePageComponent
        title={'Quản lý bài viết'}
        subTitle={'Bạn có thể tìm kiếm tạo mới, chỉnh sửa các bài viết. Truyền thông bài viết'}
      />
      <Space direction={'vertical'}>
        <Space>
          <SearchNewComponent listTag={listTag} setPayload={setPayload} payload={payload} />
          <Divider type='vertical' />
          <Button type={'primary'} onClick={handleCreateNews}>
            Tạo mới một bài viết
          </Button>
        </Space>
        <CreateNewComponent
          visibleDrawer={visibleDrawer}
          setVisibleDrawer={setVisibleDrawer}
          listTag={listTag}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          setThumbnailUrl={setThumbnailUrl}
          handleCreateNew={handleCreateNew}
          initValueForm={initValueForm}
          isUpdate={isUpdate}
          handleUpdateNew={handleUpdateNew}
        />
        <Table
          size={'small'}
          pagination={false}
          dataSource={data?.list}
          columns={layoutTable}
          bordered
          loading={isLoading}
          style={{ width: '100vw' }}
          scroll={{ x: 700, y: 650 }}
        />
        <Pagination onChange={handlePaging} total={data.total} showSizeChanger />
      </Space>
    </Layout>
  );
};
export default NewManagementComponent;
