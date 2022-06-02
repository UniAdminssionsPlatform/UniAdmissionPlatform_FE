import { CallAPI } from './axiosBase';
import { PATH_UNIVERSITY_DETAIL, UNIVERSITY_DETAIL_ENDPOINT } from '../constants/Endpoints/UniversityDetailEnpoint';

export const UniversityDetail = (data) => CallAPI(`${UNIVERSITY_DETAIL_ENDPOINT}/${data}`, 'get', data);
