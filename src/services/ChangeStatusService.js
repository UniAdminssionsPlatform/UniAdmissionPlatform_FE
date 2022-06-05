import { CHANGE_STATUS_STUDENT_ENDPOINT } from '../constants/Endpoints/StudentEndpoint';
import { CallAPI } from './axiosBase';

export const changeStatus = (data) => CallAPI(`${CHANGE_STATUS_STUDENT_ENDPOINT}/${data}`, 'put', data);
