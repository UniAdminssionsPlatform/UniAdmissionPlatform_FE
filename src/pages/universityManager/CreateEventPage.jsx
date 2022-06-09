import { Tabs } from 'antd';
import CreateEventContainer from '../../features/universityManager/manageEvent/CreateEvent.container';
import LayoutPageWithout from '../../components/commons/LayoutPage/LayoutPageWithout.component';
import ListEventForRegisterUniversityContainer from '../../features/universityManager/manageEvent/ListEventForRegisterUniversity.container';
import React, { useState } from 'react';

const CreateEventPage = () => {
  const { TabPane } = Tabs;
  const [forceLoad, setForceLoad] = useState();
  const onChange = (data) => {
    setForceLoad(data);
  };
  return (
    <>
      <LayoutPageWithout subHeading='Quản lý tạo event'>
        <Tabs defaultActiveKey='1' onChange={onChange}>
          <TabPane tab='Tạo sự kiện' key='1'>
            <CreateEventContainer />
          </TabPane>
          <TabPane tab='Danh sách các sự kiện đã tạo' key='2'>
            <ListEventForRegisterUniversityContainer forceLoad={forceLoad} />
          </TabPane>
        </Tabs>
      </LayoutPageWithout>
    </>
  );
};
export default CreateEventPage;
