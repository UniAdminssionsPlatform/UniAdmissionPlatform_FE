import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Login.module.css'
import { username, password } from '../../../validate/Login.validate'

const LoginComponent = props => {
  const { onFinish } = props
  return (
    <div>
      <h1>LOGIN</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={username}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password" rules={password}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="danger" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginComponent
