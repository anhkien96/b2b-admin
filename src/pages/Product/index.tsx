import React, { useState } from 'react';
import { Button, Table, Input, Select, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

const _dataSource = [
    { key: '1', id: 1, name: 'Áo thun 3 lỗ Nam XL', type: 32, sku: 'ao-dam-XL', price: 50000, quantity: 10, img: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg' },
    { key: '2', id: 2, name: 'Áo thun 3 lỗ Nam M', type: 32, sku: 'ao-dam-M', price: 80000, quantity: 20, img: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-trung-quoc-uong-nuoc-cute-420x560.jpg' },
];

const collums = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Hình ảnh', dataIndex: 'img', key: 'img', render: (_: string, r: { name: string, img: string }) => <img style={{ maxWidth: 100 }} src={r.img} alt={r.name} /> },
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

    const [dataSource, setDataSource] = useState(_dataSource);

    const handleSearch = (value: string) => {
        setDataSource(_dataSource.filter((item) => {
            return item.name.includes(value) || item.sku.includes(value);
        }));
    };

    const rowSelection = {
        onChange: (selectedRowKeys: Array<string | number>, selectedRows: Array<any>) => {
            console.log(selectedRowKeys, selectedRows);
        }
    };

    return (<>
        <Row style={{ marginBottom: 12 }}>
            <Col style={{ marginBottom: 24, textAlign: 'right' }} span="24">
                <Link to="/product/new">
                    <Button type="primary" size="large">Thêm sản phẩm</Button>
                </Link>
            </Col>
            <Col span="8">
                <Select
                    placeholder="Thao tác"
                    style={{ width: 144, marginRight: 12, marginBottom: 12 }}
                    options={[
                        { value: 'change_status', label: 'Đổi trạng thái' },
                        { value: 'remove', label: 'Xóa bỏ' },
                    ]}
                />
                <Button>Thực hiện</Button>
            </Col>
            <Col span="8">
                <Search placeholder='Tìm kiếm' onSearch={handleSearch}></Search>
            </Col>
            <Col span="8" style={{ textAlign: 'right' }}>
                <Button>Lọc</Button>
            </Col>
        </Row>
        <div style={{ overflowX: 'auto' }}>
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={collums} />
        </div>
    </>
    );
}

export default Product;
