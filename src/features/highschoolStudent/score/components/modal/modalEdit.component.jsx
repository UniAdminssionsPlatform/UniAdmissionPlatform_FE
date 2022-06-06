import { Alert, Form, Input, Modal, Select, Spin } from 'antd';
import { score1, score2, score3 } from '../../../../../validate/ValidateScore';
import Label from '../../../../../components/commons/Label/Label.component';
import React from 'react';
const ModalEditComponent = (props) => {
  const {
    isModalVisible,
    handleOk,
    handleCancel,
    schoolYear,
    subjectGroup,
    onChangeSubjectGroup,
    onChangeSchoolYear,
    subject1,
    subject2,
    subject3,
    loading,
    editScore,
    handleEdit
  } = props;
  const { Option } = Select;

  const field = [
    {
      name: ['subject1'],
      value: subject1.score
    },
    {
      name: ['subject2'],
      value: subject2.score
    },
    {
      name: ['subject3'],
      value: subject3.score
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
          <Label>Khối thi</Label>
          <Form.Item>
            <Select
              showSearch
              defaultValue={1}
              onChange={onChangeSubjectGroup}
              placeholder='Khối ngành'
              optionFilterProp='children'
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }>
              {subjectGroup?.map((item) => (
                <Option value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
        <Form fields={field} id='edit-score-form' onFinish={handleEdit}>
          <Label>Điểm</Label>
          <div className='rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-3 md:text-base'>
            <Spin tip='đang tải...' spinning={loading}>
              <div className='grid md:grid-cols-3 gap-6 block md:col-span-2'>
                <label className='block'>
                  <Label>{subject1.subjectName}</Label>
                  <Form.Item name='subject1' rules={score1}>
                    <Input type='number' className='mt-1' />
                  </Form.Item>
                </label>
                <label className='block'>
                  <Label>{subject2.subjectName}</Label>
                  <Form.Item name='subject2' rules={score2}>
                    <Input type='number' className='mt-1' />
                  </Form.Item>
                </label>
                <label className='block'>
                  <Label>{subject3.subjectName}</Label>
                  <Form.Item name='subject3' rules={score3}>
                    <Input type='number' className='mt-1' />
                  </Form.Item>
                </label>
              </div>
            </Spin>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEditComponent;
