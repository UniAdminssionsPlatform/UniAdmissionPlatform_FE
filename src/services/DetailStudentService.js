import { CallAPI } from './axiosBase';
import { GET_DETAIL_STUDENT_ENDPOINT } from '../constants/Endpoints/StudentEndpoint';

export const getDetailStudent = (data) => CallAPI(`${GET_DETAIL_STUDENT_ENDPOINT}/${data}`, 'get', data);
