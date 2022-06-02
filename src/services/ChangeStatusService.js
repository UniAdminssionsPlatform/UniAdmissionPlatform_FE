import { CallAPI } from './axiosBase';
import { CHANGE_STATUS_STUDENT_ENDPOINT } from '../constants/Endpoints/StudentEndpoint';

export const changeStatus = (data) => CallAPI(`${CHANGE_STATUS_STUDENT_ENDPOINT}/${data}`, 'put', data);
