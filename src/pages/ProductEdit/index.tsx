import { Button } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './ProductEdit.css';

const ProductEdit: React.FC = () => {

    const { id } = useParams();

    const [isOpen, setOpen] = useState(false);

    return (
        // <div>{id}</div>
        <div style={{ position: 'relative' }}>
            <Button onClick={() => setOpen(!isOpen)}>Toggle</Button>
            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames="slide"
                unmountOnExit
            >
                <div>
                    <p>Slide down content goes here</p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default ProductEdit;
