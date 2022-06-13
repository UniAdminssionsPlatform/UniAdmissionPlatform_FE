import { Button, Form, Input, Modal, Select, Spin, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalEditComponent = (props) => {
  const {
    isModalVisible,
    handleOk,
    handleCancel,
    schoolYear,
    onChangeSchoolYear,
    loading,
    editScore,
    handleEdit,
    baseScore,
    listSubject
  } = props;
  const { Option } = Select;

  const [form] = Form.useForm();

  const areas = [
    {
      label: 'Beijing',
      value: 'Beijing'
    },
    {
      label: 'Shanghai',
      value: 'Shanghai'
    }
  ];

  return (
    <>
      <Modal
        title='Chỉnh sửa điểm'
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
          <Form form={form} id='edit-score-form' onFinish={handleEdit}>
            <Label>Điểm</Label>
            <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
              <div className='grid md:grid-cols-1 gap-6 block md:col-span-2'>
                <Form.List name='newList'>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field) => (
                        <Space size='small' align='baseline'>
                          <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, curValues) =>
                              prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                            }>
                            {() => (
                              <Form.Item
                                {...field}
                                label='Môn học'
                                name={[field.name, 'subjectId']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Missing subjectId'
                                  }
                                ]}>
                                <Select
                                  style={{
                                    width: 200
                                  }}>
                                  {listSubject?.map((item) => (
                                    <Option value={item.id}>
                                      {item.id}. {item.name}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            )}
                          </Form.Item>
                          <Form.Item
                            {...field}
                            label='Điểm'
                            name={[field.name, 'score']}
                            style={{ marginLeft: 80 }}
                            rules={[
                              {
                                required: true,
                                message: 'Điểm trống'
                              },
                              () => ({
                                validator(_, value) {
                                  if (value < 0) return Promise.reject('Điểm không hợp lệ');

                                  if (value > 10) return Promise.reject('Điểm không hợp lệ');

                                  return Promise.resolve();
                                }
                              })
                            ]}>
                            <Input type='number' />
                          </Form.Item>

                          <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button type='dashed' onClick={() => add()} block>
                          Thêm môn học khác
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
export default ModalEditComponent;
