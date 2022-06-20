import { Form, Input, Modal, Select, Spin } from 'antd';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalAddComponent = (props) => {
  const { isModalVisible, handleOk, handleCancel, schoolYear, loading, handleEdit, baseScore } = props;

  const fieldScore = baseScore?.map((item) => ({
    id: `${item.id}`,
    name: `${item.name}`,
    score: 0
  }));

  return (
    <>
      <Modal
        title='Tạo học bạ'
        visible={isModalVisible}
        okButtonProps={{ form: 'edit-score-form', key: 'submit', htmlType: 'submit' }}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Lưu'
        cancelText='Đóng'>
        <Spin tip='đang tải...' spinning={loading}>
          <h2>Năm học: {schoolYear}</h2>
          <Form id='edit-score-form' onFinish={handleEdit}>
            <Label>Điểm</Label>
            <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
              <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
                {fieldScore !== null && fieldScore !== undefined ? (
                  <Form.List name='scoreList'>
                    {() => (
                      <>
                        {fieldScore?.map((item) => (
                          <label className='block'>
                            <Label>{item.name}</Label>
                            <Form.Item
                              initialValue={+item.score}
                              name={item.id}
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập điểm '
                                },
                                () => ({
                                  validator(_, value) {
                                    if (value < 0) return Promise.reject('Điểm không hợp lệ');

                                    if (value > 10) return Promise.reject('Điểm không hợp lệ');

                                    return Promise.resolve();
                                  }
                                })
                              ]}>
                              <Input type='number' className='mt-1' />
                            </Form.Item>
                          </label>
                        ))}
                      </>
                    )}
                  </Form.List>
                ) : null}
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};
export default ModalAddComponent;
