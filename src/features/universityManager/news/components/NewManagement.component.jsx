import { Layout } from 'antd';
import React from 'react';
import TitlePageComponent from '../../../../components/decorator/TitlePage.component';
const NewManagementComponent = () => (
  <Layout>
    <TitlePageComponent
      title={'Quản lý bài viết'}
      subTitle={'Bạn có thể tìm kiếm tạo mới, chỉnh sửa các bài viết. Truyền thông bài viết'}
    />
  </Layout>
);
export default NewManagementComponent;
