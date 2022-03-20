import React from 'react';
import SubMenu from "antd/es/menu/SubMenu";
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import { UserOutlined, VideoCameraOutlined, DashboardOutlined, UploadOutlined, NotificationOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from "../router";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={ () => navigate(RouteNames.DASHBOARD)} icon={<DashboardOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" onClick={ () => navigate(RouteNames.COURSES)} icon={<VideoCameraOutlined />}>
                    Courses
                </Menu.Item>
                <Menu.Item key="3" onClick={ () => navigate(RouteNames.USERS)} icon={<UploadOutlined />}>
                    Users
                </Menu.Item>
                <Menu.Item key="4" onClick={ () => navigate(RouteNames.BROADCASTING)} icon={<UploadOutlined />}>
                   Broadcasting
                </Menu.Item>
                <Menu.Item key="5" onClick={ () => navigate(RouteNames.SETTINGS)} icon={<UploadOutlined />}>
                    Settings
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;