import ProductList from "../components/ProductList";
import Kien from "../pages/Kien";

export default [
    { name: 'Tổng quan', path: '/', page: <ProductList/>, role: [] },
    { name: 'Kiên', path: '/kien', page: <Kien/>, role: [] },
];