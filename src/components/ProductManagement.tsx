import React from 'react';
import { Form, Input, DatePicker, TimePicker, InputNumber, Select, Button } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

const ProductRegistrationForm = () => {
  return (
    <Form
      layout="vertical"
      style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}
    >
      <Form.Item label="카테고리">
        <Select placeholder="카테고리 선택">
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
          <Option value="category3">Category 3</Option>
        </Select>
      </Form.Item>

      <Form.Item label="오픈일정">
        <RangePicker showTime format="YYYY-MM-DD HH:mm" />
      </Form.Item>

      <Form.Item label="상품명">
        <Input placeholder="상품명" />
      </Form.Item>

      <Form.Item label="판매가">
        <Input.Group compact>
          <Form.Item
            name="salePrice"
            noStyle
          >
            <InputNumber min={1} max={100000} defaultValue={9999} formatter={value => `₩ ${value}`} />
          </Form.Item>
          <Input
            style={{
              width: '30%',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
            placeholder="원"
            disabled
          />
        </Input.Group>
      </Form.Item>

      <Form.Item label="소비자가">
        <Input.Group compact>
          <Form.Item
            name="consumerPrice"
            noStyle
          >
            <InputNumber min={1} max={100000} defaultValue={9999} formatter={value => `₩ ${value}`} />
          </Form.Item>
          <Input
            style={{
              width: '30%',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
            placeholder="원"
            disabled
          />
        </Input.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductRegistrationForm;
