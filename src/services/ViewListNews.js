import { CallAPI } from './axiosBase';
import { GET_LIST_NEWS_ENDPOINT, PATH_GET_LIST_NEWS } from '../constants/Endpoints/ViewListNewsEnpoint';

export const ViewListNews = (data) => CallAPI(`${GET_LIST_NEWS_ENDPOINT}?limit=3`, 'get', data);
