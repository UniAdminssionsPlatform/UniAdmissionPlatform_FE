import { Form, Input, Select, Space } from 'antd';
import React, { useState } from 'react';

const CreateEventComponent = (props) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { data, onFinish, onFinishFailed } = props;
  const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <>
      <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Space>
          <Form.Item
            label='Tên Bài viết'
            name='title'
            rules={[{ required: true, message: 'Hãy nhập tựa đề bài viết!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='tag'
            label='Thẻ'
            hasFeedback
            rules={[{ required: true, message: 'Please select your country!' }]}>
            <Select
              mode='multiple'
              placeholder='Inserted are removed'
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: '100%' }}>
              {filteredOptions.map((item) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
export default CreateEventComponent;
