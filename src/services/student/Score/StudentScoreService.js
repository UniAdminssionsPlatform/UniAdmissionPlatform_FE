import { CallAPI } from '../../axiosBase';
import {
  PATH_ADD_STUDENT_SCORE,
  PATH_GET_STUDENT_SCORE,
  PATH_MODIFY_STUDENT_SCORE
} from '../../../constants/Endpoints/StudentEndpoint';

export const getScore = (subjectGroupId, schoolYear) =>
  CallAPI(`${PATH_GET_STUDENT_SCORE}/${subjectGroupId}/get-score?school-year-id=${schoolYear}`, 'get');

export const addScore = (data) => CallAPI(`${PATH_ADD_STUDENT_SCORE}`, 'post', data);
export const modifyScore = (data) => CallAPI(`${PATH_MODIFY_STUDENT_SCORE}/${data.id}`, 'put', data);
