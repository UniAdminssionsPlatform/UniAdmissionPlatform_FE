import React from 'react';
import RegistrationComponent from '../../../components/authen/RegistrationComponent/Registration.component';

const onFinish = (value) => {
  console.log(value);
};

const RegisterContainer = () => (
  <>
    <RegistrationComponent onFinish={onFinish} />
  </>
);
export default RegisterContainer;
