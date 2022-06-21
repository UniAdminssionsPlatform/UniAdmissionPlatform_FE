import { Tabs } from 'antd';
import CreateEventContainer from '../../features/universityManager/manageEvent/CreateEvent.container';
import LayoutPageWithout from '../../components/commons/LayoutPage/LayoutPageWithout.component';
import ListEventCreatedContainer from '../../features/universityManager/manageEvent/ListEventCreated.container';
import React, { useState } from 'react';

const CreateEventPage = () => {
  const { TabPane } = Tabs;
  const [forceLoad, setForceLoad] = useState();
  const onChange = (data) => {
    setForceLoad(data);
  };
  return (
    <>
        <Tabs defaultActiveKey='1' onChange={onChange}>
          <TabPane tab='Danh sách các sự kiện đã tạo' key='1'>
            <ListEventCreatedContainer forceLoad={forceLoad} />
          </TabPane>
          <TabPane tab='Danh sách các đang đăng ký' key='2'>
            <ListEventCreatedContainer forceLoad={forceLoad} />
          </TabPane>
          <TabPane tab='Tạo sự kiện' key='3'>
            <CreateEventContainer />
          </TabPane>
        </Tabs>
    </>
  );
};
export default CreateEventPage;
