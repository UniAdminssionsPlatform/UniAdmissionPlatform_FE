import {
  ADD_STUDENT_SCORE_ENDPOINT,
  GET_STUDENT_BASE_SCORE_ENDPOINT,
  GET_STUDENT_SCORE_ENDPOINT,
  MODIFY_STUDENT_SCORE_ENDPOINT
} from '../constants/Endpoints/StudentEndpoint';
import { CallAPI } from './axiosBase';

export const getScore = (data) => CallAPI(`${GET_STUDENT_SCORE_ENDPOINT}?school-year-id=${data}`, 'get');
export const getBaseScore = () => CallAPI(`${GET_STUDENT_BASE_SCORE_ENDPOINT}`);

export const addScore = (data) => CallAPI(`${ADD_STUDENT_SCORE_ENDPOINT}`, 'post', data);
export const modifyScore = (data) => CallAPI(`${MODIFY_STUDENT_SCORE_ENDPOINT}/${data.schoolRecordId}`, 'put', data);
