import { CallAPI } from './axiosBase';
import { GET_NEWS_DETAIL_ENDPOINT } from '../constants/Endpoints/NewsDetailEndpoint';

export const ViewNewsDetail = (data) => CallAPI(`${GET_NEWS_DETAIL_ENDPOINT}/${data}`, 'get', data);
