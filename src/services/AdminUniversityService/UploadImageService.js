import { CallAPI } from '../axiosBase';
import { UPLOAD_A_NEW_IMAGE_ENDPOINT } from '../../constants/Endpoints/FilesEndpoint';
export const uploadImageService = (data) => CallAPI(UPLOAD_A_NEW_IMAGE_ENDPOINT, 'POST', data);
