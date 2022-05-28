import { CallAPI } from '../../axiosBase';
import { PATH_GET_STUDENT_SCORE } from '../../../constants/Endpoints/StudentEndpoint';

export const getScore = (subjectGroupId, schoolYear) =>
  CallAPI(`${PATH_GET_STUDENT_SCORE}/${subjectGroupId}/get-score?school-year-id=${schoolYear}`, 'get');
