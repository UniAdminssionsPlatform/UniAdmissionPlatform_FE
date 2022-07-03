import { CallAPI } from './axiosBase';
import { GET_HIGH_SCHOOL_PROFILE } from '../constants/Endpoints/HighSchoolProfileEndpoint';

export const HighschoolDetail = (data) => CallAPI(`${GET_HIGH_SCHOOL_PROFILE}/${data}`, 'get', data);
