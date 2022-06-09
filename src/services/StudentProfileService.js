import { CallAPI } from './axiosBase';
import { GET_PROFILE_STUDENT_ENDPOINT } from '../constants/Endpoints/StudentEndpoint';

export const getProfileStudent = () => CallAPI(`${GET_PROFILE_STUDENT_ENDPOINT}`, 'get');
