import { Form, Input, Button } from 'antd'
import './ForgotPassword.module.css'
import {
  email,
  otp,
  password,
  confirm
} from '../../../validate/ForgotPassword.validate'

const ForgotPasswordComponent = props => {
  const { onFinish, onFinishFailed } = props
  return (
    <div id="container">
      <h1> FORGOT PASSWORD</h1>
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
        <Form.Item label="Email" name="Email" rules={email}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item label="OTP Code" name="OTP Code" rules={otp}>
          <Input type="number" placeholder="OTP Code" />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={password}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={confirm}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 24
          }}
        >
          <Button type="danger" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default ForgotPasswordComponent
