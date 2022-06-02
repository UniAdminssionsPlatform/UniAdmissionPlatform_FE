import {
  PATH_CREATE_CERTIFICATION,
  PATH_DELETE_CERTIFICATION,
  PATH_GET_CERTIFICATION,
  PATH_GET_CERTIFICATION_ADMIN,
  PATH_GET_LIST_CERTIFICATION,
  PATH_UPDATE_CERTIFICATION
} from '../../constants/Endpoints/CertificationEndpoint';
import { CallAPI } from '../axiosBase';

export const getListCertification = (data) => CallAPI(`${PATH_GET_LIST_CERTIFICATION}?student-id=${data}`, 'get', data);
export const updateCertification = (data) =>
  CallAPI(`${PATH_UPDATE_CERTIFICATION}/${data.studentid}?certification-id=${data.certificationid}`, 'put', data);
export const getCertification = (data) => CallAPI(`${PATH_GET_CERTIFICATION}/${data}`, 'get', data);
export const getCertificationName = (data) => CallAPI(PATH_GET_CERTIFICATION_ADMIN, 'get', data);
export const createCertification = (data) => CallAPI(PATH_CREATE_CERTIFICATION, 'post', data);
export const deleteCertification = (studentid, certificationid) =>
  CallAPI(`${PATH_DELETE_CERTIFICATION}/${studentid}?certification-id=${certificationid}`, 'delete');
