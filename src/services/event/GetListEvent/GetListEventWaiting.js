import { PATH_GET_LIST_EVENT } from '../../../constants/Endpoints/GetListEventEnpoint';
import { CallAPI } from '../../axiosBase';

export const EventWaiting = (data) => CallAPI(`${PATH_GET_LIST_EVENT}?status=0`, 'get', data);
