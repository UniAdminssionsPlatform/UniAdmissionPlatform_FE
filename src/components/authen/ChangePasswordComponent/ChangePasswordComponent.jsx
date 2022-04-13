import React from 'react'
import { Form, Input, Button } from 'antd'
import {
  confirm,
  username,
  password
} from '../../../validate/ChangePassword.validate'
import './ChangePassword.module.css'

const ChangePasswordContainer = props => {
  const { onFinish } = props
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <h1>CHANGE PASSWORD</h1>
      <Form.Item label="Username" name="username" rules={username}>
        <Input />
      </Form.Item>

      <Form.Item label="New Password" name="password" rules={password}>
        <Input.Password />
      </Form.Item>

      <Form.Item label="Confirm Password" name="Confirm" rules={confirm}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="danger" htmlType="submit">
          Change
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ChangePasswordContainer
