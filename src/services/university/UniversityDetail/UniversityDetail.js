import { CallAPI } from '../../axiosBase';
import { PATH_UNIVERSITY_DETAIL } from '../../../constants/Endpoints/UniversityDetailEnpoint';

export const UniversityDetail = (data) => CallAPI(`${PATH_UNIVERSITY_DETAIL}/${data}`, 'get', data);
