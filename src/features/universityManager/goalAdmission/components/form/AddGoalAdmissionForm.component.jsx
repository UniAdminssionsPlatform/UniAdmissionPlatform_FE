import { Button, Divider, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';

const AddGoalAdmisisonFormComponent = (props) => {
  const { listMajor, listMajorDepartment, schoolYear, onChangeMajor } = props;
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  console.log('major department: ', listMajorDepartment);

  return (
    <Form name='add_goal_admission_form' onFinish={onFinish} autoComplete='off'>
      Năm học: {schoolYear}
      <Form.List name='majorDepartmentDetails'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8
                }}>
                <div className='box-content p-4 border-2 rounded-lg'>
                  <Form.Item name='placeOfBirth' style={{ width: '42.5vw' }}>
                    <label className='block'>
                      <Label>Ngành</Label>
                      <div className='mt-1'>
                        <Select
                          showSearch
                          placeholder=''
                          optionFilterProp='children'
                          onChange={onChangeMajor}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }>
                          {listMajor?.map((item) => (
                            <Option value={item.id}>{item.name}</Option>
                          ))}
                        </Select>
                      </div>
                    </label>
                  </Form.Item>
                  <Label>Chuyên ngành</Label>
                  <div className='box-content p-4 border-2 rounded-lg'>
                    <div class='grid grid-cols-3 gap-10'>
                      {listMajorDepartment.length !== 0 ? (
                        <Form.List name='scoreList'>
                          {() => (
                            <>
                              {listMajorDepartment?.map((item, key) => (
                                <div className='box-content h-32 w-32 p-4 border-2'>
                                  <label className='block'>
                                    <Label>Tiêu chí (sinh viên)</Label>
                                    <Form.Item
                                      name='subjectGroupId'
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Vui lòng nhập số sinh viên '
                                        },
                                        () => ({
                                          validator(_, value) {
                                            if (value < 0) return Promise.reject('số lượng sinh viên không hợp lệ');

                                            return Promise.resolve();
                                          }
                                        })
                                      ]}>
                                      <Input type='number' className='mt-1' />
                                    </Form.Item>
                                  </label>
                                  <label className='block'>
                                    <Label>Tiêu chí (sinh viên)</Label>
                                    <Form.Item
                                      name={`quantity ${key}`}
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Vui lòng nhập số sinh viên '
                                        },
                                        () => ({
                                          validator(_, value) {
                                            if (value < 0) return Promise.reject('số lượng sinh viên không hợp lệ');

                                            return Promise.resolve();
                                          }
                                        })
                                      ]}>
                                      <Input type='number' className='mt-1' />
                                    </Form.Item>
                                  </label>
                                  <label className='block'>
                                    <Label>Điểm chuẩn</Label>
                                    <Form.Item
                                      name='recordPoint'
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Vui lòng nhập điểm chuẩn '
                                        },
                                        () => ({
                                          validator(_, value) {
                                            if (value < 0) return Promise.reject('Điểm không hợp lệ');

                                            return Promise.resolve();
                                          }
                                        })
                                      ]}>
                                      <Input type='number' className='mt-1' />
                                    </Form.Item>
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                        </Form.List>
                      ) : null}
                    </div>
                  </div>
                </div>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type='dashed' onClick={() => add()} block>
                Thêm ngành
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddGoalAdmisisonFormComponent;
