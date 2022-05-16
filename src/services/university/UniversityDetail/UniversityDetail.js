import { PATH_UNIVERSITY_DETAIL } from '../../../constants/Endpoints/UniversityDetailEnpoint';
import { CallAPI } from '../../axiosBase';

export const UniversityDetail = (data) => CallAPI(`${PATH_UNIVERSITY_DETAIL}/${data}`, 'get', data);
