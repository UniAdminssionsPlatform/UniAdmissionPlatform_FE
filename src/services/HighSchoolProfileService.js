import { GET_HIGH_SCHOOL_PROFILE } from '../constants/Endpoints/HighSchoolProfileEndpoint';
import { CallAPI } from './axiosBase';

export const HighschoolDetail = (data) => CallAPI(`${GET_HIGH_SCHOOL_PROFILE}/${data}`, 'get', data);
