import { Form, Input, Modal, Select, Spin, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalAddSubjectFroupComponent = (props) => {
  const { isModalVisible, handleOk, handleCancel, schoolYear, loading, handleEdit, baseScore } = props;

  const fieldScore = baseScore?.map((item) => ({
    id: `${item.id}`,
    name: `${item.name}`,
    score: 0
  }));

  return (
    <>
      <Modal
        title='Thêm khối thi cho ngành '
        visible={isModalVisible}
        okButtonProps={{ form: 'add-subject-group-form', key: 'submit', htmlType: 'submit' }}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Lưu'
        cancelText='Đóng'>
        <Spin tip='đang tải...' spinning={loading}>
          <h2>Năm học: {schoolYear}</h2>
          <Form id='add-subject-group-form' onFinish={handleEdit}>
            <Label>Điểm</Label>
            <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
              <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
                <Form.List name='subjectGroupDetails'>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          style={{
                            display: 'flex',
                            marginBottom: 8
                          }}
                          align='baseline'>
                          <Form.Item
                            {...restField}
                            name={[name, 'first']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing first name'
                              }
                            ]}>
                            <Input placeholder='First Name' />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'last']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing last name'
                              }
                            ]}>
                            <Input placeholder='Last Name' />
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                          Add field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};
export default ModalAddSubjectFroupComponent;
