import { CallAPI } from './axiosBase';
import {
  GET_LIST_MAJOR_BY_MAJOR_GROUP_ID_ENDPOINT,
  GET_LIST_MAJOR_ENDPOINT
} from '../constants/Endpoints/MajorEndpoint';

export const getMajorBYMajorGroupId = (data) =>
  CallAPI(`${GET_LIST_MAJOR_BY_MAJOR_GROUP_ID_ENDPOINT}?major-group-id=${data}&limit=500`, 'get', data);
export const getAllMajor = (data) => CallAPI(`${GET_LIST_MAJOR_ENDPOINT}`, 'get', '', data);
