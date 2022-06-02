import { GET_NEWS_ENDPOINT } from '../constants/Endpoints/ViewNewsEnpoint';
import { CallAPI } from './axiosBase';

export const ViewNews = (data) => CallAPI(`${GET_NEWS_ENDPOINT}/${data}`, 'get', data);
