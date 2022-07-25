import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';

const AddGoalAdmisisonFormComponent = (props) => {
  const {
    listSubjectGroup,
    listMajorDepartment,
    schoolYear,
    onChangeMajor,
    onChangeSubjectGroup,
    visibleSubjectGroup
  } = props;
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const fieldsMajorDepartment = listMajorDepartment?.map((item) => ({
    majorDepartmentId: `${item.id}`,
    majorDepartmentName: `${item.name}`,
    name: `Tiêu chí tuyển sinh ngành ${item.name} năm học ${schoolYear}`,
    description: `Tiêu chí tuyển sinh ngành ${item.name} năm học ${schoolYear}`
  }));

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
                  <Form.Item name='majorDepartmentId' style={{ width: '42.5vw' }}>
                    <label className='block'>
                      <Label>Chuyên ngành</Label>
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
                          {listMajorDepartment?.map((item) => (
                            <Option value={item.id}>{item.name}</Option>
                          ))}
                        </Select>
                      </div>
                    </label>
                  </Form.Item>
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
