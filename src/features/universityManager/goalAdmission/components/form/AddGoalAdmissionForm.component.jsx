import { Button, Col, Form, Input, Row, Select, Skeleton } from 'antd';
import React from 'react';

const AddGoalAdmisisonFormComponent = (props) => {
  const {
    listSubjectGroup,
    listMajorDepartment,
    schoolYear,
    onChangeMajor,
    onChangeSubjectGroup,
    onFinish,
    loading,
    form
  } = props;
  const { Option } = Select;

  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <Skeleton active loading={loading}>
      <Form form={form} id='add_goal_admission_form' layout='vertical' hideRequiredMark onFinish={onFinish}>
        <Row>
          <h1>Tiêu chí tuyển sinh năm {schoolYear}</h1>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='majorDepartmentId'
              label='Chuyên ngành'
              rules={[
                {
                  required: true,
                  message: 'Chọn Chuyên ngành'
                }
              ]}>
              <Select
                showSearch
                placeholder='Chọn Chuyên ngành'
                optionFilterProp='children'
                onChange={onChangeMajor}
                onSearch={onSearch}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                {listMajorDepartment.map((item) => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='subjectGroupId'
              label='Khối thi'
              rules={[
                {
                  required: true,
                  message: 'Chọn khối thi'
                }
              ]}>
              <Select
                showSearch
                placeholder='Chọn khối thi'
                optionFilterProp='children'
                onChange={onChangeSubjectGroup}
                onSearch={onSearch}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                {listSubjectGroup.map((item) => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='quantity'
              label='Chỉ tiêu'
              rules={[
                {
                  required: true,
                  message: 'Nhập chỉ tiêu'
                },
                () => ({
                  validator(_, value) {
                    if (value < 0) return Promise.reject('Chỉ tiêu phải lớn hơn 0');

                    return Promise.resolve();
                  }
                })
              ]}>
              <Input type='number' placeholder='Nhập chỉ tiêu' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='recordPoint'
              label='Điểm chuẩn'
              rules={[
                {
                  required: true,
                  message: 'Nhập điểm chuẩn'
                },
                () => ({
                  validator(_, value) {
                    if (value < 0) return Promise.reject('Điểm không hợp lệ');

                    if (value > 30) return Promise.reject('Điểm không hợp lệ');

                    return Promise.resolve();
                  }
                })
              ]}>
              <Input type='number' placeholder='Nhập điểm chuẩn' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </Skeleton>
  );
};
export default AddGoalAdmisisonFormComponent;
