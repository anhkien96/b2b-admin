import 'antd/dist/reset.css';
import './Main.css';

import React, { useState } from 'react';

import {
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons';

import { Outlet, Link } from 'react-router-dom';

import IRoute from '../../../global/routes/iRoute';
import routes from '../../../global/routes';

import { theme, Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const createMenus = (routes: Array<IRoute>) => {
   const result: Array<any> = [];
   routes.forEach((r: IRoute) => {
      if (!r.hide) {
         if (r.children && r.children.length) {
            result.push(<Menu.SubMenu key={r.key} title={r.name} icon={r.icon}>
               {createMenus(r.children)}
            </Menu.SubMenu>);
         }
         else result.push(<Menu.Item key={r.key} icon={r.icon}>
            {r.path && <Link to={r.path}>{r.name}</Link>}
         </Menu.Item>);
      }
   });
   return result;
};

const menuList = createMenus(routes);

const Main: React.FC = () => {
   const [collapsed, setCollapsed] = useState(false);
   const { token: { colorBgContainer } } = theme.useToken();

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,0.2)' }}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
               {menuList}
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
