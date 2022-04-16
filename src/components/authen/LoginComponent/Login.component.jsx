import './Login.module.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { password, username } from '../../../validate/Login.validate';
import React from 'react';

const LoginComponent = (props) => {
  const { onFinish } = props;
  return (
    <div>
      <h1>LOGIN</h1>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}>
        <Form.Item name='username' rules={username}>
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item name='password' rules={password}>
          <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href='/'>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type='danger' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          Or <a href='/'>register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginComponent;
