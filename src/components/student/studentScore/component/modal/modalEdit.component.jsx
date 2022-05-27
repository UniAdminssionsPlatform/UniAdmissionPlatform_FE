import { Modal, Form, Input, Select } from 'antd';
import Label from '../../../../commons/Label/Label.component';
import React from 'react';
const ModalEditComponent = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;
  const { Option } = Select;
  return (
    <>
      <Modal title='Chỉnh sửa điểm' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          labelCol={{
            span: 4
          }}
          layout='horizontal'
          initialValues={{}}
          onValuesChange={{}}>
          <Label>Năm học</Label>
          <Form.Item>
            <Select
              showSearch
              defaultValue='1'
              placeholder='Năm học'
              optionFilterProp='children'
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }>
              <Option value='1'>1990</Option>
              <Option value='2'>1999</Option>
              <Option value='3'>2018</Option>
            </Select>
          </Form.Item>
          <Label>Khối thi</Label>
          <Form.Item>
            <Select
              showSearch
              defaultValue='1'
              placeholder='Khối ngành'
              optionFilterProp='children'
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }>
              <Option value='1'>A00</Option>
              <Option value='2'>A01</Option>
              <Option value='3'>A02</Option>
            </Select>
          </Form.Item>
          <Label>Điểm</Label>
          <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
            <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
              <Form.Item name='lastName'>
                <label className='block'>
                  <Label>Toán</Label>
                  <Input type='number' className='mt-1' />
                </label>
              </Form.Item>
              <Form.Item name='middleName'>
                <label className='block'>
                  <Label>Lý</Label>
                  <Input type='number' className='mt-1' />
                </label>
              </Form.Item>
              <Form.Item name='firstName'>
                <label className='block'>
                  <Label>Hóa</Label>
                  <Input type='number' className='mt-1' />
                </label>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEditComponent;
