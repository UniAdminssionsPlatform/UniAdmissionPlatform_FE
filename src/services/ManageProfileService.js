import { GET_STUDENT_INFORMATION_ENDPOINT } from '../constants/Endpoints/ManageProfileEndpoint';
import { CallAPI } from './axiosBase';

export const getAccountInfor = (data) => CallAPI(`${GET_STUDENT_INFORMATION_ENDPOINT}/${data}`, 'get', data);
