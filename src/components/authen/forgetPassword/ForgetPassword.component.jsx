import { Form, Input, Button } from 'antd'
import './ForgetPassword.module.css'

const ForgetPasswordComponent = props => {
  const { onFinish } = props

  const { onFinishFailed } = props
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
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="OTP Code"
          name="OTP Code"
          rules={[
            {
              required: true,
              message: 'Please input your OPT Code!'
            }
          ]}
        >
          <Input type="number" placeholder="OTP Code" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                )
              }
            })
          ]}
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
export default ForgetPasswordComponent
