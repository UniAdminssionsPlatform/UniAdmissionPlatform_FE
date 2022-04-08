import ForgetPasswordComponent from '../../components/authen/forgetPassword/ForgetPassword.component'
import React from 'react'

const data = {
  username: 'Tinnt',
  passwrod: '132456'
}
const onFinish = value => {
  console.log(value)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

const ForgetPasswordContainer = () => {
  return (
    <>
      <ForgetPasswordComponent
        data={data}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </>
  )
}

export default ForgetPasswordContainer
