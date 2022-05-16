import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_MAJOR_BY_MAJOR_GROUP_ID } from '../constants/Endpoints/MajorEndpoint';

export const getMajorBYMajorGroupId = (data) =>
  CallAPI(`${PATH_GET_LIST_MAJOR_BY_MAJOR_GROUP_ID}?major-group-id=${data}&limit=500`, 'get', data);
