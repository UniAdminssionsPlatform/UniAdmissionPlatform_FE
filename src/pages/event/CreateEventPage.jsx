import React from 'react';
import { Tabs } from 'antd';
import CreateEventContainer from '../../containers/event/CreateEvent/CreateEvent.container';
import ListEventForUniversityContainer from '../../containers/event/ListEvent/listEventForUniversity.container';
const CreateEventPage = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Tạo event' key='1'>
          <CreateEventContainer />
        </TabPane>
        <TabPane tab='Danh sách event đã tạo' key='2'>
          <ListEventForUniversityContainer />
        </TabPane>
      </Tabs>
    </>
  );
};
export default CreateEventPage;
