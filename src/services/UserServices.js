import { CallAPI } from './axiosBase';
import {
  PATH_CREATE_ACCOUNT_FOR_UNI,
  PATH_LOGIN_BY_FIREBASE,
  PATH_REGISTER_BY_FIREBASE,
  PATH_REGISTER_FOR_SCHOOL_MANAGER,
  PATH_REGISTER_FOR_STUDENT,
  PATH_REGISTER_FOR_UNIVERSITY_MANAGER
} from '../constants/Endpoints/UsersEnpoint';

export const loginByFirebase = (data) => CallAPI(PATH_LOGIN_BY_FIREBASE, 'post', data);
export const registerByFirebase = (data) => CallAPI(PATH_REGISTER_BY_FIREBASE, 'post', data);
export const createAccountForUni = (data) => CallAPI(PATH_CREATE_ACCOUNT_FOR_UNI, 'post', data);
export const registerForStudent = (data) => CallAPI(PATH_REGISTER_FOR_STUDENT, 'post', data);
export const registerForSchoolManager = (data) => CallAPI(PATH_REGISTER_FOR_SCHOOL_MANAGER, 'post', data);
export const registerForUniversityManager = (data) => CallAPI(PATH_REGISTER_FOR_UNIVERSITY_MANAGER, 'post', data);
