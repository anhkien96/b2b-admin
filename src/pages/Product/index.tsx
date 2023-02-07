import React from 'react';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';

const dataSource = [
    { key: '1', id: 1, name: 'Áo thun 3 lỗ Nam XL', type: 32, sku: 'ao-dam-XL', price: 50000, quantity: 10, img: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg' },
    { key: '2', id: 2, name: 'Áo thun 3 lỗ Nam M', type: 32, sku: 'ao-dam-M', price: 80000, quantity: 20, img: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-trung-quoc-uong-nuoc-cute-420x560.jpg' },
];

const collums = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Hình ảnh', dataIndex: 'img', key: 'img', render: (_: string, r: { img: string }) => <img style={{ maxWidth: 100 }} src={r.img} /> },
    { title: 'Tên', dataIndex: 'name', key: 'name' },
    { title: 'Loại', dataIndex: 'type', key: 'type' },
    { title: 'SKU', dataIndex: 'sku', key: 'sku' },
    { title: 'Giá', dataIndex: 'price', key: 'price' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
    {
        title: 'Tùy chọn', render: (_: string, r: { id: number }) => {
            return <>
                <Link to={`/product/${r.id}`}>
                    <Button>Sửa</Button>
                </Link>
            </>;
        }
    },
];

const Product: React.FC = () => {

    return (
        <Table dataSource={dataSource} columns={collums} />
    );
}

export default Product;
