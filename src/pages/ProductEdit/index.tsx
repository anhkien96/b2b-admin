import React from 'react';
import { useParams } from 'react-router-dom';

const ProductEdit: React.FC = () => {
    
    const {id} = useParams();

    return (
        <div>Kien
            <div>{id}</div>
        </div>
    );
}

export default ProductEdit;
