import React from 'react'
import { Form, Input, Button } from 'antd'
import FogotPage from '../../../pages/forgetPassword/ForgetPasswordPage'

const GetEmailComponent = props => {
  const { onFinish } = props

  const { onFinishFailed } = props

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 8
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username or email"
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input placeholder="Username or email" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            type="danger"
            htmlType="submit"
            onClick={() => {
              return <FogotPage />
            }}
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default GetEmailComponent
