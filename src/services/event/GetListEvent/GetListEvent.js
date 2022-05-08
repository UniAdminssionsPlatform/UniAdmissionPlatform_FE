import { CallAPI } from '../../axiosBase';
import { PATH_GET_LIST_EVENT } from '../../../constants/Endpoints/GetListEventEnpoint';

export const ListEvent = (data) => CallAPI(PATH_GET_LIST_EVENT, 'get', data);
