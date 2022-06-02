import { CallAPI } from './axiosBase';
import { CREATE_SLOT_ENDPOINT } from '../constants/Endpoints/CreateSlotEnpoint';

export const createSlot = (data) => CallAPI(CREATE_SLOT_ENDPOINT, 'post', data);
