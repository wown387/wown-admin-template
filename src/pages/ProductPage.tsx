import React from 'react';
import { Form, Input, DatePicker, TimePicker, InputNumber, Select, Button } from 'antd';
import ProductManagement from '../components/ProductManagement';

const { RangePicker } = DatePicker;
const { Option } = Select;

const ProductRegistrationForm = () => {
    return (
        <div>
            <h2>Product Page</h2>
            <ProductManagement />
        </div>

    );
};

export default ProductRegistrationForm;
