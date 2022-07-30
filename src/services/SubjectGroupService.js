import { CallAPI } from './axiosBase';
import { GET_ALL_SUBJECT_GROUP_ENDPOINT } from '../constants/Endpoints/SubjectGroupEndpoint';

export const getAllSubjectGroup = (data) => CallAPI(`${GET_ALL_SUBJECT_GROUP_ENDPOINT}?limit=1000`, 'get', data);
