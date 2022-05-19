import { CallAPI } from '../../axiosBase';
import { PATH_GET_LIST_STUDENT_BY_HIGHSCHOOL } from '../../../constants/Endpoints/StudentEndpoint';

export const getListStudentByHighschool = (data) =>
  CallAPI(
    `${PATH_GET_LIST_STUDENT_BY_HIGHSCHOOL}?role-id=student&high-school-id=${data.highschoolID}&phone-number=${data.phone}&first-name=${data.firstName}&email-contact=${data.email}&status=${data.status}`,
    'get',
    data
  );
