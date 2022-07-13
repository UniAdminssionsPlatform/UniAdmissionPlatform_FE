import { CallAPI } from './axiosBase';
import {
  GET_DETAIL_MAJOR_GROUP_ENDPOINT,
  GET_LIST_MAJOR_GROUP_ENDPOINT
} from '../constants/Endpoints/MajorGroupEndPoint';

export const getAllMajorGroup = (data) => CallAPI(`${GET_LIST_MAJOR_GROUP_ENDPOINT}`, 'get', '', data);
export const getDetailMajorGroup = (data) => CallAPI(`${GET_DETAIL_MAJOR_GROUP_ENDPOINT}/${data}`, 'get', data);
