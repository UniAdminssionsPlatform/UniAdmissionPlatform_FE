import { Tabs } from 'antd';
import CreateEventContainer from '../../features/universityManager/manageEvent/CreateEvent.container';
import LayoutPageWithout from '../../components/commons/LayoutPage/LayoutPageWithout.component';
import ListEventForRegisterUniversityContainer from '../../features/universityManager/event/ListEventForRegisterUniversity.container';
import React from 'react';

const CreateEventPage = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <LayoutPageWithout subHeading='Quản lý tạo event'>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Tạo sự kiện' key='1'>
            <CreateEventContainer />
          </TabPane>
          <TabPane tab='Danh sách các sự kiện đã tạo' key='2'>
            <ListEventForRegisterUniversityContainer />
          </TabPane>
        </Tabs>
      </LayoutPageWithout>
    </>
  );
};
export default CreateEventPage;
