import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_UNIVERSITY } from '../constants/Endpoints/UniversitiesEnpoint';
export const getListUniversity = (data) => CallAPI(PATH_GET_LIST_UNIVERSITY, 'get', data);
