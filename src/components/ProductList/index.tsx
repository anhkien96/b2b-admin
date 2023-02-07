import React from 'react';
import { Button, Table } from 'antd';

const dataSource = [
    { key: '1', name: 'Mike', age: 32, address: '10 Downing Street', img: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg' },
    { key: '2', name: 'Mike', age: 32, address: '10 Downing Street', img: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-trung-quoc-uong-nuoc-cute-420x560.jpg' },
];

const collums = [
    { title: 'Họ tên', dataIndex: 'name', key: 'name' },
    { title: 'Hình ảnh', dataIndex: 'img', key: 'img', render: (_: string, r: { img: string }) => <img style={{ maxWidth: 100 }} src={r.img} /> },
    { title: 'Tuổi', dataIndex: 'age', key: 'age' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
    {
        title: 'Tùy chọn', render: () => {
            return <>
                <Button>Sửa</Button>
            </>;
        }
    },
];

const ProductList: React.FC = () => {

    return (
        <Table dataSource={dataSource} columns={collums} />
    );
}

export default ProductList;
