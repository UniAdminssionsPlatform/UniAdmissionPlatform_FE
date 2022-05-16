import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_MAJOR_GROUP, PATH_GET_DETAIL_MAJOR_GROUP } from '../constants/Endpoints/MajorGroupEndPoint';

export const getAllMajorGroup = (data) => CallAPI(`${PATH_GET_LIST_MAJOR_GROUP}?limit=12`, 'get', data);
export const getDetailMajorGroup = (data) => CallAPI(`${PATH_GET_DETAIL_MAJOR_GROUP}/${data}`, 'get', data);
