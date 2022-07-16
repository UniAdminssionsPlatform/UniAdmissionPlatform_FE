import { CallAPI } from './axiosBase';
import { UNIVERSITY_DETAIL_ENDPOINT } from '../constants/Endpoints/UniversityDetailEnpoint';

export const UniversityDetail = (data) => CallAPI(`${UNIVERSITY_DETAIL_ENDPOINT}/${data}`, 'get', data);
