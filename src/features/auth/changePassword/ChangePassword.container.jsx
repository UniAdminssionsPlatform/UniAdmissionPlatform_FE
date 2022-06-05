import React from 'react';
import ChangePasswordContainer from './components/ChangePasswordComponent';
const onFinish = (value) => {
  console.log(value);
};

const ChangePasswordContainer = () => {
  return (
    <>
      <ChangePasswordContainer onFinish={onFinish} />
    </>
  );
};

export default ChangePasswordContainer;
