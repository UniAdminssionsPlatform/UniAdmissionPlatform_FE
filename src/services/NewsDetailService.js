import { GET_NEWS_DETAIL_ENDPOINT } from '../constants/Endpoints/NewsDetailEndpoint';
import { CallAPI } from './axiosBase';

export const ViewNewsDetail = (data) => CallAPI(`${GET_NEWS_DETAIL_ENDPOINT}/${data}`, 'get', data);
