/* eslint-disable */
import { CallAPI } from './axiosBase';
import { GET_NEWS_ENDPOINT, PATH_GET_NEWS } from '../constants/Endpoints/NewsEndpoint';

export const getNews = (data) => CallAPI(`${GET_NEWS_ENDPOINT}` + '?title=' + data.title + ' & page = ' + data.page + ' & limit = ' + data.limit,
    'get',
    data);
