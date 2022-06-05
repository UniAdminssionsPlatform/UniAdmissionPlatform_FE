import { PATH } from '../../../constants/Paths/Path';
import { auth } from '../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';
import RegistrationComponent from './components/Registration.component';

const RegisterContainer = () => {
  const history = useHistory();
  const onSubmit = (value) => {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        console.log(userCredential);
        notification.success({
          message: 'Tạo tài khoản thành công!',
          description: `Bạn đã tạo tài khoản thành công với email. ${value.email}`
        });
        history.push(PATH.INDEX);
      })
      .catch((error) => {
        notification.error({
          message: 'Tạo tài khoản thất bại!',
          description: `[${error.code}] email hoặc mật khẩu không hợp lệ!`
        });
      });
  };
  return (
    <>
      <RegistrationComponent onSubmit={onSubmit} />
    </>
  );
};
export default RegisterContainer;
