import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_HIGHSCHOOL } from '../constants/Endpoints/HighSchoolEnpoint';
export const getListHighSchool = (data) => CallAPI(PATH_GET_LIST_HIGHSCHOOL, 'get', data);
