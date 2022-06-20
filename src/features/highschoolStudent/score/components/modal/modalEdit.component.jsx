import { Button, Form, Input, Modal, Select, Space, Spin, Tabs } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalEditComponent = (props) => {
  const {
    isModalVisible,
    handleCancel,
    schoolYear,
    loading,
    handleEditTab1,
    handleEditTab2,
    listSubject,
    listScore,
    isDisableScoreField,
    onChangeSubject
  } = props;
  const { Option } = Select;
  const { TabPane } = Tabs;

  const fieldScore = listScore?.map((item) => ({
    id: `${item.id}`,
    name: `${item.subject.name}`,
    subjectId: `${item.subject.id}`,
    score: item.score
  }));
  return (
    <>
      <Modal title='Chỉnh sửa điểm' visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Chỉnh sửa điểm có sẵn trong học bạ' key='1'>
            <Spin tip='đang tải...' spinning={loading}>
              <h2>Năm học: {schoolYear}</h2>
              <Form id='edit-score-form-2' onFinish={handleEditTab1} initialValue={fieldScore}>
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
                                  // {...item}
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
                                <Form.Item noStyle name={item.id} initialValue={item.subjectId}>
                                  <Input type='hidden' />
                                </Form.Item>
                              </label>
                            ))}
                          </>
                        )}
                      </Form.List>
                    ) : null}
                  </div>
                </div>
                <Form.Item>
                  <Button type='primary' htmlType='submit' style={{ marginTop: 10, borderRadius: 5 }}>
                    Lưu
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
          </TabPane>
          <TabPane tab='Thêm điểm vào học bạ' key='2'>
            <Spin tip='đang tải...' spinning={loading}>
              <h2>Năm học: {schoolYear}</h2>
              <Form id='edit-score-form' onFinish={handleEditTab2}>
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
                                  prevValues.listSubject !== curValues.listSubject ||
                                  prevValues.sights !== curValues.sights
                                }>
                                {() => (
                                  <Form.Item {...field} label='Môn học' name={[field.name, 'subjectId']}>
                                    <Select
                                      onChange={onChangeSubject}
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
                                <Input type='number' disabled={isDisableScoreField} />
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
                <Form.Item>
                  <Button type='primary' htmlType='submit' style={{ marginTop: 10, borderRadius: 5 }}>
                    Lưu
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};
export default ModalEditComponent;
