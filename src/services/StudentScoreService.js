import {
  ADD_STUDENT_SCORE_ENDPOINT,
  GET_STUDENT_SCORE_ENDPOINT,
  MODIFY_STUDENT_SCORE_ENDPOINT,
  PATH_MODIFY_STUDENT_SCORE
} from '../constants/Endpoints/StudentEndpoint';
import { CallAPI } from './axiosBase';

export const getScore = (subjectGroupId, schoolYear) =>
  CallAPI(`${GET_STUDENT_SCORE_ENDPOINT}/${subjectGroupId}/get-score?school-year-id=${schoolYear}`, 'get');

export const addScore = (data) => CallAPI(`${ADD_STUDENT_SCORE_ENDPOINT}`, 'post', data);
export const modifyScore = (data) => CallAPI(`${MODIFY_STUDENT_SCORE_ENDPOINT}/${data.id}`, 'put', data);
