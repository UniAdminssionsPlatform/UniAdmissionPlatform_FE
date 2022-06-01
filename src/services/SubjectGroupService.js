import { CallAPI } from './axiosBase';
import { PATH_GET_ALL_SUBJECT_GROUP } from '../constants/Endpoints/SubjectGroupEndpoint';

export const getAllSubjectGroup = (data) => CallAPI(`${PATH_GET_ALL_SUBJECT_GROUP}?limit=200`, 'get', data);
