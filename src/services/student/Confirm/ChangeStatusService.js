import { CallAPI } from '../../axiosBase';
import { PATH_CHANGE_STATUS_STUDENT } from '../../../constants/Endpoints/StudentEndpoint';

export const changeStatus = (data) => CallAPI(`${PATH_CHANGE_STATUS_STUDENT}/${data}`, 'put', data);
