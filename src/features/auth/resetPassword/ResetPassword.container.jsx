import React from 'react';
import ResetPasswordComponent from './components/ResetPassword.component';

const onFinish = (value) => {};
const onFinishFailed = (errorInfo) => {};

const ResetPasswordContainer = () => (
  <>
    <ResetPasswordComponent onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </>
);

export default ResetPasswordContainer;
