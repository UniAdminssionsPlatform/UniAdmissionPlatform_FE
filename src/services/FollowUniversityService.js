/* eslint-disable */
import {CallAPI} from './axiosBase';
import {
    FOLLOW_UNIVERSITY,
    FOLLOWING,
    GET_LIST_UNIVERSITY_TO_FOLLOW
} from '../constants/Endpoints/FollowUniversityEndpoint';

export const ListUniversityPaging = (data) =>
    CallAPI(
        `${GET_LIST_UNIVERSITY_TO_FOLLOW}` + '?name=' + data.name + ' & page = ' + data.page + ' & limit = ' + data.limit,
        'get',
        data
    );

// export const ListUniversityPaging = (data) =>
//   CallAPI(`${GET_LIST_UNIVERSITY_TO_FOLLOW}?page=${data.page}&limit=${data.limit}`, 'get');
export const FollowUniversity = (data) => CallAPI(`${FOLLOW_UNIVERSITY}/${data.universityId}`, 'put', data);

export const Following = (data) => CallAPI(`${FOLLOWING}/${data}`, 'get', data);
