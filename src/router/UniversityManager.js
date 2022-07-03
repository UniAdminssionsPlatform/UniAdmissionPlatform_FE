import {Route, Switch, useHistory} from "react-router-dom";
import UniversityManagerRouter from "./components/UniversityManagerRouter";
import SelectHighSchoolPage from "../pages/universityManager/manageEvent/SelectHighSchoolPage";
import {PATH_UNIVERSITY_MANAGER} from "../constants/Paths/Path";
import UniversityDetailPage from "../pages/universityManager/UniversityDetailPage";
import HighSchoolBookingPage from "../pages/universityManager/manageEvent/HighSchoolBookingPage";
import RegisteredEventPage from "../pages/universityManager/manageEvent/RegisteredEventPage";
import UpdateUniversityProfilePage from "../pages/UniversityProfilePage/EditUniversityProfilePage";
import CreateNewPage from "../pages/highSchoolManager/CreateNewPage";
import React, {useState} from "react";
import {Layout, Menu} from "antd";
import CalendarContainer from "../features/universityManager/calendar/Calendar.container";
import CreateEventPage from "../pages/universityManager/CreateEventPage";
import {Content} from "antd/es/layout/layout";
import {BookOutlined, CalendarOutlined, StarOutlined, WalletOutlined} from "@ant-design/icons";
import CalendarPage from "../pages/universityManager/CalendarPage";
import ListNewContainer from "../features/public/news/ListNew.container";

const UniversityManager = () => {
    const {Header, Content, Sider} = Layout;
    const history = useHistory()

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('Lịch', '1', <CalendarOutlined/>),
        getItem('Sự kiện', '2', <BookOutlined/>, [
            getItem('Quản lý sự kiện', '3'),
            getItem('Đăng ký sự kiện', '4'),
            getItem('Lịch sử sự kiện', '5'),
        ]),
        getItem('Bài viết', '6', <StarOutlined/>, [
            getItem('Tạo bài viết', '7'),
            getItem('Quản lý bài viết', '8'),
        ]),
        getItem('Tiêu chí tuyển sinh', '9', <WalletOutlined/>)
    ]
    const handleOnSelectBarComponent = (data) => {
        const {item, key, keyPath, selectedKeys, domEvent} = data;
        switch (key) {
            case '1':
                history.push(PATH_UNIVERSITY_MANAGER.CALENDAR)
                break;
            case '3':
                history.push(PATH_UNIVERSITY_MANAGER.CREATE_EVENT)
                break;
            case '4':
                history.push(PATH_UNIVERSITY_MANAGER.REGIS_EVENT)
                break;
            case '5':
                history.push(PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT)
                break;
            case '6':
                history.push("")
        }
    }
    return (
        <Layout>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['3']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items}
                        defaultValue={'1'}
                        onSelect={handleOnSelectBarComponent}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '24px 24px 24px',
                    }}
                >
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height: '80vh'
                        }}
                    >
                        <Switch>
                            <UniversityManagerRouter
                                component={() => <SelectHighSchoolPage/>}
                                path={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
                                key={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <UniversityDetailPage/>}
                                path={PATH_UNIVERSITY_MANAGER.PROFILE}
                                key={PATH_UNIVERSITY_MANAGER.PROFILE}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <HighSchoolBookingPage/>}
                                path={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
                                key={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <CalendarPage/>}
                                path={PATH_UNIVERSITY_MANAGER.CALENDAR}
                                key={PATH_UNIVERSITY_MANAGER.CALENDAR}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <CreateEventPage/>}
                                path={PATH_UNIVERSITY_MANAGER.CREATE_EVENT}
                                key={PATH_UNIVERSITY_MANAGER.CREATE_EVENT}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <RegisteredEventPage/>}
                                path={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
                                key={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <UpdateUniversityProfilePage/>}
                                path={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
                                key={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
                                exact
                            />
                            <UniversityManagerRouter
                                component={() => <CreateNewPage/>}
                                path={PATH_UNIVERSITY_MANAGER.CREATE_NEW}
                                key={PATH_UNIVERSITY_MANAGER.CREATE_NEW}
                                exact
                            />
                            <Route path={PATH_UNIVERSITY_MANAGER.NEW} exact>
                                <ListNewContainer/>
                            </Route>
                            <Route path={PATH_UNIVERSITY_MANAGER.PROFILE} exact>
                                <UniversityDetailPage/>
                            </Route>
                            <UniversityManagerRouter
                                component={() => <ListNewContainer/>}
                                path={PATH_UNIVERSITY_MANAGER.NEW}
                                key={PATH_UNIVERSITY_MANAGER.NEW}
                                exact
                            />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default UniversityManager