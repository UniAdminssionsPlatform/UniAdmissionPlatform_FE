import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_MAJOR_GROUP } from '../constants/Endpoints/MajorGroupEndPoint';

export const getAllMajorGroup = (data) => CallAPI(PATH_GET_LIST_MAJOR_GROUP, 'get', data);
