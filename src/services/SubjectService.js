import { CallAPI } from './axiosBase';
import { LIST_SUBJECT_ENDPOINT } from '../constants/Endpoints/SubjectEndpoint';

export const getAllSubject = (data) => CallAPI(`${LIST_SUBJECT_ENDPOINT}?limit=100`, 'get', data);
