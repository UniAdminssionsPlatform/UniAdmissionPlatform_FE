import { Tabs, Typography } from 'antd';
import CreateEventContainer from '../../../features/universityManager/manageEvent/CreateEvent.container';
import LayoutPageWithout from '../../../components/commons/LayoutPage/LayoutPageWithout.component';
import ListEventCreatedContainer from '../../../features/universityManager/manageEvent/ListEventCreated.container';
import ListEventRegisteredContainer from '../../../features/universityManager/manageEvent/ListEventRegisted.container';
import React, { useState } from 'react';

const ManageEventPage = () => {
  const { TabPane } = Tabs;
  const { Title, Text } = Typography;
  return (
    <>
      <Title level={3}>Quản lý sự kiện</Title>
      <Text type='secondary'>
        Trong mục quản lý sự kiện, bạn có thể xem, tạo mới và chỉnh sửa các sự kiện đã tạo. Bạn có thể thay đổi một sự
        kiện truyền thông hay đóng một sự kiện
      </Text>
      <Tabs defaultActiveKey='1' type='card'>
        <TabPane tab='Tất cả sự kiện' key='1' forceRender={true}>
          <ListEventCreatedContainer />
        </TabPane>
        <TabPane tab='Sự kiện đang đăng ký' key='2' forceRender={true}>
          <ListEventRegisteredContainer />
        </TabPane>
        <TabPane tab='Sự kiện sắp diễn ra' key='3'>
          {/*<ListEventCreatedContainer/>*/}
        </TabPane>
        <TabPane tab='Sự kiện đã hủy' key='4'>
          {/*<ListEventCreatedContainer/>*/}
        </TabPane>
        <TabPane tab='Tạo sự kiện' key='5'>
          <CreateEventContainer />
        </TabPane>
      </Tabs>
    </>
  );
};
export default ManageEventPage;
