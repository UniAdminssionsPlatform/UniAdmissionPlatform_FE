import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { post, postToken } from '../service/ReadAPI';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from 'firebase';

const app = firebase.initializeApp();

if (!firebase.apps.length);
else firebase.app(); // if already initialized, use that one

const storage = firebase.storage();
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const loginWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);

    const t = await getToken(res.user._lat);
    console.log('firebase token: ', res.user._lat);
    console.log('authen token: ', t.data.data.token);
    console.log('respone', res);
    console.log('t: ', t);

    localStorage.setItem('token', t.data.data.token);
    localStorage.setItem('NAME', res.user.displayName);
    localStorage.setItem('EMAIL', res.user.email);
    localStorage.setItem('IMAGE', res.user.photoURL);
    localStorage.setItem('UID', res.user.uid);
    localStorage.setItem('PHONE', res.user.phoneNumber);
  } catch (err) {
    console.log(err);
  }
};

async function getToken(fbToken) {
  return await post('/api/v1/users/login', { token: fbToken });
}

const logout = () => {
  auth.signOut();
};

export { auth, db, storage, loginWithGoogle, logout };
