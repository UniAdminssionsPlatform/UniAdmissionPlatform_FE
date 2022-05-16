import { PATH_GET_NEWS } from '../../constants/Endpoints/ViewNewsEnpoint';
import { CallAPI } from '../axiosBase';

export const ViewNews = (data) => CallAPI(`${PATH_GET_NEWS}/${data}`, 'get', data);
