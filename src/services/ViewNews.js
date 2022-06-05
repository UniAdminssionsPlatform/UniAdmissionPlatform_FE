import { CallAPI } from './axiosBase';
import { GET_NEWS_ENDPOINT } from '../constants/Endpoints/ViewNewsEnpoint';

export const ViewNews = (data) => CallAPI(`${GET_NEWS_ENDPOINT}/${data}`, 'get', data);
