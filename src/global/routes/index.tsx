import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    DollarOutlined,
    SettingOutlined,
    EditOutlined,
    RiseOutlined,
    BarChartOutlined
} from '@ant-design/icons';

import Product from "../../pages/Product";
import ProductEdit from "../../pages/ProductEdit";


export default [
    { key: 'dashboard', name: 'Tổng Quan', path: '/', page: <Product />, icon: <PieChartOutlined /> },
    {
        key: 'order_menu', name: 'Doanh Số', icon: <DollarOutlined />, children: [
            { key: 'order', name: 'Đơn hàng', path: '/order', page: <Product /> },
            { key: 'invoice', name: 'Hóa đơn', path: '/invoice', page: <Product /> },
        ]
    },
    {
        key: 'product_menu', name: 'Sản Phẩm', icon: <DesktopOutlined />, children: [
            { key: 'product_cat', name: 'Danh mục', path: '/product-category', page: <Product /> },
            { key: 'product', name: 'Sản phẩm', path: '/product', page: <Product /> },
            { key: 'product_edit', name: 'Sửa sản phẩm', path: '/product/:id', page: <ProductEdit />, hide: true },
            { key: 'attr', name: 'Thuộc tính', path: '/product-attribute', page: <Product /> },
            { key: 'attr_group', name: 'Nhóm thuộc tính', path: '/product-attribute-group', page: <Product /> },
        ]
    },
    {
        key: 'customer_menu', name: 'Khách Hàng', icon: <UserOutlined />, children: [
            { key: 'customer', name: 'Khách hàng', path: '/user', page: <ProductEdit /> },
            { key: 'customer_group', name: 'Nhóm khách hàng', path: '/user-group', page: <ProductEdit /> },
        ]
    },
    {
        key: 'promo_menu', name: 'Marketing', icon: <RiseOutlined />, children: [
            { key: 'promo', name: 'Khuyến mại', path: '/promo', page: <ProductEdit /> },
            { key: 'coupon', name: 'Mã giảm giá', path: '/coupon', page: <ProductEdit /> },
        ]
    },
    {
        key: 'report_menu', name: 'Báo Cáo', icon: <BarChartOutlined />, children: [
            { key: 'report_promo', name: 'Marketing', path: '/report-promo', page: <ProductEdit /> },
            { key: 'report_sale', name: 'Doanh số', path: '/report-sale', page: <ProductEdit /> },
            { key: 'report_rating', name: 'Đánh giá', path: '/report-rating', page: <ProductEdit /> },
        ]
    },
    {
        key: 'content_menu', name: 'Nội Dung', icon: <EditOutlined />, children: [
            { key: 'post_cat', name: 'Chuyên mục', path: '/post-category', page: <ProductEdit /> },
            { key: 'post', name: 'Bài viết', path: '/post', page: <ProductEdit /> },
            { key: 'post_tag', name: 'Từ khóa', path: '/post-tag', page: <ProductEdit /> },
            { key: 'page', name: 'Trang', path: '/post-page', page: <ProductEdit /> },
        ]
    },
    {
        key: 'file_menu', name: 'Tệp Tin', icon: <FileOutlined />, children: [
            { key: 'file', name: 'Tệp tin', path: '/file', page: <ProductEdit /> },
        ]
    },
    {
        key: 'system_menu', name: 'Hệ Thống', icon: <SettingOutlined />, children: [
            { key: 'user', name: 'Người dùng', path: '/user', page: <ProductEdit /> },
            { key: 'user_role', name: 'Vai trò', path: '/user-role', page: <ProductEdit /> },
            { key: 'setting', name: 'Cài đặt', path: '/setting', page: <ProductEdit /> },
        ]
    },
];