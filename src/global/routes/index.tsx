import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';

import ProductList from "../../components/ProductList";
import Product from "../../pages/Product";


export default [
    { key: 'dashboard', name: 'Tổng Quan', path: '/', page: <ProductList />, icon: <PieChartOutlined />, role: [] },
    { key: 'product', name: 'Sản Phẩm', icon: <DesktopOutlined />, children: [
        { key: 'category', name: 'Danh mục', path: '/category', page: <ProductList />, role: [] },
    ] },
    { key: 'user', name: 'Thành Viên', path: '/user', page: <Product />, icon: <UserOutlined />, role: [] },
    { key: 'team', name: 'Đội Nhóm', path: '/team', page: <Product />, icon: <TeamOutlined />, role: [] },
    { key: 'file', name: 'Tệp Tin', path: '/file', page: <Product />, icon: <FileOutlined />, role: [] },
];