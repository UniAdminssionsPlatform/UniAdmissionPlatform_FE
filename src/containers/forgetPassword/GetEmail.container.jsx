import React from 'react'
import GetEmailComponent from '../../components/authen/forgetPassword/GetEmail.component'

const onFinish = value => {
  console.log(value)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

const GetEmailContainer = () => {
  return (
    <>
      <GetEmailComponent onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </>
  )
}
export default GetEmailContainer
