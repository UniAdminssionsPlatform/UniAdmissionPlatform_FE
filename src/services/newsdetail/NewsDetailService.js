import { PATH_GET_NEWS_DETAIL } from '../../constants/Endpoints/NewsDetailEndpoint';
import { CallAPI } from '../axiosBase';

export const ViewNewsDetail = (data) => CallAPI(`${PATH_GET_NEWS_DETAIL}/${data}`, 'get', data);
