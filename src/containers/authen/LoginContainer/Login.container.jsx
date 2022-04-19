/* eslint-disable */
import React from 'react';
import LoginComponent from '../../../components/authen/LoginComponent/Login.component';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SigninHandler } from '../../../redux-flow/authentication/authentication-action';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (value) => {
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((result) => {
          console.log(result)
        dispatch(SigninHandler(result.user));
        notification.success({
          message: 'Đăng nhập thành công!',
          description: `Bạn đã đăng nhập vào website thành công với email. ${value.email}`
        });
      })
      .catch((error) => {
        notification.error({
          message: 'Đăng nhập thất bại!',
          description: `[${error.code}] Sai email hoặc mật khẩu!`
        });
      });
  };
  return (
    <>
      <LoginComponent onFinish={onSubmit} loginWithGoogle={signInWithPopup} />
    </>
  );
};
export default LoginContainer;
