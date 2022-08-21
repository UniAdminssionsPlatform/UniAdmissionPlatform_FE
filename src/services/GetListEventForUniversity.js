/* eslint-disable */
import { GET_LIST_EVENT_FOR_UNIVERSITY_ENDPOINT } from '../constants/Endpoints/GetListEventForUniversity';
import { CallAPI } from './axiosBase';
export const getListEventForUniversity = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_FOR_UNIVERSITY_ENDPOINT}/${data.universityID}/list-event?event-name=`+data.name+'&status-event='+data.status+'&event-host-name='+data.hostname+'&event-type-id='+data.eventType+'&page='+data.page+'&limit='+data.limit+'&sort=CreatedAt%20desc',
    'get',
    data
  );
