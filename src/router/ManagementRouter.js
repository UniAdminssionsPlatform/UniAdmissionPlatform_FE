import {
  ApartmentOutlined,
  BarChartOutlined,
  BookOutlined,
  CalendarOutlined,
  ContactsOutlined,
  StarOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import { Layout, Menu } from 'antd';
import { PATH_HIGH_SCHOOL_MANAGER, PATH_UNIVERSITY_MANAGER } from '../constants/Paths/Path';
import { Route, Switch, useHistory } from 'react-router-dom';
import { UNIVERSITY_MANAGER } from '../constants/RoleType';
import { useSelector } from 'react-redux';
import CalendarPage from '../pages/universityManager/CalendarPage';
import GoalAdmissionPage from '../pages/universityManager/GoalAdmissionPage';
import HighSchoolBookingPage from '../pages/universityManager/manageEvent/HighSchoolBookingPage';
import HighSchoolListAccountPendingPage from '../pages/highSchoolManager/listAccountPendingPage';
import HighSchoolManagerRouter from './components/HighSchoolManagerRouter';
import ListEventForHighSchoolPage from '../pages/universityManager/ListEventForHighschoolPage';
import ListNewContainer from '../features/public/news/ListNew.container';
import ListStudentForHighschoolPage from '../pages/highSchoolManager/listStudentForHighSchoolPage';
import ManageEventPage from '../pages/universityManager/manageEvent/ManageEventPage';
import ManageNewPage from '../pages/universityManager/manageNew/manageNewPage';
import NewManagementPage from '../pages/universityManager/NewManagementPage';
import React from 'react';
import RegisteredEventHighSchoolPage from '../pages/highSchoolManager/registeredEventHighSchoolPage';
import RegisteredEventPage from '../pages/universityManager/manageEvent/RegisteredEventPage';
import SelectHighSchoolPage from '../pages/universityManager/manageEvent/SelectHighSchoolPage';
import SlotManagerPage from '../pages/highSchoolManager/slotManagerPage';
import UniversityDetailPage from '../pages/universityManager/UniversityDetailPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';
import FlexMonsterPage from '../pages/universityManager/FlexMonster.page';
import HighSchoolCalendarPage from '../pages/highSchoolManager/highSchoolCalendarPage';
import UniversityListAccountPendingPage from '../pages/universityManager/UniversityListAccountPendingPage';

const ManagementRouter = () => {
  const { Header, Content, Sider } = Layout;
  const history = useHistory();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }

  const itemsUni = [
    getItem('Lịch', '1', <CalendarOutlined />),
    getItem('Sự kiện', '2', <BookOutlined />, [getItem('Quản lý sự kiện', '3'), getItem('Đăng ký sự kiện', '4')]),
    getItem('Quản lý Bài viết', '6', <StarOutlined />),
    getItem('Tiêu chí tuyển sinh', '9', <WalletOutlined />),
    getItem('Dữ liệu học sinh', '10', <BarChartOutlined />),
    getItem('Xét duyệt tài khoản', '11', <ApartmentOutlined />)
  ];
  const itemsHighSchool = [
    getItem('Lịch', '1', <CalendarOutlined />),
    getItem('Quản lý Sự kiện', '2', <BookOutlined />, [getItem('Slot đăng ký', '3'), getItem('Sự kiện đăng ký', '4')]),
    getItem('Quản lý học sinh', '5', <ContactsOutlined />),
    getItem('Xét duyệt tài khoản', '6', <ApartmentOutlined />)
  ];
  const handleOnSelectBarUniComponent = (data) => {
    const { item, key, keyPath, selectedKeys, domEvent } = data;
    switch (key) {
      case '1':
        history.push(PATH_UNIVERSITY_MANAGER.CALENDAR);
        break;
      case '3':
        history.push(PATH_UNIVERSITY_MANAGER.MANAGE_EVENT);
        break;
      case '4':
        history.push(PATH_UNIVERSITY_MANAGER.REGIS_EVENT);
        break;
      case '6':
        history.push('');
      case '7':
        history.push(PATH_UNIVERSITY_MANAGER.MANAGE_NEWS);
        break;
      case '8':
        history.push(PATH_UNIVERSITY_MANAGER.MANAGE_NEWS);
        break;
      case '9':
        history.push(PATH_UNIVERSITY_MANAGER.GOAL_ADMISSION);
        break;
      case '10':
        history.push(PATH_UNIVERSITY_MANAGER.ANALYTICS_DATA);
        break;
      case '11':
        history.push(PATH_UNIVERSITY_MANAGER.LIST_ACCOUNT_PENDING);
        break;
    }
  };
  const handleOnSelectBarHighSchoolComponent = (data) => {
    const { item, key, keyPath, selectedKeys, domEvent } = data;
    switch (key) {
      case '1':
        history.push(PATH_HIGH_SCHOOL_MANAGER.CALENDAR);
        break;
      case '3':
        history.push(PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER);
        break;
      case '4':
        history.push(PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT);
        break;
      case '5':
        history.push(PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT);
        break;
      case '6':
        history.push(PATH_HIGH_SCHOOL_MANAGER.LIST_ACCOUNT_PENDING);
    }
  };
  const { user } = useSelector((state) => state.authentication);
  return (
    <>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['3']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0
            }}
            items={user.roles === UNIVERSITY_MANAGER ? itemsUni : itemsHighSchool}
            defaultValue={'1'}
            onSelect={
              user.roles === UNIVERSITY_MANAGER ? handleOnSelectBarUniComponent : handleOnSelectBarHighSchoolComponent
            }
          />
        </Sider>
        <Layout
          style={{
            padding: '24px 24px'
          }}>
          <Content className='site-layout-background'>
            <Switch>
              <UniversityManagerRouter
                component={() => <UniversityListAccountPendingPage />}
                path={PATH_UNIVERSITY_MANAGER.LIST_ACCOUNT_PENDING}
                key={PATH_UNIVERSITY_MANAGER.LIST_ACCOUNT_PENDING}
                exact
              />
              <UniversityManagerRouter
                component={() => <GoalAdmissionPage />}
                path={PATH_UNIVERSITY_MANAGER.GOAL_ADMISSION}
                key={PATH_UNIVERSITY_MANAGER.GOAL_ADMISSION}
                exact
              />
              <UniversityManagerRouter
                component={() => <FlexMonsterPage />}
                path={PATH_UNIVERSITY_MANAGER.ANALYTICS_DATA}
                key={PATH_UNIVERSITY_MANAGER.ANALYTICS_DATA}
                exact
              />
              <UniversityManagerRouter
                component={() => <SelectHighSchoolPage />}
                path={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
                key={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
                exact
              />
              <UniversityManagerRouter
                component={() => <HighSchoolBookingPage />}
                path={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
                key={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
                exact
              />
              <UniversityManagerRouter
                component={() => <CalendarPage />}
                path={PATH_UNIVERSITY_MANAGER.CALENDAR}
                key={PATH_UNIVERSITY_MANAGER.CALENDAR}
                exact
              />
              <UniversityManagerRouter
                component={() => <ManageEventPage />}
                path={PATH_UNIVERSITY_MANAGER.MANAGE_EVENT}
                key={PATH_UNIVERSITY_MANAGER.MANAGE_EVENT}
                exact
              />
              <UniversityManagerRouter
                component={() => <RegisteredEventPage />}
                path={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
                key={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
                exact
              />
              <UniversityManagerRouter
                component={() => <NewManagementPage />}
                path={PATH_UNIVERSITY_MANAGER.CREATE_NEW}
                key={PATH_UNIVERSITY_MANAGER.CREATE_NEW}
                exact
              />
              <Route path={PATH_UNIVERSITY_MANAGER.NEW} exact>
                <ListNewContainer />
              </Route>
              <Route path={PATH_UNIVERSITY_MANAGER.PROFILE} exact>
                <UniversityDetailPage />
              </Route>
              <UniversityManagerRouter
                component={() => <ListNewContainer />}
                path={PATH_UNIVERSITY_MANAGER.NEW}
                key={PATH_UNIVERSITY_MANAGER.NEW}
                exact
              />
              <UniversityManagerRouter
                component={() => <ManageNewPage />}
                path={PATH_UNIVERSITY_MANAGER.MANAGE_NEWS}
                key={PATH_UNIVERSITY_MANAGER.MANAGE_NEWS}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <ListEventForHighSchoolPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.LIST_EVENT}
                key={PATH_HIGH_SCHOOL_MANAGER.LIST_EVENT}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <ListStudentForHighschoolPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
                key={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <HighSchoolListAccountPendingPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.LIST_ACCOUNT_PENDING}
                key={PATH_HIGH_SCHOOL_MANAGER.LIST_ACCOUNT_PENDING}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <HighSchoolCalendarPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.CALENDAR}
                key={PATH_HIGH_SCHOOL_MANAGER.CALENDAR}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <RegisteredEventHighSchoolPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT}
                key={PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT}
                exact
              />
              <HighSchoolManagerRouter
                component={() => <SlotManagerPage />}
                path={PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER}
                key={PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER}
                exact
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default ManagementRouter;
