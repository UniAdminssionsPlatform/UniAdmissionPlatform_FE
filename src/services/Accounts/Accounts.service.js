import { CallAPI } from '../axiosBase';
import { GET_LIST_STUDENT_BY_HIGHSCHOOL_ENDPOINT } from '../../constants/Endpoints/StudentEndpoint';
import { PATH_UPDATE_STUDENT_INFORMATION_ENDPOINT } from '../../constants/Endpoints/ManageProfileEndpoint';

export const getListStudentByHighSchool = (data) =>
  CallAPI(`${GET_LIST_STUDENT_BY_HIGHSCHOOL_ENDPOINT}`, 'get', '', data);
export const updateAccount = (data) => CallAPI(PATH_UPDATE_STUDENT_INFORMATION_ENDPOINT, 'put', data);
