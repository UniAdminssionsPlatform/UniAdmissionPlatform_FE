import {
  CREATE_ACCOUNT_FOR_UNI_ENDPOINT,
  LOGIN_BY_FIREBASE_ENDPOINT,
  REGISTER_BY_FIREBASE_ENDPOINT,
  REGISTER_FOR_SCHOOL_MANAGER_ENDPOINT,
  REGISTER_FOR_STUDENT_ENDPOINT,
  REGISTER_FOR_UNIVERSITY_MANAGER_ENDPOINT
} from '../constants/Endpoints/UsersEnpoint';
import { CallAPI } from './axiosBase';

export const loginByFirebase = (data) => CallAPI(LOGIN_BY_FIREBASE_ENDPOINT, 'post', data);
export const registerByFirebase = (data) => CallAPI(REGISTER_BY_FIREBASE_ENDPOINT, 'post', data);
export const createAccountForUni = (data) => CallAPI(CREATE_ACCOUNT_FOR_UNI_ENDPOINT, 'post', data);
export const registerForStudent = (data) => CallAPI(REGISTER_FOR_STUDENT_ENDPOINT, 'post', data);
export const registerForSchoolManager = (data) => CallAPI(REGISTER_FOR_SCHOOL_MANAGER_ENDPOINT, 'post', data);
export const registerForUniversityManager = (data) => CallAPI(REGISTER_FOR_UNIVERSITY_MANAGER_ENDPOINT, 'post', data);
