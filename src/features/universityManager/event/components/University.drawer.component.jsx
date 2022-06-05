import { Button, Drawer, Space } from 'antd';
import ListEventForRegisterUniversityContainer from '../ListEventForRegisterUniversity.container';
import React from 'react';
const UniversityDrawerComponent = (props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;
  return (
    <Drawer
      title='Đăng ký sự kiện'
      placement={'right'}
      width={800}
      onClose={() => setIsSidebarOpen(false)}
      visible={isSidebarOpen}
      extra={
        <Space>
          <Button onClick={() => setIsSidebarOpen(false)}>Cancel</Button>
        </Space>
      }>
      <ListEventForRegisterUniversityContainer />
    </Drawer>
  );
};
export default UniversityDrawerComponent;
