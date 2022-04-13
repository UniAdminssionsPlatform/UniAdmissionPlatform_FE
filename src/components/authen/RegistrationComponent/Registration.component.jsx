import React from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import {
  email,
  username,
  password,
  confirm
} from '../../../validate/Registration.validate'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const RegistrationComponent = props => {
  const [form] = Form.useForm()

  const { onFinish } = props

  return (
    <div>
      <h1>REGISTRATION</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86'
        }}
        scrollToFirstError
      >
        <Form.Item name="email" label="E-mail" rules={email}>
          <Input />
        </Form.Item>

        <Form.Item name="username" label="Username" rules={username}>
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={password}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={confirm}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement'))
            }
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="danger" htmlType="submit" className="btn">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default RegistrationComponent
