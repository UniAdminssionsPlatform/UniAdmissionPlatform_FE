import React from 'react';
import ForgotPasswordComponent from '../../../components/authen/ForgotPasswordComponent/ForgotPassword.component';

const onFinish = (value) => {};
const onFinishFailed = (errorInfo) => {};

const ForgotPasswordContainer = () => {
  return (
    <>
      <ForgotPasswordComponent onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </>
  );
};

export default ForgotPasswordContainer;
