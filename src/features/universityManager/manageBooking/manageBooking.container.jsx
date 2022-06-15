import React, {useState} from 'react'
import {Layout, Menu} from "antd";
import {
    BookOutlined,
    CalendarOutlined,
    ContainerOutlined,
    DesktopOutlined,
    LaptopOutlined,
    NotificationOutlined,
    PieChartOutlined, StarOutlined,
    UserOutlined, WalletOutlined
} from "@ant-design/icons";
import CalendarContainer from "./components/calendar/Calendar.container";
import {Router} from "react-router";
import {Route} from "react-router-dom";
import {PATH_UNIVERSITY_MANAGER} from "../../../constants/Paths/Path";
import CreateEventPage from "../../../pages/universityManager/CreateEventPage";

const ManageBookingContainer = () => {
    const {Header, Content, Sider} = Layout;
    const [key, setKey] = useState('1')

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
            getItem('Tạo sự kiện', '3'),
            getItem('Đăng ký sự kiện', '4'),
            getItem('Quản lý sự kiện', '5'),
            getItem('Lịch sử sự kiện', '6'),
        ]),
        getItem('Bài viết', '7', <StarOutlined/>, [
            getItem('Tạo bài viết', '8'),
            getItem('Quản lý bài viết', '9'),
        ]),
        getItem('Tiêu chí tuyển sinh', '10', <WalletOutlined/>)
    ]
    const handleOnSelectBarComponent = (data) => {
        const {item, key, keyPath, selectedKeys, domEvent} = data;
        setKey(key)
        console.log(data)
    }
    return (<>
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
                            {key === '1' ? <CalendarContainer/> : null}
                            {key === '3' ?
                                <Route path={PATH_UNIVERSITY_MANAGER.CREATE_EVENT} exact>
                                    <CreateEventPage/>
                                </Route>
                                : null}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    </>)
}
export default ManageBookingContainer
