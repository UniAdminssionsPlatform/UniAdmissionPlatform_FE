import { PATH_CREATE_EVENT } from '../../../constants/Endpoints/CreateEventEnpoint';
import { CallAPI } from '../../axiosBase';

export const createEvent = (data) => CallAPI(PATH_CREATE_EVENT, 'post', data);
