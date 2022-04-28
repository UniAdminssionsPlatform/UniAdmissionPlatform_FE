/* eslint-disable */
import React from 'react';
import LoginComponent from '../../../components/authen/LoginComponent/Login.component';
import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SigninHandler } from '../../../redux-flow/authentication/authentication-action';
import { loginByFirebase } from '../../../services/UserServices';
import {
    PATH,
    PATH_HIGH_SCHOOL_MANAGER,
    PATH_HIGH_SCHOOL_STUDENT,
    PATH_UNIVERSITY_MANAGER
} from '../../../constants/Paths/Path';
import { HIGH_SCHOOL_MANAGER, HIGH_SCHOOL_STUDENT, UNIVERSITY_MANAGER } from '../../../constants/RoleType';
import { handleNotification } from '../../../notification/LoginNotification';

const googleProvider = new GoogleAuthProvider();
const facebookProvier = new FacebookAuthProvider();

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRedirect = (user) => {
    if (user.need_register === true) {
      history.push(PATH.REGISTRATION);
    } else {
      if (user.roles === HIGH_SCHOOL_MANAGER) {
        history.push(PATH_HIGH_SCHOOL_MANAGER.INDEX);
      } else if (user.roles === HIGH_SCHOOL_STUDENT) {
        history.push(PATH_HIGH_SCHOOL_STUDENT.INDEX);
      } else if (user.roles === UNIVERSITY_MANAGER) {
        history.push(PATH_UNIVERSITY_MANAGER.INDEX);
      }
    }
  };

  const handleLoginServer = (token, email) => {
    loginByFirebase({ firebase_token: token })
      .then((result) => {
        const user = result.data.data;
        dispatch(SigninHandler(user));
        handleNotification('success', email);
        handleRedirect(user);
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };
  const signInWithPopupOption = (option) => {
    if (option === 'google') {
      signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
          const user = userCredential?.user;
          const token = userCredential?.user.accessToken;
          handleLoginServer(token, user.displayName);
        })
        .catch((err) => {
          handleNotification('error', err);
        });
    } else if (option === 'facebook') {
      signInWithPopup(auth, facebookProvier)
        .then((userCredential) => {
          const token = userCredential?.accessToken;
          handleLoginServer(token, 'null');
        })
        .catch((err) => {
          handleNotification('error', err);
        });
    }
  };
  const onSubmit = (value) => {
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        if (userCredential != null) {
          handleLoginServer(userCredential.user?.accessToken, value.email);
        }
      })
      .catch((err) => {
        handleNotification('error', err);
      });
  };
  return (
    <>
      <LoginComponent onFinish={onSubmit} signInWithPopupOption={signInWithPopupOption} />
    </>
  );
};
export default LoginContainer;
