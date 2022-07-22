import { Button, Divider, Image, Layout, Space, Switch, Table, Tag, Typography } from 'antd';
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
  const { data, listTag, visibleDrawer, setVisibleDrawer } = props;
  const layoutTable = [
    {
      title: 'Đề mục sự kiện',
      dataIndex: 'title',
      key: 'title',
      render: (data) => <Text strong>{data}</Text>,
      width: '15%'
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
      dataIndex: 'description',
      key: 'description',
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
      render: (data) => {
        if (data === true) {
          return (
            <>
              <Switch defaultChecked />
            </>
          );
        }
        if (data !== true) return <Switch />;
      },
      width: '7%'
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: 'key',
      render: (index, data) => (
        <Space direction={'horizontal'} style={{ marginLeft: '2rem' }}>
          <VisibilityIcon />
          <EditOutlined />
        </Space>
      ),
      width: '3%'
    }
  ];
  const handleCreateNews = () => {
    setVisibleDrawer(true);
  };
  return (
    <Layout>
      <TitlePageComponent
        title={'Quản lý bài viết'}
        subTitle={'Bạn có thể tìm kiếm tạo mới, chỉnh sửa các bài viết. Truyền thông bài viết'}
      />
      <Space direction={'vertical'}>
        <Space>
          <SearchNewComponent listTag={listTag} />
          <Divider type='vertical' />
          <Button type={'primary'} onClick={handleCreateNews}>
            Tạo mới một bài viết
          </Button>
        </Space>
        <CreateNewComponent visibleDrawer={visibleDrawer} setVisibleDrawer={setVisibleDrawer} />
        <Table size={'small'} pagination={false} dataSource={data?.list} columns={layoutTable} bordered />
      </Space>
    </Layout>
  );
};
export default NewManagementComponent;
