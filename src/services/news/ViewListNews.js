import { PATH_GET_LIST_NEWS } from '../../constants/Endpoints/ViewListNewsEnpoint';
import { CallAPI } from '../axiosBase';

export const ViewListNews = (data) => CallAPI(`${PATH_GET_LIST_NEWS}?limit=3`, 'get', data);
