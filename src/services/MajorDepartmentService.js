import { CallAPI } from './axiosBase';
import { GET_LIST_MAJOR_DEPARTMENT_ENDPOINT } from '../constants/Endpoints/MajorDepartmentEndpoint';

export const getAllMajorDepartment = (data) => CallAPI(`${GET_LIST_MAJOR_DEPARTMENT_ENDPOINT}`, 'get', '', data);
