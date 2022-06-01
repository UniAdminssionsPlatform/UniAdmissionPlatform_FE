import { PATH_GET_STUDENT_INFOR, PATH_UPDATE_STUDENT_INFOR } from '../../constants/Endpoints/ManageProfileEndpoint';
import { CallAPI } from '../axiosBase';

export const getAccountInfor = (data) => CallAPI(`${PATH_GET_STUDENT_INFOR}/${data}`, 'get', data);
export const updateAccount = (data) => CallAPI(PATH_UPDATE_STUDENT_INFOR, 'put', data);
