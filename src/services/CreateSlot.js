import { CREATE_SLOT_ENDPOINT } from '../constants/Endpoints/CreateSlotEnpoint';
import { CallAPI } from './axiosBase';

export const createSlot = (data) => CallAPI(CREATE_SLOT_ENDPOINT, 'post', data);
