import { CallAPI } from '../../axiosBase';

export const createSlot = (data) => CallAPI(PATH_CREATE_SLOT, 'post', data);
