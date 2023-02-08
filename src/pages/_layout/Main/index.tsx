import 'antd/dist/reset.css';
import './Main.css';

import React, { useEffect, useState } from 'react';

import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   MenuOutlined
} from '@ant-design/icons';

import { Outlet, Link } from 'react-router-dom';

import IRoute from '../../../global/routes/iRoute';
import { userRoutes } from '../../../global/user';

import { theme, Layout, Menu, Button, Drawer } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const createMenus = (routes: Array<IRoute>) => {
   const result: Array<any> = [];
   routes.forEach((r: IRoute) => {
      if (!r.userHide && !r.hide) {
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

const menu = (<Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>{createMenus(userRoutes)}</Menu>);

const Main: React.FC = () => {
   const { token: { colorBgContainer } } = theme.useToken();
   const [collapsed, setCollapsed] = useState(false);
   const [mobiCollapsed, setMobiCollapsed] = useState(false);

   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <Layout style={{ minHeight: '100vh' }}>

         {width < 992 ?
            <Drawer className="mobi-menu" bodyStyle={{ padding: 0 }} width="260" placement='left' open={mobiCollapsed} onClose={() => setMobiCollapsed(false)}>
               {menu}
            </Drawer>
            :
            <Sider collapsible breakpoint="lg" collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
               <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,0.2)' }}></div>
               {menu}
            </Sider>
         }

         <Layout>
            <Header style={{ padding: 0, backgroundColor: colorBgContainer }}>
               {width < 992 ?
                  <Button className="mobi-trigger" type="primary" icon={<MenuOutlined />} onClick={() => setMobiCollapsed(true)}></Button>
                  :
                  React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'desk-trigger', onClick: () => setCollapsed(!collapsed) })
               }
            </Header>

            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               <Outlet />
            </Content>

            <Footer style={{ textAlign: 'center' }}>
               Công ty cổ phần xây dựng & thương mại Đại Sàn
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Main;
