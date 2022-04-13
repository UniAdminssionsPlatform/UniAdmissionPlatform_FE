import React from 'react'
import ForgotPasswordComponent from '../../../components/authen/ForgotPasswordComponent/ForgotPassword.component'

const onFinish = value => {
  console.log(value)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

const ForgetPasswordContainer = () => {
  return (
    <>
      <ForgotPasswordComponent
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </>
  )
}

export default ForgetPasswordContainer
