import {
  CREATE_CERTIFICATION_ENDPOINT,
  DELETE_CERTIFICATION_ENDPOINT,
  GET_CERTIFICATION_ADMIN_ENDPOINT,
  GET_LIST_CERTIFICATION_ENDPOINT,
  UPDATE_CERTIFICATION_ENDPOINT
} from '../constants/Endpoints/CertificationEndpoint';
import { CallAPI } from './axiosBase';

export const getListCertification = (data) =>
  CallAPI(`${GET_LIST_CERTIFICATION_ENDPOINT}?student-id=${data}`, 'get', data);
export const updateCertification = (data) =>
  CallAPI(`${UPDATE_CERTIFICATION_ENDPOINT}/${data.studentid}?certification-id=${data.certificationid}`, 'put', data);
export const getCertification = (data) => CallAPI(`${GET_LIST_CERTIFICATION_ENDPOINT}/${data}`, 'get', data);
export const getCertificationName = (data) => CallAPI(GET_CERTIFICATION_ADMIN_ENDPOINT, 'get', data);
export const createCertification = (data) => CallAPI(CREATE_CERTIFICATION_ENDPOINT, 'post', data);
export const deleteCertification = (studentId, certificationId) =>
  CallAPI(`${DELETE_CERTIFICATION_ENDPOINT}/${studentId}?certification-id=${certificationId}`, 'delete');
