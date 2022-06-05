import { CallAPI } from './axiosBase';
import { GET_STUDENT_INFORMATION_ENDPOINT } from '../constants/Endpoints/ManageProfileEndpoint';

export const getAccountInfor = (data) => CallAPI(`${GET_STUDENT_INFORMATION_ENDPOINT}/${data}`, 'get', data);
