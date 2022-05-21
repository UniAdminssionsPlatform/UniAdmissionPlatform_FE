import { CallAPI } from '../../axiosBase';
import { PATH_GET_DETAIL_STUDENT } from '../../../constants/Endpoints/StudentEndpoint';

export const getDetailStudent = (data) => CallAPI(`${PATH_GET_DETAIL_STUDENT}/${data}`, 'get', data);
