import { CallAPI } from '../../axiosBase';
import { PATH_CREATE_EVENT } from '../../../constants/Endpoints/CreateEventEnpoint';

export const createEvent = (data) => CallAPI(PATH_CREATE_EVENT, 'post', data.event);
