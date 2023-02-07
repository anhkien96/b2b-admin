import 'antd/dist/reset.css';
import './Main.css';

import React, { useState } from 'react';
import type { MenuProps } from 'antd';

import {
   DesktopOutlined,
   FileOutlined,
   PieChartOutlined,
   TeamOutlined,
   UserOutlined,
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons';

import { Outlet, Link } from 'react-router-dom';

import ProductList from '../../../components/ProductList';

import { theme, Breadcrumb, Layout, Menu, Button, Table } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
   return { key, icon, children, label } as MenuItem;
};

const items: MenuItem[] = [
   getItem('Tổng Quan', '1', <PieChartOutlined />),
   getItem('Sản Phẩm', '2', <DesktopOutlined />),
   getItem('Thành Viên', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
   ]),
   getItem('Đội Nhóm', 'sub2', <TeamOutlined />, [
      getItem('Team 1', '6'),
      getItem('Team 2', '8')
   ]),
   getItem('Tệp Tin', '9', <FileOutlined />),
];

const Main: React.FC = () => {
   const [collapsed, setCollapsed] = useState(false);
   const { token: { colorBgContainer } } = theme.useToken();

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,0.2)' }}></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />



            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to="/">A</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/kien">B</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/c">C</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/d">D</Link>
                </Menu.Item>
                <Menu.SubMenu key="sub3131" title="HI hi">
                <Menu.Item key="_1">
                    <Link to="/">A</Link>
                </Menu.Item>
                <Menu.Item key="_2">
                    <Link to="/kien">B</Link>
                </Menu.Item>
                <Menu.Item key="_3">
                    <Link to="/c">C</Link>
                </Menu.Item>
                <Menu.Item key="_4">
                    <Link to="/d">D</Link>
                </Menu.Item>
                </Menu.SubMenu>
            </Menu>
         </Sider>

         <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }}>
               {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: () => setCollapsed(!collapsed) })}
            </Header>

            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               <Outlet />
            </Content>

            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               Hay lắm
            </Content>

            <Footer style={{ textAlign: 'center' }}>
               Công ty cổ phần xây dựng & thương mại Đại Sàn
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Main;
