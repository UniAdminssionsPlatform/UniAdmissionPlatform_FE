import GetEmailComponent from '../../../components/authen/ForgotPasswordComponent/component/GetEmail.component';
import React from 'react';

const onFinish = (value) => {
  console.log(value);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const GetEmailContainer = () => (
  <>
    <GetEmailComponent onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </>
);
export default GetEmailContainer;
