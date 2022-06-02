import { CallAPI } from './axiosBase';
import { GET_NEWS_ENDPOINT, PATH_GET_NEWS } from '../constants/Endpoints/NewsEndpoint';

export const getNews = (data) => CallAPI(`${GET_NEWS_ENDPOINT}?limit=8`, 'get', data);
