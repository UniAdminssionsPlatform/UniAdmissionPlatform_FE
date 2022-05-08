import { CallAPI } from './axiosBase';
import { GET_LIST_UNIVERSITY_ENDPOINT } from '../constants/Endpoints/UniversitiesEnpoint';
export const getListUniversity = (data) => CallAPI(GET_LIST_UNIVERSITY_ENDPOINT, 'get', data);
