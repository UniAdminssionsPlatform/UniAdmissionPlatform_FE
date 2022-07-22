import { Button, Form, Input, Select, Space, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const AddGoalAdmisisonModalComponent = (props) => {
  const { isVisible, handleOk, handleCancel, schoolYear, listMajorDepartment, listMajor } = props;

  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // const subjectGroupDetails = [];
    // values.sights.forEach((value) => {
    //     const subjecGroupDetails = {
    //         subjectGroupId: value
    //         quantity:
    //     }
    // })

    console.log('Received values of form:', values);
  };

  const handleChange = (value) => {
    console.log('major id: ', value);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 20
      }
    }
  };

  return (
    <>
      <Modal title='Tạo tiêu chí tuyển sinh' visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        Năm học: {schoolYear}
        <Form name='dynamic_form_nest_item' onFinish={onFinish} autoComplete='off'>
          <Form.List name='users'>
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
                    {/* <Form.Item
                      {...restField}
                      name={[name, 'last']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing last name'
                        }
                      ]}>
                      <Input placeholder='Last Name' />
                    </Form.Item> */}
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
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddGoalAdmisisonModalComponent;
