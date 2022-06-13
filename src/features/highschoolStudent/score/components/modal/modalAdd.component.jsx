import { Form, Input, Modal, Select, Spin } from 'antd';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalAddComponent = (props) => {
  const {
    isModalVisible,
    handleOk,
    handleCancel,
    schoolYear,
    onChangeSchoolYear,
    loading,
    editScore,
    handleEdit,
    baseScore
  } = props;
  const { Option } = Select;

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
          <Form
            labelCol={{
              span: 4
            }}
            layout='horizontal'
            onFinish={editScore}>
            <Label>Năm học</Label>
            <Form.Item>
              <Select
                defaultValue={6}
                onChange={onChangeSchoolYear}
                placeholder='Năm học'
                optionFilterProp='children'
                filterOption={(input, option) => option.children.includes(input)}>
                {schoolYear?.map((item) => (
                  <Option value={item.id}>{item.year}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
          <Form id='edit-score-form' onFinish={handleEdit}>
            <Label>Điểm</Label>
            <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
              <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
                {baseScore?.map((item) => (
                  <label className='block'>
                    <Label>{item.name}</Label>
                    <Form.Item
                      name={item.name}
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
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};
export default ModalAddComponent;
