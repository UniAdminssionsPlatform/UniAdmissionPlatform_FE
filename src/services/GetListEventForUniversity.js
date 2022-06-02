/* eslint-disable */
import { GET_LIST_EVENT_FOR_UNIVERSITY_ENDPOINT } from '../constants/Endpoints/GetListEventForUniversity';
import { CallAPI } from './axiosBase';

const refactorEndPoint = (data) => {
  let result;
  if (data.name !== undefined && data.name !== '') result = `event-name=${data.name}`;

  if (data.status !== undefined && data.status !== '') result = result + `&status-event=${data.status}`;

  if (data.hostname !== undefined && data.hostname !== '') result = result + `&event-host-name=${data.hostname}`;

  if (data.eventtype !== undefined && data.eventtype !== '') result = result + `&event-type-id=${data.eventtype}`;

  return result !== undefined
    ? result
    : '' +
        `&data=${data.page !== undefined && data.page !== '' ? data.page : 1}` +
        `&limit=${data.limit !== undefined && data.limit !== '' ? data.limit : 10}`;
};
export const getListEventForUniversity = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_FOR_UNIVERSITY_ENDPOINT}/${data.universityID}/list-event?${refactorEndPoint(data)}`,
    'get',
    data
  );
