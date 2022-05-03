import { TOKEN_KEY } from '../constants/AppConst';
import Cookies from 'js-cookie';
import axios from 'axios';

export const CallAPI = (
  endpoint,
  method = 'GET',
  body = {},
  params = {},
  configHeaders = null,
  responseType = null
) => {
  let token = null;
  const headers = configHeaders
    ? configHeaders
    : {
        'content-type': 'application/json'
      };
  // token = Cookies.get(TOKEN_KEY);
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMyIsInJvbGUiOiJzdHVkZW50IiwidW5pdmVyc2l0eV9pZCI6IjEiLCJidWZmZXJfdGltZSI6Ijg2NDAwIiwiZXhwIjoxNjY1OTU0NDc3LCJpc3MiOiJxbVBsdXMiLCJuYmYiOjE2NTAyNzQ4NzcsImlhdCI6MTY1MDI3NDg3N30.ezJ-EHzzlQr4ckBTMPm8Fe4hmjpX57Fr_R5IUvwgXnc';
  if (token && token !== 'undefined') headers.Authorization = `Bearer ${token}`;

  return axios({
    method,
    url: process.env.REACT_APP_API_URL + endpoint,
    headers,
    data: body,
    responseType,
    params
  });
};
