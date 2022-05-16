import { CallAPI } from '../axiosBase';
import { PATH_GET_NEWS } from '../../constants/Endpoints/NewsEndpoint';

export const getNews = (data) => CallAPI(`${PATH_GET_NEWS}?limit=8`, 'get', data);
