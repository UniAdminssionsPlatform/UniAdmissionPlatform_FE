/* eslint-disable */
import { CallAPI } from './axiosBase';
import {
  ENDPOINT_COUNT_STUDENT_FOLLOW,
  ENDPOINT_FOLLOW_UNIVERSITY,
  FOLLOWING,
  GET_LIST_UNIVERSITY_TO_FOLLOW
} from '../constants/Endpoints/FollowUniversityEndpoint';

export const ListUniversityPaging = (data) =>
  CallAPI(
    `${GET_LIST_UNIVERSITY_TO_FOLLOW}` + '?name=' + data.name + ' & page = ' + data.page + ' & limit = ' + data.limit,
    'get',
    data
  );

export const FollowUniversityService = (id) => CallAPI(`${ENDPOINT_FOLLOW_UNIVERSITY}/${id}`, 'put');

export const Following = (data) => CallAPI(`${FOLLOWING}/${data}`, 'get', data);

export const CountStudentFollowService = (data) => CallAPI(`${ENDPOINT_COUNT_STUDENT_FOLLOW}/${data}/follow`, 'get', data);
