/* eslint-disable */
import React from 'react';
import LoginComponent from '../../../components/authen/LoginComponent/Login.component';

const onFinish = (value) => {};

const LoginContainer = () => {
  return (
    <>
      <LoginComponent onFinish={onFinish} />
    </>
  );
};
export default LoginContainer;
