import { GET_PROFILE_STUDENT_ENDPOINT } from '../constants/Endpoints/StudentEndpoint';
import { CallAPI } from './axiosBase';

export const getProfileStudent = () => CallAPI(`${GET_PROFILE_STUDENT_ENDPOINT}`, 'get');
